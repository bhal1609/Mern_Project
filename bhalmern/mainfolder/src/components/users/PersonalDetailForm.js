import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../../validation/validation';
import FormInput from '../../components/FormInput/FormInput';
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import {
  mobile,
  captialize,
  email
} from '../../validation/normalize';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup
} from 'reactstrap';

import Form from '../users/Form';





const GeneralForm = (props) => {
  const { id } = useParams();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "", 
    phone:"", 
    address: ""
    // website: ""
  });
  const { firstname, lastname, email,phone, address } = user;
  
  const { handleSubmit } = props;

  const onInputChange = e =>{
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>

          <FormGroup row>
            <Col xs="12" lg="6">
              <Field
                name="firstname"
                type="text"
                component={FormInput}
                label="First Your Name"
                inputPlaceHolder="Enter Name"
                normalize={captialize}
                 value={firstname}
                 onChange={e => onInputChange(e)}
              />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="lastname"
                  type="text"
                  component={FormInput}
                  label="Last Name "
                  inputPlaceHolder="Enter Last name"
                  normalize={captialize}
                   value={lastname}
                   onChange={e => onInputChange(e)}
                />
              </Col>
            </FormGroup>
            
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="email"
                  type="email"
                  component={FormInput}
                  label="Email"
                  inputPlaceHolder="Enter your Email Address"
                  //normalize={email}
                   value={email}
                   onChange={e => onInputChange(e)}
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="phone"
                  type="text"
                  component={FormInput}
                  label="Phone Number"
                  inputPlaceHolder="+91"
                  normalize={mobile}
                   value={phone}
                   onChange={e => onInputChange(e)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="address"
                  type="textarea"
                  component={FormInput}
                  label="Current  Address "
                  inputPlaceHolder="Enter your Current Address"
                />
              </Col>

              <Col xs="12" lg="6">
                <Field
                  name="address"
                  type="textarea"
                  component={FormInput}
                  label="Permanent Address "
                  inputPlaceHolder="Enter your Permanent Address"
                   value={address}
                   onChange={e => onInputChange(e)}
                  
                />
              </Col>
            </FormGroup>

            
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="primary" className="btn-pill pull-right" type="submit" style={{marginLeft: '20px'}}>
               Next &nbsp;
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

GeneralForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(GeneralForm);