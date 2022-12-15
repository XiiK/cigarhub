import { data } from './cigars.json'
export default async function handler (req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(data)
  }
  return res.end()
}
