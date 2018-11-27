

import * as React from 'react';

import Button from '../../modulos/Button';
import Card from '../../modulos/Card';
import Center from '../../modulos/Center';
import Input from '../../modulos/Input';
import Link from '../../modulos/Link';
import Title from '../../modulos/Title';

class FormLogin extends React.Component{
    public render() {
        
        return (
            <Card>
                <Title>Nuevo Cliente</Title>
                <Input label='Nombre' placeholder='ingrese correo'/>
                <Input label='Direccion' placeholder='ingrese direccion'/>
                <Input label='Fono' placeholder='ingrese fono'/>

                <Button block={true}>Guardar</Button>
                <Center>
                    <Link>Buscar  cliente</Link>
                </Center>
            </Card>
        );
    }
}

export default FormLogin;