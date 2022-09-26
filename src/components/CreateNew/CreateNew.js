import { React, useState } from "react";
import * as bootstrap from "bootstrap";
import "./CreateNew.css";
import AnuraContainer from "./components/AnuraContainer";
import expand from "../../assets/expand.png";
import edit from "../../assets/edit.png";
import { AnuraButton } from "./components/AnuraButton";

import etherscan from "../../assets/etherscan.png";
import { useEffect, Component } from "react";
// import {Link} from 'react-router-dom'
import axios, { Axios } from "axios";

export const CreateNew = ({}) => {
  const createProposalURL = "/proposal";
  const categoriesURL = "/api/v1/dropdown/categories";
  const statusesURL = "/api/v1/dropdown/statuses";
  const responsiblesURL = "/api/v1/dropdown/responsibles";

  //Set JSON data
  const [data, setData] = useState(
    {
      _id: "5af712eff26b29dc5c51c60h", 
      title: "",
      category: "",
      status: "001",
      cost: "",
      author: "",
      author: "0x1b99FC7D0969F17512b84a791CFE8Ec17C2F4716",
      responsible: "",
      proposalBody: [{
        bodyVersion: "00001B",
        bodyAuthor: "0xD7ed008295E7d….Bb9BE",
        bodyText: "Some text"
        }]
    }
  );


  const [category, setCategory] = useState([]);
  const [key, setKey] = useState([]);
  const [status, setStatus] = useState([]);
  const [responsible, setResponsible] = useState([]);



  useEffect(() => {

    axios.get(categoriesURL).then((response) => {
      setCategory(response.data);
      setKey( Object.keys(response.data));
      console.log(key);
      });
      
      axios.get(statusesURL).then((response) => {
        setStatus(response.data);
      });

      axios.get(responsiblesURL).then((response) => {
        setResponsible(response.data);
      });

  }, []);



  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    console.log("NEW DATA:");
    console.log(newdata);
    setData(newdata);

  }

  function dropdownHandle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    console.log("NEW DATA:");
    console.log(newdata);
    setData(newdata);

  }


  console.log("JSON DATA:");
  console.log(data);



  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/v1/proposal", data).then((res) => {
      console.log(res.data);

    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="main">
      <div
        className=" mainview"
        id="mainView"
        style={{
          width: "100vw",
          margin: "0.5rem 0.5rem 0 0.5rem",

        }}
      >
        <div className='header'>
          <Header 
          />
          <AnuraButton onClick={onSubmit} className="item2">CANCEL</AnuraButton>
          <AnuraButton onClick={onSubmit} className="item2">SAVE</AnuraButton>
          <AnuraButton onClick={onSubmit} className="item3">SUBMIT</AnuraButton>
        </div>
        <AnuraContainer>
          <div className="col leftPanel ">
            <HeaderHeader />
            <div>
              <div
                className="container form"
                style={{
                  background: "rgba(0, 0, 0, 0.7)",
                  border: "1px solid #FFFFFF",
                  borderRadius: "3px",
                  padding: '1rem'
                }}
              >
                <ListHeaderOne />
                <div className="col" style={{ padding: "0.5rem 0 1rem 1rem" }}>
                  <form onSubmit={(e) => SubmitEvent(e)}>
                    <input
                      onChange={(e) => handle(e)}
                      id="title"
                      value={data.title}
                      style={{
                        background: "rgba(37, 60, 120, 0.7)",
                        cursor: "pointer",
                        border: "1px solid #FFFFFF",
                        borderRadius: "5px",
                        fontFamily: "Quantico",
                        color: "white",
                        fontSize: "18px",
                        width: "9rem",
                        outline: "none",
                        paddingLeft: "10px",
                        marginBottom: "1rem",
                        wordBreak: 'normal'
                      }}
                      name="title"
                      placeholder="Proposal Title"
                      type="title"
                    />
                  </form>
                  <h1
                    style={{
                      fontFamily: "Quantico",
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "900"
                    }}
                  >
                    0x07...b9BE
                    <img
                      href="/"
                      src={etherscan}
                      style={{
                        width: "10%",
                        paddingLeft: "5px",
                        cursor: "pointer"
                      }}
                    />
                  </h1>
                  <select
                    onChange={(e) => dropdownHandle(e)}
                    id="category"
                    value={key.value}
                    style={{
                      background: "rgba(37, 60, 120, 0.7)",
                      textAlign: "left",
                      cursor: "pointer",
                      border: "1px solid #FFFFFF",
                      borderRadius: "5px",
                      fontFamily: "Quantico",
                      color: "white",
                      padding: "0",
                      fontSize: "16px",
                      width: "9rem",
                      margin: "1rem 0"
                    }}
                  >
                    <option>Select Category</option>
                    {Object.keys(category).map((categories) => (
                      <option>{categories}</option>
                    ))}
                  </select>
                  <form>
                    <input
                      onChange={(e) => handle(e)}
                      id="cost"
                      value={data.cost}
                      style={{
                        background: "transparent",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "5px",
                        fontFamily: "Quantico",
                        color: "white",
                        fontSize: "18px",
                        width: "9rem",
                        outline: "none",
                        margin: "10px 0 20px 0"
                      }}
                      name="cost"
                      placeholder="ETH"
                      type="cost"
                    />
                  </form>

                  <a
                    href="/"
                    style={{
                      fontFamily: "Quantico",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "900",
                      textDecoration: "none"
                    }}
                  >
                    Pending Discourse
                  </a>
                </div>
                <ListHeaderTwo />
                <div
                  className="col"
                  style={{ paddingTop: "5.5rem", paddingRight: "1.5rem" }}
                >
                  <select
                    style={{
                      background: "rgba(37, 60, 120, 0.7)",
                      textAlign: "left",
                      cursor: "pointer",
                      border: "1px solid #FFFFFF",
                      borderRadius: "5px",
                      fontFamily: "Quantico",
                      color: "white",
                      padding: "0",
                      fontSize: "16px",
                      marginBottom: "1rem",
                      width: "9rem"
                    }}
                  >
                    {Object.values(status).map((statuses) => (
                      <option>{statuses}</option>
                    ))}
                  </select>
                  <select
                    onChange={(e) => handle(e)}
                    id="responsible"
                    value={data.responsible}
                    style={{
                      background: "rgba(37, 60, 120, 0.7)",
                      textAlign: "left",
                      cursor: "pointer",
                      border: "1px solid #FFFFFF",
                      borderRadius: "5px",
                      fontFamily: "Quantico",
                      color: "white",
                      padding: "0",
                      fontSize: "16px",
                      width: "9rem"
                    }}
                  >
                    <option>Select Owner</option>
                    {Object.keys(responsible).map((responsibles) => (
                      <option>{responsibles}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <CouncilFeedback />
          </div>
          <div className="rightPanel container">
            <div className="container">
              <DetailsHeader />
              <div
                className="scroll"
                id="detail"
                style={{
                  background: "rgba(0, 0, 0, 0.7)",
                  height: "82%",
                  border: "1px solid #FFFFFF",
                  borderRadius: "3px",
                  padding: "0 2rem",
                  marginBottom: "1rem"
                }}
              >
                <div>
                  <input
                    onChange={(e) => handle(e)}
                    id="bodyText"
                    value={data.bodyText}
                    style={{
                      background: "transparent",
                      cursor: "pointer",
                      border: "none",
                      borderRadius: "5px",
                      fontFamily: "Quantico",
                      color: "white",
                      width: "100%",
                      fontSize: "18px",
                      outline: "none",
                      height: "100%",
                      margin: "10px 0 17px 0"
                    }}
                    name="bodyText"
                    placeholder="Proposal Description"
                    type="textArea"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <Scrollbar />
            </div>
          </div>
        </AnuraContainer>
      </div>
    </div>
  );
};

// *****************************************************************
// HEADER
// *****************************************************************

function Header() {
  const wallet = "0xD7...B9BE";
  return (
    <div className="header" style={{ padding: "1.5rem" }}>
      <h1
        className="item1"
        style={{ color: "white", fontSize: "24px", margin: "0 0 0 2rem" }}
      >
        LOGOUT {wallet}
      </h1>
    </div>
  );
}

// *****************************************************************
// PROPOSAL FORM
// *****************************************************************

function HeaderHeader() {
  return (
    <div className="row1">
      <h1
        style={{
          fontFamily: "Quantico",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold"
        }}
      >

        Header
      </h1>
      <p
        style={{
          fontFamily: "Quantico",
          color: "white",
          fontSize: "16px",
        }}
      >
        Select the appropriate Category and Party responsible for delivery. The
        Council will update appropriately after submission is necessary.
      </p>
    </div>
  );
}

function CouncilFeedback() {
  return (
    <div className="feedback">
      <h1
        style={{
          fontFamily: "Quantico",
          color: "white",
          fontSize: "18px",
          fontWeight: "900"
        }}
      >
        Council Feedback:
      </h1>
      <div
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          border: "1px solid #FFFFFF",
          borderRadius: "3px",
          padding: "0 2rem",
          height: "370px",
          marginBottom: "2rem",
          marginTop: '1rem'
        }}
      >
        <p
          style={{
            fontFamily: "Quantico",
            color: "white",
            fontSize: "18px",
            lineHeight: "30px",
            marginTop: '1rem'
          }}
        >
          Pending Council Feedback.
        </p>
      </div>
    </div>
  );
}

