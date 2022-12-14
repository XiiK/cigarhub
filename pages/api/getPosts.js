import { posts } from './fakePosts.json'
export default async function handler (req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(posts)
  }
  return res.end()
}
