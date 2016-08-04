'use strict';

import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class MLToolsBar extends Component {

  static propTypes = {}

  static defaultProps = {}

  render() {

    return(
      <div className="toolsbar">
        <DropdownButton
          bsSize="small"
          id="bg-nested-dropdown"
          title="Dropdown"
        >
          <MenuItem eventKey="1">Dropdown link</MenuItem>
          <MenuItem eventKey="2">Dropdown link</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}
