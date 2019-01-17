import React, { Component } from "react";

class Icon extends Component {
  static defaultProps = {
    color: "#000000"
  };

  render() {
    switch (this.props.type) {
      case "close":
        return (
          <svg
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 31.11 31.11"
            enableBackground="new 0 0 31.11 31.11"
          >
            <polygon
              fill={this.props.color}
              points="31.11,1.41 29.7,0 15.56,14.14 1.41,0 0,1.41 14.14,15.56 0,29.7 1.41,31.11 15.56,16.97   29.7,31.11 31.11,29.7 16.97,15.56 "
            />
          </svg>
        );
      case "facebook":
          return (
            <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24">
            <path 
            fill={this.props.color}
            d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
            </svg>
          )
    }
  }
}

export default Icon;
