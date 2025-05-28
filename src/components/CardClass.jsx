import React from "react";

class CardClass extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="" srcset="" />
        <div className="container">
          <h4>
            <b>{this.props.name}</b>
          </h4>
          <p>{this.props.job}</p>
        </div>
      </div>
    );
  }
}

export default CardClass;
