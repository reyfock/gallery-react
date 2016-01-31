var AppDispatcher = require('../dispatcher/AppDispatcher');
var KeyMirrorConstants = require('../constants/KeyMirrorConstants');

var GalleryAction = {
    // Receive inital product data
    receiveProduct: function(data) {
        AppDispatcher.handleAction({
            actionType: KeyMirrorConstants.RECEIVE_GALLERY_DATA,
            data: data
        })
    },
    // Set currently selected product variation
    selectProduct: function(index) {
        AppDispatcher.handleAction({
            actionType: KeyMirrorConstants.SELECT_GALLERY_CATEGORY,
            data: index
        })
    },
    // an: add, remove, removeAll
    addToSelectImageCart: function(an, update) {
        AppDispatcher.handleAction({
            actionType: KeyMirrorConstants.ADD_TO_SELECT_GALLERY_IMAGE,
            an: an,
            update: update
        })
    },
    refresh: function() { // akcja przeladowania komponentow
        AppDispatcher.handleAction({
            actionType: KeyMirrorConstants.REFRESH
        })
    },
};

module.exports = GalleryAction;