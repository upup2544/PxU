import React from 'react';
import ReactToPrint from 'react-to-print';
import TableComponent from './CreatePdf';
import TableClass from './TableClass';
import './createpdf.css'

class ExportPdfComponent extends React.Component {
    render() {
        return (
            <div className='exportToPDF'>
                <div className='PDF-layout'>
                    <TableClass data={this.props.data} ref={(response) => (this.componentRef = response)} />
                </div>
                <div className='Exbutton'>
                    <ReactToPrint
                        content={() => this.componentRef}
                        trigger={() => <button className="btn btn-primary">Print to PDF <i class="bi bi-printer"></i> </button>}
                    />
                </div>
            </div>
        );
    }
}
export default ExportPdfComponent;