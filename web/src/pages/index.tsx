import { SectionLoginUser } from '../components/sectionLoginUser'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900">
      <form className="p-8 rounded bg-gray-800 justify-center w-80 items-center flex flex-col gap-3">
        <h2 className="text-lg text-white">Cadastre-se</h2>
        <SectionLoginUser
          title={'Nome'}
          type={'text'}
          htmlFor={'name'}
        />
        <SectionLoginUser
          title={'Email'}
          type={'email'}
          htmlFor={'email'}
        />
        <SectionLoginUser
          title={'Senha'}
          type={'password'}
          htmlFor={'password'}
        />
      </form>
    </div>
  )
}

export default Home;
