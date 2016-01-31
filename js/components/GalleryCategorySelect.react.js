var React = require('react');
var GalleryAction = require("../actions/GalleryAction");

var GalleryCategorySelect = React.createClass({
    selectVariant: function(event) {
        GalleryAction.selectProduct(event.target.value);
    },
    render: function() {
        var tdata = this.props.loadData[this.props.index];

        return (
            <div className="top_box">
                Wybrano pozycja o indeksie: {this.props.index}
                <div>
                Wybierz interesujący typ:
                <select onChange={this.selectVariant}>
                    {this.props.loadData.map(function(d, i) {
                        return (
                            <option key={i} value={i}>{d.name}</option>
                        )
                    })}
                </select>
                </div>
                <div className="cart">
                    <h3>{tdata.name}</h3>
                    <img src={tdata.img} width="300" height="200" alt={tdata.name} />
                    <p>{tdata.desc}</p>
                </div>
            </div>
        );
    },
});

module.exports = GalleryCategorySelect;