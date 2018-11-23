
import * as React from 'react';

class CustomImput extends React.Component<IProps, IState> {
    public render() {
        // tslint:disable-next-line:no-console
        // console.log(JSON.stringify(this.props.input.name));
        return (
            <div>
                <span>{this.props.title}</span>
                <input {...this.props.input} {...this.props} />
                {this.props.meta.submitFailed && this.props.meta.error &&
                    <span>{this.props.meta.error}</span>
                }
            </div>
        );
    }
}
interface IState {
    valor: number;
}
interface IProps {
    title: any;
    input: any;
    meta: any; 
    value: number;
}
export default CustomImput;