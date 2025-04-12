import React from "react";

const Hobby = (props) => {
    // destructuring the hobby prop to display the name and time
    const { name, time } = props.hobby;

    return (
        //displaying the hobby as a list
        <li>
            <strong>{name}</strong> - <em>{time} Hours</em>
        </li>
    )
}

export default Hobby;