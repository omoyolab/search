import React  from "react";
import Headline from "../Headline/Headline";

const Headlines = ({headlines}) => {

  return (
    <div className="result_wrap"> 
        {headlines.map((headline) => (
          <Headline key={headline._id} headline={headline}/>
))}  
        </div>
  );
}

export default Headlines;