import { useContext, useState, useEffect } from "react";
import { Context } from "@/app/contexts/auth";
import Skeleton from "react-loading-skeleton";

export default function Projects() {
    const { themeDark } = useContext(Context);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    })

    return (
        <>
            {/* -------------------------------------------Container------------------------------------------------- */}
            <div className="fixed relative w-5/5 overflow-auto">
                <div className=" xl:absolute lg:fixed md:absolute sm:static xs:static w-full justify-center">
                    <div className="w-5/5 h-100v  mb-10" id='projects'>
                        {/* ---------------------------------------------Content--------------------------------------------- */}

                        <div className="text-center p-5 mt-5" >
                            <h2 className=" relative text-6xl uppercase p-22 font-bold text-gray-700">PROJECTS</h2>
                            <p className="relative -top-8  text-4xl text-slate-50 font-bold">
                                <span className="underline decoration-sky-700">Projetos</span> Pessoais Práticos
                            </p>
                        </div>
                        <div className="w-full flex justify-center text-lg text-slate-50 text-center ">
                            Atualizando e preparando projetos <br />
                            Em breve disponível
                        </div>
                        {
                            loading ?
                                <div className="w-full flex justify-center">
                                    <Skeleton height={'150px'} width={"300px"} baseColor="#616161" highlightColor="#f5f5f5" direction='rtl' borderRadius={15} />
                                </div>
                                :
                                <div className="w-full flex justify-center">
                                    <iframe src="https://embed.lottiefiles.com/animation/42637"></iframe>
                                </div>
                        }
                        {/* ---------------------------------------------Content End--------------------------------------------- */}
                    </div>
                </div>
            </div>
            {/* ---------------------------------------------Container End--------------------------------------------- */}
        </>
    )
}