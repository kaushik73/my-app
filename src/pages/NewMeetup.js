import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";
function NewMeetupPage() {
  const navigate = useNavigate();
  function addMeetuphandler(meetupData) {
    // first arg = string format link of databse
    // second arg - objet which allows us to configure this fetch call and this http request
    fetch(
      "https://react-getting-started-1234-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetuphandler} />
    </div>
  );
}

export default NewMeetupPage;
