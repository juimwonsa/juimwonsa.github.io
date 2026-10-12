import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { isNewsPost } from '@/data/postFilters'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: '블로그' })

export default async function BlogPage(props: { searchParams: Promise<{ page: string }> }) {
  const posts = allCoreContent(sortPosts(allBlogs.filter((post) => !isNewsPost(post))))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="블로그"
    />
  )
}
