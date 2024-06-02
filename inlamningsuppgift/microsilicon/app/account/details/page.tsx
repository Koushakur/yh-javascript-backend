'use client'
import { User, FormBasicInfoFactory } from "@/app/interfaces/user"
import { useState } from "react"
import { } from "@/app/interfaces/user"

import './accountDetails.scss'

export default function AccountDetails() {

   const placeholderUser: User = {
      FormBasicInfo: FormBasicInfoFactory("John", "Doe", "user£domain.com", "images/profile/photo01.png", "", ""),
      FormAddressInfo: { Address1: "Citystreet 52", Address2: undefined, PostalCode: "133 37", City: "Townville" }
   }
   const [userData, setUserData] = useState<User>(placeholderUser)

   return (
      <section id="accountDetails">
         <div className="container">

            {/* <!-- Left side --> */}
            <div className="profile">
               {/* <!-- Profile --> */}

               <div className="imageAndIcon">
                  <img src={`~/${userData!.FormBasicInfo.ProfileImageURL}`} alt="Your profile image" />
                  <span className="fa-solid fa-rotate newProfileImage"></span>
               </div>

               <h5>{userData!.FormBasicInfo.FullName}</h5>
               <p>{userData!.FormBasicInfo.Email}</p>
               <a href="" className="button btn-dark btn-shadow">
                  <span className="fa-regular fa-gear me-3"></span> Account Details
               </a>
               <a asp-action="SignOut" asp-controller="Account" className="button btn-transparent"><span className="fa-solid fa-arrow-right-from-bracket me-3"></span> Sign Out</a>
            </div>

            {/* <!-- Right side --> */}
            <div className="updateInfo">
               <h3>Account Details</h3>
               {/* <!-- Basic info form --> */}
               <div className="basicInfo">
                  <h5>Basic Info</h5>

                  <form method="post" asp-controller="account" asp-action="basicinfo">
                     <div className="flexBox">
                        <div className="box">
                           <div className="labelAndError">
                              <label htmlFor="FirstName">First Name</label>
                              <span className="error-text"></span>
                           </div>
                           <input value={userData!.FormBasicInfo.FirstName} name="FirstName" />
                        </div>

                        <div className="box">
                           <div className="labelAndError">
                              <label htmlFor="LastName">Last Name</label>
                              <span className="error-text"></span>
                           </div>
                           <input value={userData!.FormBasicInfo.LastName} name="LastName" />
                        </div>
                     </div>

                     <div className="flexBox">
                        <div className="box">
                           <div className="labelAndError">
                              <label htmlFor="Email">Email</label>
                              <span className="error-text"></span>
                           </div>
                           <input value={userData!.FormBasicInfo.Email} name="Email" />
                        </div>
                        <div className="box">
                           <div className="labelAndError">
                              <label htmlFor="Phone" className="add-optional-text">Phone</label>
                              <span className="error-text"></span>
                           </div>
                           <input value={userData!.FormBasicInfo.Phone} name="Phone" />
                        </div>
                     </div>

                     <label htmlFor="Bio" className="add-optional-text">Bio</label>
                     <textarea value={userData!.FormBasicInfo.Bio} cols={30} rows={4} name="Bio"></textarea>

                     <div className="flexBox form-buttons">
                        <button className="button btn-pale" type="reset">Cancel</button>
                        <button className="button btn-dark" type="submit">Save changes</button>
                     </div>
                  </form>
               </div>

               {/* <!-- Address info form --> */}
               <div className="addressInfo">
                  <h5>Address</h5>
                  <form method="post" asp-controller="account" asp-action="addressinfo">
                     <div className="labelAndError">
                        <label htmlFor="Address1">Address 1</label>
                        <span className="error-text"></span>
                     </div>
                     <input value={userData!.FormAddressInfo.Address1} name="Address1" />

                     <div className="labelAndError">
                        <label htmlFor="Address2" className="add-optional-text">Address 2</label>
                        <span className="error-text"></span>
                     </div>
                     <input value={userData!.FormAddressInfo.Address2} name="Address2" />

                     <div className="flexBox">
                        <div className="box">
                           <div className="labelAndError">
                              <label htmlFor="PostalCode">Postal Code</label>
                              <span className="error-text"></span>
                           </div>
                           <input value={userData!.FormAddressInfo.PostalCode} name="PostalCode" />
                        </div>
                        <div className="box">
                           <div className="labelAndError">
                              <label htmlFor="City">City</label>
                              <span className="error-text"></span>
                           </div>
                           <input value={userData!.FormAddressInfo.City} name="City" />
                        </div>
                     </div>
                     <div className="flexBox form-buttons">
                        <button className="button btn-pale" type="reset">Cancel</button>
                        <button className="button btn-dark" type="submit">Save changes</button>
                     </div>
                  </form>
               </div>
            </div>

         </div>
      </section>
   )
}