// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

interface RequestBody {
  emailAdress: string,
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
      res.status(501)
      return
    }
    console.log(JSON.parse(req.body));
    res.status(200)
    return
}
