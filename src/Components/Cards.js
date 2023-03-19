import Card from "./Card";
import { useState } from "react";

function Cards({ courses, category }) {
  const [likedCourses, setLikedCourses] = useState([]);
  // it return you a list of all course recived

  const allCourse = [];
  const getCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourse.push(course);
        });
      });
      return allCourse;
    } else {
      return courses[category];
    }
  };

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
}
export default Cards;
