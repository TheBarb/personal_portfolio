// posts will be populated at build time by getStaticProps()
function Projects({ projects = [] }) {

    //console.log({projects})
    return (
      <div>
          {projects.data.map((project, index) => (
            <>
          <li key={index}>{project.attributes.title}</li>
          <div>{project.attributes.firstChapterTitle}</div>
          </>
        ))}
      </div>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:1337/api/projects')
    const projects = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        projects
      }
    }
  }

  
  
  export default Projects
  