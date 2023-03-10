import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2 className='text-2xl mt-10'>Lorem ipsum</h2>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, tenetur nisi? Ab, earum a! Nisi repudiandae saepe eveniet, accusamus incidunt quam, pariatur exercitationem omnis praesentium magni veritatis rem, nam asperiores.</h3>
      </main>
    </>
  )
}
