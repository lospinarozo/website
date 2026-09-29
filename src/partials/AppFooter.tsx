import {Button} from "#components/ui/button";
import {Flower, GitBranch, GraduationCap, MailPen, Microscope} from "lucide-react";
import {Link} from "react-router-dom";

function AppFooter() {
    return (
        <div className="bg-accent w-full min-h-30 pt-8 pb-6 flex justify-center gap-x-4">
            <Link to="mailto:lauraospina061@gmail.com">
                <Button variant="outline" size="icon-lg" aria-label="email">
                    <MailPen/>
                </Button>
            </Link>
            <Link to="https://scholar.google.com/citations?user=4YCQtAEAAAAJ&hl=en" target="_blank">
                <Button variant="outline" size="icon-lg" aria-label="google scholar">
                    <GraduationCap/>
                </Button>
            </Link>
            <Link to="https://github.com/lospinarozo" target="_blank">
                <Button variant="outline" size="icon-lg" aria-label="github">
                    <GitBranch/>
                </Button>
            </Link>
            <Link to="https://www.researchgate.net/profile/Laura-Ospina-Rozo" target="_blank">
                <Button variant="outline" size="icon-lg" aria-label="research gate">
                    <Microscope/>
                </Button>
            </Link>
            <Link to="https://orcid.org/0000-0002-1904-202X" target="_blank">
                <Button variant="outline" size="icon-lg" aria-label="orcid">
                    <Flower/>
                </Button>
            </Link>
        </div>
    )
}

export default AppFooter;