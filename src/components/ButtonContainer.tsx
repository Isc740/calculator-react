import { Container, Row, Col, Button } from "react-bootstrap";

interface ButtonContainerProps {
  handleOnClick: (btn: string) => void;
}

export default function ButtonContainer({ handleOnClick }: ButtonContainerProps) {
  return (
    <Container className="mx-0" style={{ maxWidth: "320px" }}>
      <Row className="g-2">
        <Col><Button variant="danger" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("C")}>C</Button></Col>
        <Col><Button variant="danger" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("<")}>⌫</Button></Col>
        <Col><Button variant="secondary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("%")}>%</Button></Col>
        <Col><Button variant="secondary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("/")}>/</Button></Col>
      </Row>
      <Row className="g-2 mt-2">
        <Col><Button variant="primary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("7")}>7</Button></Col>
        <Col><Button variant="primary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("8")}>8</Button></Col>
        <Col><Button variant="primary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("9")}>9</Button></Col>
        <Col><Button variant="secondary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("x")}>×</Button></Col>
      </Row>
      <Row className="g-2 mt-2">
        <Col><Button variant="primary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("4")}>4</Button></Col>
        <Col><Button variant="primary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("5")}>5</Button></Col>
        <Col><Button variant="primary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("6")}>6</Button></Col>
        <Col><Button variant="secondary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("-")}>−</Button></Col>
      </Row>
      <Row className="g-2 mt-2">
        <Col><Button variant="primary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("1")}>1</Button></Col>
        <Col><Button variant="primary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("2")}>2</Button></Col>
        <Col><Button variant="primary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("3")}>3</Button></Col>
        <Col><Button variant="secondary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("+")}>+</Button></Col>
      </Row>
      <Row className="g-2 mt-2">
        <Col xs={6}><Button variant="primary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("0")}>0</Button></Col>
        <Col><Button variant="primary" className="w-100 py-3 fw-bold" onClick={() => handleOnClick(".")}>.</Button></Col>
        <Col><Button variant="success" className="w-100 py-3 fw-bold" onClick={() => handleOnClick("=")}>=</Button></Col>
      </Row>
    </Container>
  );
}
