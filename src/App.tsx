import * as React from 'react';

import './App.css';

import { connect } from 'react-redux';
import { decrementar, incrementar, setear } from './reducer';


import Container from './modulos/Container';

// import FormLogin from './modulos/form/FormLogin';
// import FormPopup from './modulos/form/FormPopup';

import CrearPedido from './modulos/container/CrearPedido';
// import FormMenuIcons from './modulos/form/FormMenuIcons';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'


library.add(faStroopwafel)

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
				
				<CrearPedido/>
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