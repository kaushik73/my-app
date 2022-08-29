// import logo from './logo.svg';
// import Modal from "./components/Modal";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import MainNavigation from "./components/layout/MainNavigation";
import "./index.css";
import AllMeetupsPage from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";
// function App() {
//   return (
//     <Switch>
//       <Route exact path="/">
//         <AllMeetupsPage />
//       </Route>
//     </Switch>
//   );
// }
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Layout>
  );
}

export default App;
