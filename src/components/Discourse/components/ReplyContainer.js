import React from "react";
import "bootstrap";
import expand from "../../../assets/expand.png";
import ListContainer from "./ListContainer";
import { useEffect, useState } from "react";
import axios from "axios";


export const ReplyContainer = () => {
  return (
    <div className="col  container" style={{
                                    marginBottom: '2rem'}}>
        <ReplyHeader />
        <ReplyDescription />

    </div>
  );
};


function ReplyHeader() {
    return (
        <div className="row">
          <h1
            style={{
              fontFamily: "Quantico",
              color: "white",
              fontSize: "20px",
              fontWeight: "900"
            }}
          >
            <img alt="expand"
              href="/"
              src={expand}
              style={{ width: "2%", cursor: "pointer", paddingRight: "5px" }}
            />
            Discussion:
          </h1>
        </div>
    )
};

function ReplyDescription () {

  

  const proposalsURL = "/api/v1/proposal/all";

  const [proposal, setProposals] = useState([]);
  useEffect(() => {
    axios.get(proposalsURL).then((response) => {
      setProposals(response.data);
    });
  }, [setProposals]);

    return  (
      <div style={{background: 'rgba(0, 0, 0, 0.7)', border: "2px solid #FFFFFF", overflowY: 'scroll'}}>
        {proposal.map(({_id, proposalBody}) => (
         <ListContainer _id={_id} bodyText={proposalBody[0].bodyText} 
          style={{background: 'transparent',
          borderBottom: "2px solid #FFFFFF",
          borderRadius: "5px",
          width: "100%",
          margin: '0 2rem',
          height: "100%"}}/>
        ))}

      </div>
    )
}


