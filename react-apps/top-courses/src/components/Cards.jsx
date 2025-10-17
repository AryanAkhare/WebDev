import React from "react";
import Card from "./Card";

// Minimal stub for Cards component to avoid runtime errors
// Replace with real implementation when ready
const Cards = ({courses}) => {
    let allCourses=[];

    //returns list of all coursees recervied from api responce
    const getCourses =()=>{
        if(!courses){
            return [];
        }
        Object.values(courses).forEach((
            courseCat
        )=>{
            courseCat.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses
    }
    return (
        <div>
            {/* Cards placeholder */}
            {getCourses().map((course) => (
                <Card key={course.id} course={course}></Card>
            ))}
        </div>
    );
}

export default Cards;

