import React from 'react'
// import CourseItem from '../components/course/CourseItem'

class Courses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
        }
    }
    componentDidMount() {
        let API_URL = 'https://bocanode.web.app/courses.json'
    // go out to this url and grab the json
        fetch(API_URL)
        // parse the json from the response
        .then(response => response.json())
        .then(data => this.setState({courses: data}))
    }
    render(){
        let {courses} = this.state
        return (
            <>
            <h2>Short Courses</h2>
            {(courses.length === 0)
                ? <p>Loading...</p>
                :   <div className="course-section">
                        {courses.map((singleCourse, index) => {
                            return <div className="course" key={index}>{singleCourse.title}</div>
                        })}
                    </div>
            }
            </>
        )
    }
}
export default Courses