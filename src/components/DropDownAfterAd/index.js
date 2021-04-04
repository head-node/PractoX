import React from "react";
import "./index.css";
function DropDown(props) {
  const changeSymbol = (e) => {};
  return (
    <div>
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-block "
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Practo <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse "
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <a class="dropdown-item" href="#">
                About
              </a>
              <a class="dropdown-item" href="#">
                Blog
              </a>
              <a class="dropdown-item" href="#">
                Careers
              </a>
              <a class="dropdown-item" href="#">
                Press
              </a>
              <a class="dropdown-item" href="#">
                Contact us
              </a>
            </div>
          </div>
        </div>
        {/* For Patients */}
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-block "
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                For Patients
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse "
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <a class="dropdown-item" href="#">
                Search For Clinics
              </a>
              <a class="dropdown-item" href="#">
                Search For Hospitals
              </a>
              <a class="dropdown-item" href="#">
                Search For Doctors
              </a>
              <a class="dropdown-item" href="#">
                Book Diagnostic Tests
              </a>
              <a class="dropdown-item" href="#">
                Book Full Body Checkups
              </a>
              <a class="dropdown-item" href="#">
                Practo Plus
              </a>
              <a class="dropdown-item" href="#">
                Health App
              </a>
              <a class="dropdown-item" href="#">
                Practo Drive
              </a>
            </div>
          </div>
        </div>
        {/* For Doctors */}
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-block "
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                For Doctors
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse "
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <a class="dropdown-item" href="#">
                Practo Consult
              </a>
              <a class="dropdown-item" href="#">
                Practo Health
              </a>
              <a class="dropdown-item" href="#">
                Feed
              </a>
              <a class="dropdown-item" href="#">
                Practo Profile
              </a>
            </div>
          </div>
        </div>
        {/* For Clinics */}
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-block "
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                For Clinics
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse "
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <a class="dropdown-item" href="#">
                Ray By Practo
              </a>
              <a class="dropdown-item" href="#">
                Practo Reach
              </a>
              <a class="dropdown-item" href="#">
                Ray Tab
              </a>
              <a class="dropdown-item" href="#">
                Practo Pro
              </a>
            </div>
          </div>
        </div>
        {/* For Hospitals */}
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-block "
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                For Hospitals
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse "
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <a class="dropdown-item" href="#">
                Insta By Practo
              </a>
              <a class="dropdown-item" href="#">
                Qikwell By Practo
              </a>
              <a class="dropdown-item" href="#">
                Practo Profile
              </a>
              <a class="dropdown-item" href="#">
                Practo Reach
              </a>
            </div>
          </div>
        </div>
        {/* More */}
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-block "
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                More
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse "
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <a class="dropdown-item" href="#">
                Help
              </a>
              <a class="dropdown-item" href="#">
                Developers
              </a>
              <a class="dropdown-item" href="#">
                Primary Policy
              </a>
              <a class="dropdown-item" href="#">
                Terms and Conditions
              </a>
              <a class="dropdown-item" href="#">
                Healthcare Direcory
              </a>
              <a class="dropdown-item" href="#">
                Corporate Wellness
              </a>
            </div>
          </div>
        </div>
        {/* Social */}
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-block "
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Social
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse "
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <a class="dropdown-item" href="#">
                Facebook
              </a>
              <a class="dropdown-item" href="#">
                Instagram
              </a>
              <a class="dropdown-item" href="#">
                Youtube
              </a>
              <a class="dropdown-item" href="#">
                Twitter
              </a>
              <a class="dropdown-item" href="#">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*  **** ********     Columns of data for min width:768px         **** ********* */}
      <div id="flex-container">
        <div>
          <h2>Practo</h2>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Contact us</p>
        </div>
        <div>
          <h2> For Patients</h2>
          <p>Search For Clinics</p>
          <p>Search For Hospitals</p>
          <p>Search For Doctors</p>
          <p>Book Diagnostic Tests</p>
          <p>Book Full Body Checkups</p>
          <p> Practo Plus</p>
          <p> Health App</p>
          <p>Practo Drive</p>
        </div>
        <div>
          <div>
            <h2>For Doctor</h2>
            <p>Practo Profile</p>
          </div>
          <div>
            <h2>For Clinics</h2>
            <p>Ray By Practo</p>
            <p>Practo Reach</p>
            <p>Ray Tab</p>
            <p>Practo Pro</p>
          </div>
        </div>
        <div>
            <h2>For Hospitals</h2>
            <p> Insta By Practo</p>
            <p>Qikwell By Practo</p>
            <p>Practo Profile</p>
            <p> Practo Reach</p>
            <p>Practo Drive</p>
        </div>
        <div>
            <h2>More</h2>
            <p>Help</p>
            <p>Developers</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Healthcare Directory</p>
            <p>Practo Health Wiki</p>
            <p>Corporate Wellness</p>

        </div>
        <div>
            <h2>Social</h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Youtube</p>
            <p>Github</p>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
