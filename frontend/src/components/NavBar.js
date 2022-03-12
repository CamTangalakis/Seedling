import { useDispatch, useSelector } from 'react-redux'
import LoginModal from './UserActions/loginModal'
import SignupModal from './UserActions/signupModal'
import { logout } from '../store/session'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import './NavBar.css'

const NavBar = () => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    const logout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    let navButtons
    let projectButton

    if(user?.length) {
        projectButton = <NavLink to='/projects/new' exact={true}>
            Start a Project
        </NavLink>

        navButtons= <div>
            <button onClick={(e)=>logout(e)}>Log Out</button>
        </div>
    }
    else {
        projectButton = null
        navButtons = <div className='NavComponent'>
            <LoginModal />
            <SignupModal />
        </div>
    }

    return (
        <div className='NavBarContainer'>
            <NavLink to='/' exact ={true}>
                Home
            </NavLink>
            {projectButton}
            {/* search Bar */}
            {navButtons}
        </div>
    )
}

export default NavBar
