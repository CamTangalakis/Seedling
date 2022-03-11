import { useDispatch, useSelector } from 'react-redux'
import LoginModal from './UserActions/loginModal'
import SignupModal from './UserActions/signupModal'
import { logout } from '../store/session'

const NavBar = () => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    const logout = (e) => {
        e.preventDefault();
        dispatch(logout());
      };

    return (
        <div>
            {user.length > 0 ? (
                <div>
                    <LoginModal />
                    <SignupModal />
                </div>
            ) : <button onClick={(e)=>logout(e)}>Log Out</button>}
        </div>
    )
}

export default NavBar
