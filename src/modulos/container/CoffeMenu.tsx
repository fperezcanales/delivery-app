
import * as React from 'react';
import './CoffeMenu.css';

class CoffeMenu extends React.Component{
    public render() {
        return (
            <div className='coffe-menu'>
                { this.props.children }      
            </div>
        );
    }
}

export default CoffeMenu;