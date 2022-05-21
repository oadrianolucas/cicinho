import type { NextPage } from 'next'
import { FaInstagram, FaFacebook, FaWhatsapp, FaBookmark } from 'react-icons/fa';
import {GiHealthNormal, GiSittingDog} from 'react-icons/gi'
import { IoSchoolOutline } from 'react-icons/io5'

const Home: NextPage = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
          <h1 className='text-4xl font-black mt-3 md:text-6xl'>Acerto de contas!</h1>
          <h2 className='md:text-xl font-light mb-3'>Confira alguns feitos do nosso trabalho.</h2>
          <img className='w-4/3' src='/acerto-de-contas.png'/>        
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="justify-center items-center mx-20 md:px-20">
          <h2 className='flex text-2xl md:text-4xl font-bold mb-3'><FaBookmark className='mr-3'/>Sobre</h2>
          <p className='text-xl p-1 mb-3'>
            Casado com a Sonia, pai de duas filhas e avô de um neto. Sou vereador da cidade de Diadema Transparência, eficiência, diálogo e compromisso são marcas da minha gestão. Diadema é a minha cidade . cobro o fortalecimento dos programas realizados para conquistar resultados efetivos em todas as áreas. Promover a cidade com mais qualidade de vida e oportunidades. Vamos superar os desafios e fazer acontecer!
          </p>
          <a className='px-4 py-2 rounded bg-black text-white font-bold hover:bg-gray-800' href='#'>
            Saiba mais +
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="justify-center items-center mx-20 md:px-20">
          <h2 className='flex text-xl md:text-4xl font-bold mb-3'><GiHealthNormal className='mr-3'/>Trabalhando pela saúde.</h2>
          <img className='w-4/3' src='/medical.jpg'/>        
          <p className='text-xl p-1 mb-4'>
            Foram mais de 18 leis aprovadas em prol da saúde de DIADEMA, desenvolvendo melhorias no programa de vacinação contra o COVID
            como o "Programa de vacinação domiciliar", destinado às pessoas com deficiência motora incapacitante e campanhas de concientização
            como o mês "Junho vermelhor" dedicado à campanha de incentivo à doação de sangue.
            <br /><br />
            Em parceria com o deputado estadual Thiago Auricchio foram investidos R$ 200 mil na UBS Canhema em DIADEMA melhorando sua estrutura e adquirindo mais equipamentos.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="justify-center items-center mx-20 md:px-20">
          <h2 className='flex text-xl md:text-4xl font-bold mb-3'><IoSchoolOutline className='mr-3'/>Educação é a chave para o futuro.</h2>
          <img className='w-4/3' src='/escola.jpg'/>        
          <p className='text-xl p-1 mb-4'>
            Sabemos que o futuro de uma nação é a educação, por isso focamos em fiscalizar ao máximo todas as instituições de ensino municípais
            e melhorar suas estruturas como a coleta de amostras das águas dos reservatórios das escolas evitando doenças e intoxicação alimentar,
            o Programa “Escola Saudável Diadema” na Rede Municipal de Ensino, no âmbito do Município de Diadema, com o objetivo de criar estratégias para prevenção de doenças,
            avaliação das condições de saúde das crianças e jovens, bem como para formação de educadores com temas relacionados à saúde.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="justify-center items-center mx-20 md:px-20">
          <h2 className='flex text-xl md:text-4xl font-bold mb-3'><GiSittingDog className='mr-3'/> Amor pelos animais.</h2>
          <img className='w-4/3' src='/dog.jpg'/>        
          <p className='text-xl p-1 mb-4'>
          Na hora de cuidar dos pets, os tutores devem estar atentos a diversos sinais de surgimento de doenças e principalmente à vacinação dos bichinhos.
          A cinomose é uma doença conhecida por afetar principalmente filhotes ou canídeos que possuem o sistema imunológico debilitado. Preocupados com a saúde 
          de seu PET criamos a campanha anual de concientização para a prevenção e vacinação da cinomose canina. </p>
          <h2 className='text-2xl font-black mt-6 text-center md:text-4xl'>Quer conhecer ainda mais nosso trabalho?</h2>
          <h4 className='text-xl font-light mt-6 text-center md:text-2xl'>Acompanhe nossas redes sociais e portais oficiais.</h4>
          <div className="mt-6 flex  flex-wrap items-center justify-around sm:w-full">
            <a
              href="https://www.facebook.com/ocicinhooficial" target='_blank'
              className="mt-6 rounded text-2xl font-bold bg-black p-3 flex text-white hover:text-gray-900 hover:bg-gray-400"
            >
              <FaFacebook className='mt-1 mr-2'/> Facebook
            </a>
            <a
              href="https://www.instagram.com/ocicinho_/" target='_blank'
              className="mt-6 rounded text-2xl font-bold bg-black p-3 flex text-white hover:text-gray-900 hover:bg-gray-400"
            >
              <FaInstagram className='mt-1 mr-2'/> Instagram
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5511937528427" target='_blank' 
              className="mt-6 rounded text-2xl font-bold bg-black p-3 flex text-white hover:text-gray-900 hover:bg-gray-400"
            >
              <FaWhatsapp className='mt-1 mr-2'/> WhatsApp
            </a>
          </div>
        </div>
      </div>
     
      <footer className="text-center py-6">
          <p className='mb-6'>Copyright © 2022 Cicinho.  </p>
          <a className='p-2 rounded bg-black text-white font-bold hover:text-gray-900 hover:bg-gray-400' href='#'> Voltar ao topo </a>
      </footer>
    </div>
  )
}

export default Home


