import * as React from "react";
import styles from "./styles.module.scss";


class TagOne extends React.Component {
  render() {
    return (
      <p className={styles.tag}>{this.props.children}</p>
    );
  }
}

export default TagOne;