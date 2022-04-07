import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cima_find, edditCinema } from "../../Redux/ActionAndType/cinemaAction";
const Edit_cinema = ({ ownCinema }) => {
  const [cinema_Name, setcinema_Name] = useState(ownCinema.cinema_Name);
  const [image, setimage] = useState(ownCinema.image);
  const [countries, setcountries] = useState("");
  const [rate, setrate] = useState(ownCinema.rate);
  const [obj, setobjetImage] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // function timeout(ms) {
  // return new Promise((resolve) => setTimeout(resolve, ms));
  //}

  const Handelcima = async () => {
    handleShow();
  };

  const cima = useSelector((state) => state.cinemaReducer.cima);
  //const handelcima = () => {
  //setcinema_Name(cima.cinema_Name);
  //setimage(cima.image);
  //setcountries(cima.countries);
  //setrate(cima.rate);
  // handleShow

  const handleEdite = () => {
    dispatch(
      edditCinema(ownCinema._id, { cinema_Name, image, countries, rate })
    );
    navigate("/listCinema");
  };

  return (
    <>
      <Button
        variant="warning"
        style={{ backgroundColor: "transparent", color: "rgb(226, 116, 7)" }}
        onClick={Handelcima}
      >
        update_cinema
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>put your update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="cinema_Name"
            value={cinema_Name}
            onChange={(e) => {
              setcinema_Name(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="countries"
            value={countries}
            onChange={(e) => {}}
          />
          <input
            type="file"
            placeholder="image_Cinema"
            onChange={(e) => {
              setimage(e.target.files[0]);
              setcountries();
            }}
          />
          <input
            type="number"
            placeholder="rating"
            value={rate}
            onChange={(e) => {
              setrate(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="warning"
            style={{
              backgroundColor: "transparent",
              color: "rgb(226, 116, 7)",
            }}
            onClick={handleEdite}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit_cinema;
