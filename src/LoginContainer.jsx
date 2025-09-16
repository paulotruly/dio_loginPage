import EmailIcon from './assets/EmailIcon'
import PurpleButton from './PurpleButton'

function LoginContainer() {

  return (
    <div className="rounded-[15px] bg-white w-2/3 h-auto p-5">
                <div className='flex flex-col items-center'>
                    <h3 className='text-[25px] font-bold text-dio-purple'> Já tem cadastro? </h3>
                    <p className='text-[17px]'> Faça seu login </p>
                </div>

                <form className="flex flex-col mt-5 mx-5" action="">
                    <div>
                        <div className='flex flex-row border-b pb-1 mb-4 border-dio-purple'>
                            <label className='flex mr-3 items-center' htmlFor="email">
                                <EmailIcon fillClass="fill-dio-purple"> </EmailIcon>
                            </label>
                            <input className='text-lg placeholder-gray-500 w-full font-normal appearance-none border-none outline-none focus:outline-none focus:ring-0' id='email' type="email" placeholder="Endereço de e-mail"/>
                        </div>

                        <div className='flex flex-row border-b pb-1 mb-4 border-dio-purple'>
                            <label className='flex mr-3 items-center' htmlFor="password">
                                <EmailIcon fillClass="fill-dio-purple"> </EmailIcon>
                            </label>
                            <input className='text-lg placeholder-gray-500 w-full font-normal appearance-none border-none outline-none focus:outline-none focus:ring-0' id='password' type="password" placeholder="*Senha"/>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <PurpleButton disabled name='ENTRAR'> </PurpleButton>
                    </div>

                    <div className='flex flex-row w-full text-black font-normal text-sm mt-7 mb-5'>
                        <a className='mr-auto hover:underline' href="">Esqueci minha senha.</a>
                        <a className='ml-auto hover:underline' href="">Criar conta</a>
                    </div>
                </form>

            </div>
  )
}

export default LoginContainer
