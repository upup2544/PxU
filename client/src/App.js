import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './components/pages/dashboard/Dashboard';
import Works from './components/pages/works/Works';
import Work from './components/pages/works/Work';
import Quotation from './components/pages/quotation/Quotation';
import Payment from './components/pages/payment/Payment';
import Receipts from './components/pages/receipts/Receipts';
import Com from './components/pages/company/Company';
import ExportPdfComponent from "./components/pages/createpdf/ExportPdf";
import PdfLayout from './components/pdfLayout';


import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/works' element={<Work />} />
          <Route path='/quotation' element={<Quotation />} />
          <Route path='/payment' element={<Com/>} />
          <Route path='/receipts' element={<ExportPdfComponent/>} />
          <Route path='/pdf' element={<ExportPdfComponent />} />
          <Route path='/pdfLayout' element={<PdfLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}
export default App;