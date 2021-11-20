import { storeHighlights } from './../repositories/highlightRepository'
import { fetchHighlights } from '../clients/pocketClient'
import { Context, ScheduledEvent } from 'aws-lambda'
import pino from 'pino-lambda'

const logger = pino()

export const importHighlights = async (
  event: ScheduledEvent,
  context: Context
) => {
  logger.withRequest(event, context)

  logger.info('Import Highlights from Pocket')

  const highlights = await fetchHighlights()
  logger.info({ count: highlights.length }, 'Highlights Fetched')

  logger.info('Saving highlights')
  await storeHighlights(highlights)

  logger.info('Highlights saved')
}
