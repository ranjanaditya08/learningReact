import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("child constructor");
  }

  // called after rendering that's why api call are made inside it.
  componentDidMount() {
    console.log("Child componentDidMount");
  }

  render() {
    const { name, location } = this.props;
    console.log("child render");
    return (
      <div className="user-card">
        <h2>This is Namaste JavaScript Series</h2>
        <h3>count = {this.state.count}</h3>
        <h3>count = {this.state.count2}</h3>
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
      </div>
    );
  }
}

export default UserClass;
