
import React, { useState } from 'react';
import Bg from '../../../images/shapes/shape_title_under_line.svg'
import shape1 from '../../../images/shapes/shape_line_2.svg'
import shape2 from '../../../images/shapes/shape_line_3.svg'
import shape3 from '../../../images/shapes/shape_line_4.svg'
import shape4 from '../../../images/shapes/shape_space_3.svg'

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import TechnologySection from '../TechnologySection/TechnologySection';
import Testimonial from '../Testimonial/Testimonial';

const FaqSection = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="process_technology_review_section bg-light section_decoration">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="heading_block">
                            <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                            OUR AIRDROP PROCESS
                            </div>
                            <h2 className="heading_text mb-0">
                                Our <mark>Approach</mark>
                            </h2>
                        </div>
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="1">
                                    01. Wallet Assessment
                                </AccordionHeader>
                                <AccordionBody accordionId="1" className='acc_body'>
                                    <p className="m-0">
                                    Assess your wallet’s eligibility and security status to ensure a smooth airdrop claiming experience.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="2">
                                    02. Airdrop Discovery
                                </AccordionHeader>
                                <AccordionBody accordionId="2" className='acc_body'>
                                    <p className="m-0">
                                    Identify and verify available airdrops across multiple blockchains tailored to your wallet activity.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="3">
                                    03. Secure Claim Setup
                                </AccordionHeader>
                                <AccordionBody accordionId="3" className='acc_body'>
                                    <p className="m-0">
                                    Configure a secure claiming environment with advanced encryption to protect your rewards.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="4">
                                    04. Token Retrieval
                                </AccordionHeader>
                                <AccordionBody accordionId="4" className='acc_body'>
                                    <p className="m-0">
                                    Automate the retrieval process to safely transfer airdrop tokens to your wallet efficiently.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="5">
                                    05. Verification & Confirmation
                                </AccordionHeader>
                                <AccordionBody accordionId="5" className='acc_body'>
                                    <p className="m-0">
                                    Double-check and confirm the successful deposit of tokens with real-time updates.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="col-lg-5">
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <ul className="content_layer_group unordered_list_block text-center">
                                <li><AccordionHeader targetId="1"><span>Wallet Assessment</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="2"><span>Airdrop Discovery</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="3"><span>Secure Claim Setup</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="4"><span>Token Retrieval</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="5"><span>Verification & Confirmation</span></AccordionHeader></li>
                            </ul>
                        </Accordion>
                    </div>
                </div>
                {/* <TechnologySection/>
                <Testimonial/> */}
            </div>

            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_3">
                <img src={shape3} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_4">
                <img src={shape4} alt="Techco Shape" />
            </div>
        </section>
    )
};
export default FaqSection;
