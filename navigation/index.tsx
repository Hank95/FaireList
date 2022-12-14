import React, { useContext } from "react";
import { AuthContext, useUser } from "../auth/authProvider";

import { NavigationContainer } from "@react-navigation/native";

import Main from "./MainStack";
import Auth from "./AuthStack";
import Loading from "../screens/utils/Loading";

export default () => {
  const theUser = useUser();
  console.log(theUser.session?.user?.id);

  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
