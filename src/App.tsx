import * as React from 'react';

import { connect } from 'react-redux';
import { decrementar, incrementar, setear } from './reducer';

import './App.css';
import Button from './modulos/Button';
import Card from './modulos/Card';
import Center from './modulos/Center';
import Container from './modulos/Container';
import Input from './modulos/Input';
import Link from './modulos/Link';
import Title from './modulos/Title';

// import UserForm from './modulos/form/UserForm';
import miThunk from './thunk';






class App extends React.Component<IProps, IState> {

	public constructor(props) {
		super(props);
		this.props.miThunk('lala');
	}
	public handleSetear = (e: any) => {
		// const { setear } = this.props;
		const { valor } = this.state;
		this.props.setear(Number(valor));
	}

	public handleChange = (e: any) => {
		const { value } = e.target;
		this.setState({ valor: value });

	}
	public handleSubmit = (e: any) => {

		alert(JSON.stringify(e));
	}
	public render() {
		// const { incrementar, decrementar, valor } = this.props;

		return (
			<Container>
				<Card>
					<Title>Iniciar session</Title>
					<Input label='Correo' placeholder='ingrese correo'/>
					<Input label='Contrasenia' placeholder='ingrese contrasenia'/>
					<Button block={true}>Enviar</Button>
					<Center>
						<Link >Ir al registro</Link>
					</Center>
				</Card>
			</Container>
		);
	}

}
interface IState {
	valor: number;
}
interface IProps {
	setear: any;
	incrementar: any;
	decrementar: any;
	valor: any;
	miThunk: any;
}
const mapStateToProps = (state: any) => {
	// tslint:disable-next-line:no-console
	console.log(state);
	return {
		valor: state.contador
	}
}
const mapDispatchToProps = (dispatch: any) => ({
	decrementar: () => dispatch(decrementar()),
	incrementar: () => dispatch(incrementar()),
	miThunk: (payload: any) => dispatch(miThunk(payload)),
	setear: (payload: any) => dispatch(setear(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);