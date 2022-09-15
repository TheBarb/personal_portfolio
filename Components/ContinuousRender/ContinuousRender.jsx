import React from 'react'
import { useRouter } from "next/router"


const tomdickandharry = ({projects}) => {

    const currentId = 4;

const allIds = projects.data.map((project, index)=> {
  return project.id
})

//console.log(allIds);

const currentIndex = allIds.indexOf(currentId)

//console.log(currentIndex)

const currentProject = projects.data[currentIndex];

console.log(currentProject);

const previousPosts = projects.data.filter((element, index) => 
  index !== currentIndex && index < currentIndex
)

 //console.log(previousPosts)

const followingPosts = projects.data.filter((element, index) => 
  index !== currentIndex && index > currentIndex
)

//console.log(followingPosts)

const continuousPosts = followingPosts.concat(previousPosts);

 console.log(continuousPosts)



    return (
        
        <div>
            <div>{currentProject.attributes.title}</div>
         {continuousPosts.map((card, index) => {
           return(
        <div key= {index}>
              <div>
                <div >{card.attributes.title}</div>
                <div >{card.attributes.teaser}</div>
              </div>
            
          </div> 
           )
         })}
      
        </div>
         
        )
}

export default tomdickandharry

export async function getStaticProps() {
  

    const anotherRes = await fetch(`http://barb-personal-website.herokuapp.com/api/projects`)
    const projects = await anotherRes.json()

    return {
      props: { projects
      }
    }
  }
