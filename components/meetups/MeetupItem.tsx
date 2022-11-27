import { useRouter } from "next/router";
import { FC } from "react";
import Card from "../ui/Card";
import { MeetupData } from "./MeetupDetail";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props: MeetupData) => {
    // Could also use Link tag as better alternative
    const router = useRouter();
    function showDetailsHandler() {
        router.push(`/${props.id}`);
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                </div>
                <div className={classes.actions}>
                    <button onClick={showDetailsHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
