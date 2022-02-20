// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

interface RequestBody {
  emailAdress: string,
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(501).json("NOT IMPLEMENTED")
  }
  const requestBody: RequestBody = JSON.parse(req.body)
  console.log(requestBody);
  console.log(process.env.KEY);
  res.status(200).json("OK")

}
