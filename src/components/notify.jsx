import { Component } from 'react';

export class Notify extends Component {
  constructor() {
    super();
    this.state = {
      stack: 5,
    };
  }

  classNames = (el, classes) => {
    return [...classes.split(/ /)].forEach((cls) => {
      el.classList.add(cls);
    });
  };

  handleStackIncrease = (stackPosition) =>
    this.setState({ stack: (this.state.stack += stackPosition) });

  handleStackDecrease = (stackPosition) =>
    this.setState({ stack: (this.state.stack -= stackPosition) });

  showNotification = (msg) => {
    // show notification
    this.handleStackIncrease(15);

    // We are using tailwind css utility classes
    // feel free to use your own css if you like
    const css = `right-5 top-${this.state.stack} bg-white text-gray-900 px-4 py-2`;

    let element = document.createElement('div');
    const elText = document.createTextNode(msg);
    element.appendChild(elText);
    this.classNames(element, css);
    document.getElementById('notify').appendChild(element);

    // remove notification
    setTimeout(() => {
      this.handleStackDecrease(15);
      element.parentNode.removeChild(element);
    }, 2000);
  };
}
