import { useContext } from "react";
import { Context } from "@/contexts/auth";

export default function Projects() {

    const { themeDark } = useContext(Context);

    return (
        <>
            {/* -------------------------------------------Container------------------------------------------------- */}
            <div className="fixed relative w-5/5 overflow-auto">
                <div className=" xl:absolute lg:fixed md:absolute sm:static xs:static w-full justify-center">
                    <div className="w-5/5 mb-10">
                        {/* ---------------------------------------------Content--------------------------------------------- */}


                        <div className="text-center p-5" id='skill'>
                            <h2 className=" relative text-6xl uppercase p-22 font-bold text-gray-700">PROJECTS</h2>
                            <p className="relative -top-8  text-4xl text-slate-50 font-bold">
                                <span className="underline decoration-sky-700">Projetos</span> Pessoais Práticos
                            </p>
                        </div>
                        <div className="w-full flex justify-center text-lg text-slate-50 text-center ">
                            Atualizando e preparando projetos <br />
                            Em breve disponível   
                        </div>
                        <div className="w-full flex justify-center">
                            <iframe src="https://embed.lottiefiles.com/animation/79172" className="w-80 h-80"></iframe>
                        </div>

                        {/* ---------------------------------------------Content End--------------------------------------------- */}
                    </div>
                </div>
            </div>
            {/* ---------------------------------------------Container End--------------------------------------------- */}
        </>
    )
}