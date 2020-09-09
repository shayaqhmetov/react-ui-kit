import * as React from 'react';
import styles from './styles.module.css';
import cx from "classnames";

interface ButtonProps {
  onClick?: Function,
  children?: React.ReactNode,
  variant: string,
  className: string,
  label: string,
  size: string,
  disabledClassName: string,
  disabled: boolean
}

class Button extends React.Component<ButtonProps> {

  static defaultProps = {
    className: "",
    label: "",
    size: "",
    variant: "basic",
    disabled: false,
    disabledClassName: ""
  }

  renderChildren = () => {
    const { children, label } = this.props;

    if (label) {
      return label;
    }

    if (children) {
      return children;
    }

    return "Button";
  }

  handleButtonClick = (event: any) => {
    const { onClick, disabled } = this.props;

    if (disabled) return;

    onClick && onClick({ event });
  }

  render() {
    const {
      className,
      size,
      variant,
      disabled,
      disabledClassName
    } = this.props;

    const _className = cx(
      className,
      styles[size],
      styles.button,
      styles[variant],
      {
        [styles.disabled]: disabled,
        [disabledClassName]: disabled
      }
    );

    return (
      <div onClick={this.handleButtonClick} className={_className}>
        {this.renderChildren()}
      </div>
    );
  }
}

export default Button;