import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../images/icons/icon_wifi.svg'
import icon2 from '../../images/icons/icon_dollar_2.svg'
import icon3 from '../../images/icons/icon_chart.svg'
import icon4 from '../../images/icons/icon_tag_2.svg'
import icon5 from '../../images/icons/icon_user_2.svg'
import icon6 from '../../images/icons/icon_users.svg'
import icon7 from '../../images/icons/icon_pen.svg'
import icon8 from '../../images/clients/client_logo_9.webp'
import icon9 from '../../images/clients/client_logo_10.webp'
import icon10 from '../../images/avatar/avatar_7.webp'
import icon11 from '../../images/icons/icon_quote.svg'
import logo from '../../images/site_logo/site_logo_2.svg'
import logo2 from '../../images/site_logo/site_logo_3.svg'
import cases from '../../images/case/case_image_4.webp'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header2 = (props) => {

    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <header className="site_header site_header_2">
            <div className={`header_bottom stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* <div className="col-xl-3 col-lg-2 col-5">
                            <div className="site_logo">
                                <Link onClick={ClickHandler} className="site_link" to="/">
                                    <img src={logo} alt="Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template" />
                                    <img src={logo2} alt="Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template" />
                                </Link>
                            </div>
                        </div> */}
                       
                        <div className="col-xl-12 col-lg-12 col-12">
                            <ul className="header_btns_group unordered_list justify-content-end">
                                <li>
                                    <button className="mobile_menu_btn" onClick={() => setMobailState(!mobailActive)} type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="far fa-bars"></i>
                                    </button>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} className="btn btn-primary" to="/coins">
                                        <span className="btn_label" data-text="Get Started">Get Started</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobail-wrap">
                    <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
                        <div className="xb-header-menu-scroll">
                            <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                            <nav className="xb-header-nav">
                                {/* <MobileMenu /> */}
                                <Link onClick={ClickHandler} className="btn btn-primary" to="/coins">
                                        <span className="btn_label" data-text="Get Started">Get Started</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
                </div>
            </div>
        </header>

    )
}

export default Header2;