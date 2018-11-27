
import * as React from 'react';
// import './CoffeMenu.css';

 import FormLogin from '../form/FormLogin';

 import FormMenuIcons from '../form/FormMenuIcons';

 import FormPopup from '../form/FormPopup';

 import Accordion from '../form/accordion/Accordion';


class CrearPedido extends React.Component{

    public render() {
        
        return (
            <div className='coffe-menu'>

			
                <Accordion allowMultipleOpen='false'>
                    <div title='Menu 1' data-isOpen='false'>
                        <FormLogin />
                    </div>
                    <div title='Menu 2' data-isOpen='false'>
                        <FormMenuIcons />
                    </div>
                    <div title='Menu 3' data-isOpen='false'>
                        <FormPopup  disable='true'/>
                    </div>
                </Accordion>

            </div>
        );
    }
}

export default CrearPedido;