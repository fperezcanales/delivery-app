
import * as React from 'react';
import { Field, reduxForm} from 'redux-form';
import CustomImput from './CustomImput';

const validate = (values: any) => {
    const errors = {name: '', lastName: ''};
    if(!values.name){
        errors.name = 'Nombre obligatorio';
    }
    if(!values.lastName){
        errors.lastName = 'Apellido obligatorio';
    }
    return errors;
}
class UserForm extends React.Component<IProps, IState> {

    public render(){
        
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <Field name='name' component={CustomImput}  placeholder="Nombre" title="Nombre" />
                    <Field name='lastName' component={CustomImput} placeholder="Apellido" title="Apellido" />
                    <input type='submit' value='Enviar'/>
                </form>
            </div>
        );
    }
}
interface IState {
	valor: number;
}
interface IProps {
	handleSubmit: any; 
}

export default reduxForm ({ 
    form: 'user',
    validate,
})(UserForm);