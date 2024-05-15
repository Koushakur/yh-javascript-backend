import Link from 'next/link'
import Image from 'next/image'
import './Header.scss'

// import SiliconLogo from './images/logos/Silicon-LightMode.svg'

export default function Header() {
   return (
      <header>
         <div className="container">
            <div className="logo-nav">
               <Link href={"/"}>
                  <Image src="./images/logos/Silicon-LightMode.svg" alt="" width={130} height={45} />
               </Link>
               <nav>
                  <Link href={"/"}>Overview</Link>
                  <Link href={"/"}>Features</Link>
                  <Link href={"/"}>Contact</Link>
                  <Link href={"/courses"}>Courses</Link>
               </nav>
            </div>

            <div className="functionality">
               <div className="darkmode">
                  <label>Light</label>
                  <label className="switch">
                     <input type="checkbox" />
                     <span className="slider round"></span>
                  </label>
                  <label>Dark</label>
               </div>

               <Link href={"/"} className="button btn-header btn-pale" asp-controller="account" asp-action="signin">
                  <span className="fa-solid fa-arrow-right-to-bracket me-2"></span>Sign in
               </Link>
               <Link href={"/"} className="button btn-header btn-dark" asp-controller="account" asp-action="signup">
                  <span className="fa-regular fa-user me-2"></span>Sign up
               </Link>

            </div>
         </div>
      </header>
   )
}