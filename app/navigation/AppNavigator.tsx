import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { routes } from "./routes";
// import { ChecklistEntryScreen } from "../screens/appScreens/ChecklistEntryScreen";
import { AccountScreen } from "../screens/accountTab/AccountScreen";
// import { NotesEntryScreen } from "../screens/appScreens/NotesEntryScreen";
// import { MemoryItemsEntryScreen } from "../screens/appScreens/MemoryItemsEntryScreen";
import { AppStateContext } from "../providers/AppStateProvider";
// import {
//   getFirstNotesFolderTitles,
//   getFirstChecklistFolderTitles,
//   getFirstMemoryItem,
// } from "../utils/utils";
// import { DataContext } from "../providers/DataProvider";
// import { ChecklistNavigator } from "./ChecklistNavigator";
// import { MemoryItemsScreen } from "../screens/MemoryItemScreens/MemoryItemsScreen";
// import { NotesScreen } from "../screens/NotesScreens/NotesScreen";
// import { AccountScreen } from "../screens/AccountScreen";

interface AppNavigatorProps {}

export type AppTabsParamList = {
  [routes.CHECKLIST_NAVIGATOR]: undefined;
  [routes.MEMORY_ITEMS_SCREEN]: undefined;
  [routes.NOTES_SCREEN]: undefined;
  [routes.ACCOUNT_SCREEN]: undefined;
};

const Tabs = createBottomTabNavigator<AppTabsParamList>();

export const AppNavigator: React.FC<AppNavigatorProps> = ({}) => {
  // const {
  //   setNavState,
  //   navState,
  //   checklistState,
  //   setStoredMemoryItem,
  // } = useContext(AppStateContext);
  // const { noteFolders, memoryItems } = useContext(DataContext);
  // const {
  //   firstChecklistFolderTitle,
  //   firstChecklistTitle,
  // } = getFirstChecklistFolderTitles(checklistState);
  // const { firstNoteFolderTitle, firstNoteTitle } = getFirstNotesFolderTitles(
  //   noteFolders
  // );
  return (
    <Tabs.Navigator>
      {/* <Tabs.Screen
        name={routes.CHECKLIST_NAVIGATOR}
        component={ChecklistEntryScreen}
        listeners={{
          tabPress: () =>
            setNavState({
              ...navState,
              folderTitle: firstChecklistFolderTitle,
              subFolderTitle: firstChecklistTitle,
              mainView: "checklist",
              navStateSetBy: "AppNavigator: Checklist tab button",
            }),
        }}
        options={{
          tabBarLabel: "Checklists",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-checkbox"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={routes.MEMORY_ITEMS_SCREEN}
        component={MemoryItemsEntryScreen}
        listeners={{
          tabPress: () => {
            setNavState({
              ...navState,
              folderTitle: getFirstMemoryItem(memoryItems).firstMemoryItemTitle,
              mainView: "memoryItem",
              navStateSetBy: "AppNavigator: Memory Item tab button",
            });
            setStoredMemoryItem(
              memoryItems[getFirstMemoryItem(memoryItems).firstMemoryItemTitle]
            );
          },
        }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="brain" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name={routes.NOTES_SCREEN}
        component={NotesEntryScreen}
        listeners={{
          tabPress: () =>
            setNavState({
              ...navState,
              folderTitle: firstNoteFolderTitle,
              subFolderTitle: firstNoteTitle,
              mainView: "note",
              navStateSetBy: "AppNavigator: Note tab button",
            }),
        }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="pencil-box-outline"
              color={color}
              size={size}
            />
          ),
        }}
      /> */}
      <Tabs.Screen
        name={routes.ACCOUNT_SCREEN}
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
