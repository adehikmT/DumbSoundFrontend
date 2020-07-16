import React, { useEffect, useState,useRef } from "react";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { MdAttachFile } from "react-icons/all";

//component
// REDUX
import { connect } from "react-redux";
import { getAllSingerCreator } from "../../redux/actions/actionSinger";
import { postMusicCreator } from "../../redux/actions/actionMusic";

const FormMusic = ({
  loading,
  error,
  data,
  getAllSingerCreator: read,
  postMusicCreator: post,
  musicLoading,
}) => {
  const [music, setMusic] = useState({});

  const imgRef=useRef(null)

  const handleChange = (event) => {
    setMusic({ ...music, [event.target.name]: event.target.value });
  };

  const handleChangeFile = (event) => {
    event.preventDefault();
    let image=event.target.files[0];
    setMusic({...music,image})
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.token;
    // console.log(id)
    await post({...music}, token);
    error === null ? setMusic({}) : setMusic(music);
  };

  useEffect(() => {
    read();
  }, []);

  const ListSinger = (data) => {
    if (data !== null && data.length > 0) {
      return data.map((singer) => (
        <option key={music.id} value={singer.id}>
          {singer.name}
        </option>
      ));
    }
  };

  const Load = (load, onSub) => {
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
      return onSub ? "Submit" : "Select Singer";
    }
  };

  return (
    <>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Row>
          <Col className="col-9">
            <Form.Control
              type="text"
              placeholder="Enter Title"
              name="title"
              value={music.title ? music.title : ""}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-3">
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
          </Col>
        </Row>
        <Row>
          <Col className="col-12 mt-3">
            <Form.Control
              type="text"
              placeholder="Enter Year"
              name="year"
              value={music.year ? music.year : ""}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 mt-3">
            <Form.Control
              size="md"
              as="select"
              name="artisId"
              value={music.artisId ? music.artisId : ""}
              onChange={handleChange}
            >
              <option>{Load(loading, false)}</option>
              {ListSinger(data)}
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 mt-3">
            <Form.Control
              type="text"
              placeholder="Enter Link Music"
              name="attache"
              value={music.attache ? music.attache : ""}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Button variant="danger" className="btn-block mt-3" type="submit">
          {Load(musicLoading, true)}
        </Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, data } = state.singerReducer;
  const { loading: musicLoading,error } = state.musicReducer;
  return {
    loading,
    error,
    data,
    musicLoading,
  };
};

export default connect(mapStateToProps, {
  getAllSingerCreator,
  postMusicCreator,
})(FormMusic);
