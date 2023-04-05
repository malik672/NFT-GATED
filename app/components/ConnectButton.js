import { useContext } from "react";
import { Button } from "semantic-ui-react";
// import { UserContext } from "./UserContext";
import { ConnectButton as Connect } from "@rainbow-me/rainbowkit";

function ConnectButton() {
//   const { user } = useContext(UserContext);

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
    </div>
  );
}

export default ConnectButton;