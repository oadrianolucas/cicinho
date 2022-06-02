import type { NextPage } from 'next'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import  { GiMagnifyingGlass } from 'react-icons/gi'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center ">
        <img className='md:w-2/5 mt-4 px-6' src='/rak.png' />
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://www.facebook.com/ocicinhooficial" target='_blank'
            className="mt-6 w-96 rounded text-2xl font-bold bg-white p-3 flex text-black hover:bg-gray-400"
          >
            <FaFacebook className='mt-1 mr-2'/> Facebook 
          </a>
          <a
            href="https://www.instagram.com/ocicinho_/" target='_blank'
            className="mt-6 w-96 rounded text-2xl font-bold bg-white p-3 flex text-black  hover:bg-gray-400"
          >
            <FaInstagram className='mt-1 mr-2'/> Instagram 
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511937528427" target='_blank' 
            className="mt-6 w-96 rounded text-2xl font-bold bg-white p-3 flex text-black  hover:bg-gray-400"
          >
            <FaWhatsapp className='mt-1 mr-2'/> WhatsApp 
          </a>
          <a
            href="https://www.cmdiadema.sp.gov.br/index.php?exe=gabinete&codedil=edil04" target='_blank'
            className="mt-6 w-96 rounded text-2xl font-bold bg-white p-3 flex text-black  hover:bg-gray-400"
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
