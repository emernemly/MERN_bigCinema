import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update_movies } from "../../Redux/ActionAndType/moviesAction";

const Edit_movies = ({ ownmovie }) => {
  const [moviesName, setmoviesName] = useState(ownmovie.moviesName);
  const [image, setimage] = useState(ownmovie.image);
  const [region, setregion] = useState(ownmovie.region);
  const [category, setcategory] = useState(ownmovie.category);
  const [description, setdescription] = useState(ownmovie.description);
  const [timeMovies, settimeMovies] = useState(ownmovie.timeMovies);
  const [rating, setrating] = useState(ownmovie.rating);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // function timeout(ms) {
  // return new Promise((resolve) => setTimeout(resolve, ms));
  //}

  //const handelcima = () => {
  //setcinema_Name(cima.cinema_Name);
  //setimage(cima.image);
  //setcountries(cima.countries);
  //setrate(cima.rate);
  // handleShow

  const handleEdite = () => {
    dispatch(
      update_movies(ownmovie._id, ownmovie.moviesId._id, {
        moviesName,
        image,
        region,
        category,
        description,
        timeMovies,
        rating,
      })
    );
  };

  return (
    <>
      <Button
        variant="warning"
        style={{ backgroundColor: "transparent", color: "rgb(226, 116, 7)" }}
        onClick={handleShow}
      >
        update_movies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>put your update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="movie_Name"
            value={moviesName}
            onChange={(e) => {
              setmoviesName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="region"
            value={region}
            onChange={(e) => {
              setregion(e.target.value);
            }}
          />
          <input
            type="file"
            placeholder="image"
            onChange={(e) => {
              setimage(e.target.files[0]);
            }}
          />
          <input
            type="number"
            placeholder="rating"
            value={rating}
            onChange={(e) => {
              setrating(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="time_Movies"
            value={timeMovies}
            onChange={(e) => {
              settimeMovies(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleEdite}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit_movies;
