import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Cards({ course, likedCourses, setLikedCourses }) {
  function clickhandler() {
    if (likedCourses.includes(course.id)) {
      // already liked
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("like removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Sucessfully");
    }
  }
  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden text-white bg-opacity-90'>
      <div className='relative'>
        <img className='object-fit' alt={course.title} src={course.image.url} />
        <div className='w-[35px] h-[35px] bg-white rounded-full absolute right-2 -bottom-4 grid place-items-center'>
          <button onClick={clickhandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize='1.7rem' />
            ) : (
              <FcLikePlaceholder fontSize='1.7rem' />
            )}
          </button>
        </div>
      </div>
      <div className='p-4'>
        <p className='font-bold'>{course.title}</p>
        <p className='mt-2'>
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
}
export default Cards;
