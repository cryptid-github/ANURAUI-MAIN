import React from "react";
import { StyleSheet, View } from "react-native";

const AnuraContainer = (props) => {

  return (
    <div >
      <div
        id="ticketID"
        style={{
          backgroundColor: "black",
          paddingLeft: "2rem",
          border: "1px solid #FFFFFF",
          borderRadius: "5px 5px 0 0",
          margin: "0 2rem"
        }}
      >
        <h1
          style={{
            color: "white",
            fontFamily: "Night Machine",
            fontSize: "24px",
            margin: "5px 1rem"
          }}
        >
          {props.h1}
        </h1>
      </div>
      <View
        style={{
          ...styles.anuraContainer,
          ...props.style,
          background: "rgba(75, 182, 215, 0.2)"
        }}
      >
        {props.children}
      </View>
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

export default AnuraContainer;
