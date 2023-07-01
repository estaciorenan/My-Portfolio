import { Context } from "@/app/contexts/auth";
import { useContext } from "react";
import Card from "../card/card";
import { dataTech } from "@/app/data/technologies";


export default function Start() {
    const { themeDark, setThemeDark } = useContext(Context);

    return (
        <>
            <div className="fixed relative w-5/5 overflow-auto transition my-scroll">
                <div className=" xl:absolute lg:absolute md:static sm:static xs:static w-full justify-center">
                    <div className="w-5/5 mb-10">

                        <div className="text-center p-5" id='skill'>
                            <h2 className=" relative text-5xl  uppercase p-22 font-bold text-gray-700">About Me</h2>
                            <p className="relative xl:-top-8 lg:-top-8 md:-top-8 sm:-top-2 xs:-top-2 text-4xl text-slate-50 font-bold">
                                Um pouco sobre <span className="underline decoration-sky-700">mim</span>
                            </p>
                        </div>

                        <div className="flex flex-row w-full">
                            <div className="
                            xl:pr-20 lg:pr-20 md:pr-10 sm:pr-10 xs:pr-10
                            xl:pl-20 lg:pl-20 md:pl-10 sm:pl-10 xs:pl-10
                            pt-3  
                            w-4/4
                            ">
                                <div className="text-2xl  uppercase font-bold text-slate-50 text-center">
                                    Prazer me chamo <span className="text-sky-700">Estácio Renan</span> <br /> seja bem vindo ao meu portfolio
                                </div>
                                <div className=" pt-5 sm:p-3 xs:p-2 text-justify text-slate-50 ">
                                    <p className="m-3">
                                        Sou desenvolvedor front-end utilizando a biblioteca <span className="text-sky-700">ReactJS</span>,
                                        <span className="text-sky-700"> NextJS</span>, <span className="text-sky-700">AngularJS</span> e <span className="text-sky-700">Vue</span>, mas
                                        me aprimorando no back-end com a stack voltada para plataforma <span className="text-sky-700">Node </span>
                                        utilizando o <span className="text-sky-700">Express</span>, <span className="text-sky-700">Fastify</span>,
                                        <span className="text-sky-700"> NextJS</span> e <span className="text-sky-700">Nestjs</span> onde me considero júnior, graduado em Análise e
                                        desenvolvimento de sistemas e Pós Graduado em Gestão de Tecnologia.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-20">
                            <h2 className="relative text-5xl uppercase p-22 font-bold text-gray-700">Technology Skills</h2>
                            <p className="relative xl:-top-8 lg:-top-8 md:-top-8 sm:-top-2 xs:-top-2  text-4xl text-slate-50 font-bold">
                                Habilidades nas   <span className="underline decoration-sky-700">Tecnologias</span>
                            </p>
                        </div>

                        <div
                            className="
                            flex flex-wrap justify-center
                            xl:pl-20 lg:pl-20 md:pl-3 sm:pl-3 xs:pl-3 
                            xl:pr-20 lg:pr-20 md:pl-3 sm:pl-3 xs:pl-3 
                            pt-5 pb-5
                            gap-4 
                            "
                        >
                            {
                                dataTech?.map(map => <Card img={map?.img} title={map?.title} key={map?.title} paragraph={map?.paragraph} />)
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}