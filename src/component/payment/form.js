import React, { useRef,useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { MdAttachFile } from "react-icons/all";
import dayjs from "dayjs";

// REDUX
import { connect } from "react-redux";
import { postTransactionCreator } from "../../redux/actions/actionTransaction";

const FormPay = ({ loading, error, postTransactionCreator: post }) => {
  const [payment, setPayment] = useState({});
  const imgRef = useRef(null);

  const handleChangeFile = (event) => {
    event.preventDefault();
    let image = event.target.files[0];
    setPayment({ image });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.token;
    var start = dayjs().format("YYYY/MM/DD");
    var due = dayjs().day(35).format("YYYY/MM/DD");
    await post({ ...payment,start,due }, token);
    error === null ? setPayment({}) : setPayment(payment);
  };

  const Load = (load) => {
    if (load) {
      return (
        <Spinner 
          as="span"
          size="sm"
          animation="border"
          role="status"
          arial-hidden="true"
        />
      );
    } else {
      return "Submit";
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter nomor Rekening"
            name="norek"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <div className="custom-file">
            <input
                type="file"
                ref={imgRef}
                className="custom-file-input"
                id="customFileLangHTML"
                name="image"
                onChange={handleChangeFile}
            />
            <label
              className="custom-file-label"
              for="customFileLangHTML"
              data-browse="image"
            >
              <MdAttachFile />
            </label>
          </div>
        </Form.Group>
        <Button variant="danger" className="btn-block mb-3" type="submit">
          {Load(loading)}
        </Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, error } = state.patchTransactionReducer;
  return {
    loading,
    error,
  };
};

export default connect(mapStateToProps, {
  postTransactionCreator,
})(FormPay);
