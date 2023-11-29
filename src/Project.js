import React from 'react'
import Data from './Data'
import { Link } from 'react-router-dom'

const Project=()=> {
  return (
    <section>
      <div className="container pb-5 pt-5 project ">
        <h2> Projects</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="card-container">
              <div className="d-flex">
                {Data.map((item, index) => (
                  <div
                    className="card mt-5"
                    key={index}
                  >
                    <img
                      src={item.img}
                      className="card-img-top mt-3"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <p>{item.techUsed}</p>
                      <Link
                        to={item.link}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project