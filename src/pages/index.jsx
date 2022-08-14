import { Counter } from '../components/counter';

export default class HomePage extends Counter {
  render() {
    return (
      <div className="relative h-screen flex items-center justify-center w-full">
        <div
          id="notify"
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
