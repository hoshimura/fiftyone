import React from "react";
import { TextField } from "@mui/material";
import FieldWrapper from "./FieldWrapper";
import autoFocus from "../utils/auto-focus";
import { getComponentProps } from "../utils";

export default function TextFieldView(props) {
  const { schema, onChange, path, data } = props;
  const { type, view = {}, min, max, multipleOf = 1 } = schema;

  const { inputProps = {}, ...fieldProps } = getComponentProps(props, "field");

  return (
    <FieldWrapper {...props}>
      <TextField
        disabled={view.readOnly}
        autoFocus={autoFocus(props)}
        defaultValue={data ?? schema.default}
        size="small"
        fullWidth
        placeholder={view.placeholder}
        type={type}
        onChange={(e) => {
          const value = e.target.value;
          onChange(path, type === "number" ? parseFloat(value) : value);
        }}
        inputProps={{ min, max, step: multipleOf, ...inputProps }}
        {...fieldProps}
      />
    </FieldWrapper>
  );
}
