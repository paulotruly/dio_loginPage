function PurpleButton({name="Sem título", disabled}) {

  return (
    <div>
       <button
       disabled={disabled}
       className="disabled:bg-disabled-purple h-auto w-full text-white font-bold bg-dio-purple rounded-[10px] py-2 px-4"
       >
         {name}
       </button>
    </div>
  )
}

export default PurpleButton
