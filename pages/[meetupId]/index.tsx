import { useRouter } from "next/router";

export default function MeetupDetail() {
    const router = useRouter();
    console.log(router);
    return (
        <>
            <h1>Meetup Detail</h1>
        </>
    );
}
