import React, { useState, useEffect, createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ForumThreads from "./ForumThreads";
import ForumThread from "./ForumThread";
import NewForumThread from "./NewForumThread";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ResponsiveAppBar from "./ResponsiveAppBar";
import EditForumThreadComment from "./EditForumThreadComment";
import EditForumThread from "./EditForumThread";

export const UserContext = createContext<null | { user: any, setUser: React.Dispatch<React.SetStateAction<any>> }>(null);
export const TokenContext = createContext<null | { token: any, setToken: React.Dispatch<React.SetStateAction<any>> }>(null);
export const AllUsersContext = createContext<null | { allUsers: any, setAllUsers: React.Dispatch<React.SetStateAction<any>> }>(null);

const App = () => {
  const [user, setUser] = useState<null | any>(null);
  const [token, setToken] = useState<null | any>(null);
  const [allUsers, setAllUsers] = useState<null | any>(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetch("/login", {
        headers: { Authenticate: localStorage.token },
      })
        .then((response) => response.json())
        .then((user) => {
          setUser(user);
        });
    }
  }, []);

  useEffect(() => {
    const url = "/api/v1/users/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => {
        setAllUsers(res);
      })
      .catch(() => navigate("/"));
  }, []);

  function handleLogout() {
    setUser(null);
    localStorage.removeItem("token");
    navigate(`/forumThreads`);
    console.log("logged out");
  }

  return (
    <div>
      <Router>
        <AllUsersContext.Provider value={{ allUsers: allUsers, setAllUsers: setAllUsers }}>
          <UserContext.Provider value={{ user: user, setUser: setUser }}>
            <TokenContext.Provider value={{ token: token, setToken: setToken }}>
              <ResponsiveAppBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forumThreads" element={<ForumThreads />} />
                <Route path="/forumThread/:id" element={<ForumThread />} />
                <Route path="/EditForumThread/:id" element={<EditForumThread />} />
                <Route path="/EditForumThreadComment/:id" element={<EditForumThreadComment />} />
                <Route path="/newForumThread" element={<NewForumThread />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
              </Routes>
            </TokenContext.Provider>
          </UserContext.Provider>
        </AllUsersContext.Provider>
      </Router>
    </div>
  );
};

export default App;