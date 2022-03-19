import { NavLink } from "react-router-dom"
import './categoryBar.css'

const CategoryBar = () => {
    return (
        <div className='barContainer'>
            <div className="categoryContainer">
                <NavLink to='/category/1' className='categoryBit'>
                    <img className='categoryImg' title='Tech and Gadgets' src='https://user-images.githubusercontent.com/85664060/158007166-491e3d96-dc6d-4904-84e4-e600035ae181.PNG' />
                    <p className='iconLabel'>Technology</p>
                </NavLink>
            </div>

            <div className="categoryContainer">
                <NavLink to='/category/2' className='categoryBit'>
                    <img className='categoryImg' title='Food' src='https://user-images.githubusercontent.com/85664060/158007167-71c55fc8-dafd-4024-ad01-b5ba7e26f4b7.PNG' />
                    <p className='iconLabel'>Food</p>
                </NavLink>
            </div>

            <div className="categoryContainer">
                <NavLink to='/category/3' className='categoryBit'>
                    <img className='categoryImg' title='Community' src='https://user-images.githubusercontent.com/85664060/158007165-ea2b48d5-83ba-4c7e-b9e7-7961de6ba58b.PNG' />
                    <p className='iconLabel'>Community</p>
                </NavLink>
            </div>

            <div className="categoryContainer">
                <NavLink to='/category/4' className='categoryBit'>
                    <img className='categoryImg' title='Environment and Nature' src='https://user-images.githubusercontent.com/85664060/158007163-148892bd-bf34-4ab1-90f2-6a23bc7eee31.PNG' />
                    <p className='iconLabel'>Nature</p>
                </NavLink>
            </div>

            <div className="categoryContainer">
                <NavLink to='/category/5' className='categoryBit'>
                    <img className='categoryImg' title='Art and Design' src='https://user-images.githubusercontent.com/85664060/158007161-a90fb136-daed-49fd-8ebe-678c8e81f3f7.PNG' />
                    <p className='iconLabel'>Design</p>
                </NavLink>
            </div>

            <div className="categoryContainer">
                <NavLink to='/category/6' className='categoryBit'>
                    <img className='categoryImg' title='Gaming' src='https://user-images.githubusercontent.com/85664060/158007158-ba7397e5-939b-410f-b33d-a8733d0d3169.PNG' />
                    <p className='iconLabel'>Gaming</p>
                </NavLink>
            </div>

            <div className="categoryContainer">
                <NavLink to='/category/7' className='categoryBit'>
                    <img className='categoryImg' title='Music' src='https://user-images.githubusercontent.com/85664060/158007160-a4adbd85-f5af-47d0-9e2c-7752ad36624c.PNG' />
                    <p className='iconLabel'>Music</p>
                </NavLink>
            </div>

            <div className="categoryContainer">
                <NavLink to='/category/8' className='categoryBit'>
                    <img className='categoryImg' title='Literature and Film' src='https://user-images.githubusercontent.com/85664060/158007169-367d9429-bfdd-4eca-850e-090a0d4ece7f.PNG' />
                    <p className='iconLabel'>Literature</p>
                </NavLink>
            </div>

            <div className="categoryContainer">
                <NavLink to='/home' className='categoryBit'>
                    <img className='categoryImg' title='All' src='https://user-images.githubusercontent.com/85664060/158716668-683a6c18-d912-4c1a-a176-fe44dba194fa.png'/>
                    <p className='iconLabel'>All</p>
                </NavLink>
            </div>

        </div>
    )
}

export default CategoryBar
