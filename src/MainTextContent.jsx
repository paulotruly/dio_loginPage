import checkicon from './assets/checkicon.png'

function MainTextContent({textContent="none"}) {

  return (
    <div className="flex flex-row items-start my-2 h-auto bg-blue-950">
          <img className="mt-2 mr-2 h-3 w-auto" src={checkicon} alt="" />
        <p className="text-white font-normal">
            {textContent}
        </p>
    </div>
  )
}

export default MainTextContent
