import { ScheduledEvent } from 'aws-lambda'

import { sendEmail } from '../clients/emailClient'
import { getStoredHighlights } from '../repositories/highlightRepository'
import { templateFor } from '../services/template'
import { shuffle } from '../utils'

export const sendFanteEmail = async (_event: ScheduledEvent) => {
  const highlights = await getStoredHighlights()

  const learningItems = shuffle(highlights)

  const emailContent = await templateFor(learningItems.splice(0, 5))
  await sendEmail(emailContent)
}
