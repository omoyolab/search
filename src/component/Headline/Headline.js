import React from "react";

const Headline = ({headline}) => {

  return (
    <div className="headline_wrap">
        <div className="headline">
            <div className="headline_content">
                <div className="headline_title">
                    <h3>{headline.headline}</h3>
                </div>
                <div className="headline_description">
                    <p>{headline.posted_date}</p>
                </div>
                <div className="headline_author">
                    <p>{headline.author}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Headline;