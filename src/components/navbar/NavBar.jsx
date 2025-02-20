import {Link} from 'react-router-dom'
import './Navbar.css'

function NavBar(){
    return(<>
        <nav className='navBar'>
        <h1 className="logo">GreenHaven</h1>
        <ul className='navLinks'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/cartPage'>Cart</Link></li>
        </ul>
        </nav>
    </>)
}
export default NavBar
