var React = require('react');

var GalleryCart = React.createClass({
    selected2Array: function(map) {
        var arr = new Array();
        var i = 0;
        for (var key in this.props.imgsSelect) {
            arr[i] = this.props.imgsSelect[key];
            i++;
        }
        return arr;
    },
    getInitialState: function() {
        return {

        }
    },
    render: function() {
        var pres = "";
        var divStyle = {
            display:'none'
        }
        if (this.props.imgsSelect) {
            var path = this.props.path;
            var arr = this.selected2Array(this.props.imgsSelect);
            pres = arr.map(function(sel, i) {// dost. map is not def.
                var src = path + sel.img
                return (
                    <div className="cart_select_image">
                        <p>{sel.name}</p>
                        <img src={src} width="200" height="200" alt={sel.name} />
                    </div>
                );
            });
            if (arr.length > 0) {
                divStyle = {
                    display:'block'
                }
            }
        }
        return(
            <div id="gallery-cart-id" className="gallery-cart" style={divStyle}>
                <h3>Wybrane zdjecia</h3>
                    {pres}
            </div>
        );
    }
});

module.exports = GalleryCart;