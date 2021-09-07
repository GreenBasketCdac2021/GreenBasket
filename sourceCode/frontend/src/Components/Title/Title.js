import { Component } from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
    constructor(props) {
        super(props);
        this.titleEl = document.getElementsByTagName("title")[0];
    }

    render() {
        let fullTitle;
            fullTitle = this.props.pageTitle ;
        return ReactDOM.createPortal(
            fullTitle || "",
            this.titleEl
        );
    }
}


export default Title;