import React, { Fragment, useEffect, useRef } from 'react';
import Header2 from '../../components/Header2/Header2';
import Hero2 from '../../components/hero2/hero2';
import FeaturePartners from '../../components/software-company-components/FeaturePartners';
import ServiceSection from '../../components/software-company-components/ServiceSection/ServiceSection';
import About from '../../components/software-company-components/about/about';
import ProcessTechnology from '../../components/software-company-components/ProcessTechnology/ProcessTechnology';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom styles for notifications to complement the website
const toastStyles = {
  background: 'rgba(26, 36, 62, 0.9)', // Semi-transparent dark blue to match the background
  color: '#ffffff', // White text for contrast
  border: '1px solid #00b7ff', // Subtle blue border to echo the circuit accents
  borderRadius: '10px',
  padding: '12px 20px',
  fontFamily: '"Roboto Mono", monospace', // Futuristic, techy font
  fontSize: '14px',
  boxShadow: '0 0 10px rgba(0, 183, 255, 0.3)', // Subtle blue glow
  backdropFilter: 'blur(5px)', // Frosted glass effect for depth
};

const HomePage2 = () => {
  const timeoutRef = useRef(null);

  // Expanded dataset for notifications
 // Expanded dataset for notifications
const actions = [
    // Claim Airdrop
    { text: "just claimed $50 USDT from an airdrop", service: "Claim Airdrop", location: true },
    { text: "claimed 300 UNI tokens from a governance airdrop", service: "Claim Airdrop", location: true },
    { text: "claimed 1000 XLM from the Stellar Lumens airdrop", service: "Claim Airdrop", location: true },
    { text: "successfully claimed 500 OP tokens from Optimism", service: "Claim Airdrop", location: true },
    { text: "claimed 2000 SHIB from a community airdrop", service: "Claim Airdrop", location: true },
    { text: "claimed 150 APT tokens from Aptos network", service: "Claim Airdrop", location: true },
    { text: "resolved an airdrop claim error for 1000 ADA", service: "Claim Airdrop", location: true },
  
    // Swap
    { text: "swapped 2 ETH for 5000 USDC", service: "Swap", location: false },
    { text: "swapped 500 BUSD for 0.2 BNB", service: "Swap", location: false },
    { text: "swapped 1000 USDT for 0.5 BTC on Binance Smart Chain", service: "Swap", location: false },
    { text: "swapped 50 SOL for 2000 ADA on Solana", service: "Swap", location: false },
    { text: "swapped 300 MATIC for 0.1 ETH on Polygon", service: "Swap", location: false },
    { text: "swapped 10 AVAX for 500 USDC on Avalanche", service: "Swap", location: false },
  
    // Staking
    { text: "staked 100 ARB tokens on Arbitrum", service: "Staking", location: false },
    { text: "unstaked 200 MATIC tokens", service: "Staking", location: false },
    { text: "staked 500 ATOM tokens on Cosmos", service: "Staking", location: false },
    { text: "unstaked 1000 DOT tokens from Polkadot", service: "Staking", location: false },
    { text: "staked 300 CAKE tokens on PancakeSwap", service: "Staking", location: false },
    { text: "resolved a staking error for 200 ETH", service: "Staking", location: true },
  
    // Slippage
    { text: "resolved a $30 slippage issue on a trade", service: "Slippage", location: true },
    { text: "resolved a high gas fee issue on Ethereum", service: "Slippage", location: true },
    { text: "fixed a $50 slippage error during a token swap", service: "Slippage", location: true },
    { text: "adjusted slippage for a $100 trade on Uniswap", service: "Slippage", location: true },
    { text: "resolved a transaction fee issue worth $25 on Polygon", service: "Slippage", location: true },
  
    // Connect to Dapps
    { text: "connected their wallet to PancakeSwap", service: "Connect to Dapps", location: false },
    { text: "fixed a Dapp connection issue with Aave", service: "Connect to Dapps", location: false },
    { text: "connected to Compound for lending", service: "Connect to Dapps", location: false },
    { text: "linked their wallet to SushiSwap", service: "Connect to Dapps", location: false },
    { text: "resolved a connection error with Curve Finance", service: "Connect to Dapps", location: false },
    { text: "connected to OpenSea for NFT trading", service: "Connect to Dapps", location: false },
  
    // Cross Transfer
    { text: "transferred 500 XLM to Stellar network", service: "Cross Transfer", location: true },
    { text: "bridged 1 BTC to Ethereum via a cross-chain transfer", service: "Cross Transfer", location: true },
    { text: "transferred 1000 USDC to Avalanche network", service: "Cross Transfer", location: true },
    { text: "bridged 5 ETH to Arbitrum", service: "Cross Transfer", location: true },
    { text: "moved 2000 BNB to Binance Smart Chain", service: "Cross Transfer", location: true },
    { text: "transferred 300 SOL to Solana network", service: "Cross Transfer", location: true },
  
    // Exchange
    { text: "exchanged 10 LTC for 0.5 ETH", service: "Exchange", location: false },
    { text: "exchanged 20 XRP for 0.1 BTC", service: "Exchange", location: false },
    { text: "exchanged 500 TRX for 0.2 BNB", service: "Exchange", location: false },
    { text: "exchanged 1000 DOGE for 50 USDT", service: "Exchange", location: false },
    { text: "resolved an exchange error for 5 ETH", service: "Exchange", location: true },
  
    // Whitelist
    { text: "whitelisted their address for an upcoming airdrop", service: "Whitelist", location: false },
    { text: "whitelisted for Arbitrum’s next airdrop phase", service: "Whitelist", location: false },
    { text: "whitelisted for a Polygon zkEVM airdrop", service: "Whitelist", location: false },
    { text: "fixed a whitelist error for an upcoming drop", service: "Whitelist", location: true },
  
    // Login
    { text: "fixed a login error with MetaMask", service: "Login", location: false },
    { text: "successfully logged into Trust Wallet", service: "Login", location: false },
    { text: "resolved a login issue with Coinbase Wallet", service: "Login", location: false },
    { text: "fixed a wallet login error on Phantom", service: "Login", location: false },
  
    // Migration
    { text: "migrated their wallet to a new protocol", service: "Migration", location: true },
    { text: "migrated 1000 tokens to a new wallet", service: "Migration", location: true },
    { text: "completed a wallet migration to Solana", service: "Migration", location: true },
    { text: "resolved a migration error for 500 USDT", service: "Migration", location: true },
  
    // Transaction
    { text: "resolved a transaction error worth $100", service: "Transaction", location: true },
    { text: "fixed a failed transaction of 2 ETH", service: "Transaction", location: true },
    { text: "resolved a stuck transaction on Binance Smart Chain", service: "Transaction", location: true },
    { text: "fixed a transaction delay for 1000 USDC", service: "Transaction", location: true },
  ];
  
  // Expanded list of locations
  const locations = [
    "Kansas", "Tokyo", "London", "Sydney", "New York", "Berlin", "Singapore",
    "Dubai", "Toronto", "Seoul", "Paris", "Miami", "Hong Kong", "Amsterdam",
    "San Francisco", "Los Angeles", "Chicago", "Vancouver", "Stockholm", "Zurich",
    "Cape Town", "Mumbai", "Bangkok", "Istanbul", "Moscow", "São Paulo", "Lagos",
    "Jakarta", "Kuala Lumpur", "Cairo", "Nairobi", "Buenos Aires", "Santiago",
  ];

  // Generate a simplified mock wallet address
  const generateWalletAddress = () => {
    const prefix = "0x";
    const chars = "0123456789abcdef";
    let address = prefix;
    for (let i = 0; i < 8; i++) address += chars[Math.floor(Math.random() * 16)];
    return address + "...";
  };

  // Play notification sound
  const playNotificationSound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.2);
  };

  // Show a random notification
  const showRandomNotification = () => {
    if (document.hidden) return;

    const action = actions[Math.floor(Math.random() * actions.length)];
    const wallet = generateWalletAddress();
    const location = action.location ? ` from ${locations[Math.floor(Math.random() * locations.length)]}` : "";
    const message = `[${wallet}] ${action.text}${location}`;

    toast.dismiss(); // Clear existing toasts
    toast.info(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      style: toastStyles,
      onOpen: () => playNotificationSound(),
    });

    const randomInterval = Math.floor(Math.random() * 7000) + 3000;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(showRandomNotification, randomInterval + 3000);
  };

  // Handle visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        showRandomNotification();
      } else if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    showRandomNotification();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Fragment>
      <div>
        <Header2 />
        <main className="page_content">
          <Hero2 />
          <FeaturePartners />
          <ServiceSection />
          <About />
          <ProcessTechnology />
        </main>
        <ToastContainer />
      </div>
    </Fragment>
  );
};

export default HomePage2;