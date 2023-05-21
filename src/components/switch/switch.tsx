import { useContext } from "react";
import { Context } from "@/contexts/auth";
import Start from "../start/start";
import Work from "../work/work";
import Projects from "../projects/projects";

export default function SwicthComponents() {
    const { page, themeDark } = useContext(Context)

    switch (page) {
        case 1:
            return (
                <>
                    <div className="w-4/5">
                        < Start />
                    </div>
                </>
            )
        case 2:
            return (
                <>
                    <div className="w-4/5">
                        <Work />
                    </div>
                </>
            )
        case 3:
            return (
                <>
                    <div className="w-4/5">
                        <Projects />
                    </div>
                </>
            )
        default:
            return (
                <>
                    <div></div>
                </>
            )
    }
}