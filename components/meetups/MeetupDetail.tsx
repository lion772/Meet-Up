import styles from "./MeetupDetail.module.css";

export type MeetupData = {
    id: string;
    image: string;
    address: string;
    title: string;
    description: string;
};

export default function MeetupDetail(props: MeetupData) {
    return (
        <section className={styles.detail}>
            <h1>Meetup Detail</h1>
            <img src={props.image} alt={props.title} />
            <address>{props.address}</address>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </section>
    );
}
