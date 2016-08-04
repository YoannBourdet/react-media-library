'use strict';

import React, { Component } from 'react';
import { connect } from '../../utils/';

import { Button, Col, Row } from 'react-bootstrap';

import Modal from './Modal';
import Toolsbar from './Toolsbar';
import Mosaic from './Mosaic';

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
      <div className="layout">
        <Row>
          <Col sm={3}>
            <div className="layout__left">
              <h1>Folders</h1>
              <Button
                bsSize="small"
                bsStyle="default"
                onClick={this.handleClickFolder.bind(this)}
              >
                Add New
              </Button>
            </div>
          </Col>
          <Col sm={9}>
            <div className="layout__right" >
              <h1>Media Library</h1>
              <Button
                bsSize="small"
                bsStyle="default"
                onClick={this.handleClickMedia.bind(this)}
              >
                Add New
              </Button>
              <Toolsbar />
              <Mosaic />
            </div>
          </Col>
        </Row>
        {this.renderFolderModal()}
        {this.renderMediaModal()}
      </div>
    );
  }
}
