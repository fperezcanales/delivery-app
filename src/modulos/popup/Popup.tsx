
import * as React from 'react';
import './popup.css';

interface IProps {
	text: any;
	closePopup: any;
}

class Popup extends React.Component<IProps> {
    public render() {

        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <span className="close" onClick={this.props.closePopup} >&times;</span>
                    <h5>{this.props.text}</h5>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Popup;