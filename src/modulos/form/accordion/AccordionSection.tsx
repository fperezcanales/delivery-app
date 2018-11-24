import * as React from 'react';
import Button from 'src/modulos/Button';


interface IAccordionSection {
    children: any;
    isOpen: any;
    title: any; 
    onClick: any;
}


  

class AccordionSection extends React.Component <IAccordionSection> {

  public onClick = () => {
    this.props.onClick(this.props.title);
  };

  public render() {
    const { onClick, props: { isOpen, title  } } = this;

    return (
      <div>
        
        <div onClick={onClick}>
          <Button block={true} > {title} 
            <div style={{ float: "right" }}>
              {!isOpen && <span>&#9650;</span>}
              {isOpen && <span>&#9660;</span>}
            </div>
          </Button>
        </div>
        
        {isOpen && (
          <div>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;