import React from "react";
import Container from "../Components /Container/index";
import Row from "../Components /Row /index";
import "./style.css";
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
></link>;

function Golden() {
  return (
    <div>
      <Container>
        <Row>
          <p>
            {" "}
            Barley Barley Barley Barley Barely Barley Barley Barley Barley
            Barely Barley Barley Barley Barley Barely Barley Barley Barley
            Barley Barely Barley Barley Barley Barley Barely Barley Barley
            Barley Barley Barely Barley Barley Barley Barley Barely Barley
            Barley Barley Barley Barely{" "}
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default Golden;
