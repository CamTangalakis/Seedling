import {IconButton, Menu, MenuList, Button, Paper, ClickAwayListener} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginModal from '../Login/LoginModal'
import SignUpModal from '../Signup/SignupModal'
import { logout } from '../../store/session'

const MenuComponent = () => {
    const dispatch = useDispatch()
    const [openMenu, setOpenMenu] = useState(false)
    const user = useSelector(state => state.session.user)

    const showMenu = () => {
        if(openMenu) return
        setOpenMenu(true)
    }

    useEffect(() => {
        if (!openMenu) return
        const closeMenu = () => {
            setOpenMenu(false)
        }

        document.addEventListener('click', closeMenu)
        return () => document.removeEventListener('click', closeMenu)
    }, [openMenu])

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
                <LoginModal />
                <SignUpModal />
            </div>
        )
    }

    return (
        <div>

            <IconButton onClick={showMenu}>
                <MenuIcon />
            </IconButton>
            {openMenu && (
                <Paper >
                    <ClickAwayListener>
                        <MenuList>
                            {sessionLinks}

                        </MenuList>
                    </ClickAwayListener>
                </Paper>
            )}
        </div>
    )
}

export default MenuComponent;
