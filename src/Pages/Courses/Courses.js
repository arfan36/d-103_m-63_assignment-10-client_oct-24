import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Courses = () => {
    const allCourses = useLoaderData();
    // console.log("🚀 ~ allCourses", allCourses);
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                allCourses.map(course => <CourseCard
                    key={course.id}
                    course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Courses;