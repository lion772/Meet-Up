import NewMeetupForm, {
    MeetupDataForm,
} from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
    function onAddMeetupHandler(meetupData: MeetupDataForm) {
        console.log(meetupData);

        //save in database
    }
    return (
        <>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </>
    );
}
