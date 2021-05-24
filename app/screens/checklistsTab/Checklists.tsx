import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../providers/AuthProvider";
// var parseString = require("react-native-xml2js").parseString;
import { parseString, util } from "react-native-xml2js";

interface ChecklistsProps {}

export const Checklists: React.FC<ChecklistsProps> = ({}) => {
  const { user } = useAuth();

  let dir = JSON.parse(user!.me!.data.directories);
  let xml = dir[0].contents.folders[0].contents.files[0].xml;
  let x = "<a>" + xml + "</a>";
  console.log("Checklists.tsx 14 xml:", x);
  parseString(x, { trim: true }, (err: any, result: any) => {
    // console.dir(result);
    console.log("result", result);
  });
  return (
    <SafeAreaView>
      <Text>Checklists Page</Text>
    </SafeAreaView>
  );
};
