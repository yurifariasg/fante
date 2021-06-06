import AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { Highlight } from './../types'

const { HIGHLIGHTS_TABLE_ARN } = process.env

if (!HIGHLIGHTS_TABLE_ARN) {
  throw new Error('HIGHLIGHTS_TABLE_ARN Environment Variable not defined')
}

const tableName = HIGHLIGHTS_TABLE_ARN.substring(
  HIGHLIGHTS_TABLE_ARN.lastIndexOf('/') + 1
)

const dbClient = new AWS.DynamoDB.DocumentClient()

export const storeHighlights = async (highlights: Highlight[]) => {
  const batchSizes = 25
  const highlightQueue = [...highlights]
  while (highlightQueue.length > 0) {
    const highlightsToWrite = highlightQueue.splice(0, batchSizes)
    const params: DocumentClient.BatchWriteItemInput = {
      RequestItems: {
        [tableName]: highlightsToWrite.map((highlight) => ({
          PutRequest: {
            Item: highlight,
          },
        })),
      },
    }

    await dbClient.batchWrite(params).promise()
  }
}

export const getStoredHighlights = async (): Promise<Highlight[]> => {
  const highlights = []
  let result = await dbClient.scan({ TableName: tableName }).promise()
  highlights.push(...(result.Items ?? []))
  while (result.LastEvaluatedKey) {
    result = await dbClient
      .scan({
        TableName: tableName,
        ExclusiveStartKey: result.LastEvaluatedKey,
      })
      .promise()
    highlights.push(...(result.Items ?? []))
  }
  return highlights as Highlight[]
}
