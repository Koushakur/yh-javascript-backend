"use client"
import { Course } from "@/app/interfaces/course";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import CourseInfo from "@/app/components/courseInfo/courseInfo";
import "./courseDetails.scss"

export default function CourseDetails() {
   const [courseData, setCourseData] = useState<Course>()
   const searchParams = useSearchParams();

   useEffect(() => {
      if (searchParams.has("id")) {
         const id = searchParams.get("id") ?? ""

         GetCourseData(id)

      } else
         console.log("missing id")

   }, [searchParams])

   async function GetCourseData(id: string): Promise<boolean | null> {

      const query = `{
         "query": "query getCourse($id: String!) { getCourse(id: $id) { title author imageURL description content } }",
         "variables": {
             "id": "${id}"
         }
      }`

      const response = await fetch("http://localhost:7202/api/graphql",
         {
            method: "post",
            headers: { "content-type": "application/json" },
            body: query
         })

      if (response.ok) {
         const resultJson = await response.json()
         setCourseData(resultJson.data.getCourse)
         return true

      } else {

         return false
      }
   }

   return (
      <section id="courseDetails">
         <div className="container">
            {
               searchParams.has("id") ?
                  courseData == undefined ?
                     <p>Loading course...</p>
                     :
                     <CourseInfo {...courseData} />

                  : <p>Missing course id</p>
            }
         </div>
      </section>
   )
}