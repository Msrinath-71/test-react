import { KeyboardReturn } from '@material-ui/icons';
import React from 'react'
import {
    Button,
    Modal,
    Form,
    Row,
    Col,
    Container,
    InputGroup,
    FormControl,
    ListGroup,
    ButtonGroup,
    ToggleButton,
    FormGroup,
  } from 'react-bootstrap';



import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

  const CustomForm=({ template})=>{
    let { title, Fields } = template
        return (
            <>
                <h5>{title}</h5>
                <Row>
                    <Col>
                        {renderFields(Fields)}
                    </Col>
                </Row>
            </>
    
        );


    
    }
 

const renderOptions=(options)=>{
    var arr =Object.values(options);
console.log(arr[0].length);
var data=arr[0],i=0;

let dataList = data.length > 0
		&& data.map((item, i) => {
		return (
			<option key={i} value={item.id}>{item.name}</option>
		)
	}, this);
return dataList;
}


const renderFields = (fields) => {
    
    return fields.map(field => {
        let { type, title, name, required,validation,dafaultDate,options} = field;
       
switch(type){
  case 'text':
return (
    
    <FormGroup key={name}>
     <label htmlFor={name}>
              {title}
              <span style={required?{color:'red'}:{}}>*</span> 
             </label>
             <input             
              type='text'
              name={name}                        
              className="dynamictext"
              />                             
                                
          </FormGroup>
);
case 'select':
console.log(options);
console.log(field);
return (
  <FormGroup key={name}>
    <label htmlFor={name}>{title}<span style={required?{color:'red'}:{}}>*</span></label>
    <select className="dynamictext" >
        {renderOptions({options})}
    </select>
      </FormGroup>
);
case "datepicker":
    return(<FormGroup key={name}>
<label htmlFor={name}>{title}<span style={required?{color:'red'}:{}}>*</span></label>
<DatePicker
          selected={dafaultDate}
        />
</FormGroup>);
case "lookup":
    return(<FormGroup as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={1}>
    <label htmlFor={name}>{title}<span style={required?{color:'red'}:{}}>*</span></label>
    </Form.Label>
    <Row>
    <Col sm={3}>
      <Form.Control
        type="text"
        placeholder="all items by default"
        disabled
      />
    </Col>
    <Col sm={1}>
      <Button
        size=""
              >
        ...
      </Button>
    </Col>
    </Row>
  </FormGroup>);

  default:
   return (
    <div>
      <span>Invalid Field</span>
           </div>
);
   }});



}


export default CustomForm