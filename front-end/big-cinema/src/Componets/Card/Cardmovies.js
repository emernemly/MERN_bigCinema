import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { usertoken } from "../../Redux/ActionAndType/Action";
import Rating from "@mui/material/Rating";
import { Link, useNavigate } from "react-router-dom";
import {
  delete_movies,
  my_movies,
  own_movie,
} from "../../Redux/ActionAndType/moviesAction";
import Edit_movies from "../ListMovies/Edit_movies";

const CardMovies = ({ ownmovie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(usertoken());
  }, []);
  const handledelete = () => {
    if (window.confirm("are you sure ?")) {
      dispatch(delete_movies(ownmovie._id, ownmovie.moviesId._id));
    }
  };
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div
      className="cards"
      style={{
        margin: "30px",
      }}
    >
      <Card
        style={{
          width: "18rem",
          backgroundColor: "transparent",
          color: "white",

          borderRadius: "15px",
          overflow: "auto",
        }}
      >
        <Link to={`/profilmovie/${ownmovie._id}`}>
          <Card.Img
            variant="top"
            src={`/${ownmovie.image}`}
            style={{ height: "300px" }}
          />
        </Link>
        <Card.Body style={{ backroundColor: "rgb(0,0,0,0.8)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <Card.Title>{ownmovie.moviesName}</Card.Title>
            <Rating name="read-only" value={ownmovie.rating} readOnly />
          </div>
          {user.role === "cinema" && (
            <div style={{ display: "flex" }}>
              <Edit_movies ownmovie={ownmovie} />
              <Button
                style={{
                  marginLeft: "5px",
                  backgroundColor: "transparent",
                  color: "rgb(226, 116, 7)",
                }}
                variant="warning"
                onClick={handledelete}
              >
                DELETE
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardMovies;
