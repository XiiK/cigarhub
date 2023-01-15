const fetcher = async () => {
  const res = await fetch('/api/getPosts')
  const data = await res.json()
  const posts = data.posts
  return posts
}

export default fetcher
