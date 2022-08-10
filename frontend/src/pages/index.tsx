import { useState } from 'react';
import { SectionLoginUser } from '../components/sectionLoginUser'

const Home: React.FC = () => {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function handleSubmit(): Promise<any>{
    fetch('http://localhost:3001/user', {
      method: "POST",
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify({email, name, password})
    })
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <main className='flex h-full'>
        <img className='w-2/3' src="https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        <form className="p-8 w-1/2 rounded bg-white flex flex-col">
          <section className='w-full px-10 flex flex-col gap-3 justify-center min-h-full'>
            <h2 className="text-2xl my-0 mx-auto  text-gray-900">Cadastre-se</h2>
            <SectionLoginUser
              title={'Nome'}
              type={'text'}
              htmlFor={'name'}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
            />
            <SectionLoginUser
              title={'Email'}
              type={'email'}
              htmlFor={'email'}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
            />
            <SectionLoginUser
              title={'Senha'}
              type={'password'}
              htmlFor={'password'}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
            />
            <button onClick={ handleSubmit } className='bg-blue-600 mt-4 p-2 rounded text-white text-lg' type='button'>Enviar</button>
          </section>
        </form>
      </main>
    </div>
  )
}

export default Home;
