import { cigars } from './cigars.json'

export default async function handler (req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(cigars)
  }
  return res.end()
}
