function PurpleButton({name="Sem título", click="#", disabled}) {

  return (
    <div>
       <button
       disabled={disabled}
       className="disabled:bg-disabled-purple h-auto w-full text-white font-bold bg-dio-purple rounded-[10px] py-2 px-4"
       onClick={click}
       >
         {name}
       </button>
    </div>
  )
}

export default PurpleButton
