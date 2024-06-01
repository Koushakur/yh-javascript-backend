import { Course } from "@/app/interfaces/course"
import Image from "next/image"

export default function CourseInfo(courseInfo: Course) {
   return (
      <>
         <div className="courseInformation">
            <h3>{courseInfo!.title}</h3>
            <p className="authors">By {courseInfo!.author}</p>
            <h6>Summary:</h6>
            <Image src={"/" + courseInfo.imageURL} width={350} height={250} alt="" />
            <p className="description">{courseInfo!.description}</p>

         </div>

         <div className="content" dangerouslySetInnerHTML={{ __html: courseInfo!.content }} />
      </>
   )
}