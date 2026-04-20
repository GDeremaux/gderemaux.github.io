import ProjectCard from "./ProjectCard";

export function ProjectsGallery() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}