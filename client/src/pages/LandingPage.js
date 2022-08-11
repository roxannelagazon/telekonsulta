import Logo from "../components/telekonsulta.png";
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "./Image/heroImage1.jpg"
import Image2 from "./Image/heroImage2.jpg"
import Image3 from "./Image/heroImage3.jpg"
import Image4 from "./Image/heroImage4.jpg"
import "../layout.css";




function LandingPage() {
  return (
    <div>
      <div className="d-flex bordered border-bottom justify-content-between">
        <div className="opacity-50 ms-5 col-6 mt-3 container">
          <h6>Operating Hours: Monday to Sunday 8am to 10pm</h6>
        </div>
        <div className="opacity-75 mt-3 me-4">
          <a>
            <button className="btn btn-sm border border-2 mb-2 me-1">
              <i className="ri-facebook-fill"></i>
            </button>
          </a>
          <a>
            <button className="btn btn-sm border border-2 mb-2 me-1">
              <i className="ri-twitter-fill"></i>
            </button>
          </a>
          <a>
            <button className="btn btn-sm border border-2 mb-2 me-1">
              <i className="ri-instagram-fill"></i>
            </button>
          </a>
          <a>
            <button className="btn btn-sm border border-2 mb-2 me-1">
              <i className="ri-pinterest-fill"></i>
            </button>
          </a>
        </div>
        <hr />
      </div>

      <div className="" style={{ fontSize: "15px" }}>
        <div className="d-flex justify-content-around">
          <div className="d-flex">
            <img src={Logo} style={{ width: "10rem" }} className="mt-3"></img>
            <h1 className="mt-5">
              Tele
              <span style={{ color: "#139490" }} className="fst-italic">
                Konsulta
              </span>
            </h1>
          </div>
          <div className="d-flex mt-5 opacity-75">
            <div className="mt-3 me-1" style={{ fontSize: "30px" }}>
              <i className="ri-mail-line border border-dark rounded-circle p-2"></i>
            </div>
            <div>
              <p className="fw-bold text-dark mt-2">Email</p>
              <p>info@telekonsulta.com</p>
            </div>
          </div>
          <div className="d-flex mt-5  opacity-75">
            <div className="mt-3 me-1" style={{ fontSize: "30px" }}>
              <i className="ri-phone-line border border-dark rounded-circle p-2"></i>
            </div>
            <div>
              <p className="fw-bold text-dark mt-2">Call Now</p>
              <p>+ (88017) - 123 - 4567</p>
            </div>
          </div>
          <div className="d-flex mt-5  opacity-75">
            <a href="/login">
              <button
                className="mt-3 btn"
                typeof="button"
                style={{ backgroundColor: "#139490" }}
              >
                Set an Appointment
              </button>
            </a>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#139490" }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="text-light fw-bold fs-1">Group of Experienced Doctors</h1>
          <p className="text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className="btn btn-bordered border-white text-white fs-3 mt-4 mb-5 btn-hero">About Us</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1 className="text-light fw-bold fs-1">We Care about Your Health</h1>
        <p className="text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button className="btn btn-bordered border-white text-white fs-3 mt-4 mb-5 btn-hero">Explore More</button>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1 className="text-light fw-bold fs-1">Best Health Technology</h1>
        <p className="text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button className="btn btn-bordered border-white text-white fs-3 mt-4 mb-5 btn-hero">Inquire Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image4}
          alt="Fourth slide"
        />

        <Carousel.Caption>
        <h1 className="text-light fw-bold fs-1">Health Research Experts</h1>
        <p className="text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button className="btn btn-bordered border-white text-white fs-3 mt-4 mb-5 btn-hero">Register Now</button>
        </Carousel.Caption>
      </Carousel.Item>      
    </Carousel>

    <div className="container d-flex justify-content-center mt-5">
        <div className="border p-4 text-white col-4" style={{ backgroundColor: "#43918f" }}>
          <div className="fs-1"><i className="ri-user-line"></i></div>
          <h2 className="fw-bold text-white">Register</h2>
          <a href="/login"><button className="btn btn-bordered border-white text-white fs-3 mt-3 mb-3 btn-hero">Click here</button></a>
          <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="border p-4 text-white col-4" style={{ backgroundColor: "#54b0ad" }}>
          <div className="fs-1"><i className="ri-hospital-line"></i></div>
          <h2 className="fw-bold text-white">Choose your Doctor </h2>
          <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis suscipit magni doloremque enim, a officia.</p>
          <button className="btn btn-bordered border-white text-white mt-4 mb-2 btn-hero">Read more</button>
        </div>        
        <div className="border p-4 text-white col-4" style={{ backgroundColor: "#4ed4cf" }}>
          <div className="fs-1"><i className="ri-calendar-check-line"></i></div>
          <h2 className="fw-bold text-white">Book an Appointment</h2>
          <p className="text-white">Monday - Sunday</p><span>8:00 AM - 10:00 PM</span>
          <hr/>
          <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>        
    </div>

    <div className="mt-5 container">
        <h1 className="fs-2 text-center"><span className="fw-bold">Experts</span> from various Medical Fields</h1>
        <div className="ms-5 row d-flex justify-content-around mt-5">
            <div className="col-3">
                <div className="fs-1"><i className="ri-checkbox-circle-line"></i></div>
                <h2>Cardiology</h2>
                <p className="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-3">
                <div className="fs-1"><i className="ri-checkbox-circle-line"></i></div>
                <h2>Dermatology</h2>
                <p className="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className="ms-5 row d-flex justify-content-around mt-5">
            <div className="col-3">
                <div className="fs-1"><i className="ri-checkbox-circle-line"></i></div>
                <h2>Family and General Practice</h2>
                <p className="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-3">
                <div className="fs-1"><i className="ri-checkbox-circle-line"></i></div>
                <h2>Public Health</h2>
                <p className="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>

    <footer className="mt-5 py-3" style={{ backgroundColor: "#105250" }}>
        <div className="d-flex justify-content-around ms-4">
            <div className="col-4">
                <h5 className="text-white">Tele<span style={{ color: "#139490" }} className="fst-italic">Konsulta</span></h5>
                <p className="text-white">Office Address:</p>
                <p className="text-white">75 Adamsville Road</p>
                <p className="text-white">Harlingen</p>
                <p className="text-white">Mandaluyong City, Philippines</p>
            </div>
            <div className="col-4">
                <h5 className="text-white fw-bold">Services</h5>
                <p className="text-white"> > Cardiology</p>
                <p className="text-white"> > Public Health</p>
                <p className="text-white"> > Dermatology</p>
                <p className="text-white"> > Pediatrics</p>
                <p className="text-white"> > Family and General Practice</p>
                <p className="text-white"> > Psychiatry</p>
            </div>
            <div className="col-4">
                <h5 className="text-white fw-bold">Recent Arcticles</h5>
                <a>
                    <p className="fw-bold text-white">How to treat common colds</p>
                    <p className="text-white opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, pariatur.</p>                
                </a>
                <a>
                    <p className="fw-bold text-white">Severe Cough</p>
                    <p className="text-white opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, pariatur.</p>                
                </a>
            </div>

        </div>
    </footer>


     
    </div>
  );
}

export default LandingPage;
