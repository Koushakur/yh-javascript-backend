import { Course } from "../interfaces/course";
import CourseGridItem from "../components/courseGrid/courseGridItem";
import CourseAd from "../components/sections/courseAd/CourseAd";

import './courses.scss'

export default function Courses() {
   let courseJsonTesting = `[{"id":"0c5802bd-51b5-4372-af02-452c4a3167a7","imageURL":"images/photos/image-6.png","title":"Blender Character Creator v2.0 for Video Games Design","author":"Ralph Edwards","priceOriginal":18.99,"priceDiscounted":null,"hours":160,"likes":3100,"likePercentage":92,"bestSeller":false},{"id":"2babd7f4-0393-435f-9ece-5ed267549ccf","imageURL":"images/photos/image-7.png","title":"The Ultimate Guide to 2D Mobile Game Development with Unity","author":"Albert Flores","priceOriginal":44.99,"priceDiscounted":12.99,"hours":100,"likes":2700,"likePercentage":98,"bestSeller":false},{"id":"2e76bb95-042f-4ac5-8490-9bb10bce8e90","imageURL":"images/photos/image-4.png","title":"Data Science & Machine Learning with Python","author":"Esther Howard","priceOriginal":11.2,"priceDiscounted":null,"hours":160,"likes":3100,"likePercentage":92,"bestSeller":true},{"id":"66614868-d58b-42cb-abd7-d07ddb9a8a8a","imageURL":"images/photos/image-5.png","title":"Creative CSS Drawing Course: Make Art With CSS","author":"Robert Fox","priceOriginal":10.5,"priceDiscounted":null,"hours":220,"likes":4200,"likePercentage":94,"bestSeller":false},{"id":"6836e1f0-9f64-4612-b894-864894ad4b18","imageURL":"images/photos/image-0.png","title":"Fullstack Web Developer Course from Scratch","author":"Robert Fox","priceOriginal":12.5,"priceDiscounted":null,"hours":220,"likes":4200,"likePercentage":94,"bestSeller":true},{"id":"9085f507-f9e4-495d-9f7b-c413dbff703a","imageURL":"images/photos/image-2.png","title":"The Complete Front-End Web Development Course","author":"Albert Flores","priceOriginal":44.99,"priceDiscounted":9.99,"hours":100,"likes":2700,"likePercentage":98,"bestSeller":false},{"id":"99c01d8b-63bc-403e-990e-aef58ede08e9","imageURL":"images/photos/image-3.png","title":"iOS & Swift - The Complete iOS App Development Course","author":"Marvin McKinney","priceOriginal":15.99,"priceDiscounted":null,"hours":160,"likes":3100,"likePercentage":92,"bestSeller":false},{"id":"ca9355ea-199c-4856-8496-1283aad46cb6","imageURL":"images/photos/image-8.png","title":"Learn JMETER from Scratch on Live Apps-Performance Testing","author":"Jenny Wilson","priceOriginal":14.5,"priceDiscounted":null,"hours":160,"likes":3100,"likePercentage":92,"bestSeller":false},{"id":"d5da5d5e-97e8-4a1f-8beb-48934c7ec48d","imageURL":"images/photos/image-1.png","title":"HTML, CSS, JavaScript Web Developer","author":"Jenny Wilson & Marvin McKinney","priceOriginal":15.99,"priceDiscounted":null,"hours":160,"likes":3100,"likePercentage":92,"bestSeller":false}]`

   const courseList: Course[] = JSON.parse(courseJsonTesting)

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
               {courseList.map(c =>
                  <CourseGridItem key={c.id} course={c} />
               )}
            </div>

            <div className="pagination"></div>

            <CourseAd />
         </div>
      </section>
   )
}