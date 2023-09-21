import { useContext, useEffect, useState } from "react";
import { Context } from "@/app/contexts/auth";
import Start from "../start/start";
import Work from "../work/work";
import Projects from "../projects/projects";


export default function SwicthComponents() {
    const { page, themeDark } = useContext<any>(Context)
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    })

    switch (page) {
        case 1:
            return <Start/>
        case 2:
            return <Work/>
        case 3:
            return <Projects/>
        default:
            return (
                <>
                    <div></div>
                </>
            )
    }
}