

import * as React from 'react';

import Card from '../Card';
import Title from '../Title';
import Accordion from './accordion/Accordion';

class FormMenuIcons extends React.Component {
    public render() {

        return (
            <Card>
                <Title>Menu Restautrant</Title>
                <Accordion allowMultipleOpen='false'>

                    <div title='Promociones' data-isOpen='false'>
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Coca Cola</li>
                        </ul>
                    </div>
                    <div title='Pizzas' data-isOpen='false'>
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Coca Cola</li>
                        </ul>
                    </div>
                    <div title='Empanadas' data-isOpen='false'>
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Coca Cola</li>
                        </ul>
                    </div>
                </Accordion>
            </Card>
        );
    }
}

export default FormMenuIcons;