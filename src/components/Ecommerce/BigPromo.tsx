import * as React from "react";
import { Container, Row, Col } from 'react-grid-system';
import styles from "./styles.module.scss";

import Button from "../Button";
import { TagOne } from "../Typograph";

interface BigPromoProps {
  tag: string;
  title: string;
  subtitle: string;
  actionText: string;
  image: string;
}


class BigPromo extends React.Component<BigPromoProps> {
  render() {
    return (
      <Container className={styles.block}>
        <Row>
          <Col sm={12} md={7}>
            <div className={styles.information}>
              <TagOne>{this.props.tag}</TagOne>
              <h1>{this.props.title}</h1>
              <p>{this.props.subtitle}</p>
              <Button>{this.props.actionText}</Button>
            </div>
          </Col>
          <Col>
            <img className={styles.rightImage} src={this.props.image} alt=""/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BigPromo;