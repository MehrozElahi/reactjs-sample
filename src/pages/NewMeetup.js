import NewMeetupForm from "../components/meetups/NewMeetupForm";
import React from 'react';

function  NewMeetupPage(){
   function addMeetupHandler(){
  
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        </section>
    )
}

export default NewMeetupPage;