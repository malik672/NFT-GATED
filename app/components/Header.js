import Link from "next/link";
import ConnectButton from "./ConnectButton";
import React, { useState, useEffect } from "react";

function Header() {
  return (
    <div>
      <header
        className=" z-40 ... bg-black text-white p-20 border-b-2 border-fuchsia-600"
        style={{
          fontWeight: 400,
          marginLeft:"-10px",
          marginTop:"-9px",
          padding: "1px",
          color: "black",
          backgroundColor: "white",
          fontSize: "17px",
          position: "fixed",
          width: "100%",
          zIndex: "5",
          borderBottom: "2px solid #aadcf0",
        }}
      >
        <div
          className="flex flex-row justify-between items-center"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href={"/"} style={{textDecoration:"none"}}>
            <p
              className="font-sans font-bold text-xl"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: "900",
                color:"black",
                fontSize: "18px",
              }}
            >
              <span style={{ font: "5px", paddingRight: "30px", marginLeft:"10px" }}>
                {"  "}
                Book Launch
              </span>
            </p>
          </Link>
          <div
            className="flex border-b-2 border-fuchsia-600"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
             
              <ConnectButton />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
