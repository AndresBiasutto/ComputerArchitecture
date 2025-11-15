import ALink from '../atom/ALink'

const NavBar = () => {
  return (
    <nav className='flex flex-row gap-2 p-2'>
      <ALink link={"/"} text='inicio' />
      <ALink link={'/unitone'} text='Sistemas de numeración' />
      <ALink link={'/unittwo'} text='Unidad 2' />
    </nav>
  )
}

export default NavBar