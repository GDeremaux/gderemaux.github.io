import PageWrapper from "@/components/PageWrapper";
import Eyebrow from "@/components/typography/Eyebrow";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import P from "@/components/typography/P";
import A from "@/components/typography/A";
import { ProjectsGallery } from "@/components/ProjectsGallery";

export default function Projects() {
    return (
        <PageWrapper>
            <Eyebrow>Projects</Eyebrow>
            <H1 className="">Math & Computer Science Student</H1>
            <P>
                I'm a math & computer science student @ <A href="https://www.u-paris.fr/" newTab>Université Paris Cité</A>.
                Passionate about software development, machine learning, automated video editing and history.
            </P>
            <P>
                Contact : <A>gustave.deremaux (at) gmail [dot] com</A>
            </P>
            <ProjectsGallery />
        </PageWrapper>  
    )
}
