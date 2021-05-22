import React from "react";
import AppContext from '../context';
import Header from '../components/header';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home"
    }
  }

  render() {
    console.log("home", this.context);
    this.context.Home = this.state;
    return (
      <div className="pageTop pageHome">
        <Header
          title={this.state.title}
        />
        <div>hello</div>
      </div>
    );
  }
}

Home.contextType = AppContext;
