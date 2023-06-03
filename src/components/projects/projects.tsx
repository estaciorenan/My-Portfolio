import { useContext } from "react";
import { Context } from "@/contexts/auth";

export default function Projects() {

    const { themeDark } = useContext(Context);

    return (
        <>
            <div className="fixed relative w-5/5 overflow-auto">
                <div className=" xl:absolute lg:fixed md:absolute sm:static xs:static w-full justify-center">

                    <div className="w-5/5 mb-10">
                        <div id='projects'>
                            <div >
                                Em breve.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}