function ListHeaderOne() {
  return (
    <div className="col">
      <ul
        style={{
          fontFamily: "Quantico",
          color: "white",
          fontSize: "18px",
          lineHeight: "45px",
          listStyleType: "none",
          fontWeight: "bold"
        }}
      >
        <li>Title:</li>
        <li>Author:</li>
        <li>Category:</li>
        <li style={{ lineHeight: "30px" }}>Estimated Cost:</li>
        <li>Discourse:</li>
      </ul>
    </div>
  );
}

function ListHeaderTwo() {
  return (
    <div >
      <ul
        style={{
          fontFamily: "Quantico",
          color: "white",
          fontSize: "18px",
          lineHeight: "45px",
          listStyleType: "none",
          fontWeight: "bold",
          marginTop: "5rem",
          marginRight: "2rem"
        }}
      >
        <li>Status:</li>
        <li>Responsible:</li>
      </ul>
    </div>
  );
}

// *****************************************************************
// PROPOSAL DETAILS
// *****************************************************************

function DetailsHeader() {
  return (
    <div className="row1">
      <h1
        style={{
          fontFamily: "Quantico",
          color: "white",
          fontSize: "20px",
          fontWeight: "900"
        }}
      >
        <img
          href="/"
          src={expand}
          style={{ width: "2%", cursor: "pointer", paddingRight: "5px" }}
        />{" "}
        Details:
      </h1>
      <p
        style={{
          fontFamily: "Quantico",
          color: "white",
          fontSize: "15px",
          margin: "0.5rem 0.5rem 1rem 1.5rem"
        }}
      >
        Ensure you provide clear and consise details regarding the nature of
        this proposal: e.g. what content is being proposed, what the benefits
        are, who the content producer(s) are etc. (max 1,000 words)
      </p>
    </div>
  );
}

function Scrollbar() {
  return (
      <div
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          height: "82%",
          border: "1px solid #FFFFFF",
          borderRadius: "5px",
          padding: "0 1rem",
          margin: "8rem 0 0 2rem",
          width: "2.5rem"
        }}
      ></div>
  );
}
