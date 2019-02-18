import { addDecorator, configure } from '@storybook/html';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/components';

// Option defaults:
addDecorator(
  withOptions({
    name: 'Storybook Demo',
    url: 'http://www.google.com',
    addonPanelInRight: true,
    //theme: themes.dark, // Enable Dark Theme
  })
);

function loadStories() {
  require('../src/stories'); // load stories in index.js
  // You can require as many stories as you need.
}

configure(loadStories, module);