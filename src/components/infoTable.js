//require ( '!style!css!bootstrap/dist/css/bootstrap.css');

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/css/react-bootstrap-table.min.css';

import React, {Component} from 'react';
import ReactBsTable from 'react-bootstrap-table';
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;


var products = [
  {
      id: 1,
      name: 'Product1',
      price: 120
  },{
      id: 2,
      name: 'Product2',
      price: 80
  },{
      id: 3,
      name: 'Product3',
      price: 207
  },{
      id: 4,
      name: 'Product4',
      price: 100
  },{
      id: 5,
      name: 'Product5',
      price: 150
  },{
      id: 6,
      name: 'Product1',
      price: 160
  }
];

// function mySortFunc(a, b, order) {
//   return a.count - b.count;
// }

class InfoTable extends Component {

  render () {
    return (
      <BootstrapTable data={products} striped={true} hover={true} >
        <TableHeaderColumn isKey={true} dataField="id" dataSort={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name" dataSort={true} >Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price" dataSort={true}>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default InfoTable;