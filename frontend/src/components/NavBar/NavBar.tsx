import { AppBar, Toolbar, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import SignUpModal from '../Signup/SignupModal'
import LoginModal from '../Login/LoginModal'
import { logout } from '../../store/session'
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
                <Button className='logoutButton' onClick={handleLogout}
                    style={{"backgroundColor": "rgb(90, 36, 92)", "color": "beige",
                    "boxShadow": "1px 1px 1px 1px rgba(0,0,0,0.25), -1px -1px 1px 1px rgba(255, 255, 255, 0.5)"}}>
                    Log Out
                </Button>
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
                                    <Button className='projectButton'
                                        href='/newProject'
                                        style={{"backgroundColor": "rgb(87, 128, 17)", "color": "beige",
                                        "boxShadow": "1px 1px 1px 1px rgba(0,0,0,0.25), -1px -1px 1px 1px rgba(255, 255, 255, 0.5)",
                                        "margin":"0vw 1vw"}} >
                                        New Project
                                    </Button>
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
