//import Link from "next/link";
//import { useRouter } from "next/router"
//import CardItem from "../../Components/CardItem/CardItem";
import Navbar from '../../Components/Navbar/Navbar'
import Colorblock from "../../Components/Colorblock/Colorblock";

import MockDesktop from "../../Components/MockDesktop/MockDesktop";
import ViewportConditional from '../../Components/ViewportConditional/ViewportConditional'
import ProjectOverview from "../../Components/ProjectOverview/ProjectOverview";
const card = (project) => {

  

  /* const router = useRouter();
  const url = router.query;
  
  const { id } = url; */

 

  const projectContent = project.project.data.attributes;
  const techStack = projectContent.teches.data;
  const url = projectContent.Url;
 

  console.log(techStack);

 
 

  return(
    <>
    <Navbar/>
    {/*<ViewportConditional/>*/}
    <Colorblock/>
    <ProjectOverview projectContent={projectContent} techStack={techStack}/>
   

<MockDesktop url={url}/>


<p>01</p>
<p>Briefing</p>
<p>{projectContent.Briefing}</p>

<p>02</p>
<p>Herausforderung</p>
<p>{projectContent.Herausforderung}</p>

<p>03</p>
<p>What's next</p>
<p>{projectContent.WhatsNext}</p>

    
   
    </>
  )

}


export default card

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:1337/api/projects/${context.params.id}?populate=teches`)
    const project = await res.json()

    return {
      props: {project} // will be passed to the page component as props
    }
  }

  

 export const getStaticPaths = async () => {
    const res = await fetch (`http://localhost:1337/api/projects`)
    const projects = await res.json()
    const ids = projects.data.map(project => project.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return {
      paths,
      fallback: false
    }
  } 

/* 
const qs = require('qs');

const query = qs.stringify({
  populate: ['teches'], 
}, {
  encodeValuesOnly: true,
});

await request(`/api/projects?${query}`);
// GET /api/articles?populate[0]=categories  */