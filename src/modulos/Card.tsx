
import * as React from 'react';

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px'
}
class Card extends React.Component{
    public render() {
        
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default Card;