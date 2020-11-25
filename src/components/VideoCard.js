import React from "react";
import { Card } from 'react-bootstrap';

const VideoCard = (props) => {
  const { title, styleName, onClick } = props;
  return (
    <a onClick={onClick}>
      <Card>
        <Card.Img width="100%" style={{ ...styleName }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {props.children}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  )

}

export default VideoCard