import { projectData } from "../../data/ProjectData";
import { Card } from "../../components/Card";

export default function Project(){
    return(
        <section id="project">
            <div className="text-white h-screen">
                <h1 className="text-[4rem]">Project</h1>
                <div className="flex flex-row gap-6">
                    <Card {...projectData[0]}/>
                    <Card {...projectData[1]}/>
                </div>
            </div>
        </section>
    );
}