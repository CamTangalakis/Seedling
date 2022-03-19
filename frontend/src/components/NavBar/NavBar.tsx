import { AppBar, Toolbar, IconButton,
        Typography, Button, Menu, MenuList,
        MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuComponent from './Menu'
import SignUpModal from '../Signup/SignupModal'
import LoginModal from '../Login/LoginModal'
import { logout } from '../../store/session'
import { NavLink } from 'react-router-dom'
import './nav.css'

interface StateInt {
    session?: any,
    project?: any
}

const NavBar = () => {
    const user = useSelector((state: StateInt) => state.session?.user)
    const dispatch = useDispatch()


    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    let sessionLinks;
    if(user) {
        sessionLinks = (
            <div>
                <Button className='logoutButton' onClick={handleLogout}> Log Out </Button>
            </div>
        )
    }else {
        sessionLinks = (
            <div className='sessionLinksActions'>
                <LoginModal />
                <SignUpModal />
            </div>
        )
    }

    return (
        <div>
            <AppBar style={{'backgroundColor': 'rgb(67, 102, 6)'}} >
                <Toolbar className='NavContainer' >
                    <div className='NavName'>
                        <Button href='/home' style={{"borderRadius": "50%"}}>
                            <img className='seedlingImg' src='https://user-images.githubusercontent.com/85664060/158716668-683a6c18-d912-4c1a-a176-fe44dba194fa.png'/>
                        </Button>
                    </div>
                    <div className='NavButtons'>
                        {user ?
                            (
                                <div className='sessionLinksUser'>
                                    <Button className='projectButton' href='/newProject' style={{"color": "beige"}} >New Project</Button>
                                    {sessionLinks}
                                </div>
                            ):(
                                <div className='sessionLinksNoUser'>
                                    {sessionLinks}
                                </div>
                            )}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar
