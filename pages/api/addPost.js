import redis from '../../redis'

export default async function handler (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  const { post } = req.body

  const newPost = {
    ...post,
    createdAt: Date.now()
  }

  await redis.hset('posts', post.id, JSON.stringify(newPost))

  return res.status(200).json({ post: newPost })
}
