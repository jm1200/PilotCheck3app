import React, { createContext, useEffect, useState } from "react";
import { useMeQuery } from "../generated/graphql";
import { User } from "../types/types";

export const AuthContext = createContext<User>({
  loggedIn: false,
  email: null,
  uid: 0,
});

export const AuthProvider: React.FC = ({ children }) => {
  const { data: meData, loading: meLoading } = useMeQuery();
  const [user, setUser] = useState<User>({
    loggedIn: false,
    email: null,
    uid: 0,
  });
  // const firebase = useContext(FirebaseContext);

  useEffect(() => {
    if (meData && meData.me && !meLoading) {
      setUser({
        email: meData.me.email,
        uid: meData.me.id,
        loggedIn: true,
      });
    }
  }, [meData, meLoading]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
