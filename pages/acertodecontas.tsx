import type { NextPage } from 'next'
import { FaInstagram, FaFacebook, FaWhatsapp, FaFish } from 'react-icons/fa';
import { GiHealthNormal, GiLoveInjection } from 'react-icons/gi'
import { MdBloodtype } from 'react-icons/md'
import { RiMotorbikeFill } from 'react-icons/ri'

const Home: NextPage = () => {
  return (
    <div className='bg-black'>
      <div className="container mx-auto px-3">
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full flex-1 flex-col items-center justify-center text-center ">
            <h1 className='text-white text-4xl font-black mt-3 mb-4 md:text-7xl'>Acerto de contas!</h1>
            <h2 className='text-white md:text-xl font-light mb-8'>Confira alguns feitos do nosso trabalho.</h2>
            <img className='md:w-3/5 mt-4' src='/rak.png' />
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 bg-white p-4 rounded-xl text-black">
          <div className="justify-center items-center">
            <div className='flex mb-3'>
              <RiMotorbikeFill className='text-4xl mr-3' />
              <h2 className='text-2xl font-bold'>Proibição do "Bololô".</h2>
            </div>
            <span>(PROJETO DE LEI 41/2022)</span>
            <p className='text-xl mb-3'>
              Contribuindo com o fim dos pancadões do nosso município referente ao bem-estar e sossego dos munícipes, as regras dessa lei serão aplicadas àqueles que praticam a atividade popularmente conhecida por "Bololô" quando o motociclista aperta a embreagem da moto até ela fazer um barulho alto, que causa o incômodo na vizinhança, recebendo uma multa no valor de R$4.580,00.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 bg-white p-4 rounded-xl text-black">
          <div className="justify-center items-center">
            <div className='flex mb-3'>
              <FaFish className='text-4xl mr-3' />
              <h2 className='text-2xl font-bold'>Programa Pesque e Solte.</h2>
            </div>
            <span>(PROJETO DE LEI Nº 114/2021)</span>
            <p className='text-xl mb-3'>
              O projeto Pesque e Solte Nº 114/2021 foi criado com o objetivo de proporcionar aos idosos, aposentados e pessoas com dificuldade de locomoção a oportunidade de praticar uma atividade recreativa de cunho ecológico. A diversão e o lazer são essenciais para a saúde do corpo e da mente. Além disso, esse projeto coopera para a preservação e conservação da biodiversidade, promoção da cultura da pesca esportiva e proteção da fauna e da flora aquáticas e de seus mecanismos de interação ecológica.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 bg-white p-4 rounded-xl text-black">
          <div className="justify-center items-center">
            <div className='flex mb-3'>
              <GiHealthNormal className='text-4xl mr-3' />
              <h2 className='text-2xl font-bold'>Psicologia na Rede Municipal de Ensino.</h2>
            </div>
            <span>(PROJETO DE LEI Nº 016/2021)</span>
            <p className='text-xl mb-4'>
              A cada início de semestre, todas as escolas da rede municipal de ensino deverão realizar avaliação psicológica nos alunos. É extremamente importante buscar a compreensão a cerca de como a criança e o jovem estão criando a sua história, assim como entender as suas dificuldades. Uma boa preparação emocional é o caminho certo para alcançar o bem-estar psicológico, e dessa forma, ter melhor qualidade de vida.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 bg-white p-4 rounded-xl text-black">
          <div className="justify-center items-center">
            <div className='flex mb-3'>
              <MdBloodtype className='text-4xl mr-3' />
              <h2 className='text-2xl font-bold'>Junho Vermelho.</h2>
            </div>
            <span>(PROJETO DE LEI Nº 027/2017)</span>
            <p className='text-xl mb-4'>
              É instituído em Diadema o mês “Junho Vermelho”, dedicado à campanha de incentivo à doação de sangue. O incentivo desse projeto de lei busca incentivar o gesto e compromisso em doar sangue. Os estoques do banco de sangue precisam estar abastecidos tanto para situações de emergência, tanto para quem necessita de sangue com frequência. Um doador pode proporcionar novas oportunidades a quem precisa. Trazer esperança de vida.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 bg-white p-4 rounded-xl text-black">
          <div className="justify-center items-center">
            <div className='flex mb-3'>
              <GiLoveInjection className='text-4xl mr-3' />
              <h2 className='text-2xl font-bold'>Programa de Vacinação Domiciliar.</h2>
            </div>
            <span>(PROJETO DE LEI Nº 073/2017)</span>
            <p className='text-xl mb-4'>
              O projeto de Lei Nº 073/2017 foi criado destinado às pessoas com deficiência motora incapacitante, comprovadamente impossibilitadas de se deslocar aos locais de vacinação, também pensando em compreender e valorizar estas pessoas.
            </p>
          </div>
        </div>
        <div className="justify-center items-center mt-4 text-white">
          <h2 className='text-2xl font-black mt-6 text-center md:text-4xl'>Quer conhecer ainda mais nosso trabalho?</h2>
          <h4 className='text-xl font-light mt-6 text-center md:text-2xl'>Acompanhe nossas redes sociais e portais oficiais.</h4>
          <div className="mt-6 flex  flex-wrap items-center justify-around sm:w-full">
            <a
              href="https://www.facebook.com/ocicinhooficial" target='_blank'
              className="mt-6 rounded text-2xl font-bold bg-white p-3 flex text-black hover:text-gray-900 hover:bg-gray-400"
            >
              <FaFacebook className='mt-1 mr-2' /> Facebook
            </a>
            <a
              href="https://www.instagram.com/ocicinho_/" target='_blank'
              className="mt-6 rounded text-2xl font-bold bg-white p-3 flex text-black hover:text-gray-900 hover:bg-gray-400"
            >
              <FaInstagram className='mt-1 mr-2' /> Instagram
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5511937528427" target='_blank'
              className="mt-6 rounded text-2xl font-bold bg-white p-3 flex text-black hover:text-gray-900 hover:bg-gray-400"
            >
              <FaWhatsapp className='mt-1 mr-2' /> WhatsApp
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center py-6">
        <p className='mb-6 text-white'>Copyright © 2022 Cicinho.  </p>
        <a className='p-2 rounded text-white font-bold' href='#'> Voltar ao topo </a>
      </footer>
    </div>
  )
}

export default Home


