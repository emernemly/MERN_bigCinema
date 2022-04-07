import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { usertoken } from "../../Redux/ActionAndType/Action";
import { own_movie } from "../../Redux/ActionAndType/moviesAction";
import {
  add_straem,
  find_stream,
} from "../../Redux/ActionAndType/streamAction";
import { add_ticket } from "../../Redux/ActionAndType/Ticket";
import "./MoviesProfile.css";
const MoviesProfile = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const [movies, setmovies] = useState("");
  useEffect(() => {
    dispatch(usertoken());
  }, []);
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(own_movie(_id));
  }, []);
  useEffect(() => {
    dispatch(find_stream(_id));
  }, []);
  const stream = useSelector((state) => state.streamReducer.moviesStream);
  console.log(stream);
  const movie = useSelector((state) => state.moviesReducer.movie);
  console.log(movie);
  return (
    <div className="contentCon">
      <div className="poster">
        <div className="part-left">
          {" "}
          <img src={`/${movie.image}`} />
        </div>
        <div className="part-right">
          <iframe
            width="560"
            height="315"
            $
            style={{ margin: "10px" }}
            src="https://www.youtube.com/embed/hEJnMQG9ev8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="block"></div> <div className="block" />{" "}
          <div className="block" /> <div className="block" />{" "}
          <div className="block" />
        </div>
      </div>
      <div className="top-text">
        <div className="top-text-1">
          <h1>
            {" "}
            {movie.moviesName}
            <small>
              <q>
                {" "}
                <h4>{movie.description}</h4>
              </q>
            </small>{" "}
          </h1>
          <hr />
          <h4>
            {" "}
            {movie.category} | {movie.timeMovies} | {movie.region}{" "}
          </h4>
        </div>
      </div>

      <div className="top-text" style={{ marginBottom: "20px" }}>
        <div className="top-text-1" style={{ marginBottom: "50px" }}>
          <div
            style={{
              color: "orange",
              backgroundColor: "black",
              width: "1000px",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <h1>E-ticket </h1>
            <h1>3,91$</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <h4>
              * 5 days to see it and see it again, from the first reading.{" "}
            </h4>
            <button
              style={{ color: "black", margin: "10px" }}
              onClick={() => dispatch(add_ticket(_id))}
            >
              by ticket
            </button>
            {stream.length !== 0 && (
              <Link to={`/movie/${movie._id}`}>
                <button style={{ color: "black", margin: "10px" }}>
                  Watch movie
                </button>
              </Link>
            )}
          </div>
          {user.role === "cinema" && (
            <>
              {stream.length == 0 && (
                <>
                  <button onClick={() => dispatch(add_straem(_id, { movies }))}>
                    add movie
                  </button>

                  <input
                    type="file"
                    placeholder="movies"
                    onChange={(e) => {
                      setmovies(e.target.files[0]);
                    }}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesProfile;
