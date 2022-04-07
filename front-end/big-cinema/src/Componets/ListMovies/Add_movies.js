import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add_movies } from "../../Redux/ActionAndType/moviesAction";

function Add_movies({ id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [moviesName, setmovieName] = useState("");
  const [image, setimage] = useState("");
  const [region, setregion] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [rating, setrating] = useState("");
  const [timeMovies, settimeMovies] = useState("");

  const [obj, setobjetImage] = useState();
  const dispatch = useDispatch();
  const { _id } = useParams();
  console.log(id);

  return (
    <>
      <Button
        variant="warning"
        style={{
          marginLeft: "30px",
          marginTop: "10px",
          backgroundColor: "transparent",
          color: "rgb(226, 116, 7)",
        }}
        onClick={handleShow}
      >
        add your movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="movieName"
            onChange={(e) => {
              setmovieName(e.target.value);
            }}
          />
          <Form.Control
            type="file"
            placeholder="image"
            onChange={(e) => {
              setimage(e.target.files[0]);
            }}
          />
          <Form.Control
            type="text"
            placeholder="region"
            onChange={(e) => {
              setregion(e.target.value);
            }}
          />
          <Form.Control
            type="text"
            placeholder="category"
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <Form.Control
            type="text"
            placeholder="description"
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />{" "}
          <Form.Control
            type="text"
            placeholder="time of movie"
            onChange={(e) => {
              settimeMovies(e.target.value);
            }}
          />
          <Form.Control
            type="number"
            placeholder="rating"
            onChange={(e) => {
              setrating(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                add_movies(id, {
                  moviesName,
                  image,
                  region,
                  category,
                  description,
                  timeMovies,
                  rating,
                })
              );
            }}
          >
            ADD Movies
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Add_movies;
