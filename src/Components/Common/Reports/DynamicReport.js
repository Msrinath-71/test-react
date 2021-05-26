import React from 'react'
import CustomForm from './CustomForm'
import template from './DynamicReportTemplate'
import './report.css'

class DynamicReport extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className={this.props.className}>
<form className="dynamic-form">
<CustomForm  
       template={template} 
       />
    <div>
    <button type="submit">submit</button>
    </div>
    </form>
   </div>
   
    }

}

export default DynamicReport