import { Container, Row, Col, Button } from "react-bootstrap";

interface ButtonContainerProps {
  handleOnClick: (btn: string) => void;
}

export default function ButtonContainer({ handleOnClick }: ButtonContainerProps) {
  return (
    <Container>
      <Row>
        <Col><Button variant="info" onClick={() => handleOnClick("9")}>9</Button></Col>
        <Col><Button variant="info" onClick={() => handleOnClick("8")}>8</Button></Col>
        <Col><Button variant="info" onClick={() => handleOnClick("7")}>7</Button></Col>
      </Row>
      <Row>
        <Col><Button variant="info" onClick={() => handleOnClick("6")}>6</Button></Col>
        <Col><Button variant="info" onClick={() => handleOnClick("5")}>5</Button></Col>
        <Col><Button variant="info" onClick={() => handleOnClick("4")}>4</Button></Col>
      </Row>
      <Row>
        <Col><Button variant="info" onClick={() => handleOnClick("3")}>3</Button></Col>
        <Col><Button variant="info" onClick={() => handleOnClick("2")}>2</Button></Col>
        <Col><Button variant="info" onClick={() => handleOnClick("1")}>1</Button></Col>
      </Row>
    </Container>
  )
}
