import React from "react";
import Container from "../Components /Container/index";
import Row from "../Components /Row /index";
import barley from "../images/barley.jpeg";
import "./style.css";
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
></link>;

function Dog() {
  return (
    <div>
      <Container>
        <Row>
          <img src={barley} className="duck" alt="Dog" />
        </Row>
      </Container>
    </div>
  );
}

export default Dog;
