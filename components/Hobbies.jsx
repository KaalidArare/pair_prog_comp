import React from "react";
import Hobby from "./Hobby.jsx";

const Hobbies = ({ hobbies }) => {
    console.log(hobbies)
     return (
        <>
        <div>
            <ul>
                {hobbies.map((hobby) => (
                    <Hobby key={hobby.id} hobby={hobby} />
                ))}
            </ul>
        </div>
        </>
    )
}

export default Hobbies;