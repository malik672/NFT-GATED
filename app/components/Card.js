import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import {ethers} from "ethers";
import validate from "/home/malik/Desktop/NFT-GATED/app/pages/api/ValidateNfts.js";

const Card = () => {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "300px",
    height: "auto",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  };

  const titleStyle = {
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "20px",
    margin: "10px",
  };

  const authorStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    margin: "5px 10px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    margin: "10px",
    cursor: "pointer",
    textAlign: "center",
  };

  const wins = typeof window !== "undefined" ? window.ethereum : "";

  const [showPopup, setShowPopup] = useState(false);

  const [address, setAddress] = useState("");

  useEffect(() => {
    async function getAddress() {
      // Check if the user has a web3 provider
      if (typeof wins !== "undefined") {
        // Create a new ethers provider using the user's web3 provider
        const provider = new ethers.providers.Web3Provider(wins);

        // Get the user's wallet address
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        // Set the address state
        setAddress(address);
      } else {
        console.log("Please install MetaMask or another web3 provider");
      }
    }

    getAddress();
  }, []);
  

  const handleClick = async () => {
    //get user's address
    const isValid = await validate( "9deb6664-b5ee-435b-a1ce-03c3978519ff", address);
    console.log(isValid);
    if (isValid.ok) {
      setShowPopup(true);
    } 
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div style={cardStyle}>
      <img
        src="https://ipfs.io/ipfs/QmaUNxM9xCskcBbcwYoQLvwKdvyMDYiGAAaGdBjTR93XQG?filename=DALL%C2%B7E%202023-04-05%2012.24.47%20-%20_Generate%20a%20fantasy%20image%20featuring%20Merlin%2C%20the%20legendary%20wizard.%20He%20is%20standing%20on%20a%20cliff%20overlooking%20a%20vast%20and%20magical%20kingdom.%20In%20his%20hand%2C%20he%20ho.png"
        alt="Book cover"
        style={imageStyle}
      />
      <div>
        <h2 style={titleStyle}>Title of the Book</h2>
        <p style={authorStyle}>by Author Name</p>
        <button onClick={handleClick} style={buttonStyle}>
          Read
        </button>
        {showPopup && <Popup onClose={handleClose} />}
      </div>
    </div>
  );
};

export default Card;
