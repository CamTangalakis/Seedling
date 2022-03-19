import {IconButton, Menu, MenuItem, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginModal from '../Login/LoginModal'
import SignUpModal from '../Signup/SignupModal'
import { logout } from '../../store/session'
import * as React from 'react'
// import { useNavigate } from 'react-router-dom'

interface StateInt {
    session?: any,
    project?: any
}

const MenuComponent = () => {
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    // const [openMenu, setOpenMenu] = useState(false)
    const open = Boolean(anchorEl)
    const user = useSelector((state: StateInt) => state.session?.user)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
        setAnchorEl(null)
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
                <Button onClick={handleClose}>
                    <LoginModal />
                </Button>
                <Button onClick={handleClose}>
                    <SignUpModal />
                </Button>
            </div>
        )
    }

    return (
        <div>
            <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
            </Button>

            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby' : "basic-button"}}
            >
                {sessionLinks}


            </Menu>
        </div>
    )
}

export default MenuComponent;
