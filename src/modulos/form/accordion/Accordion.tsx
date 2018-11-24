import * as React from 'react';

// import Card from 'src/modulos/Card';
import AccordionSection from './AccordionSection';



interface IState {
    openSections: any;
}
interface IProps {
    allowMultipleOpen: any;
    children: any;
}
class Accordion extends React.Component<IProps, IState> {

    public static defaultProps = {
        allowMultipleOpen: false,
    };

    public constructor(props) {
        super(props);

        const openSections = {};

        this.props.children.forEach(child => {
            if (child.props.isOpen) {
                openSections[child.props.title] = true;
            }
        });

        this.state = { openSections };
    }

    public onClick = title => {
        const { props: { allowMultipleOpen }, state: { openSections } } = this;

        const isOpen = !!openSections[title];

        if (allowMultipleOpen) {
            this.setState({
                openSections: {
                    ...openSections,
                    [title]: !isOpen
                }
            });
        } else {
            this.setState({
                openSections: {
                    [title]: !isOpen
                }
            });
        }
    };

    public render() {
        const {
            onClick,
            props: { children },
            state: { openSections },
        } = this;

        return (
            <div>
                {children.map(child => (
                    <AccordionSection
                        isOpen={!!openSections[child.props.title]}
                        title={child.props.title}
                        onClick={onClick}
                    >
                        {child.props.children}
                    </AccordionSection>
                ))}
            </div>
        );
    }
}

export default Accordion;