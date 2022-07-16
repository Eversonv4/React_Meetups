import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetup";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://meetups-react-app-b8b26-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
