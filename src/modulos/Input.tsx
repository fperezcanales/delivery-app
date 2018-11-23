
import * as React from 'react';

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
    padding: '10px 15px',
    width: 'calc(100vw -30px)',
}
const spanStyle = {
    color: '#777',
    fontSize: '10px',
    fontWeight: 900,
    textTransform: 'uppercase',
} as React.CSSProperties;

class Input extends React.Component<IInputProps>{
    public render() {
        
        return (
            <div>
                <span style={spanStyle}>{this.props.label}</span><br/>
                <input {...this.props} style={style}/>
            </div>
        );
    }
}
interface IInputProps {
    label: string,
    placeholder?: string;
}
export default Input;