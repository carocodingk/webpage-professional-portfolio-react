import React from "react";
import Sectiontext from "./Sectiontext";
import Sectiontittle from "./Sectiontitle";

import "./Projects.css";

function Projects({projects: works}){
  let infoSide, imageSide, seemore;
  const projects = works.map(project => {
    if (Number(project.id)%2 !== 0){
      infoSide = "right";
      imageSide = "top";
    }
    else{
      infoSide = "left";
      imageSide = "bottom";
    }
    if (project.url !== "none")
      seemore = <a href={project.url} target="_blank"><i class="fa fa-arrow-circle-right projectButton"></i></a>;
    else
      seemore = null

    return(
      <div className={"projectFrame " + imageSide} >
        <div className={"projectInfo shadow "+ infoSide}>
          <Sectiontittle title={project.title} />
          <Sectiontext text={project.text} />
          <div id="sectionButtons"> 
            <a href={project.github} target="_blank"><i class="fa fa-github projectButton
          "></i></a>
            {seemore}
          </div>
        </div>
        <img className="projectImg shadow " src={require(`${project.image}`)}></img>
      </div> 
    );
  });
  return(
    <div id="projects">
      {projects}
    </div>
  );
}

export default Projects;