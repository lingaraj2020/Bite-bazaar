
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-section flex flex-col items-center justify-center mt-8">
        <div className="bg-gray-200 p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">About</h1>
          <p className="text-lg mb-4">This is basically a food delivering app.</p>
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;