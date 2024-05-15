import Image from 'next/image'
import './courseAd.scss'

export default function Footer() {
   return (
      <section id="courseAd">
         <div className="container">
            <div className="textBox">
               <p className="title">Ready to get started?</p>
               <h2>Take Your <span className="purple">Skills</span> to the<br />Next Level</h2>
               <button className="btn-dark btn-shadow">Work with us</button>
            </div>
            <Image src="images/misc/adIllustration.svg" alt="" width={526} height={378} />
         </div>
      </section>
   )
}