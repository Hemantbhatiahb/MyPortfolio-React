import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function RootPage() {
    // const navigation= useNavigation();

  return (
    <React.Fragment>
      <Header />
      <main>
        {/* {navigation.state === 'loading' &&<p>Loading....</p>} */}
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default RootPage;
