import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ForumThreads from "../components/ForumThreads";
import ForumThread from "../components/ForumThread";
import NewForumThread from "../components/NewForumThread";
import SignIn from "../components/SignIn";

export default (
  
  
  <Router>
    {/* <UserContext.Provider value={{ user: user, setUser: setUser }}></UserContext.Provider> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forumThreads" element={<ForumThreads />} />
      <Route path="/forumThread/:id" element={<ForumThread />} />
      <Route path="/newForumThread" element={<NewForumThread />} />
      <Route path="/signIn" element={<SignIn />} />

    </Routes>
  </Router>
);
