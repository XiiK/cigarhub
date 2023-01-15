// import clientPromise from '../../lib/mongodb'
// export default async function handler (req, res) {
//   const client = await clientPromise
//   const db = client.db('cigarhub')
//   // console.log('db', db)
//   if (req.method === 'GET') {
//     const posts = await db.collection('tests').find({}).toArray()
//     return res.status(200).json(posts)
//   }
//   return res.end()
// }
