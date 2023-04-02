
import omitDeep from "omit-deep";
import { ethers, utils } from "ethers";
import { gql } from "@apollo/client";

const win = typeof window !== "undefined" ? window : "";
const wins = typeof window !== "undefined" ? window.ethereum : "";


export const STORAGE_KEY = wins.selectedAddress;


export function trimString(string, length) {
  if (!string) return null;
  return string.length < length ? string : string.substr(0, length - 1) + "...";
}

export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export function getSigner() {
  const provider = new ethers.providers.Web3Provider(win.ethereum);
  return provider.getSigner();
}

export function signTypeData(domain, types, value) {
  const signer = getSigner();
  return signer._signTypedData(
    omitDeep(domain, "_typename"),
    omitDeep(types, "_typename"),
    omitDeep(value, "_typename")
  );
}

export function splitSignature(signature) {
  return utils.splitSignature(signature);
}

export default {
  parseJwt,
  signTypeData,
  splitSignature,
  getSigner,
  trimString,
}