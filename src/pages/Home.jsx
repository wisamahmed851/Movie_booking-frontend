import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-background]");
    elements.forEach((el) => {
      const bg = el.getAttribute("data-background");
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });
  }, []);

  return (
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
  );
};

export default Home;
