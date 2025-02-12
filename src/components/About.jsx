import React from 'react'
// import Footer from './Footer'

const About = () => {
  return (
    <>
    {/* About Section */}
    <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3>Voluptatem dignissimos provident laboris nisi ut aliquip ex ea commodo</h3>
              <img src="https://images.unsplash.com/photo-1724002011420-0ede2a3cd6d5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid rounded-4 mb-4" alt="" />
              <p>Ut fugiat ut sunt quia veniam...</p>
              <p>Temporibus nihil enim deserunt sed ea...</p>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Ullamco laboris nisi...</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Duis aute irure dolor...</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Ullamco laboris nisi ut aliquip...</span>
                  </li>
                </ul>
                <p>Ullamco laboris nisi ut aliquip...</p>
                <div className="position-relative mt-4">
                  <img src="https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid rounded-4" alt="" />
                  <a
                    href="https://www.youtube.com/watch?v=bZgZ-LD579k"
                    className="glightbox pulsating-play-btn"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default About