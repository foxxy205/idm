import React from 'react';
import { Link } from 'react-router-dom'
import Project from '../../../api/project'
import Bg from '../../../images/backgrounds/bg_image_2.webp'
import Bg2 from '../../../images/shapes/shape_bg_1.webp'
import Bg3 from '../../../images/shapes/shape_title_under_line.svg'
import about1 from '../../../images/case/claim.jpeg'
import aIcon1 from '../../../images/pimages/Aava.png'
// import aIcon1 from '../../../images/avatar/avatar_1.webp'
import aIcon2 from '../../../images/pimages/trust wallet.png'
import aIcon3 from '../../../images/pimages/Metamask.png'
import aIcon4 from '../../../images/icons/icon_global.svg'
import aIcon5 from '../../../images/shapes/shape_line.webp'
import shape1 from '../../../images/shapes/shape_space_2.svg'
import { useEffect, useRef } from 'react';
import Odometer from 'odometer'; 
import 'odometer/themes/odometer-theme-default.css';


const About = (props) => {

  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            const odometers = counterRef.current.querySelectorAll('.odometer');
            odometers.forEach((odometer) => {
              // Ensure the element is cleared before initializing
              odometer.innerHTML = '0';
              const targetValue = parseFloat(odometer.getAttribute('data-count'));
              const od = new Odometer({
                el: odometer,
                value: 0,
                format: targetValue % 1 === 0 ? '(,ddd)' : '(,ddd).d', // Adjust format based on value (integer vs decimal)
                duration: 2000,
                theme: 'default', // Explicitly set the theme
              });
              od.update(targetValue);
            });
            hasAnimated.current = true;
            observer.unobserve(counterRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
  
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <section className="about_and_case_section section_space section_decoration bg-dark" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-7 order-lg-last">
            <div className="about_image_2">
              <div className="image_wrap">
                <img src={about1} alt="Techco - About" />
              </div>
              <div className="about_funfact_info" style={{ backgroundImage: `url(${Bg2})` }}>
                <div className="customer_count">
                  <ul className="unordered_list">
                    <li>
                      <img src={aIcon1} alt="Customer Avatar" />
                    </li>
                    <li>
                      <img src={aIcon2} alt="Customer Avatar" />
                    </li>
                    <li>
                      <img src={aIcon3} alt="Customer Avatar" />
                    </li>
                    <li>
                      <span>90+</span>
                    </li>
                  </ul>
                  <p className="mb-0">
                  We Support All Wallet Activities
                  </p>
                </div>
                <div className="about_funfact_counter" ref={counterRef}>
                <div className="funfact_item">
                  <div className="counter_value">
                    <span className="odometer" data-count="10">0</span>
                    <span>K+</span>
                  </div>
                  <h3 className="funfact_title mb-0">Issues Resolved</h3>
                </div>
                <div className="funfact_item">
                  <div className="counter_value">
                    <span className="odometer" data-count="99.9">0</span>
                    <span>%</span>
                  </div>
                  <h3 className="funfact_title mb-0">Success Rate</h3>
                </div>
              </div>
                <a className="btn btn-primary" href="#/coins">
                  <span className="btn_label" data-text="Claim Now">Resolve Now!</span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
                <div className="icon_globe">
                  <img src={aIcon4} alt="Icon Globe" />
                </div>
              </div>
              <div className="space_line">
                <img src={aIcon5} alt="Shape Line" />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block mb-0 text-white">
                <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg3})` }}>
                  
                </div>
                <h2 className="heading_text">
                Our Mission &  <mark> Goal</mark>
                </h2>
                <p className="heading_description mb-0">
                At our core, we’re dedicated to empowering crypto users by resolving 
                wallet-related challenges through a decentralized protocol. We address issues 
                across all blockchain activities—whether it’s token swaps, staking, cross-chain transfers, 
                or claiming rewards—ensuring your assets are secure and accessible. 
                With a commitment to user trust and blockchain innovation, we make your crypto journey seamless and worry-free.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-170">
          <div className="heading_block text-center text-white">
            <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg3})` }}>
              Airdrops Success
            </div>
            <h2 className="heading_text mb-0">
              Our  <mark>Inspiration</mark> 
            </h2>
          </div>

          <div className="case_studies_wrapper">
            {Project.slice(6, 9).map((project, prj) => (
              <div className="case_study_block" key={prj}>
                <div className="case_study_image">
                  <img src={project.pImg} alt="Techco - Cases" />
                </div>
                <div className="case_study_content">
                  <ul className="category_list unordered_list text-uppercase">
                    <li><a href="portfolio.html">{project.sub}</a></li>
                  </ul>
                  <h3 className="case_title">
                    {/* <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>{project.title}</Link> */}
                  </h3>
                  <p>
                    {project.description}
                  </p>
                
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <img src={shape1} alt="Techco Shape" />
      </div>
    </section>
  )
}

export default About;