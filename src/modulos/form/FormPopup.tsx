

import * as React from 'react';


import Card from '../Card';

import Popup from '../popup/Popup';

interface IState {
	showPopup: any;
}
interface IProps {
    disable: any;
}

class FormPopup extends React.Component<IProps,IState>{
    public static defaultProps = {
        showPopup: false,
	};
	
	public constructor(props) {
		super(props);
		this.togglePopup = this.togglePopup.bind(this);
		// const showPopup = {};
		this.state = { 
			showPopup : false,
		};

	}
	public togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup
		});
    }
    
    public render() {
        
        return (
            <Card>
                <button onClick={this.togglePopup} disabled={!this.props.disable} >show popup</button>

                {this.state.showPopup ?
                    <Popup 
                        text='Close Me'
                        closePopup={this.togglePopup}
                    >
                    
                        <div>HOLAAAAAAAAAAAa</div>
                    </Popup>
                    : null
                }
            </Card>
        );
    }
}

export default FormPopup;