import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import LoginModal from "../Login/LoginModal"
import SignUpModal from "../Signup/SignupModal"
import './splash.css'

interface StateInt {
    session?: any,
    project?: any
}

const SplashPage = () => {
    const projects = useSelector((state: StateInt) => state.project?.projects)
    let totalFunded

    return (
        <div className='splashContainer'>
            <div className='splashPartOne'>
                <div className='splashOneLeft'>
                    <h1 className='splashOneTextLeft'>SEE WHAT'S POSSIBLE</h1>
                </div>
                <div className="splashOneRight">
                    <h1 className='splashOneTextRight'>FUND THE FUTURE</h1>
                </div>
            </div>

            <img className='splashPartTwo' src="https://user-images.githubusercontent.com/85664060/158000464-23b28e38-30f5-4fb2-9fce-80650228f655.png" />

            <div className='splashPartSix'>
                <div className='splashCategoriesHeader'>Explore the categories!</div>
                <div className="splashSixCategories">
                    <NavLink to='/category/1' className='categoryBitSplash'> <img className='categoryImgSplash' title='Tech and Gadgets' src='https://user-images.githubusercontent.com/85664060/158007166-491e3d96-dc6d-4904-84e4-e600035ae181.PNG' /></NavLink>
                    <NavLink to='/category/2' className='categoryBitSplash'> <img className='categoryImgSplash' title='Food' src='https://user-images.githubusercontent.com/85664060/158007167-71c55fc8-dafd-4024-ad01-b5ba7e26f4b7.PNG' /></NavLink>
                    <NavLink to='/category/3' className='categoryBitSplash'> <img className='categoryImgSplash' title='Community' src='https://user-images.githubusercontent.com/85664060/158007165-ea2b48d5-83ba-4c7e-b9e7-7961de6ba58b.PNG' /></NavLink>
                    <NavLink to='/category/4' className='categoryBitSplash'> <img className='categoryImgSplash' title='Environment and Nature' src='https://user-images.githubusercontent.com/85664060/158007163-148892bd-bf34-4ab1-90f2-6a23bc7eee31.PNG' /></NavLink>
                    <NavLink to='/category/5' className='categoryBitSplash'> <img className='categoryImgSplash' title='Art and Design' src='https://user-images.githubusercontent.com/85664060/158007161-a90fb136-daed-49fd-8ebe-678c8e81f3f7.PNG' /></NavLink>
                    <NavLink to='/category/6' className='categoryBitSplash'> <img className='categoryImgSplash' title='Gaming' src='https://user-images.githubusercontent.com/85664060/158007158-ba7397e5-939b-410f-b33d-a8733d0d3169.PNG' /></NavLink>
                    <NavLink to='/category/7' className='categoryBitSplash'> <img className='categoryImgSplash' title='Music' src='https://user-images.githubusercontent.com/85664060/158007160-a4adbd85-f5af-47d0-9e2c-7752ad36624c.PNG' /></NavLink>
                    <NavLink to='/category/8' className='categoryBitSplash'> <img className='categoryImgSplash' title='Literature and Film' src='https://user-images.githubusercontent.com/85664060/158007169-367d9429-bfdd-4eca-850e-090a0d4ece7f.PNG' /></NavLink>
                </div>
            </div>

            {/* <div className='splashPartThree'>
                <div className='infoBit'>
                    ${totalFunded} donated
                </div>
                <div className='infoBit'>
                    {projects?.length} projects funded
                </div>
                <div className='infoBit'>
                    NUM donors
                </div>
            </div> */}

            <div className='splashPartFour'>
                <Carousel components={projects} />
            </div>

            {/* ['Tech and Gadgets', 'Food', 'Community', 'Environment and Nature',
    'Art and Design', 'Gaming', 'Music', 'Literature and Film'] */}

            <div className='splashPartFive'>
                <div className="splashFiveLeft">
                    Seedling is dedicated to funding the future. Support budding businesses and watch the future bloom!
                </div>
                <div className="splashFiveRight">
                    <LoginModal />
                    <SignUpModal />
                </div>
            </div>
        </div>
    )
}


export default SplashPage;
