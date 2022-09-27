import { React, useEffect, useState } from "react";
import * as bootstrap from 'bootstrap';
import { ReplyContainer } from "./components/ReplyContainer";
import { ProposalContainer } from "./components/ProposalContainer";
import { Header } from "./components/Header";
import AnuraContainer from "./components/AnuraContainer";
import Col from 'react-bootstrap/Col';

export const Discourse = ({}) => {


  return (
    <div className="main center" style={{overflow:'hidden', display: 'flex', flexDirection: 'column'}}>

          <Header />
          <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className="col" style={{display: 'flex', flexDirection: 'column'}} >
          <AnuraContainer h1={"ID: " }>
            <div>
              <ReplyContainer />
            </div>
          </AnuraContainer>
          </div>
          <div className="col" style={{display: 'flex', flexDirection: 'column'}} >
          <AnuraContainer h1={"LIST"}>
            <div>
              <ProposalContainer />
            </div>
          </AnuraContainer>
        </div>
        </div>

    </div>
  );
};
