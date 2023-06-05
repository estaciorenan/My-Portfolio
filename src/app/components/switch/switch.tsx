import { useContext } from "react";
import { Context } from "@/app/contexts/auth";
import Start from "../start/start";
import Work from "../work/work";
import Projects from "../projects/projects";

export default function SwicthComponents() {
    const { page, themeDark } = useContext<any>(Context)

    switch (page) {
        case 1:
            return <Start />
        case 2:
            return <Work />
        case 3:
            return <Projects />
        default:
            return (
                <>
                    <div></div>
                </>
            )
    }
}