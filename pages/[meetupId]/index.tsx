import { useRouter } from "next/router";

export default function MeetupDetail() {
    const { meetupId } = useRouter().query;
    console.log(meetupId);
    return (
        <>
            <h1>Meetup Detail</h1>
            <h1>{meetupId}</h1>
        </>
    );
}
