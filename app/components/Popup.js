import React, { useState, useEffect } from "react";
import abi from "./abi.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";

const Popup = ({ onClose, title }) => {
  const wins = typeof window !== "undefined" ? window.ethereum : "";

  const popupStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
  };

  const boxStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "300px",
    height: "auto",
    padding: "20px",
    textAlign: "center",
  };

  const titleStyle = {
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "20px",
    margin: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 30px",
    borderRadius: "8px",
    border: "none",
    margin: "10px",
    cursor: "pointer",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const textStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    margin: "10px",
  };

 const Notification = (messages) => {
    toast.success(messages, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Hide the notification after 3 seconds
    });
    alert("red");
  }

  const minter = async() => {
     // Define the address of the smart contract on the blockchain
     const contractAddress = "0xB1c276816B7719fF016c8316846557931eb0162d";

     // Create a new instance of the Contract object
     const provider = new ethers.providers.Web3Provider(wins);
     const signer = provider.getSigner();
     const contract = new ethers.Contract(contractAddress, abi, signer);
     const getter = await contract.functions.mint();
     document.getElementById("pop").style.display ="none";
     const ions = await getter.wait()
     console.log(ions.status)
     Notification(ions.status == 1 ? true : false)
  }

  return (
    <div style={popupStyle} id ="pop">
      <div style={boxStyle}>
        <p style={textStyle}>You are about mint an NFT</p>
        <button
          style={buttonStyle}
          onClick={() => (minter())}
        >
          Mint
        </button>
        <button style={{ color: "red" }} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
