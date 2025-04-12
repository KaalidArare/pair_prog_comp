import React from "react";

const Hobby = ({ hobby }) => {
    const { name, time } = hobby;

    return (
        <li>
            <strong>{name}</strong> - <em>{time} Hours</em>
        </li>
    )
}

export default Hobby;