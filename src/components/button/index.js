import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

export default class Button extends Component {
  static propTypes = {
    title: PropTypes.string,
    variant: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    variant: "primary",
    size: "medium",
    onClick: () => {},
  };

  render() {
    const { title, variant, size, onClick } = this.props;
    return (
      <div className="button-container">
        <button onClick={onClick} className={`${variant} ${size}`}>
          {title}
        </button>
      </div>
    );
  }
}
