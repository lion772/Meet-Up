import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm, {
    MeetupDataForm,
} from "../../components/meetups/NewMeetupForm";

const dev = process.env.NODE_ENV !== "production";
const server = dev
    ? "http://localhost:3000"
    : "https://meet-up-ozc5-o9h4e87e7-lion772.vercel.app/";

export default function NewMeetup() {
    const router = useRouter();
    async function onAddMeetupHandler(meetupData: MeetupDataForm) {
        //save in database
        const data = await (
            await fetch(`${server}/api/new-meetup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(meetupData),
            })
        ).json();

        console.log(data);
        router.push("/");
    }
    return (
        <>
            <Head>
                <title>Add a New Meetup</title>
                <meta
                    name="description"
                    content="Add your own meetups and create amazing networking opportunities!"
                />
            </Head>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </>
    );
}
