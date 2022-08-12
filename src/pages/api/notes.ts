// src/pages/api/notes.ts
import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../server/db/client"

const notes = async (req: NextApiRequest, res: NextApiResponse) => {

  switch (req.method) {
    case "GET":
      const notes = await prisma.example.findMany()
      res.status(200).json(notes)
      break

    case "POST":

      if (req.body.data.length > 1) {
        const notes = await prisma.example.createMany({
          ...req.body
        })
        res.status(200).json(notes)
        break
      } else {
        const example = await prisma.example.create({
          ...req.body
        })
        res.status(200).json(example)
        break
      }

    case "DELETE":

      const deletedExample = await prisma.example.delete({ ...req.body })
      //demand
      // {
      //   "where": {
      //     "id": "cl6q887yy0032psg5r9tu4f8h"
      //   }
      // }
      res.status(200).json(deletedExample)

      break
    default:
      res.status(405).end()
      break
  }



  // const notes = await prisma.example.createMany({ ...req.body })
  // res.status(200).json(notes)
}

export default notes
