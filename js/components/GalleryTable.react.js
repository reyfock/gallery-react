var React = require('react');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var GalleryAction = require('../actions/GalleryAction');
var GalleryActionConstants = require('../constants/GalleryActionConstants');

var GalleryTable = React.createClass({
    onRowSelect: function(row, isSelected){
        if (isSelected) {
            GalleryAction.addToSelectImageCart(GalleryActionConstants.ADD_IMG_TO_SELECTED, row);
        } else {
            GalleryAction.addToSelectImageCart(GalleryActionConstants.REMOVE_IMG_FROM_SELECTED, row);
        }
    },
    createImage: function(cell, row) {
        var src = this.props.path + cell;
        return (
            <img src={src} width="20" height="20" alt="" />
        );
    },
    onSelectAllHandler: function(isSelected, rows) {
        if (isSelected) {
            for (i = 0; i < rows.length; i++) {
                GalleryAction.addToSelectImageCart(GalleryActionConstants.ADD_IMG_TO_SELECTED, rows[i]);
            }
        } else {
            GalleryAction.addToSelectImageCart(GalleryActionConstants.REMOVE_ALL_IMG_FROM_SELECTED, null);
        }
    },
    render: function() {
        var selectRowProp = {
            mode: "checkbox",
            clickToSelect: true,
            bgColor: "rgb(238, 193, 213)",
            onSelect: this.onRowSelect,
            onSelectAll: this.onSelectAllHandler
        };
        console.log(this.props.gallData,"","");
        return (
            <div id="gallery-table-id" className="gallery-table">
            <BootstrapTable data={this.props.gallData} selectRow={selectRowProp} striped={true} hover={true} condensed={true} search={true}>
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="img" dataFormat={this.createImage}>Img</TableHeaderColumn>
            </BootstrapTable>
            </div>
        );
    }
})

module.exports = GalleryTable;
