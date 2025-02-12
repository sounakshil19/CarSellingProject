import React from 'react';
import About from './About';
import ProductList from './ProductList';
import 'glightbox/dist/css/glightbox.css';
// import GLightbox from 'glightbox';
import Footer from './Footer';

const Home = () => {
  const testimonials = [
    { name: "Saul Goodman", title: "CEO & Founder" },
    { name: "Sara Wilsson", title: "Designer" },
    { name: "Jena Karlis", title: "Store Owner" },
    { name: "Matt Brandon", title: "Freelancer" },
    { name: "John Larson", title: "Entrepreneur" },
  ];

  const portfolioItems = [
    { category: "app", label: "App" },
    { category: "product", label: "Product" },
    { category: "branding", label: "Branding" },
    { category: "books", label: "Books" },
    { category: "app", label: "App" },
  ];
  const teamMembers = [
    { name: "Walter White", role: "Chief Executive Officer", img: "team-1.jpg" },
    { name: "Sarah Jhonson", role: "Product Manager", img: "team-2.jpg" },
    { name: "William Anderson", role: "CTO", img: "team-3.jpg" },
  ];


  
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img src="https://images.unsplash.com/photo-1564435147636-8ca0966b0275?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" data-aos="fade-in" />

        <div className="container d-flex flex-column align-items-center">
          <h2 data-aos="fade-up" data-aos-delay="100">welcome to Brotomotiv</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            We are team of talented designers modified vintage cars
          </p>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <a href="#about" className="btn-get-started">
            
              Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=g3IO6HsLFak"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle"></i>
              <span>Watch Video</span>
            </a>
          </div>
        </div>
      </section>
      <ProductList/>
      <About/>
      
      {/* Stats Section */}
      <section id="stats" className="stats section light-background">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Projects</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-headset color-green flex-shrink-0"></i>
                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1463"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-people color-pink flex-shrink-0"></i>
                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="15"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     

      <div>
      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Featured Services</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            {[1, 2, 3].map((num) => (
              <div key={num} className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay={num * 100}>
                <div className="service-item">
                  <div className="img">
                    <img src={`assets/img/services-${num}.jpg`} className="img-fluid" alt="" />
                  </div>
                  <div className="details position-relative">
                    <div className="icon">
                      <i className={`bi bi-icon-${num}`}></i>
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>Service {num}</h3>
                    </a>
                    <p>Service {num} description goes here.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="clients section light-background">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="col-xl-2 col-md-3 col-6 client-logo">
                <img src={`assets/img/clients/client-${num}.png`} className="img-fluid" alt="Client" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container">
          <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
            {[1, 2, 3, 4].map((num) => (
              <li key={num} className="nav-item col-3">
                <a className={`nav-link ${num === 1 ? 'active show' : ''}`} data-bs-toggle="tab" data-bs-target={`#features-tab-${num}`}>
                  <i className={`bi bi-icon-${num}`}></i>
                  <h4 className="d-none d-lg-block">Feature {num}</h4>
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            {[1, 2, 3].map((num) => (
              <div key={num} className={`tab-pane fade ${num === 1 ? 'active show' : ''}`} id={`features-tab-${num}`}>
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Feature {num} Title</h3>
                    <p className="fst-italic">Feature {num} description goes here.</p>
                    <ul>
                      {[1, 2, 3].map((item) => (
                        <li key={item}><i className="bi bi-check2-all"></i> Feature {num} point {item}.</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src={`https://brotomotiv.in/wp-content/uploads/2021/12/s7.jpeg`} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

    <div>
      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container">
          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div className="tab-pane fade" id="features-tab-4">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="assets/img/working-4.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services 2 Section */}
      <section id="services-2" className="services-2 section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>CHECK OUR SERVICES</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="col-md-6" data-aos="fade-up" data-aos-delay={num * 100}>
                <div className="service-item d-flex position-relative h-100">
                  <i className={`bi bi-icon-${num} icon flex-shrink-0`}></i>
                  <div>
                    <h4 className="title"><a href="#" className="stretched-link">Service {num}</a></h4>
                    <p className="description">Service {num} description goes here.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
     

    <section>
      {/* Testimonials Section */}
      <div id="testimonials" className="testimonials section dark-background">
        <img src="assets/img/testimonials-bg.jpg" className="testimonials-bg" alt="" />
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="testimonial-wrapper">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item" key={index} style={{display:"inline-block",marginLeft:"50px"}}>
                <img
                  src={`assets/img/testimonials/testimonials-${index + 1}.jpg`}
                  className="testimonial-img"
                  alt=""
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.title}</h4>
                <div className="stars">
                  {Array(5).fill().map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Sample testimonial text.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>CHECK OUR PORTFOLIO</p>
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              {portfolioItems.map((item, index) => (
                <li key={index} data-filter={`.filter-${item.category}`} className={index === 0 ? "filter-active" : ""}>
                  {item.label}
                </li>
              ))}
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {portfolioItems.map((item, index) => (
                <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.category}`}>
                  <div className="portfolio-content h-100">
                    <img src={`assets/img/portfolio/${item.category}-${index + 1}.jpg`} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>{`${item.label} ${index + 1}`}</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href={`assets/img/portfolio/${item.category}-${index + 1}.jpg`} title={`${item.label} ${index + 1}`} data-gallery={`portfolio-gallery-${item.category}`} className="glightbox preview-link">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details" className="details-link">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id="team" className="team section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>CHECK OUR TEAM</p>
        </div>
        <div className="container">
          <div className="row gy-5">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                <div className="member">
                  <div className="pic">
                    <img src={`assets/img/team/${member.img}`} className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                    <div className="social">
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
   
  );
};

export default Home;