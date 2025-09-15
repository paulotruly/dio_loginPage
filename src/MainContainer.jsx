import BrandLogos from './BrandLogos'
import LittleIcon from './LittleIcon'
import MainTextContent from './MainTextContent'

function MainContainer() {

  return (
    <div className="flex h-screen bg-red-400">
        
        <div className="flex justify-center w-3/5 py-7 px-20 bg-blue-400">
            <div className="flex flex-col bg-yellow-200">

                <div className="mr-auto bg-blue-700 leading-none">
                    <h2 className="font-extrabold text-white text-[35px]"> Domine as tecnologias utilizadas pelas empresas mais inovadoras </h2>
                </div>

                <div className='flex flex-col mt-6'>
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

                <div className='grid grid-cols-4 grid-logos w-2/3 gap-5 mt-6'>
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

                <div className='flex flex-col w-40 h-[200px] mt-10 h-full bg-orange-500'>
                    <div className='flex justify-center bg-blue-900'>
                        <LittleIcon thisClass={""}></LittleIcon>
                        <LittleIcon thisClass={"-ml-2"}></LittleIcon>
                        <LittleIcon thisClass={"-ml-2"}></LittleIcon>
                        <LittleIcon thisClass={"-ml-2"}></LittleIcon>
                        <LittleIcon thisClass={"-ml-2"}></LittleIcon>
                    </div>

                </div>

            </div>    
        </div>

        <div className="w-2/5 bg-pink-400">
        </div>

    </div>
  )
}

export default MainContainer
