import StarIcon from './assets/StarIcon'
import BrandLogos from './BrandLogos'
import LittleIcon from './LittleIcon'
import MainTextContent from './MainTextContent'

function DioContainer() {

  return (
    <div className="flex flex-col p-2 gap-6">

                <div className="mr-auto leading-none">
                    <h2 className="font-extrabold text-white text-[35px]"> Domine as tecnologias utilizadas pelas empresas mais inovadoras </h2>
                </div>

                <div className='flex flex-col'>
                    <MainTextContent
                    textContent='+1.750 cursos, bootcamps, projetos e formações nas carreiras de back-end, front-end, mobile, games, data, inteligência artificial & cloud;'>    
                    </MainTextContent>
                    <MainTextContent
                    textContent='Conquiste certificados reconhecidos por grandes empresas de tecnologia em Java, Python, .NET, C#, JavaScript, Node.js, React, Angular, SQL, AWS, Azure, GCP, MongoDB, Kotlin, Swift entre mais de 500 tecnologias;'>    
                    </MainTextContent>
                    <MainTextContent
                    textContent='+10.000 pessoas contratadas por grandes empresas no Brasil e exterior.'>    
                    </MainTextContent>
                </div>

                <div className='grid grid-cols-4 grid-logos w-2/3 gap-5 ml-7'>
                    <BrandLogos link={'https://hermes.dio.me/companies/85e2dba0-4153-4a62-8dc5-69da53a547c1.png'}> </BrandLogos>
                    <BrandLogos link={'https://hermes.dio.me/companies/46a193aa-2c75-40a3-bf53-988fd1598190.png'}> </BrandLogos>
                    <BrandLogos link={'https://hermes.dio.me/files/assets/86bd44aa-892b-4fea-a893-13b8018606ce.png'}> </BrandLogos>
                    <BrandLogos link={'https://hermes.dio.me/companies/375e9418-3ac2-4959-8e82-74c80941d0b8.png'}> </BrandLogos>

                    <BrandLogos link={'https://hermes.dio.me/companies/79e25d56-1bc9-49bc-b0ec-f5b68f84cccc.png'}> </BrandLogos>
                    <BrandLogos link={'https://hermes.dio.me/companies/157e6725-2ae4-498d-bd75-2d380e5bf180.png'}> </BrandLogos>
                    <BrandLogos link={'https://hermes.dio.me/companies/d93fab6f-17b5-49f4-8521-b390afbf74c3.png'}> </BrandLogos>
                    <BrandLogos link={'https://hermes.dio.me/files/assets/92a1e107-8566-4e2a-9624-7d1573bd5c17.png'}> </BrandLogos>

                    <BrandLogos link={'https://hermes.dio.me/companies/4183deb5-3ba4-45ef-a7d2-3a05ace67795.png'}> </BrandLogos>
                    <BrandLogos link={'https://hermes.dio.me/companies/449dbdbc-542e-4205-802d-3bab397d1c1c.png'}> </BrandLogos>
                    <BrandLogos link={'https://hermes.dio.me/companies/cf7896e2-36d9-4a2a-bc7b-82c99eb329a0.png'}> </BrandLogos>
                    <BrandLogos link={'https://hermes.dio.me/companies/b75131f7-af8a-4657-88c4-232566d1afeb.png'}> </BrandLogos>
                </div>


                <div className='flex flex-row mt-5'>
                    <div className='flex flex-col w-40'>
                        <div className='flex justify-center'>
                            <LittleIcon thisClass={""}></LittleIcon>
                            <LittleIcon thisClass={"-ml-2"}></LittleIcon>
                            <LittleIcon thisClass={"-ml-2"}></LittleIcon>
                            <LittleIcon thisClass={"-ml-2"}></LittleIcon>
                            <LittleIcon thisClass={"-ml-2"}></LittleIcon>
                        </div>
                        <div className='flex flex-row gap-2 items-center justify-center w-auto pt-1 px-2 text-[14px]'>
                            <p className='text-white font-bold'>4.5+</p>
                            <StarIcon className='w-[18px] h-auto'> </StarIcon>
                            <StarIcon className='w-[18px] h-auto'> </StarIcon>
                            <StarIcon className='w-[18px] h-auto'> </StarIcon>
                            <StarIcon className='w-[18px] h-auto'> </StarIcon>
                            <StarIcon fillType='half-fill' className='w-[18px] h-auto'> </StarIcon>
                        </div>     
                    </div>

                    <div className='flex text-white font-normal ml-3 w-2/3 items-center'>
                        <p> <span className='font-bold'> Mais de 1.500.000 de talentos </span> confiam na DIO e estão se preparando para o futuro com nossos cursos </p>
                    </div>
                </div>

            </div>  
  )
}

export default DioContainer
