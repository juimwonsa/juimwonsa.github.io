// IT 소식(매일 자동 게시) 글을 구분하는 기준 태그
export const NEWS_TAG = 'IT-News'
export const NEWS_TAG_SLUG = 'it-news'
export const NEWS_TITLE = 'IT 소식'

export const isNewsPost = (post: { tags?: string[] }) => !!post.tags?.includes(NEWS_TAG)
