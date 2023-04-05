import React from "react";

const ValidateNfts = async(nft_validation_utility,wallet_address) => {
  const options = { method: "GET", headers: { accept: "application/json" } };

  return await fetch(
    `https://app.whal3s.xyz/api/v0/nft-validation-utilities/${nft_validation_utility}/wallet/${wallet_address}`,
    options
  )
};

export default ValidateNfts;
