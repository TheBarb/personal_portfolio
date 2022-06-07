import Link from "next/link";
import { useRouter } from "next/router"
import CardItem from "../../Components/CardItem/CardItem";
import Desktop from '../../Components/Desktop/Desktop'


const card = (project, tech) => {

  /* const router = useRouter();
  const url = router.query;
  
  const { id } = url; */

 

  const projectContent = project.project.data.attributes;
  

  const techStack = projectContent.teches.data;

  console.log(techStack);

 

  return(
    <>
    <Desktop/>
    
    {techStack.map((tech, index) => {
    return(
  <div key= {index}>
     {tech.attributes.skill}
   </div> 
   
    )})}
    <h4>{projectContent.title}</h4>
    <div>{projectContent.teaser}</div>
    <div>{projectContent.client}</div>
    <h3>{projectContent.firstChapterTitle}</h3>
    <p>{projectContent.firstChapterText}</p>
    <h3>{projectContent.secondChapterTitle}</h3>
    <p>{projectContent.secondChapterText}</p>
    <h3>{projectContent.thirdChapterTitle}</h3>
    <p>{projectContent.thirdChapterText}</p>
    <p>{projectContent.shortDescription}</p>
    <p>{projectContent.longDescription}</p>
    <h3>{projectContent.forthChapterTitle}</h3>
    <p>{projectContent.forthChapterText}</p>
    <Link href='/landingpage'>Go back</Link>
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