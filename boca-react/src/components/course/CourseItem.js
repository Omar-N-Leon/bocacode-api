import React from 'react'

function CourseItem({course}) {
    return (
        <div className="course">
            <h3>{course.title}</h3>
            <img src={course.image} alt="" />
            <p>{course.description}</p>
        </div>
    )
}

export default CourseItem