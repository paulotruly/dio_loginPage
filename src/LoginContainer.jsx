import EmailIcon from './assets/EmailIcon'
import PurpleButton from './PurpleButton'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import usersData from './usuarios.json'

function LoginContainer() {
    // register: função que usamos pra registrar cada um dos campos inputs no React Hook Form
    // handleSubmit: responsável por gerenciar o envio do formulário, recebe a função e só executa se tudo for bem sucedido
    // formState:{errors}: contém todos os erros de validação do formulário
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginStatus, setLoginStatus] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleLogin = (data) => {
        const usuarioEncontrado = usersData.find((usuario) =>
            usuario.email === data.userEmail && usuario.senha === data.userPassword
        );

        if (usuarioEncontrado) {
            setLoginStatus('Login efetuado com sucesso!')
            setIsSuccess(true)
        } else {
            setLoginStatus('Usuário não existe.')
            setIsSuccess(false)
        }

    };



  return (
    <div className="rounded-[15px] bg-white w-2/3 h-auto p-5">
                <div className='flex flex-col items-center'>
                    <h3 className='text-[25px] font-bold text-dio-purple'> Já tem cadastro? </h3>
                    <p className='text-[17px]'> Faça seu login </p>
                </div>

                <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col mt-5 mx-5" action="">
                    {loginStatus && (
                        <p className={`mb-4 text-center py-2 text-black rounded-full text-[16px] ${isSuccess ? 'bg-green-200' : 'bg-red-200'}`}>
                            {loginStatus}
                        </p>
                    )}
                    
                    <div>
                        <div className='flex flex-row border-b pb-1 mb-4 border-dio-purple'>
                            <label className='flex mr-3 items-center' htmlFor="email">
                                <EmailIcon fillClass="fill-dio-purple"> </EmailIcon>
                            </label>
                            <input className='text-lg placeholder-gray-500 w-full font-normal appearance-none border-none outline-none focus:outline-none focus:ring-0'
                            {...register('userEmail', {required: true, pattern: /^\S+@\S+\.\S+$/})} id='email' type="email" placeholder="Endereço de e-mail"/>
                            {errors.userEmail?.type === 'required' && <p>Campo obrigatório!</p>}
                            {errors.userEmail?.type === 'pattern' && <p>E-mail inválido!</p>}
                        </div>

                        <div className='flex flex-row border-b pb-1 mb-4 border-dio-purple'>
                            <label className='flex mr-3 items-center' htmlFor="password">
                                <EmailIcon fillClass="fill-dio-purple"> </EmailIcon>
                            </label>
                            <input className='text-lg placeholder-gray-500 w-full font-normal appearance-none border-none outline-none focus:outline-none focus:ring-0'
                            {...register('userPassword', {required: true})} id='password' type="password" placeholder="*Senha"/>
                            {errors.userPassword && <p>Campo obrigatório!</p>}
                        </div>
                    </div>

                    <div className='mt-2'>
                        <PurpleButton name='ENTRAR'> </PurpleButton>
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
