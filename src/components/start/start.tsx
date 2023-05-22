import { Context } from "@/contexts/auth";
import { useContext } from "react";

export default function Start() {
    const { themeDark, setThemeDark } = useContext(Context)
    // const dataAtual = new Date();
    // const anoAtual = dataAtual.getFullYear();

    return (
        <>
            <div className="fixed w-5/5 overflow-auto relative ">
                <div className="absolute w-full">

                    <div className="text-center p-5">
                        <h2 className=" relative text-8xl uppercase p-22 font-bold text-gray-700">About Me</h2>
                        <p className="relative -top-10  text-6xl text-slate-50 font-bold">
                            Um pouco sobre <span className="underline decoration-sky-700">mim</span>
                        </p>
                    </div>

                    <div className="flex flex-row w-full">
                        <div className="pr-20 pl-20 pt-10 w-3/4">
                            <div className="text-2xl  uppercase font-bold text-slate-50 text-center">
                                Prazer me chamo <span className="text-sky-700">Estácio Renan</span>, seja bem vindo ao meu portfolio
                            </div>
                            <div className="pt-10 text-justify text-slate-50">
                                Estou nesta aventura desde de 2008 onde comecei no mundo PHP com MySQL no back-end e Javascript com Jquery, lencionei programação durante sete anos em curso livres
                                e técnicos pelo Governo Estado do Ceará, sou autodidata e foi assim que comecei minha jornada na programação, formado em Analise e desenvolvimento de sistema e
                                pós-graduado em Gestão em tecnologia.
                            </div>
                            <div className="pt-5 text-justify text-slate-50">
                                Atualmente sou desenvolvedor pleno front-end  utilizando a biblioteca React, Nextjs, Angular e Vue, mas me aprimorando no back-end com a stack voltada para Node
                                utilizando o Express, Fastify, Nextjs e Nestjs onde me considero júnior
                            </div>
                        </div>

                        <div className="pt-20 w-/4">
                            <ul className="text-slate-50">
                                <li className="pb-3 font-light"><strong >Idade:</strong> 34 Anos</li>
                                <hr className="border-slate-600" />
                                <li className="pb-3 pt-3 font-light"><strong >Email:</strong> estacioij@gmail.com </li>
                                <hr className="border-slate-600" />
                                <li className="pb-3 pt-3 font-light"><strong >Contato:</strong> (88) 9 9982-7265</li>
                                <hr className="border-slate-600" />
                                <li className="pb-3 pt-3 font-light"><strong>localização:</strong> Fortaleza, Ceará </li>
                            </ul>
                        </div>

                    </div>

                    {/* <div className="flex flex-row justify-center gap-4">
                        <img src={'/media/tecnology/html-5.png'} width={45} height={45} alt="HTML-5" />
                        <img src={'/media/tecnology/css.png'} width={45} height={45} alt="CSS" />
                        <img src={'/media/tecnology/javascript.svg'} width={38} height={43} alt="Javascript" />
                        <img src={'/media/tecnology/typescript.png'} width={43} height={43} alt="Typescript" />
                        <img src={'/media/tecnology/react.png'} width={45} height={45} alt="ReactJS" />
                        <img src={'/media/tecnology/native.png'} width={45} height={45} alt="React Native" />
                        <img src={'/media/tecnology/next.png'} width={45} height={45} alt="NextJS" />
                        <img src={'/media/tecnology/node.png'} width={43} height={43} alt="NodeJS" />
                        <img src={'/media/tecnology/nestJS.png'} width={43} height={43} alt="NestJS" />
                    </div> */}
                </div>
            </div>
        </>
    )
}