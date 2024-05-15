import { Course } from "@/app/interfaces/course"
import Image from "next/image"

interface CourseProp {
   course: Course
}

export default function CourseGridItem({ course }: CourseProp) {

   function formatLikes(num: number) {
      if (num >= 1000000)
         return parseFloat((num / 1000000).toFixed(1)) + 'M';

      else if (num >= 1000)
         return parseFloat((num / 1000).toFixed(1)) + 'K';

      return num.toString();
   }

   return (
      <div className="content">
         {course.bestSeller == true && <span className="bestseller">Best Seller</span>}
         <Image src={"/" + course.imageURL} width={416} height={240} alt="" />
         <span className="fa-regular fa-bookmark"></span>
         <div className="textBox">

            <h5>{course.title}</h5>
            <p className="author">By {course.author}</p>

            {course.priceDiscounted != null ?
               <>
                  <p className="price-text sale">{course.priceDiscounted}</p>
                  <p className="price-text original">{course.priceOriginal}</p>
               </>
               : <p className="price-text">{course.priceOriginal}</p>}

            <hr />
            <div className="stats">
               <p><span className="fa-regular fa-clock"></span> {course.hours} hours</p>
               <p><span className="fa-light fa-thumbs-up"></span> {course.likePercentage.toFixed(0)}% {formatLikes(course.likes)}</p>
            </div>
         </div>
      </div>
   )
}