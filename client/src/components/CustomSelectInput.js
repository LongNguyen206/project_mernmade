import React, { Component } from 'react';
import { Input, option } from 'react-materialize';

export default class CustomSelectInput extends Component {
    render() {
        const { input: { value, onChange } } = this.props;
        const selectOptions = this.props.options.map(option => (
            <option key={option.label} value={option.value}>
                {option.label}
            </option>
        ))
        return (
            <div className="form-group profile">
                <Input
                    label={this.props.label}
                    name={this.props.name}
                    id={this.props.id}
                    className="form-control"
                    type='select'
                    icon={this.props.icon}
                    defaultValue={this.props.defaultValue}
                    s={this.props.s}
                    value={value || this.props.defaultValue}
                    onChange={this.props.onChange}
                >
                {selectOptions}
                </Input>
            </div>
        )
    };
};

{/* <Field 
name="industry" 
id="profile_industry" 
label="Your industry" 
s={12} 
defaultValue={profile.industry} 
options={[
  {label: "Food", value: "Food"},
  {label: "Tech", value: "Tech"},
  {label: "Food", value: "Food"},
  {label: "Food", value: "Food"},
  {label: "Food", value: "Food"},
  {label: "Food", value: "Food"},
  {label: "Food", value: "Food"},
]} 
component={CustomSelectInput} 
/> */}