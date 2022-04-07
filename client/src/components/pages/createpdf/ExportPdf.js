import React from 'react';
import ReactToPrint from 'react-to-print';
import TableComponent from './CreatePdf';
import TableClass from './TableClass';

class ExportPdfComponent extends React.Component {
    render() {
        return (
            <div>
                
                <TableClass  data={this.props.data}   ref={(response) => (this.componentRef = response)} />
                <ReactToPrint
                    content={() => this.componentRef}
                    trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
                />
            </div>
        );
    }
}

export default ExportPdfComponent;