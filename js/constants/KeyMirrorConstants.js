var keyMirror = require('fbjs/lib/keyMirror');
//var keyMirror = require('./node_modules/fbjs/lib/keyMirror');

// action constants
module.exports = keyMirror({
  SELECT_GALLERY_CATEGORY: null, // wybranie typu galerii (pole select)
  RECEIVE_GALLERY_DATA: null,
  ADD_TO_SELECT_GALLERY_IMAGE: null, // wybranie zdjecia z tabeli zdjec
  REFRESH: null,
});