import React from "react";
import Person from "./Person";
function NameList(){
    const names = ['brush', 'clark', 'diana'];
    const persons = [
        {
            id:1,
            name:"brush",
            age :24,
            skill: "react"
        },
        {
            id:2,
            name:"clark",
            age :28,
            skill: "Angular"
        },
        {
            id:3,
            name:"diana",
            age :21,
            skill: "vue"
        }
    ]

    const personList = persons.map((person,index) => <h2 key={index}> {index} <Person person = {person}  index ={index}/ > </h2>)
    {/* // const namelist = names.map((name, index) => <h2 key={index}> {index}{name}</h2>) */}
    return (
        <div>
            {
                personList
                // namelist
            }
        </div>
    )
}

export default NameList