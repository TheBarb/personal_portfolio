import Navbar from '../../Components/Navbar/Navbar'
import Colorblock from "../../Components/Colorblock/Colorblock";
import ViewportConditional from '../../Components/ViewportConditional/ViewportConditional'
import ProjectOverview from "../../Components/ProjectOverview/ProjectOverview";
import ThreeQuestions from '../../Components/ThreeQuestions/ThreeQuestions'
import Footer from '../../Components/Footer/Footer'

const projects = ({project}) => {

 
  const projectContent = project.project.data.attributes;
  const techStack = projectContent.teches.data;
  const url = projectContent.Url;
  const slug = projectContent.Slug;
 

 

 
 

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


export default projects

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
    const slugs = projects.data.map(project => project.attributes.Slug)
    console.log(slugs);
  

   const paths = slugs.map(slug => ({params: {slug}}))
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