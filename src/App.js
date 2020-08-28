import React, { Component } from 'react';


// Counter Component
class Counter extends Component {
  render() {
    const { value, increment, decrement } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
        <button onClick={decrement} className="button is-danger is-small">-</button>
          <button onClick={increment} className="button is-success is-small">+</button>
        </div>
      </div>
    );
  }
}
class Total extends Component {
  
  totalValue = () => this.props.getData.reduce((a, b) => a + b.value, 0)

  render() {
    
    return (
      <div  className="counter">
        <b>Total Value: {this.totalValue()}</b>
      </div>
    );
  }
}


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ]
    }
  }

  onIncrement = (id) => {
    
    this.setState(prevState => ({
      data: prevState.data.map(m => m.id === id ? {id: m.id, value: m.value++} : m)
    }));
  }
  
  onDecrement = (id) => {
   
    this.setState(prevState => ({
      data: prevState.data.map(m => m.id === id ? {id: m.id, value: m.value--} : m)
    }));
    
  }

  render() {
    return (
      <div>
        {this.state.data.map((counter) => (
          <Counter 
            increment={() => this.onIncrement(counter.id)} 
            decrement={() => this.onDecrement(counter.id)} 
            key={counter.id} value={counter.value} />
        ))}
        <Total getData={this.state.data}/>
      </div>
    );
  }
}

export default App;
