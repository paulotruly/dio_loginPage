import diologo from './assets/diologo.png'
import HeaderLinks from './HeaderLinks'
import PurpleButton from './PurpleButton'

function Header() {

  return (
    <div className="">
        <div className='flex flex-row items-center w-full h-auto bg-header-background px-36 py-5'>
            <img className='h-[40px] w-auto' src={diologo} alt="" />

            <nav className='ml-auto'>
                <ul className='flex flex-row items-center text-[16px] font-normal text-white gap-5'>
                    <HeaderLinks name={"Carreiras"}></HeaderLinks>
                    <HeaderLinks name={"Bootcamps"}></HeaderLinks>
                    <HeaderLinks name={"Projetos"}></HeaderLinks>
                    <HeaderLinks name={"Comunidade"}></HeaderLinks>
                    <HeaderLinks name={"Planos"}></HeaderLinks>
                    <HeaderLinks name={"Para Empresas"}></HeaderLinks>
                    <li> <PurpleButton name='Criar conta'> </PurpleButton> </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
