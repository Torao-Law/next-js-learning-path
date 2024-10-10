// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import retriveData from '@/libs/firebase/services'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  data: any[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await retriveData("products")
  
  res.status(200).json({ message: 'Success!', data: data })
}

