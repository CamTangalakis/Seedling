import { AppBar, Toolbar, IconButton,
        Typography, Button, Menu, MenuList,
        MenuItem, Stack } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './nav.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuComponent from './Menu'
import SignUpModal from '../Signup/SignupModal'
import LoginModal from '../Login/LoginModal'
import { logout } from '../../store/session'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()


    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    let sessionLinks;
    if(user) {
        sessionLinks = (
            <div>
                <Button onClick={handleLogout}> Log Out </Button>
            </div>
        )
    }else {
        sessionLinks = (
            <div>
                <MenuItem><LoginModal /></MenuItem>
                <MenuItem><SignUpModal /></MenuItem>
            </div>
        )
    }

    return (
        <div>
            <AppBar style={{'backgroundColor': 'rgb(67, 102, 6)'}} >
                <Toolbar className='NavContainer' >
                    <div className='NavName'>
                        <Button href='/home'>
                            <img className='seedlingImg' src='https://user-images.githubusercontent.com/85664060/158716668-683a6c18-d912-4c1a-a176-fe44dba194fa.png'/>
                        </Button>
                    </div>
                    <div className='NavButtons'>
                        <Button>
                            Search
                        </Button>

                        {user &&
                            <Button href='/newProject'>New Project</Button>
                        }

                        <IconButton >
                            <MenuIcon aria-controls="mainMenu"
                            aria-haspopup="true"
                            aria-expanded="false"
                            onClick={() => {}}
                            />
                        </IconButton>


                        {/* <Menu id='mainMenu' open='false' onClose={() => {}}>
                            {sessionLinks}
                            <MenuItem href='/'>Home</MenuItem>
                        </Menu> */}

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar
