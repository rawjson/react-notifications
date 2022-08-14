/* 
 Counter for sending notifications to the DOM
*/

import { Notify } from './notify';

export class Counter extends Notify {
  constructor() {
    super();
    this.state = {
      counter: 0,
      message: 'Tap the button to see the message.',
      waiting: false,
    };
  }

  increaseCounter = () => {
    // increase the counter by 1
    this.setState({
      counter: (this.state.counter += 1),
      message: `Counter increased by ${this.state.counter}`,
    });

    this.showNotification(`You hit the counter ${this.state.counter} times`);
  };

  resetCounter = () => {
    this.setState({ waiting: true });
    let timer = 5;
    for (let i = 5; i >= 0; i--) {
      timer--;
      setTimeout(() => {
        this.setState({
          message: `Resetting in ${i}`,
        });

        if (i === 0) {
          this.showNotification('Counter is reset to 0');
          this.setState({
            waiting: false,
            counter: 0,
            message: 'Counter was reset',
          });
        }
      }, 1000 * (4 - timer));
    }
  };
}
