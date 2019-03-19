/**
 * Update User Details Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const UpdateInstanceForm = ({ instance, onUpdateInstanceDetail }) => (
    <Form>
        <FormGroup>
            <Label for="instanceName">Name</Label>
            <Input
                type="text"
                name="instanceName"
                id="instanceName"
                placeholder="Enter Name"
                value={instance.name}
                onChange={(e) => onUpdateInstanceDetail('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="address">Email</Label>
            <Input
                type="text"
                name="address"
                id="address"
                placeholder="email"
                value={instance.email}
                onChange={(e) => onUpdateInstanceDetail('email', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="username">Phone</Label>
            <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Phone"
                value={instance.phone}
                onChange={(e) => onUpdateInstanceDetail('phone', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="password">Start Address</Label>
            <Input
                type="text"
                name="password"
                id="password"
                placeholder="Enter Start Address"
                value={instance.s_address}
                onChange={(e) => onUpdateInstanceDetail('s_address', e.target.value)}
            />
        </FormGroup>

        <FormGroup>
            <Label for="password">Finish Address</Label>
            <Input
                type="text"
                name="password"
                id="password"
                placeholder="Enter Finish Address"
                value={instance.f_address}
                onChange={(e) => onUpdateInstanceDetail('f_address', e.target.value)}
            />
        </FormGroup>
    </Form>
);

export default UpdateInstanceForm;
