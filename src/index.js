import _ from 'lodash';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');

  // Lodash now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  return element;
}

document.body.appendChild(component());
