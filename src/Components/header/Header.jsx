import { useState } from 'react'
import "./header.css"
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import useHeaderColor from '../../hook/useHeaderColor'
const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false)

    {/* Using custom Hook */ }
    const headerColor = useHeaderColor()

    {/* function for small screen nav open & close */ }

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }

    return (
        <section className='h-wrapper' style={{ background: headerColor }}>
            <div className=" flexCenter paddings innerWidth  h-container">
                {/* logo */}
                <img src="./logo.png" alt="logo" width={100} />

                {/* menu */}
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false)
                    }}
                >
                    <div className="flexCenter h-menu"
                        style={getMenuStyles(menuOpened)}
                    >
                        <a href="#residencies">Residencies</a>
                        <a href="#value">Our Value</a>
                        <a href="#contact">Contact Us</a>
                        <a href="#getstarted">Get Started</a>
                        <button className='button'>Contact</button>

                    </div>
                </OutsideClickHandler>

                {/* for medium and small screens */}
                <div className="menu-icon">
                    <BiMenuAltRight size={30} onClick={() => setMenuOpened((prev) => !prev)} />
                </div>
            </div>
        </section>
    )
}

export default Header
