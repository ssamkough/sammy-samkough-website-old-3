import React from "react";
import axios from "axios";

class About extends React.Component {
  state = { sentences: [] };

  async componentDidMount() {
    const response = await axios({
      method: "get",
      url: "https://api.sammysamkough.com/api/users/show"
    });

    const sentences = response.data.data.about_me.split(";");
    this.setState({ sentences: [...sentences] });
  }

  render() {
    return (
      <div>
        <h2>about</h2>
        <br></br>
        <div className="textWall">
          {this.state.sentences &&
            this.state.sentences.map(sentence => {
              return <p key={sentence.toString()}>{sentence}</p>;
            })}
        </div>
      </div>
    );
  }
}

export default About;
