import React ,{useRef , useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './header.scss'
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser , AiOutlineMenu  } from "react-icons/ai"


export default function Header() {
    const [showMenu,setShowMenu] = useState<boolean>(false);
    const inputRef = useRef();
    function toggleMenu(){
        setShowMenu(!showMenu);
    }
    return (
        <div>
            <div className="header-empty"></div>
            <header id="main-header">
                <Container >
                    <Row className="row-header">
                        <div className="logo-column">logo</div>
                        <div className="menu">
                            <ul className= {`main-menu ${showMenu ? "active-menu-button" :""}` } >
                                <li>
                                    <Link className='link'  to="/">PRODUCTS & SERVICES</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            abcd1
                                        </li>
                                        <li>
                                            abcd2
                                        </li>
                                        <li>
                                            abcd3
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link className='link'  to="/solutions">SOLUTIONS</Link> 
                                </li>
                                <li>
                                    <Link className="link"  to="/product">PRODUCT</Link> 
                                </li>
                                <li>
                                    <Link className="link"  to="/support">SUPPORT & WARRANTY</Link> 
                                </li>
                            </ul>
                        </div>
                        <div className="icons-column">
                            <ul className="d-flex justify-content-between icon-menu" >
                                <li><AiOutlineUser size={23} ></AiOutlineUser></li>
                                <li><AiOutlineHeart size={23}></AiOutlineHeart><span className="badge-icon">1</span></li>
                                <li><AiOutlineShoppingCart size={23}></AiOutlineShoppingCart><span className="badge-icon">2</span></li>
                            </ul>
                            <button className="menu-button" onClick={toggleMenu}><AiOutlineMenu size={23}></AiOutlineMenu></button>
                        </div>
                        

                    </Row>

                    </Container>

            </header>
        </div>
    )
}
