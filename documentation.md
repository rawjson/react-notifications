# What is React or React.js?

React is a JavaScript library for building user interfaces. React makes it easy to build reusable components because it efficiently updates the right components when your data changes. The good thing about react is that we can use it alongside other tools in our tech stack and develop new features without writing extra code. For example, we can develop a standalone application or a feature for our app working independently of our backend technologies. It can also render on the server side with Node.js and power up mobile applications with its sibling React Native. 

With react, we can build components that can manage their own state and then compose them to make complex UIs. This is really usefull when designing single page applications where we need to work with a lot dynamic data. 


React is mainained by Meta (Formerly known as Facebook) and a community of individual developers and companies. React is only concerned with state management and rendering that state to the DOM. Additionally, it will require some tools for routing and some client side functionality. There is a really popular framework available for server rendered React applications called Next.js. React recommends using it on their official documentation website if you want to build static websites with lambda functions. 

## Virtual DOM

A notable feature of React, is the Virtual DOM(Document Object Model). React creates an in memory data structure cache and then computes and updates the resulting differences in the browser's DOM efficiently. You can picture as a multiple nodes connected to parent node where each child node is updated in real time without updating the whole application. This whole proces is called reconcilliation. This selective rendering provides a major performance boost. It saves the effor of recalcuating of CSS styles, layout for the page and rendering for the entire page. 


## Lifecycle methods
Every component has a lifecyle which you can monitor and manipulate during its three main phases i.e. Mounting, Updating, and Unmounting. 

### Mounting

It means injecting elements into the DOM and React has four built-in mehods that gets called, in the following order, when mounting a component.

1. `constructor()`
2. `getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

Note: `render()` method is required and will always be called, the others are optional and will only be called when defined. 

**constructor**
: The `constructor()` method is called at the beginning before other methods. An argument `super(props)` is needed as we'll be extending the React's Component class available to us. Using `super(props)` allows us to inherit the parent's methods by initiating its own constructor method.

Example:
```
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { lib: 'React.js' }
    }   
    render() {
        return (
            <h1>My Favorite JavaScript library is {this.state.lib}</h1>
        )
    }  
}
```
**getDerivedStateFromProps**
: 