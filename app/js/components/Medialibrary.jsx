'use strict';

import React, { Component } from 'react';
import { connect } from '../../utils/';

import { Button, Col, Row } from 'react-bootstrap';

import Modal from './modal';

@connect()
export default class Medialibrary extends Component {

  state = {
    showMediaModal: false,
    showFolderModal: false,
  }

  componentDidMount() {
    this.props.actions.medias.fetch();
  }

  handleClickMedia() {
    this.setState({ showMediaModal: !this.state.showMediaModal });
  }

  handleClickFolder() {
    this.setState({ showFolderModal: !this.state.showFolderModal });
  }

  renderMediaModal() {
    return(
      <Modal
        close={this.handleClickMedia.bind(this)}
        isOpen={this.state.showMediaModal}
      >
        <h3>Media</h3>
      </Modal>
    );
  }

  renderFolderModal() {
    return(
      <Modal
        close={this.handleClickFolder.bind(this)}
        isOpen={this.state.showFolderModal}
      >
        <h3>Folder</h3>
      </Modal>
    );
  }

  render() {
    return(
      <div
        className="layout"
      >
        <Row>
          <Col md={4} xs={6}>
            <div>
              <h3>Folders</h3>
              <Button
                bsStyle="primary"
                onClick={this.handleClickFolder.bind(this)}
              >
                Primary
              </Button>
            </div>
          </Col>
          <Col md={8} xs={12}>
            <div>
              <h3>Media Library</h3>
              <Button
                bsStyle="primary"
                onClick={this.handleClickMedia.bind(this)}
              >
                Primary
              </Button>
            </div>
          </Col>
        </Row>
        {this.renderFolderModal()}
        {this.renderMediaModal()}
      </div>
    );
  }
}
