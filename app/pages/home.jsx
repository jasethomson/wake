import React from "react";
import AppContext from '../context';
import Header from '../components/header';

const Home = props => {
  let title = "Home";
  return (
    <div className="pageTop pageHome">
      <Header
        title={title}
      />
    </div>
  );
}

export default Home;
