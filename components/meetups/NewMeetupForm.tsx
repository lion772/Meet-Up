import { FC, SyntheticEvent, useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export type MeetupDataForm = {
    title: string | undefined;
    image: string | undefined;
    address: string | undefined;
    description: string | undefined;
};

interface IMeetupForm {
    onAddMeetup: (meetupData: MeetupDataForm) => void;
}

const NewMeetupForm: FC<IMeetupForm> = (props) => {
    const titleInputRef = useRef<HTMLInputElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const addressInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

    function submitHandler(event: SyntheticEvent) {
        event.preventDefault();

        const meetupData = {
            title: titleInputRef.current?.value,
            image: imageInputRef.current?.value,
            address: addressInputRef.current?.value,
            description: descriptionInputRef.current?.value,
        };

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input
                        type="text"
                        required
                        id="title"
                        ref={titleInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        required
                        id="address"
                        ref={addressInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        required
                        rows={5}
                        ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
