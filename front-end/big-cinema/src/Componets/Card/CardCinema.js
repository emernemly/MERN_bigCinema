import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { usertoken } from "../../Redux/ActionAndType/Action";
import { delete_cinema } from "../../Redux/ActionAndType/cinemaAction";
import Rating from "@mui/material/Rating";
import Edit_cinema from "../List_cinema/Edit_cinema";
import { Link } from "react-router-dom";
import Add_movies from "../ListMovies/Add_movies";

const CardCinema = ({ ownCinema }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usertoken());
  }, []);
  const handledelete = () => {
    if (window.confirm("are you sure ?")) {
      dispatch(delete_cinema(ownCinema._id));
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
          color: "rgb(226, 116, 7)",
          overflow: "auto",
          borderRadius: "15px",
        }}
      >
        <Link to={`/movies/${ownCinema._id}`}>
          <Card.Img
            variant="top"
            src={`/${ownCinema.image}`}
            style={{ height: "300px" }}
          />
        </Link>

        <Card.Body style={{ backroundColor: "rgb(0,0,0,0.8)" }}>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <Card.Title>{ownCinema.cinema_Name}</Card.Title>
            <Rating
              style={{ margin: "10" }}
              name="read-only"
              value={ownCinema.rate}
              readOnly
            />
          </div>
          {user.role === "cinema" && (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ display: "flex" }}>
                <Edit_cinema ownCinema={ownCinema} />
                <Button
                  style={{
                    marginLeft: "5px",
                    backgroundColor: "transparent",
                    color: "rgb(226, 116, 7)",
                  }}
                  onClick={handledelete}
                  variant="warning"
                >
                  DELETE
                </Button>
              </div>
              <Add_movies id={ownCinema._id} />
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCinema;
