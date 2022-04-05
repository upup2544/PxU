/* import BasicDocument from "./pages/BasicDocument";
import Company from './pages/Company';
import Createcompany from './pages/Createcompany'; */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './components/pages/dashboard/Dashboard'
import Works from './components/pages/works/Works'
import Quotation from './components/pages/quotation/quotation'
import Payment from './components/pages/payment/Payment'
import Receipts from './components/pages/receipts/Receipts'
import CreateCom from './pages/Createcompany'
import Com from './pages/Company'
import PdfPage from './pages/BasicDocument'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/works' element={<Works />} />
          <Route path='/quotation' element={<Quotation />} />
          <Route path='/payment' element={<CreateCom/>} />
          <Route path='/receipts' element={<PdfPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
/*   return (
    <div className="App">
      <h1>PxUProject</h1>
      <div>
      <Router>
        <div>
      <nav>
        <li><Link to="/company" >Company</Link></li>
        <li><Link to="/doc" >Doc</Link></li>
        </nav>
      </div> 
      <Switch>
        <Route path="/doc">
           <BasicDocument />
        </Route>
       <Route path="/company">
           <Company/>
        </Route>
        <Route path="/createcompany">
           <Createcompany />
        </Route>
      </Switch>
    </Router>
      </div>
      
    </div>
  ); */
}
export default App;