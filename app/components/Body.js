import React from "react";
import Card from "./Card";



const Body = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#F8F8F8",
      }}
    >
      <div style={{ width: "70%" }}>
        <div style={{ padding: "50px" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ marginBottom: "20px", color: "#333" }}>
              Book Launch: Merlin's Magic: A Tale of Fantasy and Adventure
            </h1>
            <p style={{ color: "#666" }}>by Author Name</p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "50px" }}
          >
            <div style={{ flex: 1 }}>
              <img
                src="https://ipfs.io/ipfs/QmaUNxM9xCskcBbcwYoQLvwKdvyMDYiGAAaGdBjTR93XQG?filename=DALL%C2%B7E%202023-04-05%2012.24.47%20-%20_Generate%20a%20fantasy%20image%20featuring%20Merlin%2C%20the%20legendary%20wizard.%20He%20is%20standing%20on%20a%20cliff%20overlooking%20a%20vast%20and%20magical%20kingdom.%20In%20his%20hand%2C%20he%20ho.png"
                alt="Book cover"
                style={{
                  width: "100%",
                  height: "auto",
                  boxShadow: "2px 2px 5px #AAA",
                }}
              />
            </div>
            <div style={{ flex: 1, padding: "0 20px" }}>
              <h2 style={{ color: "#333" }}>About the Book</h2>
              <p style={{ color: "#666", lineHeight: "1.5", fontSize: "18px" }}>
                In "Merlin's Magic," readers are transported to a world of
                mythical creatures and magical powers, where the legendary
                wizard Merlin is at the center of a great adventure. The story
                begins with Merlin, who has been living in isolation for many
                years. He is a powerful wizard, but he has grown weary of the
                world and the people in it. However, his peaceful existence is
                disrupted when he receives a message from an old friend, a
                mermaid named Marina. She tells him that a great evil is
                threatening the land and that he is the only one who can stop
                it. 
              </p>
              <p style={{ color: "#666", lineHeight: "1.5", fontSize: "18px" }}>
              With the help of a young knight named Gareth and a wise old sage named Althea, Merlin and Marina must use all their magical powers and knowledge to defeat the sorcerer and save the land from destruction. Along the way, they learn valuable lessons about friendship, courage, and the importance of standing up for what is right.


              </p>
    
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "30%",
          padding: "50px",
          backgroundColor: "white",
          boxShadow: "2px 2px 5px #AAA",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333" }}>
          Instructions to Buy
        </h2>
        <ul style={{ color: "#666", lineHeight: "1.5", fontSize: "18px", listStyle:"bullet"}}>
          <p>
          To buy a book, you have to have a specific NFt's in your wallet which will allow you to get access to the book, to get the book you can mint below
          </p>
          <Card/>
        </ul>
      </div>
    </div>
  );
};

export default Body;
