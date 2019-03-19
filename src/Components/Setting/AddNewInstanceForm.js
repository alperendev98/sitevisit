/**
 * Add New User Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
// intl messages
import IntlMessages from 'Util/IntlMessages';

const AddNewInstanceForm = ({ addNewInstanceDetails, onChangeAddNewInstanceDetails }) => (
    <Form>
        <FormGroup>
            <Label for="userName"><IntlMessages id="common.name" /></Label>
            <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Name"
                value={addNewInstanceDetails.name}
                onChange={(e) => onChangeAddNewInstanceDetails('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="address">Email</Label>
            <Input
                type="email"
                name="address"
                id="address"
                placeholder="email"
                value={addNewInstanceDetails.email}
                onChange={(e) => onChangeAddNewInstanceDetails('email', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="username">Phone</Label>
            <Input
                type="phone"
                name="username"
                id="username"
                placeholder="Enter phone"
                value={addNewInstanceDetails.phone}
                onChange={(e) => onChangeAddNewInstanceDetails('phone', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="password">Start Address</Label>
            <Input
                type="text"
                name="password"
                id="password"
                placeholder="Enter Start Address"
                value={addNewInstanceDetails.s_address}
                onChange={(e) => onChangeAddNewInstanceDetails('s_address', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="password">Finish Address</Label>
            <Input
                type="text"
                name="password"
                id="password"
                placeholder="Enter Finish Address"
                value={addNewInstanceDetails.f_address}
                onChange={(e) => onChangeAddNewInstanceDetails('f_address', e.target.value)}
            />
        </FormGroup>
    </Form>
);

export default AddNewInstanceForm;
