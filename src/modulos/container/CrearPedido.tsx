
import * as React from 'react';
// import './CoffeMenu.css';

 import FormLogin from '../form/FormLogin';

 import FormMenuIcons from '../form/FormMenuIcons';
 import FormPopup from '../form/FormPopup';


class CrearPedido extends React.Component{

    public render() {
        
        return (
            <div className='coffe-menu'>
                <FormLogin />
				<FormMenuIcons />

				<FormPopup  disable='true'/>
			
            </div>
        );
    }
}

export default CrearPedido;