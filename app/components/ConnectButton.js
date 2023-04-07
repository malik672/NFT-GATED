import { useContext, useEffect, useState } from "react";
// import { UserContext } from "./UserContext";
import { ConnectButton as Connect } from "@rainbow-me/rainbowkit";

function ConnectButton() {
  //   const { user } = useContext(UserContext);
  const [address, setAddress] = useState("");
  const [utility, setUtility] = useState("");
  const [step, setStep] = useState("");

  // useEffect(() => {
  //   const whal3s = new Whal3s();
  //   console.log(whal3s);
  //   whal3s
  //     .createValidationUtility("9deb6664-b5ee-435b-a1ce-03c3978519ff")
  //     .then((newUtility) => {
  //       newUtility.addEventListener("stepChanged", (step) => {
  //         setStep(step.detail.step);
  //       });
  //       setUtility(newUtility);
  //       setStep(newUtility.step);
  //     });
  // }, []);

  return (
    <div>
      <Connect
        label="connect"
        showBalance={false}
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "avatar",
        }}
      />
      {/* <Button onClick={() => console.log(utility.wallet.onboard.connectWallet())}>Connect Wallet</Button> */}
    </div>
  );
}

export default ConnectButton;
