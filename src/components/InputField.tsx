import { Form } from "react-bootstrap";

interface InputFieldProps {
  value: string;
}

export default function InputField({ value }: InputFieldProps) {
  return (
    <Form.Control
      size="lg"
      type="text"
      value={value}
      placeholder="0"
      readOnly
      className="text-end fw-bold"
      style={{
        backgroundColor: "#f8f9fa",
        cursor: "default",
        border: "2px solid #dee2e6",
        fontSize: "1.5rem",
        minHeight: "60px"
      }}
    />
  );
}
