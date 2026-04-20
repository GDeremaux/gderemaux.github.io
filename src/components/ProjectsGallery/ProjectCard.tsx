import H5 from "@/components/typography/H5";
import P from "@/components/typography/P";

export default function ProjectCard() {
    return (
        <article className="bg-white overflow-hidden rounded-xl border border-neutral-200">
            <header className="p-4">
                <H5 className="mb-0">Project Title</H5>
            </header>
            <section className="border-t border-neutral-200 p-4">
                <div className="mb-4 h-32 rounded-lg bg-neutral-100" />
                <P className="mb-0 text-sm text-neutral-600">
                    Short description of the project.
                </P>
            </section>
        </article>
    )
}
