import { useRouter } from 'next/dist/client/router';
import Router from 'next/dist/next-server/server/router';
import {useRef, useState, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogout } from '../../../redux/actions/UserAction';
const Menu = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector(state => state.UserReducer);

    const handleClick = () => {
        localStorage.removeItem('data');
        dispatch(UserLogout(false));
    }

    return (
        <ul onClick={e => {props.showMenu(false)}} className="hero top-15 py-8 h-screen w-screen text-center text-2xl text-white uppercase font-bold space-y-6">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#solution">Our Solutions</a>
            </li>
            <li>
                <a href="#story">Our Story</a>
            </li>
            <li>
                <a href="#team">Our Team</a>
            </li>
            <li>
                <a href="#testimonial">Testimonials</a>
            </li>
            <li>
                <a href="#sponsor">Partners</a>
            </li>
            <li>
                <a href="#article">Articles</a>
            </li>
            <li>
                <a href="#contactus">Contact Us</a>
            </li>
            {user.isLogin && <li>
                <a className="cursor-pointer" onClick={() => {router.push(`/lms`)}} >LMS</a>
            </li>}
            {user.isLogin && <li>
                <a className="cursor-pointer" onClick={() => {router.push(`/orders`, undefined, {shallow: true, scroll: false})}} >Orders</a>
            </li>}
            {!user.isLogin && <li>
                <a className="cursor-pointer" onClick={() => {props.showModal(true)}} >Login</a>
            </li>}
            {user.isLogin && <li>
                <a className="cursor-pointer" onClick={() => {handleClick();}} >Logout</a>
            </li>}
        </ul>
    )
}

const MobileNavbar = (props) => {
    const ref = useRef(null);
    const [displayMenu, setDisplayMenu] = useState(false);
    const [float, setFloat] = useState(false);

    const handler = useCallback((e) =>{
        if(window.pageYOffset > ref.current.offsetTop)
            setFloat(true);
        else
            setFloat(false);
    },[])

    useEffect(()=>{
        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler);
        }
    },[])

    return (
        <div ref={ref} className={`${float ? 'fixed' : ''} bg-white flex flex-col items-center md:hidden xs:block sm:w-full xs:w-full xxs:w-full z-50`}>
            <div className="w-full px-2 py-4 flex text-white justify-between">
                <a href="#home" className="flex items-center text-2xl text-white space-x-2">
                    <img className="w-14" src="/images/logo.png" />
                    <h4 className="lg:flex md:hidden text-xl text-heading">Stock <span className="font-bold text-skBlue">Knowledge</span></h4>
                </a >
                <svg onClick={(e) => setDisplayMenu(!displayMenu)} className="w-16 h-16 text-skBlue p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            { displayMenu && <Menu showMenu={setDisplayMenu} showModal={props.showModal} />}
        </div>
    )
}

export default MobileNavbar;