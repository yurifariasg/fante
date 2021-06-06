import fs from 'fs'
import Handlebars from 'handlebars'

import { Highlight } from '../types'
import { getFormattedDate } from '../utils'

export const templateFor = async (learningItems: Highlight[]) => {
  const templateContent = fs
    .readFileSync('./src/email-templates/template.html')
    .toString('utf8')
  const template = Handlebars.compile(templateContent)
  return template({ learningItems, formattedDate: getFormattedDate() })
}
