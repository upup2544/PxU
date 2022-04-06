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
import Work from './pages/Work'
import PdfPage from './pages/BasicDocument'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExportPdfComponent from "./pages/exportpdf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/works' element={<Work />} />
          <Route path='/quotation' element={<Com />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/receipts' element={<PdfPage/>} />
          <Route path='/pdf' element={<ExportPdfComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}
export default App;