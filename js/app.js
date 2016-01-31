var React = require('react');
var GalleryComp = require("./components/GalleryComp.react");
var LocalData = require("./LocalData")

LocalData.init();
LocalData.getGalleryData();

React.render(
    <GalleryComp />,
    document.getElementById("box-gallery")
);