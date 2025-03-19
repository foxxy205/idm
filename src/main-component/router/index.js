import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import PricingPage from '../PricingPage/PricingPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import PortfolioSinglePage from '../PortfolioSinglePage/PortfolioSinglePage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import ServicePage from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import BlogPage from '../BlogPage/BlogPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import ContactPage from '../ContactPage/ContactPage';
import Displaycoin from '../../component/Displaycoin';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import Moreinfo from '../../component/Moreinfo';
import {HashRouter} from 'react-router-dom';

const AllRoute = () => {
  const queryclient = new QueryClient()
  return (
    <HashRouter>

    
    <QueryClientProvider client={queryclient}> 
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage2 />} />
          <Route path="home" element={<HomePage2 />} />
          <Route path="home_software_company" element={<HomePage2 />} />
          <Route path="home_business_consulting" element={<HomePage3 />} />
          <Route path="/coins" element={<Displaycoin />} />
           <Route path="/addyourkey/:id" element={<Moreinfo />} />
          {/*<Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio_details/:slug" element={<PortfolioSinglePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<ContactPage />} />   */}
        </Routes>
      </BrowserRouter>

    </div>
    <ReactQueryDevtools />
    </QueryClientProvider>
    </HashRouter>
  );
}

export default AllRoute;
