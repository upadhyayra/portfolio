import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [input, setInput] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    alert("thank you");
    setInput("");
  };

  return (
    <section>
      <footer>
        <div className="container">
          <div
            className="row  d-flex"
            style={{ justifyContent: "space-between" }}
          >
            <div className="col-md-4 mt-1">
              <h4>Details</h4>
              <p>
                <strong>Phone</strong> : 678754467
              </p>
              <p>
                <strong>Email</strong> : rahul1223@gmail.com
              </p>
              <p>
                <strong>Address</strong> : murlipura Jaipur{" "}
              </p>
              <p>
                <strong>ZipCode</strong> : 302039
              </p>
            </div>
            <div className="col-md-2">
              <div className="follow">
                <h4 className="mb-3">Follow Me</h4>
                <div
                  className="d-flex mt-1"
                  style={{ justifyContent: "space-between" }}
                >
                  <Link to="https://www.instagram.com/" target="_blank">
                    <i class="bi bi-instagram " style={{ width: "300px" }}></i>
                  </Link>
                  <Link to="https://in.linkedin.com/" target="_blank">
                    <i class="bi bi-linkedin"></i>
                  </Link>
                  <Link to="https://twitter.com/" target="_blank">
                    <i class="bi bi-twitter"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <form
                onSubmit={(e) => {
                  handlesubmit(e);
                }}
              >
                <label htmlFor="" className="mb-2">
                  Contact Me
                </label>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="form-control mb-2"
                  placeholder="enter your email..."
                />
                {input.length === 0 ? (
                  <button
                    className="btn btn-danger"
                    style={{ display: "inline" }}
                    disabled
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className="btn btn-danger"
                    style={{ display: "inline" }}
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
