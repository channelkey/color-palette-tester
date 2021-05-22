import * as React from "react";
import { useState } from "react";
import shuffle from "lodash/shuffle";

const IndexPage = () => {
   const initialColors = [
      "blue",
      "teal",
      "green",
      "yellow",
      "orange",
      "red",
      "magenta",
      "gray",
   ];

   const [colors, setColors] = useState(initialColors);

   return (
      <main>
         <title>Color Palette Tester</title>
         <div className="container-fluid">
            <div className="row">
               {colors.map((color) => {
                  return (
                     <div className="col-md-6 col-lg-6 col-xl-3 mt-4">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-black rounded mb-4">
                           <div className="container-fluid">
                              <a
                                 className="navbar-brand"
                                 href="https://www.google.com"
                              >
                                 Navbar
                              </a>

                              <div className="float-end">
                                 <a
                                    className={`btn btn-link text-${color}-200 d-inline`}
                                    href="https://www.google.com"
                                 >
                                    Other
                                 </a>

                                 <button
                                    className={`btn btn-outline-${color}-200 ms-4`}
                                    type="submit"
                                 >
                                    Call to action
                                 </button>
                              </div>
                           </div>
                        </nav>
                        <div
                           className="toast show mb-4 float-end"
                           role="alert"
                           aria-live="assertive"
                           aria-atomic="true"
                        >
                           <div className="toast-header">
                              <div
                                 className={`rounded me-2 bg-${color}`}
                                 style={{ width: "20px", height: "20px" }}
                              />
                              <strong className="me-auto">Notification</strong>
                              <small>11 mins ago</small>
                              <button
                                 type="button"
                                 className="btn-close"
                                 data-bs-dismiss="toast"
                                 aria-label="Close"
                              ></button>
                           </div>
                           <div className="toast-body">
                              Hello, world! This is a toast message.
                           </div>
                        </div>

                        <div className="clearfix" />

                        <div className="card mb-4">
                           <div className="card-body">
                              <h5 className="card-title">
                                 {color[0].toUpperCase() + color.slice(1) + " "}
                                 interactive element
                              </h5>
                              <p className="card-text">
                                 Supporting text with a link to even more{" "}
                                 <a
                                    href="https://www.google.com"
                                    className={`text-${color}-700`}
                                 >
                                    additional content
                                 </a>
                                 .
                              </p>
                              <div className="float-end">
                                 <a
                                    className={`btn btn-link text-${color}-700`}
                                 >
                                    Link
                                 </a>
                                 <button
                                    className={`btn btn-outline-${color}-700 ms-4`}
                                 >
                                    Option
                                 </button>
                                 <button
                                    className={`btn btn-${color} ms-4`}
                                    onClick={(e) => {
                                       setColors(shuffle(colors));
                                    }}
                                 >
                                    Shuffle colors
                                 </button>
                              </div>
                           </div>
                        </div>

                        <div
                           className={`alert alert-${color} d-flex align-items-center mb-4`}
                           role="alert"
                        >
                           <svg
                              className="bi flex-shrink-0 me-2"
                              width="22"
                              height="22"
                              role="img"
                              aria-label="Alert:"
                              id="check-circle-fill"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                           >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                           </svg>
                           <div>
                              An example alert with{" "}
                              <a
                                 href="https://www.google.com"
                                 className="alert-link"
                              >
                                 an example link
                              </a>
                              .
                           </div>
                        </div>
                        <br className="mb-4"></br>
                     </div>
                  );
               })}
            </div>
         </div>
      </main>
   );
};

export default IndexPage;
