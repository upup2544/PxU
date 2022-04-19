import React from 'react';
import QuoSection from './QuoSection';

class CreateQuotation extends React.Component {
    render(){
        console.log(this.props.data)
        return (
            <div className='CreateQuotation'>
                <div className='create-quotaion-layout'>
                    <QuoSection data={this.props.data} ref={(response) => (this.componentRef = response)} />
                </div>
            </div>
        );
    }
}

export default CreateQuotation;