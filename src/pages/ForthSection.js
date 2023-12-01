import React from "react";

const ForthSection = () => {
  return (
    <section className="section_testimonials stick">
      <ul className="">
        <li className="one active" data-intersecting="1">
          <div className="content">
            <span class="nav-title">CLIENT LOVE 1/4</span>
            <div className="content_wrapper">
              <blockquote>
                <p>
                  "Kylie is extremely professional and proficient copywriter.
                  She always makes herself accessible and her copywriting
                  delivers above and beyond time and time again. It is
                  liberating to have someone who you can trust, who gets you and
                  who is always easy to talk to in your corner. Everyone needs
                  her in their life."
                </p>
                <span className="reference">Angela Marshall Acupuncture</span>
              </blockquote>
              <div className="img">
                <img
                  className="imgbackground"
                  src="https://source.unsplash.com/yJg3c6xHMjg"
                  alt="woman sitting down"
                />
              </div>
            </div>
          </div>
        </li>
        <li className="two ">
          <div className="content over-revealer ">
            <span class="nav-title">CLIENT LOVE 2/4</span>
            <div className="content_wrapper">
              <blockquote>
                <p>
                  "I would absolutely recommend Kylie to others. She is not only
                  experienced, but approachable. The entire process was so much
                  easier that I thought it would be. I loved how Kylie did her
                  own thorough research and brought great knowledge and ideas
                  into the copy. She was completely open to feedback and went
                  above and beyond bring my visions to life."
                </p>
                <span className="reference">Kelly Veronica</span>
              </blockquote>
              <div className="img">
                <img
                  className="imgbackground"
                  src="https://source.unsplash.com/hBLf2nvp-Yc"
                  alt="woman sitting down"
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ForthSection;
