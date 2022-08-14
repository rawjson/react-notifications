/* 
 -------> A simple notification component to show the working of React
*/

import { Component } from 'react';

export class SomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: 'Tap the button to see the message',
      waiting: false,
      stack: 5,
    };
  }

  classNames = (el, classes) => {
    return [...classes.split(/ /)].forEach((cls) => {
      el.classList.add(cls);
    });
  };

  showNotification = (msg) => {
    this.setState({ stack: this.state.stack + 15 });
    // show a notification and then remove it
    let element = document.createElement('div');
    this.classNames(
      element,
      `right-5 top-${this.state.stack} bg-white text-gray-900 px-4 py-2`
    );
    const newText = document.createTextNode(msg);
    element.appendChild(newText);
    const divBefore = document.getElementById('myDiv');
    divBefore.appendChild(element);

    setTimeout(() => {
      element.parentNode.removeChild(element);
      this.setState({ stack: this.state.stack - 15 });
    }, 2000);
    1;
  };

  increaseCounter = () => {
    // increase the counter by 1
    this.setState({
      counter: (this.state.counter += 1),
      message: `Counter increased by ${this.state.counter}`,
    });

    this.showNotification(`You hit the counter ${this.state.counter} times`);
  };

  resetCounter = () => {
    // wait for the counter to run

    this.setState({ waiting: true });
    // reset the counter and show new message

    let timer = 5;

    for (let i = 5; i >= 0; i--) {
      timer--;
      setTimeout(() => {
        this.setState({
          message: `Resetting in ${i}`,
        });

        if (i === 0) {
          this.showNotification('Counter is reset to 0');
          this.setState({ waiting: false, counter: 0 });
        }
      }, 1000 * (4 - timer));
    }
  };

  render() {
    return (
      <div className="relative h-screen flex items-center justify-center w-full">
        <div
          id="myDiv"
          className="absolute top-5 right-5 w-64 text-center space-y-2"
        ></div>
        <div className="absolute mx-auto w-full max-w-xl">
          <div className="space-y-4 w-full">
            <div className="border border-gray-400 w-full h-20 text-center flex items-center justify-center">
              <span>{this.state.message}</span>
            </div>
            <div className="flex justify-between space-x-4">
              <button
                disabled={this.state.waiting}
                className="w-full h-10 border border-gray-500"
                onClick={this.increaseCounter}
              >
                Increase Counter
              </button>
              <button
                disabled={this.state.waiting}
                className="w-full h-10 border border-gray-500"
                onClick={this.resetCounter}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
