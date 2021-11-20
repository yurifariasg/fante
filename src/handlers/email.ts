import { Context, ScheduledEvent } from 'aws-lambda'
import { sendEmail } from '../clients/emailClient'
import { getStoredHighlights } from '../repositories/highlightRepository'
import { templateFor } from '../services/template'
import { shuffle } from '../utils'
import pino, { PinoLambdaLogger } from 'pino-lambda'

const logger: PinoLambdaLogger = pino()

export const sendFanteEmail = async (
  event: ScheduledEvent,
  context: Context
) => {
  logger.withRequest(event, context)

  logger.info({ event }, 'Get stored highlights')
  const highlights = await getStoredHighlights()

  logger.info({ highlightsCount: highlights.length }, 'Get stored highlights')

  const learningItems = shuffle(highlights)
  const selectedItems = learningItems.splice(0, 5)

  logger.info({ selectedItems }, 'Selected Items')

  const emailContent = await templateFor(selectedItems)

  logger.info({ emailContent }, 'Email Content')
  await sendEmail(emailContent)

  logger.info('Email sent')
}
