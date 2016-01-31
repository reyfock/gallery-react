var React = require('react');
//var ReactDOM = require('react-dom');
var GalleryAction = require('../actions/GalleryAction');

var GalleryStore = require('../stores/GalleryStore');
var GalleryCartStore = require('../stores/GalleryCartStore');

var GalleryCategorySelect = require('./GalleryCategorySelect.react');
var GalleryTable = require('./GalleryTable.react');
var GalleryModal = require('./GalleryModal.react');
var GalleryCarousel = require('./GalleryCarousel.react');
var GalleryCart = require('./GalleryCart.react');

var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

// http://leandrowd.github.io/react-responsive-carousel/

function getSelectState() {
    return {
        selectedProduct: GalleryStore.getSelected(),
        cartSelectImages: GalleryCartStore.getSelected(),
    };
}

function getLoadProductData() {
    return GalleryStore.getProduct();
}


var GalleryComp = React.createClass({
    getInitialState: function() {
        return {
            select: getSelectState(),
            loadData: getLoadProductData(),
            component: "0.0"
        }
    },
    // Add change listeners to stores
    componentDidMount: function() {
        GalleryStore.addChangeListener(this._onChange);
        GalleryStore.addChangeListener(this._onChangeNext);

        GalleryCartStore.addChangeListener(this._onChange);
    },
    // Remove change listeners from stores
    componentWillUnmount: function() {
        GalleryStore.removeChangeListener(this._onChange);
        GalleryStore.removeChangeListener(this._onChangeNext);

        GalleryCartStore.removeChangeListener(this._onChange);
    },
    handleSelect: function(event, selectedKey) {
        //event.preventDefault();
        this.state.component = selectedKey;
        console.log('selected ', selectedKey, "event ", event)
        GalleryAction.refresh();
    },
    render: function() {
        var idx = this.state.select.selectedProduct.index;
        var rShowComp;
        switch(this.state.component) {
            case "0.0":
            case "1.1":
                rShowComp = <GalleryCategorySelect index={idx} loadData={this.state.loadData} />;
                break;
            case "1.2":
                rShowComp = <GalleryTable gallData={this.state.loadData[idx].varts} path={this.state.loadData[idx].path}/>;
                break;
            case "1.3":
                rShowComp = <GalleryModal gallData={this.state.loadData[idx].varts} path={this.state.loadData[idx].path} />;
                break;
            case "1.4":
                rShowComp = <GalleryCarousel gallData={this.state.loadData[idx].varts} path={this.state.loadData[idx].path} />;
                break;
        }

        return (
            <div className="cart_box">
                <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
                    <NavItem eventKey={1} href="1.1">Galeria - kategorie</NavItem>
                    <NavItem eventKey={2} href="1.2" title="Item">Galeria - tabela</NavItem>
                    <NavItem eventKey={3} href="1.3">Galeria - modal</NavItem>
                    <NavItem eventKey={3} href="1.4">Galeria - karuzela</NavItem>
                    <NavDropdown eventKey={4} title="Dropdown" id="nav-dropdown">
                        <MenuItem eventKey={4.1}>Action</MenuItem>
                        <MenuItem eventKey={4.2}>Another action</MenuItem>
                        <MenuItem eventKey={4.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={4.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>

                {rShowComp}
                <GalleryCart imgsSelect={this.state.cartSelectImages} path={this.state.loadData[idx].path} />
            </div>
        );
    },
    // Method to setState based upon Store changes
    _onChange: function() { // zarejestrowana metoda (listener)
        console.log("TypeSelectReact _onChange", "", "");
        this.setState(getSelectState());
    },
    // Method to setState based upon Store changes
    _onChangeNext: function() { // zarejestrowana metoda (listener)
        console.log("TypeSelectReact _onChangeNext", "", "");
    }
});

module.exports = GalleryComp;