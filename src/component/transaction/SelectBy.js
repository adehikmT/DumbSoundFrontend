import React from "react";
import { Form } from "react-bootstrap";

const Sort = () => {
  return (
    <>
      <Form.Control size="md" as="select" name="artisId" value="" onChange="">
        <option>Active</option>
        <option>Non Active</option>
      </Form.Control>
    </>
  );
};

export default Sort;
