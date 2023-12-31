import React , { useState } from 'react'
import { Link } from 'react-router-dom'


function Headerthree() {

    const [mobile, setmobile] = useState(false)
    const [show, setshow] = useState(false)
    const [show1, setshow1] = useState(false)
    const [show2, setshow2] = useState(false)
    const [show3, setshow3] = useState(false)
    const [show4, setshow4] = useState(false)

    return (
        <>
            <header className="header-slidemenu">
                <div className="logo mb-100">
                    <Link to="/"><img src="assets/img/logo/logo.png" alt="logo" /></Link>
                </div>
                <div className="main-menu slide-out">
                    <nav id="mobile-menu">
                        <ul>
                            <li className="has-sub">
                                <Link to="/">Home</Link>
                                <ul>
                                    <li><Link to="/">Home Page 01</Link></li>
                                    <li><Link to="/home-02">Home Page 02</Link></li>
                                    <li><Link to="/home-03">Home Page Side Menu</Link></li>
                                    <li><Link to="/home-04">Home Page Full Menu</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/about">About</Link></li>
                            <li className="has-sub">
                                <Link to="/room">our rooms</Link>
                                <ul>
                                    <li> <Link to="/room">Our Rooms</Link></li>
                                    <li> <Link to="/room-details">Rooms Details</Link></li>
                                </ul>
                            </li>
                            <li className="has-sub">
                                <Link to="/service">Facilities</Link>
                                <ul>
                                    <li> <Link to="/service">Services</Link></li>
                                    <li> <Link to="/service-details">Services Details</Link></li>
                                </ul>
                            </li>
                            <li className="has-sub"><Link to="#">Pages</Link>
                                <ul>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    <li><Link to="/faq">Faq</Link></li>
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/team-details">Team Details</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/shop-details">Shop Details</Link></li>
                                </ul>
                            </li>
                            <li className="has-sub">
                                <Link to="/blog">Blog</Link>
                                <ul>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/blog-details">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="mobile-menu mean-container">
                    <div className="mean-bar"><Link to="#nav" className={`meanmenu-reveal ${mobile && "meanclose"}`} onClick={() => setmobile(mobile === true ? false : true)} style={{ right: "0px", left: "auto", textAlign: "center", textIndent: "0px", fontSize: "18px" }}>
                        {mobile ?
                            "X"
                            :
                            <>
                                <span><span><span></span></span></span>
                            </>
                        }
                    </Link>
                        <nav className="mean-nav">
                            {mobile &&
                                <ul style={{ display: mobile ? "block" : "none" }}>
                                    <li className="has-sub">
                                        <Link to="/">Home</Link>
                                        <ul style={{ display: show ? "block" : "none" }}>
                                            <li><Link to="/">Home Page 01</Link></li>
                                            <li><Link to="/home-02">Home Page 02</Link></li>
                                            <li><Link to="/home-03">Home Page Side Menu</Link></li>
                                            <li><Link to="/home-04">Home Page Full Menu</Link></li>
                                        </ul>
                                        <Link to="#" className={`mean-expand ${show && "mean-clicked"}`} onClick={() => setshow(show === true ? false : true)} style={{ fontSize: "18px" }}>{show ? "-" : "+"}</Link>
                                    </li>
                                    <li><Link to="/about">About</Link></li>
                                    <li className="has-sub">
                                        <Link to="/room">our rooms</Link>
                                        <ul style={{ display: show1 ? "block" : "none" }}>
                                            <li> <Link to="/room">Our Rooms</Link></li>
                                            <li> <Link to="/room-details">Rooms Details</Link></li>
                                        </ul>
                                        <Link to="#" className={`mean-expand ${show1 && "mean-clicked"}`} onClick={() => setshow1(show1 === true ? false : true)} style={{ fontSize: "18px" }}>{show1 ? "-" : "+"}</Link></li>
                                    <li className="has-sub">
                                        <Link to="/service">Facilities</Link>
                                        <ul style={{ display: show2 ? "block" : "none" }}>
                                            <li> <Link to="/service">Services</Link></li>
                                            <li> <Link to="/service-details">Services Details</Link></li>
                                        </ul>
                                        <Link to="#" className={`mean-expand ${show2 && "mean-clicked"}`} onClick={() => setshow2(show2 === true ? false : true)} style={{ fontSize: "18px" }}>{show2 ? "-" : "+"}</Link></li>
                                    <li className="has-sub"><Link to="#">Pages</Link>
                                        <ul style={{ display: show3 ? "block" : "none" }}>
                                            <li><Link to="/gallery">Gallery</Link></li>
                                            <li><Link to="/faq">Faq</Link></li>
                                            <li><Link to="/team">Team</Link></li>
                                            <li><Link to="/team-details">Team Details</Link></li>
                                            <li><Link to="/pricing">Pricing</Link></li>
                                            <li><Link to="/shop">Shop</Link></li>
                                            <li><Link to="/shop-details">Shop Details</Link>
                                            </li></ul>
                                        <Link to="#" className={`mean-expand ${show3 && "mean-clicked"}`} onClick={() => setshow3(show3 === true ? false : true)} style={{ fontSize: "18px" }}>{show3 ? "-" : "+"}</Link></li>
                                    <li className="has-sub">
                                        <Link to="/blog/">Blog</Link>
                                        <ul style={{ display: show4 ? "block" : "none" }}>
                                            <li><Link to="/blog/">Blog</Link></li>
                                            <li><Link to="/blog-details/">Blog Details</Link></li>
                                        </ul>
                                        <Link to="#" className={`mean-expand ${show4 && "mean-clicked"}`} onClick={() => setshow4(show4 === true ? false : true)} style={{ fontSize: "18px" }}>{show4 ? "-" : "+"}</Link></li>
                                    <li className="mean-last"><Link to="/contact">Contact</Link></li>
                                </ul>}
                        </nav>
                    </div>
                </div>
                <div className="footer-social">
                    <Link to="#">FW</Link>
                    <Link to="#">DR</Link>
                    <Link to="#">BE</Link>
                    <Link to="#">PN</Link>
                </div>
            </header>
        </>
    )
}

export default Headerthree