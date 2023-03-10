import * as React from 'react';
import { InputMask } from "./input-mask"; // Shares the same FormController

// import CustomDocumentation from './form-editor.mdx';
(!customElements.get('input-mask')) && customElements.define('input-mask', InputMask);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'input-mask': any;
    }
  }
}

export default {
  title: 'Components/input-mask',
  component: InputMask,
  parameters: {
    // docs: { page: CustomDocumentation },
  },
  // argTypes: {
  //   data: { control: 'object' },
  // }
};

const Template = (args?: any) => {

  return <>

<p>
'Y', 'M', 'D', '9', '_', '#'' for number. 'X' for string
</p>

    <input-mask mask="yyyy-mm-dd">
      <input value="202312" /> Date
    </input-mask>

    <input-mask mask="99999">
      <input value="205" /> Zip Code
    </input-mask>

    <input-mask mask="###-##-####">
      <input value="1234" /> ID
    </input-mask>

    <input-mask mask="9 (999) 999-9999" >
      <input value="1"/>  Phone Number
    </input-mask>

    <input-mask mask="X9X 9X9" >
      <input value="L7A"/> Postal Code
    </input-mask>

    <input-mask mask="9999 9999 9999 9999">
      <input value="4599" /> Credit Card Number
    </input-mask>

    <input-mask mask="____ ___ ___">
      <input value="" /> Health Card Number
    </input-mask>

  </>
}; 

export const Primary = Template.bind({});
