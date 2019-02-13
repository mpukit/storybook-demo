import React from 'react';

import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
//import Button from '@../components/button';
//import Center from '../decorators/center';

storiesOf('Examples', module) // Component 
  .add('heading', () => '<h1>Hello World</h1>')
  .add('another heading', () => '<h2>Hello Again World</h2>')
  .add('button', () => {
    const button = document.createElement('button');
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  });


// storiesOf('Button', module)
//   .add('with text', () => (
//     <Center>
//       <Button onClick={action('clicked')}>Hello Button</Button>
//     </Center>
//   ));

  // storiesOf('Button', module)
  // .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  // .add('with some emoji', () => (
  //   <Button onClick={action('clicked')}>
  //     <span role="img" aria-label="so cool">
  //       😀 😎 👍 💯
  //     </span>
  //   </Button>
  // ));