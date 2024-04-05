import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
    // console.log("Parent constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ranjanaditya08");
    const json = await data.json();
   // console.log(json);
    this.setState({
      userInfo: json,
    });

    // console.log("Parent ComponentDidMount");
  }
  render() {
    //console.log("parent render");
    const { name, location } = this.state.userInfo;
    return (
      <div>
        <h1>Welcome to About Page!!</h1>
        <UserClass name={name} location={location} />
        <UserClass name={"Aditya(class)"} location={"Patna"} />
      </div>
    );
  }
}
/* 
 lifecycle of component

 parent constructor -> parent render -> child constructor -> child render
  -> child componentDidMount -> parent componentDidMount  

  if there're multiple child component then react batch both child componentDidMount
  and is called in the last after rendering of both child and parent component
*/

/* export const About = () => {    
  return (
    <div>
      <h1>Welcome to About Page!!</h1>
      <UserClass name={"Adityaa08(class)"} location={"Patnaa"} />
    </div>
  );
}; */

export default About;
