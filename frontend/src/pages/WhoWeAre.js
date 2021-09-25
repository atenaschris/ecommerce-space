import React, { useRef } from "react";

const WhoWeAre = () => {
  const h2Refone = useRef();
  const textBoxone = useRef();
  const imageBoxone = useRef();
  const h2Reftwo = useRef();
  const textBoxtwo = useRef();
  const imageBoxtwo = useRef();

  const toggleDomManipulationHandlerOne = () => {
    const textBoxDomElementone = textBoxone.current;
    const imageBoxDomElementone = imageBoxone.current;
    imageBoxDomElementone.style.transition = "0.4s";
    textBoxDomElementone.style.transition = "0.4s";

    if (imageBoxDomElementone.style.top != "-60px") {
      imageBoxDomElementone.style.top = "-60px";
      imageBoxDomElementone.style.width = "100px";
      imageBoxDomElementone.style.height = "100px";
      imageBoxDomElementone.style.padding = "5px";
      textBoxDomElementone.style.transitionDelay = "0.4s";
      textBoxDomElementone.style.opacity = "1";
    } else {
      imageBoxDomElementone.style.top = "0px";
      imageBoxDomElementone.style.width = "225px";
      imageBoxDomElementone.style.height = "225px";
      imageBoxDomElementone.style.padding = "0px";
      imageBoxDomElementone.style.transitionDelay = "0.2s";
      textBoxDomElementone.style.opacity = "0";
    }
  };
  const toggleDomManipulationHandlerTwo = () => {
    const textBoxDomElementtwo = textBoxtwo.current;
    const imageBoxDomElementtwo = imageBoxtwo.current;
    imageBoxDomElementtwo.style.transition = "0.4s";
    textBoxDomElementtwo.style.transition = "0.4s";
    if (imageBoxDomElementtwo.style.top != "-60px") {
      imageBoxDomElementtwo.style.top = "-60px";
      imageBoxDomElementtwo.style.width = "100px";
      imageBoxDomElementtwo.style.height = "100px";
      imageBoxDomElementtwo.style.padding = "5px";
      textBoxDomElementtwo.style.transitionDelay = "0.4s";
      textBoxDomElementtwo.style.opacity = "1";
    } else {
      imageBoxDomElementtwo.style.top = "0px";
      imageBoxDomElementtwo.style.width = "225px";
      imageBoxDomElementtwo.style.height = "225px";
      imageBoxDomElementtwo.style.padding = "0px";
      imageBoxDomElementtwo.style.transitionDelay = "0.2s";
      textBoxDomElementtwo.style.opacity = "0";
    }
  };

  return (
    <div className="who-we-are-flex">
      <div className="who-we-are-wrapper">
        <h2 onClick={toggleDomManipulationHandlerOne} ref={h2Refone}>
          Clicca qui
        </h2>
        <div class="testimonial">
          <div class="text" ref={textBoxone}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              molestiae assumenda quis natus saepe sapiente voluptates veritatis
              aliquam porro nobis ipsa esse distinctio.
            </p>
            <h3>Gianni Pinto</h3>
          </div>

          <div class="image" ref={imageBoxone}>
            <img
              src="https://i.pinimg.com/originals/a6/8b/b3/a68bb3f25f0a6ffd14b91e6c03b792ed.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="who-we-are-wrapper">
        <h2 onClick={toggleDomManipulationHandlerTwo} ref={h2Reftwo}>
          Clicca qui
        </h2>
        <div class="testimonial">
          <div class="text" ref={textBoxtwo}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              molestiae assumenda quis natus saepe sapiente voluptates veritatis
              aliquam porro nobis ipsa esse distinctio.
            </p>
            <h3>Damiana Giannini</h3>
          </div>

          <div class="image" ref={imageBoxtwo}>
            <img
              src="https://i.pinimg.com/originals/a6/8b/b3/a68bb3f25f0a6ffd14b91e6c03b792ed.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
