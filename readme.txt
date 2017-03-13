To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
