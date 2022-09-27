import React from "react";
import { StyleSheet, View } from "react-native";
import edit from '../../../assets/edit.png'
const ListContainer = (props) => {

  return (
    <div>
      <div
        className="row"
        id="proposal"
        style={{
          ...props.style
        }}
      >
        <h1 style={{color: 'white',
                    fontFamily: "Quantico",
                    fontSize: "20px",
                    paddingLeft: "1rem"}}> 
            ID: {props._id} </h1>
        <p style={{color: 'white',
                    fontFamily: 'Quantico',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '46px',
                    paddingLeft: "1rem"}}>
            {props.bodyText}
        </p>
        <div>
          {props.button}
        </div>
        {/* <img style={{width: '2%', alignSelf: 'right'}} src={edit} /> */}
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  anuraContainer: {
    border: "1px solid #FFFFFF",
    borderRadius: "5px",
    display: "flex",
    marginRight: "2rem",
    marginLeft: "2rem",
    paddingLeft: "3rem",
    paddingRight: "2rem",
    flexDirection: "row"
  }
});

export default ListContainer;
