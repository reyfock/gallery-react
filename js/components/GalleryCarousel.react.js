var React = require('react');
var Carousel = require('react-responsive-carousel').Carousel;
var ImageGallery = require('react-responsive-carousel').ImageGallery;

var GalleryCarousel = React.createClass({
    render: function() {
        var path = this.props.path;
        var images = this.props.gallData.map(function(i) {
            var src = path + i.img;
            return (
                <img src={src} alt={i.name} />
            );
        });
        return (
            <div id="gallery_carousel_content">
                <div id="gallery_carousel_box">
                    <ImageGallery type="slider" showControls={true} showStatus={true}>
                        {images}
                    </ImageGallery>
                </div>
            </div>
        );
    }
});

module.exports = GalleryCarousel;