import { configure } from '@storybook/html';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
