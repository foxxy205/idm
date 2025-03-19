import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Popcoin from '../../../component/Popularcoin';
import Bg from '../../../images/shapes/shape_title_under_line.svg';
import './styles.css';

// Modal component that shows Popcoin component for all services
const ServiceModal = ({ show, onHide, title }) => {

    
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Popcoin />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} style={{ background: '#0073ff', borderColor: '#0073ff' }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

// Base ServiceBox component with the entire box clickable
const ServiceBox = ({ title, description, slug, index, openModal }) => {
  // Calculate delay based on index for staggered animation
  const animationDelay = 100 + (index * 50);

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <Fade 
        direction="up" 
        triggerOnce 
        delay={animationDelay} 
        duration={800}
        cascade={false} 
        damping={0.3} 
        className="fade-up-animation"
      >
        <div 
          className="service-box"
          onClick={openModal}
          style={{ cursor: 'pointer' }}
        >
          <h3 className="service-title">{title}</h3>
          <p className="service-description">{description}</p>
          <div 
            className="service-link"
            onClick={openModal}
          >
            Learn More
          </div>
        </div>
      </Fade>
    </div>
  );
};

// Individual service components with modal functionality
const MigrationBox = ({ index }) => {
  const [showModal, setShowModal] = useState(false);
  const title = "Migration";
  const description = "Click here for migration or anything related to migration";
  const slug = "migration";
  
  return (
    <>
      <ServiceBox 
        title={title} 
        description={description}
        slug={slug}
        index={index}
        openModal={() => setShowModal(true)}
      />
      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={title}
      />
    </>
  );
};

const ClaimBox = ({ index }) => {
  const [showModal, setShowModal] = useState(false);
  const title = "Claim";
  const description = "Click here to claim tokens or have issues claiming tokens";
  const slug = "claim";
  
  return (
    <>
      <ServiceBox 
        title={title} 
        description={description}
        slug={slug}
        index={index}
        openModal={() => setShowModal(true)}
      />
      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={title}
      />
    </>
  );
};

const SwapBox = ({ index }) => {
  const [showModal, setShowModal] = useState(false);
  const title = "Swap";
  const description = "Click here for token swap or any issues while trying doing token swap";
  const slug = "swap";
  
  return (
    <>
      <ServiceBox 
        title={title} 
        description={description}
        slug={slug}
        index={index}
        openModal={() => setShowModal(true)}
      />
      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={title}
      />
    </>
  );
};

const SlippageBox = ({ index }) => {
  const [showModal, setShowModal] = useState(false);
  const title = "Slippage";
  const description = "Click here for slippage related or transaction fee related";
  const slug = "slippage";
  
  return (
    <>
      <ServiceBox 
        title={title} 
        description={description}
        slug={slug}
        index={index}
        openModal={() => setShowModal(true)}
      />
      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={title}
      />
    </>
  );
};

const ConnectDappsBox = ({ index }) => {
  const [showModal, setShowModal] = useState(false);
  const title = "Connect to Dapps";
  const description = "Click here to solve any dapp connection issue";
  const slug = "connect-dapps";
  
  return (
    <>
      <ServiceBox 
        title={title} 
        description={description}
        slug={slug}
        index={index}
        openModal={() => setShowModal(true)}
      />
      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={title}
      />
    </>
  );
};

const TransactionBox = ({ index }) => {
  const [showModal, setShowModal] = useState(false);
  const title = "Transaction";
  const description = "Click here for all transaction related error";
  const slug = "transaction";
  
  return (
    <>
      <ServiceBox 
        title={title} 
        description={description}
        slug={slug}
        index={index}
        openModal={() => setShowModal(true)}
      />
      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={title}
      />
    </>
  );
};

const ClaimAirdropBox = ({ index }) => {
  const [showModal, setShowModal] = useState(false);
  const title = "Claim Airdrop";
  const description = "Click here for any error during airdrop claim";
  const slug = "claim-airdrop";
  
  return (
    <>
      <ServiceBox 
        title={title} 
        description={description}
        slug={slug}
        index={index}
        openModal={() => setShowModal(true)}
      />
      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={title}
      />
    </>
  );
};

const ExchangeBox = ({ index }) => {
  const [showModal, setShowModal] = useState(false);
  const title = "Exchange";
  const description = "Click here for token exchange or error while exchanging tokens";
  const slug = "exchange";
  
  return (
    <>
      <ServiceBox 
        title={title} 
        description={description}
        slug={slug}
        index={index}
        openModal={() => setShowModal(true)}
      />
      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={title}
      />
    </>
  );
};

const CrossTransferBox = ({ index }) => {
  const [showModal, setShowModal] = useState(false);
  const title = "Cross Transfer";
  const description = "Click here for cross bridge issues while doing cross transfer";
  const slug = "cross-transfer";
  
  return (
    <>
      <ServiceBox 
        title={title} 
        description={description}
        slug={slug}
        index={index}
        openModal={() => setShowModal(true)}
      />
      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={title}
      />
    </>
  );
};

const StakingBox = ({ index }) => {
  const [showModal, setShowModal] = useState(false);
  const title = "Staking";
  const description = "Click here for token staking/unstake related issues";
  const slug = "staking";
  
  return (
    <>
      <ServiceBox 
        title={title} 
        description={description}
        slug={slug}
        index={index}
        openModal={() => setShowModal(true)}
      />
      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={title}
      />
    </>
  );
};

const LoginBox = ({ index }) => {
  const [showModal, setShowModal] = useState(false);
  const title = "Login";
  const description = "Click here for any error encounter while logining in to your wallet";
  const slug = "login";
  
  return (
    <>
      <ServiceBox 
        title={title} 
        description={description}
        slug={slug}
        index={index}
        openModal={() => setShowModal(true)}
      />
      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={title}
      />
    </>
  );
};

const WhitelistBox = ({ index }) => {
  const [showModal, setShowModal] = useState(false);
  const title = "Whitelist";
  const description = "Click here to whitelist your address or whitelist related error";
  const slug = "whitelist";
  
  return (
    <>
      <ServiceBox 
        title={title} 
        description={description}
        slug={slug}
        index={index}
        openModal={() => setShowModal(true)}
      />
      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={title}
      />
    </>
  );
};

const ServiceSection = () => {
  return (
    <section className="service-section pt-5 pb-5">
      <div className="container">
        <Fade direction="down" triggerOnce duration={800}>
          <div className="heading_block text-center mb-5">
            <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
              Our Services
            </div>
            <h2 className="heading_text mb-0">
              How We Can <mark>Help</mark> You
            </h2>
          </div>
        </Fade>

        <div className="row">
          <MigrationBox index={0} />
          <ClaimBox index={1} />
          <SwapBox index={2} />
          <SlippageBox index={3} />
          <ConnectDappsBox index={4} />
          <TransactionBox index={5} />
          <ClaimAirdropBox index={6} />
          <ExchangeBox index={7} />
          <CrossTransferBox index={8} />
          <StakingBox index={9} />
          <LoginBox index={10} />
          <WhitelistBox index={11} />
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;