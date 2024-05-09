// UserClass.jsx
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Lingaraj",
        location: "Bangalore",
        URL: "",
      },
    };
  }

  async componentDidMount() {
    const url = "https://github.com/lingaraj2020/";
    const data = await fetch(url);
    const json = await data.json();
    //console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, url, bio } = this.state.userInfo;

    return (
      <div className="user-details mt-8">
        <p className="text-xl font-bold">My name: {name}</p>
        <p className="text-lg">Bio: {bio}</p>
        <p className="text-lg">Location: {location}</p>
        <p className="text-lg">
          Github: <a href={url} className="text-blue-500 hover:text-blue-700">{url}</a>
        </p>
        <p className="text-lg">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/lingaraj2020/"
            className="text-blue-500 hover:text-black-700"
          >
            https://www.linkedin.com/in/lingaraj2020/
          </a>
        </p>
        <h3 className="text-lg font-semibold mt-4">Skills</h3>
        <ul className="list-disc list-inside">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>DSA</li>
          <li>SQL</li>
          <li>RTK</li>
          
        </ul>
      </div>
    );
  }
}

export default UserClass;