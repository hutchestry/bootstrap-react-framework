import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer
} from "./components";
import {
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
  SignIn,
  SignUp,
  Account,
  Companies,
  Agent,
  Research,
  Search,
  Salaries,
  Interview
} from "./pages";
// Importing Sass with Bootstrap CSS
import './App.scss';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<Account />} />
      <Route path="/salaries" element={<Salaries />} />
      <Route path="/search" element={<Search />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/research" element={<Research />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/interview" element={<Interview />} />

      <Route path="/agent" element={<Agent />} />
      <Route path="/search" element={<Search />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
