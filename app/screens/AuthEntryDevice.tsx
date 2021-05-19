import React, { useContext, useEffect } from "react";
import { MediaQuery } from "react-native-responsive-ui";
// import { ChecklistNavigator } from "../../navigation/ChecklistsNavigator";
import { IpadEntry } from "./IpadScreens/IpadEntry";
import { PhoneEntry } from "./phoneScreens/PhoneEntry";

// import { IpadChecklistScreen } from "./ChecklistTab/IpadScreens/IpadChecklistScreen";

interface AuthEntryDeviceProps {}

export const AuthEntryDevice: React.FC<AuthEntryDeviceProps> = ({}) => {
  return (
    <>
      <MediaQuery minWidth={600}>
        <IpadEntry />
      </MediaQuery>
      <MediaQuery maxWidth={599}>
        <PhoneEntry />
      </MediaQuery>
    </>
  );
};
