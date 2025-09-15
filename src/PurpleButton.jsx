function PurpleButton({name="Sem título", click="#"}) {

  return (
    <div>
       <button 
       className="h-auto w-auto text-white font-bold bg-dio-purple rounded-[10px] py-1 px-4 mx-2"
       onClick={click}
       >
         {name}
       </button>
    </div>
  )
}

export default PurpleButton
