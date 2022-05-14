import type { NextPage } from 'next'
import Head from 'next/head'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import  { GiMagnifyingGlass } from 'react-icons/gi'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-blue-800">
      <Head>
        <title>Cicinho - Pode confiar!</title>
        <link rel="icon"/>
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
        <img className='w-48 m-4 rounded-full' src='/cicinho.png' />
        <h1 className='text-xl font-bold text-white mb-2'>Vereador</h1>
        <img className='w-96' src='/logo.svg' />
        <p className="mt-3 text-2xl text-white font-bold">
          Pode confiar!
        </p>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://www.facebook.com/ocicinhooficial" target='_blank'
            className="mt-6 w-96 rounded text-2xl font-bold bg-white p-3 flex text-blue-800 hover:text-blue-900 hover:bg-gray-100"
          >
            <FaFacebook className='mt-1 mr-2'/> Facebook 
          </a>
          <a
            href="https://www.instagram.com/ocicinho_/" target='_blank'
            className="mt-6 w-96 rounded text-2xl font-bold bg-white p-3 flex text-blue-800 hover:text-blue-900 hover:bg-gray-100"
          >
            <FaInstagram className='mt-1 mr-2'/> Instagram 
          </a>
          <a
            href="#" target='_blank' 
            className="mt-6 w-96 rounded text-2xl font-bold bg-white p-3 flex text-blue-800 hover:text-blue-900 hover:bg-gray-100"
          >
            <FaWhatsapp className='mt-1 mr-2'/> WhatsApp 
          </a>
          <a
            href="https://www.cmdiadema.sp.gov.br/index.php?exe=gabinete&codedil=edil04" target='_blank'
            className="mt-6 w-96 rounded text-2xl font-bold bg-white p-3 flex text-blue-800 hover:text-blue-900 hover:bg-gray-100"
          >
            <GiMagnifyingGlass className='mt-1 mr-2'/> Confira nosso trabalho 
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center text-white">
        <p>Copyright © 2022 Cicinho.</p>
      </footer>
    </div>
  )
}

export default Home
