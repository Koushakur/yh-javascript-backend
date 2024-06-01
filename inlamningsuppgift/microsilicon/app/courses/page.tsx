'use client'
import { Course } from "../interfaces/course";
import CourseGridItem from "../components/courseGrid/courseGridItem";
import CourseAd from "../components/sections/courseAd/CourseAd";

import './courses.scss'
import { useState, useEffect } from "react";

export default function Courses() {
   const [coursesData, setCoursesData] = useState<Course[]>([])

   useEffect(() => {
      GetCoursesData()

   }, [])

   async function GetCoursesData(): Promise<boolean | null> {

      const query = `{
         "query": "query getCourses() { getCourses() { id title imageURL author likes likePercentage hours bestSeller priceOriginal priceDiscounted } }"
      }`

      const response = await fetch("http://localhost:7202/api/graphql",
         {
            method: "post",
            headers: { "content-type": "application/json" },
            body: query
         })

      if (response.ok) {
         const resultJson = await response.json()
         setCoursesData(resultJson.data.getCourses)
         return true

      } else
         return false

   }

   return (
      <section id="courses">

         <div className="container">

            <div className="titleAndSearch">
               <h2>Courses</h2>
               <div>
                  <div className="dropDown"></div>
                  <div className="searchAndDropdown">
                     <input type="search" placeholder="Search courses" />
                     <a href=""><span className="fa-regular fa-magnifying-glass"></span></a>
                  </div>
               </div>
            </div>

            <div className="gridBox">
               {coursesData.map(c =>
                  <CourseGridItem key={c.id} course={c} />
               )}
            </div>

            <div className="pagination"></div>

            <CourseAd />
         </div>
      </section>
   )
}