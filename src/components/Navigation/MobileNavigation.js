import react, {useState}  from "react";
import NavLinks from "./NavLinks";
import {FiMenu} from 'react-icons/fi';
import {GrClose} from 'react-icons/gr';

const MobileNavigation = () => {

    const [isClicked, setIsClicked ] = useState(false);

    const handleMenu = () => {
        setIsClicked(!isClicked);
    }

    const menuIcon = <FiMenu className="mobileNavigation__menu" size='25px'
                             onClick={handleMenu}/>

    const closeIcon = <GrClose className="mobileNavigation__menu" size='25px'
                             onClick={handleMenu}/>

    return (
        <nav className='mobileNavigation'>
            {isClicked ? closeIcon : menuIcon }
            {isClicked &&<NavLinks/>}
        </nav>
        
    );
}

export default MobileNavigation;