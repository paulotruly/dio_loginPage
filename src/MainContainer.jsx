import LoginContainer from './LoginContainer'
import DioContainer from './DioContainer'

function MainContainer() {

  return (
    <div className="flex bg-red-40">
        <div className="flex justify-center w-3/5 py-7 px-20 bg-main-background">
            <DioContainer></DioContainer>  
        </div>


        <div className="flex justify-center pt-6 w-2/5 items-start bg-main-background">
            <LoginContainer></LoginContainer>
        </div>
    </div>
  )
}

export default MainContainer
