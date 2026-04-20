export default function ProjectCard() {
    return (
        <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="bg-gray-200 h-32 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Project Title</h3>
            <p className="text-gray-600 mb-4">Short description of the project.</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
    )
}