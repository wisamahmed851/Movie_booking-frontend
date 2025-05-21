import React, { useEffect, useState } from "react";
import { Products } from "../api/products";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const elements = document.querySelectorAll("[data-background]");
    elements.forEach((el) => {
      const bg = el.getAttribute("data-background");
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });
    const fetchData = async () => {
      try{
        const result = await Products();
        setProducts(result);
      }catch(error){
        console.error("THe Products Is Not fetched Propperly");
      }
    }


    fetchData();
  }, []);

  return (
    <>
    <section className="banner-section">
      <div
        className="banner-bg bg_img bg-fixed"
        data-background="frontend/images/banner/banner01.jpg"
      ></div>
      <div className="container mx-auto px-4">
        <div className="banner-content">
          <h1 className="title cd-headline clip">
            <span className="d-block">book your</span> <br />tickets for
            <span className="color-theme cd-words-wrapper p-0 m-0">
              <b className="is-visible"> Movie</b>
            </span>
          </h1>
          <p>
            Safe, secure, reliable ticketing. Your ticket to live entertainment!
          </p>
        </div>
      </div>
    </section>
    {/* ==========Movie-Main-Section========== */}

<section className="movie-section padding-top padding-bottom bg-two">
  <div className="container">
    <div className="row flex-wrap-reverse justify-content-center">
      <div className="col-lg-3 col-sm-10 mt-50 mt-lg-0">
        <div className="widget-1 widget-facility">
          <div className="widget-1-body">
            <ul>
              <li>
                <a href="">
                  <span className="img">
                    <img
                      src="/frontend/images/sidebar/icons/sidebar01.png"
                      alt="sidebar"
                    />
                  </span>
                  <span className="cate">24X7 Care</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="img">
                    <img
                      src="/frontend/images/sidebar/icons/sidebar02.png"
                      alt="sidebar"
                    />
                  </span>
                  <span className="cate">100% Assurance</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="img">
                    <img
                      src="/frontend/images/sidebar/icons/sidebar03.png"
                      alt="sidebar"
                    />
                  </span>
                  <span className="cate">Our Promise</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget-1 widget-banner">
          <div className="widget-1-body">
            <a href="">
              <img
                src="/frontend/images/sidebar/banner/banner01.jpg"
                alt="banner"
              />
            </a>
          </div>
        </div>

        <div className="widget-1 widget-trending-search">
          <h3 className="title">Trending Searches</h3>
          <div className="widget-1-body">
            <ul>
              <li>
                <h6 className="sub-title">
                  <a href="">mars</a>
                </h6>
                <p>Movies</p>
              </li>
              <li>
                <h6 className="sub-title">
                  <a href="">alone</a>
                </h6>
                <p>Movies</p>
              </li>
              <li>
                <h6 className="sub-title">
                  <a href="">music event</a>
                </h6>
                <p>event</p>
              </li>
              <li>
                <h6 className="sub-title">
                  <a href="">NBA Games 2020</a>
                </h6>
                <p>Sports</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget-1 widget-banner">
          <div className="widget-1-body">
            <a href="">
              <img
                src="/frontend/images/sidebar/banner/banner02.jpg"
                alt="banner"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-9">
        <div className="article-section padding-bottom">
          <div className="section-header-1">
            <h2 className="title">movies</h2>
            <a className="view-all" href="/movies-grid">View All</a>
          </div>

          {/* Movie Cards Component Goes Here */}
        </div>

        <div className="article-section padding-bottom">
          <div className="section-header-1">
            <h2 className="title">events</h2>
            <a className="view-all" href="">View All</a>
          </div>

          <div className="row mb-30-none justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="event-grid">
                <div className="movie-thumb c-thumb">
                  <a href="">
                    <img
                      src="/frontend/images/event/event01.jpg"
                      alt="event"
                    />
                  </a>
                  <div className="event-date">
                    <h6 className="date-title">28</h6>
                    <span>Dec</span>
                  </div>
                </div>
                <div className="movie-content bg-one">
                  <h5 className="title m-0">
                    <a href="">Digital Economy Conference 2020</a>
                  </h5>
                  <div className="movie-rating-percent">
                    <span>327 Montague Street</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="event-grid">
                <div className="movie-thumb c-thumb">
                  <a href="">
                    <img
                      src="/frontend/images/event/event02.jpg"
                      alt="event"
                    />
                  </a>
                  <div className="event-date">
                    <h6 className="date-title">28</h6>
                    <span>Dec</span>
                  </div>
                </div>
                <div className="movie-content bg-one">
                  <h5 className="title m-0">
                    <a href="">web design conference 2020</a>
                  </h5>
                  <div className="movie-rating-percent">
                    <span>327 Montague Street</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="event-grid">
                <div className="movie-thumb c-thumb">
                  <a href="">
                    <img
                      src="/frontend/images/event/event03.jpg"
                      alt="event"
                    />
                  </a>
                  <div className="event-date">
                    <h6 className="date-title">28</h6>
                    <span>Dec</span>
                  </div>
                </div>
                <div className="movie-content bg-one">
                  <h5 className="title m-0">
                    <a href="">digital thinkers meetup</a>
                  </h5>
                  <div className="movie-rating-percent">
                    <span>327 Montague Street</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ==========Movie-Main-Section========== */}

    </>
  );
};

export default Home;
