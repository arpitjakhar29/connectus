import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup"; 
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Createpost from "./components/Createpost";
import Postlist from "./components/Postlist";
import Inbox from "./components/Inbox";
import PostlistProvider from "./store/postlist-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostlistProvider>
      <div className="appcontainer">
        {selectedTab !== "Login" && selectedTab !== "Signup" && (
          <>
            <Header setselectedtab={setSelectedTab} className="header" />
            <div className="main-container">
              <Sidebar
                selectedtab={selectedTab}
                setselectedtab={setSelectedTab}
                className="sidebar"
              />
              <div className="content">
                {selectedTab === "Home" && <Postlist />}
                {selectedTab === "Profile" && <Profile />}
                {selectedTab === "Create Post" && <Createpost />}
                {selectedTab === "Messages" && <Inbox />}
              </div>
            </div>
          </>
        )}

        {selectedTab === "Login" && <Login setSelectedTab={setSelectedTab} />}
        {selectedTab === "Signup" && (
          <Signup setSelectedTab={setSelectedTab} />
        )}{" "}
        {selectedTab !== "Login" && selectedTab !== "Signup" && <Footer />}
      </div>
    </PostlistProvider>
  );
}

export default App;
