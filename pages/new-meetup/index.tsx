import NewMeetupForm, {
    MeetupData,
} from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
    function onAddMeetupHandler(meetupData: MeetupData) {
        console.log(meetupData);

        //save in database
    }
    return (
        <>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </>
    );
}
