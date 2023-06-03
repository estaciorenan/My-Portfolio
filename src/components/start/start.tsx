import { Context } from "@/contexts/auth";
import { useContext } from "react";

export default function Start() {
    const { themeDark, setThemeDark } = useContext(Context)
    // const dataAtual = new Date();
    // const anoAtual = dataAtual.getFullYear();

    return (
        <>
            <div className="fixed relative w-5/5 overflow-auto transition">
                <div className=" xl:absolute lg:absolute md:static sm:static xs:static w-full justify-center">

                    <div className="w-5/5 mb-10">

                        <div className="text-center p-5" id='skill'>
                            <h2 className=" relative text-6xl uppercase p-22 font-bold text-gray-700">About Me</h2>
                            <p className="relative -top-8  text-4xl text-slate-50 font-bold">
                                Um pouco sobre <span className="underline decoration-sky-700">mim</span>
                            </p>
                        </div>

                        <div className="flex flex-row w-full ">
                            <div className="pr-20 pl-20 pt-3 w-4/4">
                                <div className="text-2xl  uppercase font-bold text-slate-50 text-center">
                                    Prazer me chamo <span className="text-sky-700">Estácio Renan</span> <br /> seja bem vindo ao meu portfolio
                                </div>
                                <div className="pt-5 text-justify text-slate-50">
                                    Sou desenvolvedor front-end utilizando a biblioteca <span className="text-sky-700">ReactJS</span>,
                                    <span className="text-sky-700">NextJS</span>, <span className="text-sky-700">AngularJS</span> e <span className="text-sky-700">Vue</span>, mas
                                    me aprimorando no back-end com a stack voltada para plataforma <span className="text-sky-700">Node</span>
                                    utilizando o <span className="text-sky-700">Express</span>, <span className="text-sky-700">Fastify</span>,
                                    <span className="text-sky-700">NextJS</span> e <span className="text-sky-700">Nestjs</span> onde me considero júnior, graduado em Análise e
                                    desenvolvimento de sistemas e Pós Graduado em Gestão de Tecnologia.
                                </div>
                            </div>
                        </div>


                        <div className="text-center pt-20">
                            <h2 className=" relative xl:text-6xl lg:text-6xl md:text-2xl uppercase p-22 font-bold text-gray-700">Technology Skills</h2>
                            <p className="relative -top-8  text-4xl text-slate-50 font-bold">
                                Habilidades nas   <span className="underline decoration-sky-700">Tecnologias</span>
                            </p>
                        </div>

                        <div className="
flex flex-wrap 
 xl:pl-20 lg:pl-20 md:pl-3 sm:pl-3  xs:pl-3 
  xl:pr-20 lg:pr-20 md:pl-3 sm:pl-3  xs:pl-3 
pt-5 
pb-5
gap-4 
justify-center"
                        >

                            <div className="flex flex-col bg-gray-800  border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center ">
                                    <img src={'/media/tecnology/html-5.png'} width={45} height={45} alt="HTML-5" className="shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">HTML</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        É uma linguagem de marcação utilizada na construção de páginas na Web.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/css.png'} width={45} height={45} alt="CSS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">CSS</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web.
                                    </p>
                                </div>
                            </div>


                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/javascript.svg'} width={34} height={43} alt="Javascript" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">Javascript</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Script em alto nível com tipagem dinâmica fraca e multiparadigma.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/typescript.png'} width={43} height={43} alt="Typescript" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">Typescript</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/react.png'} width={45} height={45} alt="ReactJS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">ReactJS</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/native.png'} width={45} height={45} alt="React Native" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">React Native</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.
                                    </p>
                                </div>
                            </div>


                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/Tailwind.png'} width={43} height={43} alt="NodeJS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">Tailwind</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Executa códigos JavaScript fora de um navegador web, arquitetura assíncrona e orientada por eventos.
                                    </p>
                                </div>
                            </div>


                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/styled.png'} width={43} height={43} alt="NodeJS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">Styled-Components</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Executa códigos JavaScript fora de um navegador web, arquitetura assíncrona e orientada por eventos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/material-ui.png'} width={43} height={43} alt="NodeJS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">Material UI</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Executa códigos JavaScript fora de um navegador web, arquitetura assíncrona e orientada por eventos.
                                    </p>
                                </div>
                            </div>


                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/chakra-ui.png'} width={43} height={43} alt="NodeJS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">Chakra UI</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Executa códigos JavaScript fora de um navegador web, arquitetura assíncrona e orientada por eventos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/next.png'} width={45} height={45} alt="NextJS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">NextJS</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/node.png'} width={43} height={43} alt="NodeJS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">Node</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Executa códigos JavaScript fora de um navegador web, arquitetura assíncrona e orientada por eventos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/NestJS.png'} width={43} height={43} alt="NodeJS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">NestJS</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Executa códigos JavaScript fora de um navegador web, arquitetura assíncrona e orientada por eventos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/fastify.png'} width={43} height={43} alt="NodeJS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">Fastify</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Executa códigos JavaScript fora de um navegador web, arquitetura assíncrona e orientada por eventos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/mysql.png'} width={43} height={43} alt="NodeJS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">MySQL</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Executa códigos JavaScript fora de um navegador web, arquitetura assíncrona e orientada por eventos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/git.png'} width={43} height={43} alt="NodeJS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">Git</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Executa códigos JavaScript fora de um navegador web, arquitetura assíncrona e orientada por eventos.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}