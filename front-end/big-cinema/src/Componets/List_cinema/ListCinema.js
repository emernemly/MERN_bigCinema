import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usertoken } from "../../Redux/ActionAndType/Action";
import { all_cinema, my_cinema } from "../../Redux/ActionAndType/cinemaAction";
import CardCinema from "../Card/CardCinema";
import Add_cinema from "./Add_cinema";

const ListCinema = ({ search }) => {
  const dispatch = useDispatch();
  //function timeout(ms) {
  //return new Promise((resolve) => setTimeout(resolve, ms));
  // }
  useEffect(() => {
    dispatch(usertoken());
  }, []);
  const user = useSelector((state) => state.userReducer.user);

  useEffect(async () => {
    if (user.role === "cinema") {
      dispatch(my_cinema());
    } else {
      dispatch(all_cinema());
    }
  }, [user]);
  const cinema = useSelector((state) => state.cinemaReducer.cinema);

  return (
    <div>
      <div>
        {user.role === "cinema" && (
          <div>
            {" "}
            <Add_cinema />
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "30px",
          padding: "100px",
        }}
      >
        {cinema
          .filter((ownCinema) =>
            ownCinema.cinema_Name.toLowerCase().includes(search.toLowerCase())
          )
          .map((ownCinema) => {
            return <CardCinema ownCinema={ownCinema} key={ownCinema._id} />;
          })}
      </div>
    </div>
  );
};

export default ListCinema;
