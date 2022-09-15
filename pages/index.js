import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Frontpage from '../Components/Frontpage/Frontpage'
import Cards from '../Components/Cards/Cards'
import Footer from '../Components/Footer/Footer'

   
   const Landingpage = ({landingpage, projects}) => {
     return (
       <div>
         <Navbar projects={projects}/>
         <Frontpage content={landingpage}/>
         <Cards cardContent={projects}/>
         <Footer/>
       </div>
     )
   }

   export async function getStaticProps() {
  
    // const res = await fetch('http://localhost:1337/api/landing-page')
    const res = await fetch('http://barb-personal-website.herokuapp.com/api/landing-page')
    const landingpage = await res.json()

    // const anotherRes = await fetch('http://localhost:1337/api/projects')
    const anotherRes = await fetch('http://barb-personal-website.herokuapp.com/api/projects')
    const projects = await anotherRes.json()

    return {
      props: {
        landingpage,
        projects
      }
    }
  }

 
   export default Landingpage
   