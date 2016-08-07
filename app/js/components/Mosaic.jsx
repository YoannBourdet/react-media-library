'use strict';

import React, { Component, PropTypes } from 'react';

import { Col, Row } from 'react-bootstrap';
import ModalEdit from './ModalEdit';

import { partition } from '../../utils/array'

export default class MLMosaic extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  state = {
    showModalEdit: false,
    selectedItem: {}
  }

  handleClickItem(itemId) {
    console.log('showModalEdit', itemId);
    const { items } = this.props;
    const selectedItem = items.filter(({id}) => id === itemId).shift();

    this.setState({ selectedItem }, () => {
      this.showModalEdit();
    });
  }

  showModalEdit() {
    this.setState({ showModalEdit: !this.state.showModalEdit });
  }

  renderItemModal() {
    const { selectedItem } = this.state;

    return(
      <ModalEdit
        item={selectedItem}
        close={this.showModalEdit.bind(this)}
        isOpen={this.state.showModalEdit}
      />
    );
  }

  displayItems() {
    const { items } = this.props;
    return(
      partition(items).map((item, idx) => (
        <Row
          className="mosaic__row"
          key={idx}
        >
          {item.map(({ id, sizes: { thumbnail } }, jdx) =>(
            <Col
              className="mosaic__col"
              key={id}
              sm={3}
            >
              <a onClick={this.handleClickItem.bind(this, id)}>
                <img src={`${thumbnail}&text=col${idx + 1}img${jdx}`} />
              </a>
            </Col>
          ))}
        </Row>
      ))
    );
  }

  render() {
    return(
      <div className="mosaic">
        {this.displayItems()}
        {this.renderItemModal()}
      </div>
    );
  }
}
