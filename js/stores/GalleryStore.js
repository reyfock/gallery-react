var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var KeyMirrorConstants = require('../constants/KeyMirrorConstants');
var _ = require('underscore');

// Define initial data points
var _selected = {
    index: 0,
};
var _product = null;
function setSelected(index) {
    _selected.index = index;
}
function loadProductData(data) {
    _product = data;
}

var GalleryStore = _.extend({}, EventEmitter.prototype, {
    getSelected: function() {
        return _selected;
    },
    getProduct: function() {
        return _product;
    },
    // Emit Change event
    emitChange: function() {
        console.log("ProductStore emitchange","","");
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback) { // rejestruje klase nasluchujaca
        console.log("ProductStore addChangeListener","","");
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        console.log("ProductStore removeChangeListener","","");
        this.removeListener('change', callback);
    }
});

// Register callback with AppDispatcher
AppDispatcher.register(function(choose) {
  var action = choose.action;
  var text;

  switch(action.actionType) {
    // Respond to SELECT_PRODUCT action
    case KeyMirrorConstants.SELECT_GALLERY_CATEGORY:
        console.log("ProductStore SELECT_PRODUCT", action.data, _selected.index);
        setSelected(action.data);
        break;

    case KeyMirrorConstants.RECEIVE_GALLERY_DATA:
        loadProductData(action.data);
        console.log("ProductStore RECEIVE_DATA", action.data, _selected.index);
        break;

    case KeyMirrorConstants.REFRESH: // akcja przeladowania komponentow
        break;

    default:
        console.log("[ERROR] GalleryStore", action.an, "action type GalleryActionConstants not found");
      return true;
  }

  // If action was responded to, emit change event
  GalleryStore.emitChange();

  return true;

});

module.exports = GalleryStore;