// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: boolean;
    statusCode: Number;
  data: {
    id: number;
    name: string;
    price: number;
    size: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const data = [
        {
            id: 1,
            name: "Baju",
            price: 500000,
            size: "xl"
        },
        {
            id: 2,
            name: "Celana",
            price: 250000,
            size: "xl"
        },
    ]
  res.status(200).json({ status: true, statusCode: 200, data })
}
