import type { NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"

interface FormData {
  title: string
  description: string
}
interface Note {
  id: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  category: string
}

interface Category {
  id: string
  name: string
}

const Home: NextPage = () => {
  const [notes, setNotes] = useState<Note>()
  console.log(notes)

  useEffect(() => {

    fetch("http://localhost:3000/api/notes")
      .then(res => res.json())
      .then(data => {
        setNotes(data)
      })


  }, [])
  return (
    <>
      <Head>
        <title>Next Crud</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">

      </main>
    </>
  )
}

export default Home
