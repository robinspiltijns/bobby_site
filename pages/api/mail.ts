import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail, { MailDataRequired } from '@sendgrid/mail'

interface RequestBody {
  name: string,
  email: string,
  message: string,
}

function isRequestBody(obj: any): obj is RequestBody {
  return typeof(obj.name) === 'string' && 
    typeof(obj.email) === 'string' && 
    typeof(obj.message) === 'string'
    
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  if (req.method !== 'POST') 
    res.status(501).json("NOT IMPLEMENTED")

  const requestBody = JSON.parse(req.body)
  if (!isRequestBody(requestBody)) {
    res.status(400).json("Request body not properly formatted")
    return
  }
  
  if (process.env.KEY === undefined) 
    throw new Error("The sendgrid API key environment variable is not present.")

  try {
    sgMail.setApiKey(process.env.KEY)
    const msg: MailDataRequired = {
      to: 'spiltijnsrobin@gmail.com',
      from: 'spiltijnsrobin@gmail.com',
      subject: `Bobby message from ${requestBody.name} (${requestBody.email})`,
      text: requestBody.message
    }
    await sgMail.send(msg) 
    res.status(200).json("OK")
  } catch (error) {
    res.status(500).json("Something went wrong while sending the email.")
  }
}