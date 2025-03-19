import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import HomePage2 from './main-component/HomePage2/HomePage2';
import Displaycoin from './component/Displaycoin';
import Moreinfo from './component/Moreinfo';

function App() {
  const queryclient = new QueryClient()
  return (
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
        
        </Routes>
      </BrowserRouter>

    </div>
    <ReactQueryDevtools />
    </QueryClientProvider>
  );
}


export default App;
