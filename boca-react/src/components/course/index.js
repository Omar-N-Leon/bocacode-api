// import React from 'react'
// import CourseItem from './CourseItem'


// class Courses extends React.Component (
//     constructior(props) {
//         super(props)
//         this.state = {
//             courses: [],
//         }
//     }
//     componentDidMount() {
//         // go out to this url and grab the json
//         fetch('https://bocanode.web.app/courses/json')
//             // parse the json from the response
//         .then(response => response.json())
//         then(data => {
//             console.log(data)
//         })
//     }
//     render() {
//         let { courses } = this.state
//         if (courses.length === 0) {
//             return <>Loading...</>
//         }
//         return (
//             <>
//                 <h2>Short Courses</h2>
//                 <div className="course-section">
//                     {courses.map(course => {
//                         return <CourseItem course={course} />
//                     })}
//                 </div>
//             </>
//         )
//     }
// )