import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { usertoken } from "../../Redux/ActionAndType/Action";
import { my_movies } from "../../Redux/ActionAndType/moviesAction";
import CardMovies from "../Card/Cardmovies";
import { Button, Offcanvas } from "react-bootstrap";

const ListMovies = () => {
  const [text, settext] = useState("");
  const [textButton, settextButton] = useState("");
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    dispatch(usertoken());
  }, []);
  useEffect(() => {
    dispatch(my_movies(_id));
  }, []);
  const movies = useSelector((state) => state.moviesReducer.movies);

 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "30px",
        padding: "100px",
      }}
    >
      <>
        <Button
          variant="warning"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
          }}
          onClick={handleShow}
        >
          Category
        </Button>

        <Offcanvas
          show={show}
          onHide={handleClose}
          style={{ backgroundColor: "rgb(0,0,0,0.8)" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "space-between",
              flexWrap: "wrap",
              padding: "10px",
            }}
          >
            <button
              style={{ margin: "10px", backgroundColor: "transparent" }}
              value=""
              onClick={(e) => {
                settextButton(e.target.value);
              }}
            >
              ALL_movie
            </button>
            <button
              style={{ margin: "10px", backgroundColor: "transparent" }}
              value="action"
              onClick={(e) => {
                settextButton(e.target.value);
              }}
            >
              Action
            </button>
            <button
              style={{ margin: "10px", backgroundColor: "transparent" }}
              value="comedy"
              onClick={(e) => {
                settextButton(e.target.value);
              }}
            >
              Comedy
            </button>
            <button
              style={{ margin: "10px", backgroundColor: "transparent" }}
              value="drama"
              onClick={(e) => {
                settextButton(e.target.value);
              }}
            >
              Drama
            </button>
            <button
              style={{ margin: "10px", backgroundColor: "transparent" }}
              value="fantasy"
              onClick={(e) => {
                settextButton(e.target.value);
              }}
            >
              Fantasy
            </button>
            <button
              style={{ margin: "10px", backgroundColor: "transparent" }}
              value="horror"
              onClick={(e) => {
                settextButton(e.target.value);
              }}
            >
              Horror
            </button>
            <button
              style={{ margin: "10px", backgroundColor: "transparent" }}
              value="mystery"
              onClick={(e) => {
                settextButton(e.target.value);
              }}
            >
              Mystery
            </button>
            <button
              style={{ margin: "10px", backgroundColor: "transparent" }}
              value="romance"
              onClick={(e) => {
                settextButton(e.target.value);
              }}
            >
              Romance
            </button>
          </Offcanvas.Body>
        </Offcanvas>
      </>

      <input
        type="text"
        placeholder="Search movies"
        style={{ backgroundColor: "rgb(0,0,0,0.8)", color: "white" }}
        onChange={(e) => {
          settext(e.target.value);
        }}
      />

      {movies ? (
        movies
          .filter((ownmovie) =>
            ownmovie.category.toLowerCase().includes(textButton.toLowerCase())
          )
          .filter((ownmovie) =>
            ownmovie.moviesName.toLowerCase().includes(text.toLowerCase())
          )
          .map((ownmovie) => (
            <CardMovies ownmovie={ownmovie} key={ownmovie._id} />
          ))
      ) : (
        <div>ther not movies</div>
      )}
    </div>
  );
};

export default ListMovies;
