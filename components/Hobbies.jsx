import React from "react";
import Hobby from "./Hobby.jsx";

const Hobbies = (props) => {
    console.log(props)
     return (
        <>
        <div>
            <ul>
                {/* mapping through the list and rendering one hobby
                component for each*/}
                {props.hobbies.map((hobby) => (
                    <Hobby key={hobby.id} hobby={hobby} />
                ))}
            </ul>
        </div>
        </>
    )
}

export default Hobbies;