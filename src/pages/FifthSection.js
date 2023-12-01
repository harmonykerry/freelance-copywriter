import React from "react";

const FifthSection = () => {
  return (
    <section className="section_project">
      <h3 className="side-heading">
        <span>How to get started</span>
      </h3>
      <div className="content">
        <div className="img">
          <img
            className="imgbackground"
            src="https://source.unsplash.com/t1NEMSm1rgI"
            alt="woman sitting down"
          />
        </div>
        <div className="text">
          <h2 className="heading">
            <span className="displayBlock">
              <em>Let’s discuss</em>
            </span>
            <span>YOUR PROJECT</span>
          </h2>
          <div className="displayBlock">
            <p>
              Get in touch and say hello. I'd love to chat about your project
              and what you’re hoping to achieve.
            </p>
            <a className="read-more">Contact me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
