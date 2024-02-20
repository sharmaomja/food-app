  import React, { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import Badge from "react-bootstrap/Badge";
  import Modal from "../Modal";
  import Cart from "../screens/Cart";
  import { useCart } from "./ContextReducer";

  export default function Navbar() {
    let data = useCart() ?? [];
    const [cartView, setCartView] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("authToken");
      navigate("/login");
    };

    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#007791" }}
        >
          <div className="container-fluid">
            <Link
              className="navbar-brand fs-1"
              style={{ fontFamily: "Monospace" }}
              to="/"
            >
              Hangry Bird
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav me-auto mb-2">
                {localStorage.getItem("authToken") ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link active fs-4"
                      aria-current="page"
                      style={{ fontFamily: "Monospace" }}
                      to="/"
                    >
                      Orders
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>

              {!localStorage.getItem("authToken") ? (
                <div className="d-flex">
                  <Link
                    className="btn bg-white mx-1 text-dark"
                    style={{ fontFamily: "Monospace" }}
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="btn bg-white mx-1 text-dark"
                    style={{ fontFamily: "Monospace" }}
                    to="/createuser"
                  >
                    Sign-Up
                  </Link>
                </div>
              ) : (
                <div>
                  <div className="btn bg-white mx-2 text-dark"
                  onClick={()=>{setCartView(true)}}>
                    My Cart{" "}
                    <Badge pill bg="danger">
                    {data.length}
                    </Badge>
                  </div>

                  {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}


                  <div
                    className="btn bg-white mx-2 text-danger"
                    onClick={handleLogout}
                  > 
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
