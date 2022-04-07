import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_cinema } from "../../Redux/ActionAndType/cinemaAction";
function Add_cinema() {
  const [cinema_Name, setcinema_Name] = useState("");
  const [image, setimage] = useState("");
  const [countries, setcountries] = useState("");
  const [rate, setrate] = useState("");
  const [obj, setobjetImage] = useState();
  const [nameImage, setnameImage] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(navigate("/listCinema"));
  const handleShow = () => setShow(true);
  // const handelObject = (e) => {
  // setobjetImage(e.target.files[0]);
  //setnameImage(e.target.files[0].name);
  //setobj(e.target.files[0]);

  //};
  const sendObject = (e) => {
    e.preventDefault();

    handleAdd();
  };
  const handleAdd = () => {
    dispatch(add_cinema({ cinema_Name, image, countries, rate, obj }));
    navigate("/listCinema");
  };

  return (
    <>
      <Button
        variant="warning"
        onClick={handleShow}
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Add Your Cinema
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Welcome in our word please add your cinema</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="cinema_Name"
            onChange={(e) => {
              setcinema_Name(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="countries"
            onChange={(e) => {
              setcountries(e.target.value);
            }}
          />
          <input
            type="file"
            placeholder="image_Cinema"
            onChange={(e) => {
              setimage(e.target.files[0]);
              setobjetImage(e.target.files[0]);
            }}
          />
          <input
            type="number"
            placeholder="rating"
            onChange={(e) => {
              setrate(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Save Adding
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Add_cinema;
