import React from "react";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="experience-child">
          <div className="experience-header">
            <h1>We build experience</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quas!
              A adipisci in itaque voluptatibus!
            </p>
          </div>
          <div className="experience-body">
            <div className="experience-cards" id="design">
              <div className="experience-card-header">DESIGN</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                commodi error sed, odit facere quibusdam exercitationem atque
                assumenda nihil laudantium ipsum enim voluptatem. Reiciendis,
                mollitia?
              </p>
              <button className="learn-more">LEARN MORE</button>
            </div>
            <div className="experience-cards" id="content">
              <div className="experience-card-header">CONTENT</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                commodi error sed, odit facere quibusdam exercitationem atque
                assumenda nihil laudantium ipsum enim voluptatem. Reiciendis,
                mollitia?
              </p>
              <button className="learn-more">LEARN MORE</button>
            </div>
            <div className="experience-cards" id="strategy">
              <div className="experience-card-header">STRATEGY</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                commodi error sed, odit facere quibusdam exercitationem atque
                assumenda nihil laudantium ipsum enim voluptatem. Reiciendis,
                mollitia?
              </p>
              <button className="learn-more">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
