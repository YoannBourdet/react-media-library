'use strict';

import React, { Component, PropTypes } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class MLModal extends Component {

  static propTypes = {
    close: PropTypes.func,
    isOpen: PropTypes.bool,
    submit: PropTypes.func,
    title: PropTypes.string,
  }

  static defaultProps = {
    isOpen: false,
  }

  close() {
    const { close } = this.props;
    if (close) {
      close();
    }
  }

  render() {
    const { title, isOpen } = this.props;

    return(
      <Modal
        onHide={this.close.bind(this)}
        show={isOpen}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={this.close.bind(this)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
