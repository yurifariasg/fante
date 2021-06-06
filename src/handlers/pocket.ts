import { storeHighlights } from './../repositories/highlightRepository'
import { fetchHighlights } from './../clients/pocketCilent'
import { ScheduledEvent } from 'aws-lambda'

export const importHighlights = async (_event: ScheduledEvent) => {
  const highlights = await fetchHighlights()
  await storeHighlights(highlights)
}
