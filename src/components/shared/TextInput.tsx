import { Form, Input, InputProps } from "antd";
import { Rule } from "antd/es/form";
import React from "react";

interface TextInputProps extends InputProps {
  name: string;
  label?: string;
  rules?: Rule[];
}

const TextInput: React.FC<TextInputProps> = ({ name, label, rules }) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Input
        placeholder={
          label ? `Enter your ${label.toLowerCase()}` : `Enter value`
        }
        style={{
          height: 48,
          border: "1px solid #d9d9d9",
          outline: "none",
          boxShadow: "none",
          backgroundColor: "white",
        }}
      />
    </Form.Item>
  );
};

export default TextInput;
