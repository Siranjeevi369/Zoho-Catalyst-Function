import React from "react";

function Person({person , index}) 
{

    return(
        <div>
            <h2>
                I am {person.name}, i am {person.age} years old , i know {person.skill} , {index}
            </h2>
        </div>
    )
    
}
export default Person