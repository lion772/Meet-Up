import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetailPage() {
    const { meetupId } = useRouter().query;
    return (
        <MeetupDetail
            key={meetupId as string}
            id={meetupId as string}
            image={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Panorama_of_Canal_Grande_and_Ponte_di_Rialto%2C_Venice_-_September_2017.jpg/1024px-Panorama_of_Canal_Grande_and_Ponte_di_Rialto%2C_Venice_-_September_2017.jpg"
            }
            address={"La Serenissima"}
            title={"Venice"}
            description={"This is a first meetup"}
        />
    );
}
