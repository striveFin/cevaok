import Head from 'next/head'

export const metadata = {
    title: 'Contact',
    description: 'about painting',
  }
  
  
  export default function Contact() {
    return (
      <div>
        <Head>
        <meta name="robots" content="index,follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="mt-[200px]">
          <p className="font-bold text-center text-3xl">Contact</p>
        </div>
      </div>
    )
  }