//import Link from "next/link";
//import { useRouter } from "next/router"
//import CardItem from "../../Components/CardItem/CardItem";
import Navbar from '../../Components/Navbar/Navbar'
import Colorblock from "../../Components/Colorblock/Colorblock";
import ViewportConditional from '../../Components/ViewportConditional/ViewportConditional'
import ProjectOverview from "../../Components/ProjectOverview/ProjectOverview";
import ThreeQuestions from '../../Components/ThreeQuestions/ThreeQuestions'
import Footer from '../../Components/Footer/Footer'

const card = (project) => {

  

  /* const router = useRouter();
  const url = router.query;
  
  const { id } = url; */

 

  const projectContent = project.project.data.attributes;
  const techStack = projectContent.teches.data;
  const url = projectContent.Url;
 

  //console.log(techStack);

 
 

  return(
    <>
    <Navbar/>
    <Colorblock/>
    <ProjectOverview projectContent={projectContent} techStack={techStack}/>
    <ViewportConditional url={url}/>
    <ThreeQuestions projectContent={projectContent}/>
    <Footer/>
    </>
  )

}


export default card

export async function getStaticProps(context) {
    const res = await fetch(`http://barb-personal-website.herokuapp.com/api/projects/${context.params.id}?populate=teches`)
    const project = await res.json()

    return {
      props: {project} // will be passed to the page component as props
    }
  }

  

 export const getStaticPaths = async () => {
    const res = await fetch (`http://barb-personal-website.herokuapp.com/api/projects`)
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