'use strict';

import React, { Component } from 'react';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { localize } from '../../utils';

export default class MLModalEdit extends Component {

  patch() {
    return {};
  }

  render() {
    return(
      <form className="FE">
        <FormGroup>
          <ControlLabel>{localize('/modalEdit/form/url')}</ControlLabel>
          <FormControl
            onChange={this.patch.bind(this)}
            placeholder="Enter text"
            type="text"
            value={''}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>{localize('/modalEdit/form/title')}</ControlLabel>
          <FormControl
            onChange={this.patch.bind(this)}
            placeholder="Enter text"
            type="text"
            value={''}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>{localize('/modalEdit/form/caption')}</ControlLabel>
          <FormControl
            componentClass="textarea"
            onChange={this.patch.bind(this)}
            placeholder="Enter text"
            value={''}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>{localize('/modalEdit/form/altText')}</ControlLabel>
          <FormControl
            onChange={this.patch.bind(this)}
            placeholder="Enter text"
            type="text"
            value={''}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>{localize('/modalEdit/form/description')}</ControlLabel>
          <FormControl
            componentClass="textarea"
            onChange={this.patch.bind(this)}
            placeholder="Enter text"
            value={''}
          />
        </FormGroup>
      </form>
    );
  }
}
