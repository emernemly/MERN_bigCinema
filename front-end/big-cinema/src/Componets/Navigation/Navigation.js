import React from "react";
import "./Navigation.css";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/ActionAndType/Action";
const Navigation = ({ setsearch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  const [text, settext] = useState(text);
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.userReducer.user);

  const handlelogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div style={{ width: "100%", marginBottom: "80px" }}>
      {token && (
        <Navbar
          style={{
            backgroundColor: "rgb(0,0,0,0.8)",

            width: "100%",
          }}
          expand="lg"
        >
          <Container fluid>
            <Navbar.Brand>
              <img
                style={{ height: "95px", marginBottom: "0", width: "180px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQOO1OaIycyZ3YepRXfJMJ1c9KRBb_llDYOk9OftjCbEaQux3vpdxMe75i7L4n_9CIKw&usqp=CAU"
                alt="cinema city"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px", color: "white" }}
                navbarScroll
              >
                {user.role === "user" && (
                  <Link to="listCinema">
                    <button
                      href="#action1"
                      style={{
                        color: "#f5821e",
                        margin: "10px",
                        backgroundColor: "transparent",
                        border: "none",
                        fontSize: "20px",
                      }}
                    >
                      Home
                    </button>
                  </Link>
                )}
                {user.role === "user" && (
                  <Link to="allmovies">
                    <button
                      href="#action2"
                      style={{
                        color: "#f5821e",
                        margin: "10px",
                        backgroundColor: "transparent",
                        border: "none",
                        fontSize: "20px",
                      }}
                    >
                      Movies
                    </button>
                  </Link>
                )}
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search Cinema "
                  aria-label="Search"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    borderRadius: "4px",
                    margin: "10px",
                  }}
                  onChange={(e) => setsearch(e.target.value)}
                />
              </Form>
            </Navbar.Collapse>
          </Container>
          <button onClick={handlelogout}>logout</button>
        </Navbar>
      )}
    </div>
  );
};

export default Navigation;
