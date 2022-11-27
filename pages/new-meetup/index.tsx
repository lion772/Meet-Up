import NewMeetupForm, {
    MeetupDataForm,
} from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
    async function onAddMeetupHandler(meetupData: MeetupDataForm) {
        //save in database
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(meetupData),
        });
        const data = await response.json();
        console.log(data);
    }
    return (
        <>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </>
    );
}
