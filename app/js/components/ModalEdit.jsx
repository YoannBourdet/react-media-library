'use strict';

import React, { Component, PropTypes } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import FormEdit from './FormEdit';

export default class MLModalEdit extends Component {

  static propTypes = {
    close: PropTypes.func,
    isOpen: PropTypes.bool,
    item: PropTypes.object.isRequired,
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
    const { isOpen, item, title } = this.props;
    const src = item && item.sizes ? item.sizes.medium : null;

    return(
      <Modal
        className="ME"
        onHide={this.close.bind(this)}
        show={isOpen}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
          <span className="ME__arrow ME__arrow--left"></span>
          <span className="ME__arrow ME__arrow--right"></span>
        </Modal.Header>
        <Row>
          <Col
            className="ME__left"
            sm={7}
          >
            <img src={src} />
          </Col>
          <Col
            className="ME__right"
            sm={5}
          >
            <aside>
              <FormEdit />
            </aside>
          </Col>
        </Row>
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
