import Pocket from 'pocket-api'

import { Highlight } from '../types'

const { POCKET_CONSUMER_KEY, POCKET_ACCESS_TOKEN } = process.env

interface Annotation {
  annotation_id: string
  item_id: string
  quote: string
  version: string
  created_at: string // '2021-03-18 03:28:39'
}

interface Article {
  item_id: string
  resolved_id: string
  resolved_title: string
  domain_metadata?: { name: string }
  annotations?: Annotation[]
  resolved_url?: string
}

interface PocketResponse {
  total: number
  list: Record<string, Article>
}

export const fetchHighlights = async (): Promise<Highlight[]> => {
  const pocketClient = new Pocket(POCKET_CONSUMER_KEY)
  pocketClient.setAccessToken(POCKET_ACCESS_TOKEN)

  const articles: PocketResponse = await pocketClient.getArticles({
    images: 1,
    videos: 1,
    tags: 1,
    rediscovery: 1,
    annotations: 1,
    authors: 1,
    itemOptics: 1,
    meta: 1,
    posts: 1,
    total: 1,
    forceaccount: 1,
    state: 'all',
    sort: 'newest',
    detailType: 'complete',
  })

  const annotations = Object.values(articles.list)
    .map(
      (article) =>
        article.annotations?.map((annotation) => ({
          ...annotation,
          article,
        })) ?? []
    )
    .flat()

  return annotations.map((annotation) => ({
    id: annotation.annotation_id,
    text: annotation.quote,
    title: annotation.article.resolved_title,
    author:
      annotation.article.domain_metadata?.name ??
      annotation.article.resolved_url ??
      'Unknown',
  }))
}
