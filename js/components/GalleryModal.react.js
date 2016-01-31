var React = require('react');
var Modal = require('react-modal');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const elementsIds = {
    buttonPrevImg: "button_prev",
    buttonNextImg: "button_next",
    image: "top_image",
    title: "top_title",
    description: "top_description",
    buttonCloseModal: "close_modal_button"
}

var GalleryModal = React.createClass({
    getInitialState: function() {
        return {
            modalIsOpen: false ,
            imgSrc: this.props.gallData, imgIndex: 0
        };
    },
    handleContent: function(idx) {
        document.getElementById(elementsIds.image).src = this.props.path + this.state.imgSrc[idx].img;
        document.getElementById(elementsIds.title).innerHTML = this.state.imgSrc[idx].name;
        document.getElementById(elementsIds.description).innerHTML = this.state.imgSrc[idx].desc;
    },
    handleNextPic: function() {
        this.state.imgIndex = this.state.imgIndex + 1
        this.handleContent(this.state.imgIndex);
        if (this.state.imgIndex >= this.state.imgSrc.length - 1) {
            document.getElementById(elementsIds.buttonNextImg).style.display = 'none';
        } else {
            document.getElementById(elementsIds.buttonPrevImg).style.display = 'inline';
        }
    },
    handlePrevPic: function() {
        this.state.imgIndex = this.state.imgIndex - 1
        this.handleContent(this.state.imgIndex);
        if (this.state.imgIndex <= 0) {
            document.getElementById(elementsIds.buttonPrevImg).style.display = 'none';
        } else {
            document.getElementById(elementsIds.buttonNextImg).style.display = 'inline';
        }
    },
    openModal: function() {
        this.setState({modalIsOpen: true});
    },
    closeModal: function() {
        this.setState({modalIsOpen: false, imgIndex: 0});
    },
    render: function() {
        var gallery = this.props.gallData[0];
        var src = this.props.path + gallery.img;
        return (
            <div className="">
                <button className="modal_button_cls" onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    style={customStyles}>
                    <button id={elementsIds.buttonCloseModal} onClick={this.closeModal}>&times;</button>
                    <div>
                        <h3 id={elementsIds.title}>{gallery.name}</h3>
                        <div className="center_flow">
                            <button id={elementsIds.buttonPrevImg} type="button" className="modal_button_cls" onClick={this.handlePrevPic}>Prev</button>
                            <button id={elementsIds.buttonNextImg} type="button" className="modal_button_cls" onClick={this.handleNextPic}>Next</button>
                        </div>
                        <img id={elementsIds.image} width="570" height="400" src={src} />
                    </div>
                    <div id={elementsIds.description}>
                        {gallery.desc}
                    </div>
                </Modal>
            </div>
        )
    }
});

module.exports = GalleryModal;