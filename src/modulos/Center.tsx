
import * as React from 'react';

const style = {
    textAlign: 'center',
    width: '100%'
} as React.CSSProperties

class Center extends React.Component{
    public render() {
        
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default Center;