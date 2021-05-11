type Routes = {
  WELCOME_SCREEN: "WelcomeScreen";
  //TABS
  CHECKLIST_NAVIGATOR: "ChecklistsNavigator";
  MEMORY_ITEMS_SCREEN: "MemoryItemsScreen";
  NOTES_SCREEN: "Notes";
  ACCOUNT_SCREEN: "AccountScreen";
  //AUTH
  LOGIN_SCREEN: "LoginScreen";
  REGISTER_SCREEN: "RegisterScreen";

  //CHECKLISTS TAB
  CHECKLIST_FOLDERS_SCREEN: "ChecklistFoldersScreen";
  CHECKLISTS_SCREEN: "ChecklistsScreen";
  CHECKLIST_SCREEN: "ChecklistScreen";

  //NOTES TAB
  NOTES_FOLDERS_SCREEN: "NotesFoldersScreen";
  NOTELIST_SCREEN: "NoteListScreen";
  NOTE_SCREEN: "NoteScreen";

  //MEMORY ITEMS TAB
  MEMORY_ITEM_FOLDERS_SCREEN: "MemoryItemFoldersScreen";
  MEMORY_ITEM_SCREEN: "MemoryItemScreen";
  MEMORY_ITEM_FORM_SCREEN: "MemoryItemFormScreen";

  FORM_SCREEN: "FormScreen";
  // MEMORY_ITEM_SCREEN: "MemoryItemScreen";
  // APP_NAVIGATOR: "AppNavigator";
  // ADD_EDIT_MEMORY_ITEMS_SCREEN: "AddEditMemoryItemsScreen";
  // NOTES_SUB_FOLDER_SCREEN: "NotesSubFolderScreen";
  // ADD_EDIT_NOTE_SCREEN: "AddEditNoteScreen";
  // NOTE_SCREEN: "NoteScreen";
};

export const routes = Object.freeze<Routes>({
  WELCOME_SCREEN: "WelcomeScreen",
  //TABS
  CHECKLIST_NAVIGATOR: "ChecklistsNavigator",
  MEMORY_ITEMS_SCREEN: "MemoryItemsScreen",
  NOTES_SCREEN: "Notes",
  ACCOUNT_SCREEN: "AccountScreen",
  //AUTH
  LOGIN_SCREEN: "LoginScreen",
  REGISTER_SCREEN: "RegisterScreen",

  //CHECKLISTS TAB
  CHECKLIST_FOLDERS_SCREEN: "ChecklistFoldersScreen",
  CHECKLISTS_SCREEN: "ChecklistsScreen",
  CHECKLIST_SCREEN: "ChecklistScreen",

  //NOTES TAB
  NOTES_FOLDERS_SCREEN: "NotesFoldersScreen",
  NOTELIST_SCREEN: "NoteListScreen",
  NOTE_SCREEN: "NoteScreen",

  //MEMORY ITEMS TAB
  MEMORY_ITEM_FOLDERS_SCREEN: "MemoryItemFoldersScreen",
  MEMORY_ITEM_SCREEN: "MemoryItemScreen",
  MEMORY_ITEM_FORM_SCREEN: "MemoryItemFormScreen",

  FORM_SCREEN: "FormScreen",

  // MEMORY_ITEM_SCREEN: "MemoryItemScreen",
  // APP_NAVIGATOR: "AppNavigator",
  // ADD_EDIT_MEMORY_ITEMS_SCREEN: "AddEditMemoryItemsScreen",
  // NOTES_FOLDER_SCREEN: "NotesFolderScreen",
  // NOTES_SUB_FOLDER_SCREEN: "NotesSubFolderScreen",
  // ADD_EDIT_NOTE_SCREEN: "AddEditNoteScreen",
  // NOTE_SCREEN: "NoteScreen",
});

export type RouteStringValues = Routes[keyof Routes];
