import { all } from './cigars.json'
export default async function handler (req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(all)
  }
  return res.end()
}
