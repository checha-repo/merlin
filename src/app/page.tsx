import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-between p-24 w-full flex-col">
      <h1 className="text-2xl">hello world</h1>
      <div className="rounded-sm">
        <h2>subtitle here</h2>
         <p>the body text goes here when we have the data</p>
         <button>next step</button>
      </div>
    </main>
  )
}
