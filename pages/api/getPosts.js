import redis from '../../redis'

export default async function handler (req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const postsRes = await redis.hvals('posts')
  const posts = postsRes.map(post => JSON.parse(post)).sort((a, b) => b.createdAt - a.createdAt)

  return res.status(200).json({ posts })
}
