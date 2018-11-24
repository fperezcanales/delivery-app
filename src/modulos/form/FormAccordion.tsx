
import * as React from 'react';
import Accordion from './accordion/Accordion';


class FormAccordion extends React.Component {
  public render() {

    return (
      <div>

        <Accordion allowMultipleOpen='false'>

          <div title='Alligator Mississippiensis22' data-isOpen='false'>
              <p><strong>Common Name:</strong> AAAA AAAAA</p>
          </div>
          <div title='Alligator Mississippiensi111' data-isOpen='false'>
              <p><strong>Common Name:</strong> BBBB VVVVV</p>
          </div>
        </Accordion>
      </div>
    );
  }
}

export default FormAccordion;