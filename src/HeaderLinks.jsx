function HeaderLinks({name}) {

  return (
    <div className="">
        <li className="hover:text-dio-purple transition-colors ease-linear">
            <a href="#">
                {name}
            </a>
        </li>
    </div>
  )
}

export default HeaderLinks
