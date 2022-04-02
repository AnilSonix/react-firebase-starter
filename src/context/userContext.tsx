import { User } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import ErrorView from "../shared/components/error";
import Loading from "../shared/components/loading";

type UserContextType = {
  user: User;
};

const UserContext = React.createContext<UserContextType>({} as UserContextType);

function useUserContext() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUserContext must be used within a UserContextProvider`);
  }
}

type UserContextProviderProps = {
  children: React.ReactNode;
};
const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, loading, error] = useAuthState(auth);

  const value: UserContextType = {
    user: user!,
  };

  if (loading) {
    return <Loading text="Checking user details..." />;
  }

  if (error) {
    return <ErrorView text="Unable to connect" />;
  }

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
