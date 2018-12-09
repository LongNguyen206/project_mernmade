import React, { Component } from "react";
import { Row, Input } from 'react-materialize';

class DropDownFilters extends Component {
  state = {
    accountName: '@chrishemsworth',
    name: 'Chris Hemsworth',
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVNXBVaIl8ne-AYJfYxls2Js2dcYJohl5e-d3ompbZxrjtzlk",
    platform: "Instagram",
    link: "https://www.instagram.com/chrishemsworth/?hl=en",
    accountType: "Influencer",
    followers: 22800000,
    engagement: 5000,
    industry: "Entertainment",
    location: "LA, USA",
    description: "Official Instagram of Chris Hemsworth.",
    saved: true
  }

  render () {
    return (
        <Row>
            <Input s={12} type='select' label="Materialize Select" defaultValue='2'>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
            </Input>
        </Row>
        <Row>
            <Input s={12} type='select' label="Materialize Select" defaultValue='2'>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
            </Input>
        </Row>
        <Row>
            <Input s={12} type='select' label="Materialize Select" defaultValue='2'>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
            </Input>
        </Row>
    )
  }
}

export default DropDownFilters;