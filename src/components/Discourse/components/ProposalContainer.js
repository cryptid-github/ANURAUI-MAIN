import React from "react";
import "bootstrap";
import expand from "../../../assets/expand.png";
import edit from "../../../assets/edit.png";
import ListContainer from "./ListContainer";
import { useEffect, useState, Component } from "react";
import axios, { Axios } from "axios";
import { AnuraButton } from "./AnuraButton";


export const ProposalContainer = ({}) => {
  return (
    <div className="col" 
          style={{margin: '1rem 0'}}>
        <ProposalDescription />

    </div>
  );
};


function ProposalDescription () {

  

  const proposalsURL = "/api/v1/proposal/all";

  const [proposal, setProposals] = useState([]);
  useEffect(() => {
    axios.get(proposalsURL).then((response) => {
      setProposals(response.data);
    });
  }, [setProposals]);

    return  (
      <div style={{overflowY: 'scroll'}}>
        {proposal.map(({_id, proposalBody}) => (
          <ListContainer _id={_id} bodyText={proposalBody[0].bodyText} 
          style={{background: 'rgba(0, 0, 0, 0.7)', 
          border: "2px solid #FFFFFF",
          borderRadius: "5px",
          width: "100%",
          margin: "1rem 0",
          height: "100%"}}/>
        ))}

      </div>
    )
}


