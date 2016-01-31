var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var KeyMirrorConstants = require('../constants/KeyMirrorConstants');
var GalleryActionConstants = require('../constants/GalleryActionConstants');
var _ = require('underscore');

//var _selectedImgsMap = new Object();
var _selectedImgsMap = {};

var GalleryCartStore = _.extend({}, EventEmitter.prototype, {
    // update - wrzucane obiekty z LoadData.varts
    // action - akcja jaka jest wykonywana (dodanie lub usuniecie)
    _addToSelect: function(action, update) {
        _selectedImgsMap[update.id] = update;
    },
    _removeFromSelect: function(action, update) {
        delete _selectedImgsMap[update.id];
    },
    _removeAllFromSelect: function() {
        _selectedImgsMap = {};
    },
    getSelected: function() {
        return _selectedImgsMap;
    },
    // Emit Change event
    emitChange: function() {
        console.log("GalleryCartStore","emitChange","");
        this.emit('change');
    },
    // Add change listener
    addChangeListener: function(callback) { // rejestruje klase nasluchujaca
        console.log("GalleryCartStore addChangeListener","","");
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        console.log("GalleryCartStore removeChangeListener","","");
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to CART_ADD action
    case KeyMirrorConstants.ADD_TO_SELECT_GALLERY_IMAGE:
        switch(action.an) {
            case GalleryActionConstants.ADD_IMG_TO_SELECTED:
                GalleryCartStore._addToSelect(action.an, action.update);
                break;
            case GalleryActionConstants.REMOVE_IMG_FROM_SELECTED:
                GalleryCartStore._removeFromSelect(action.an, action.update);
                break;
            case GalleryActionConstants.REMOVE_ALL_IMG_FROM_SELECTED:
                GalleryCartStore._removeAllFromSelect();
                break;
            default:
                console.log("[ERROR] GalleryCartStore", action.an, "action type GalleryActionConstants not found");
                return true;
        }
        console.log("GalleryCartStore", "add", action.an + " " + action.update);
        break;
    default:
        console.log("ERROR", action.actionType, "action type KeyMirrorConstants not found")
        return true;
  }

  // If action was responded to, emit change event
  GalleryCartStore.emitChange();

  return true;

});

module.exports = GalleryCartStore;