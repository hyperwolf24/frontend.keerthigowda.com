import { blogMetadata } from '../metadata'
import BlogClient from './BlogClient'

export const metadata = blogMetadata

export default function Blog() {
  return <BlogClient />
} 