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
                    <div className="w-full mb-10">
                        <div className="text-center p-5">
                            <h2 className=" relative text-7xl uppercase p-22 font-bold text-gray-700">About Me</h2>
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
                                    Estou nesta aventura desde de 2008 onde comecei no mundo <span className="text-sky-700">PHP</span>  com <span className="text-sky-700">MySQL</span>  no
                                    back-end e <span>Javascript</span>  com <span>Jquery</span>, <span>HTML</span> e <span>CSS</span> no front-end, lencionei programação durante sete anos em curso livres e técnicos pelo Governo Estado do Ceará,
                                    sou autodidata e foi assim que comecei minha jornada na programação, formado em Analise e desenvolvimento de sistema e pós-graduado em Gestão em tecnologia.
                                </div>
                                <div className="pt-5 text-justify text-slate-50">
                                    Atualmente sou desenvolvedor pleno front-end  utilizando a biblioteca <span className="text-sky-700">ReactJS</span>, <span className="text-sky-700">NextJS</span>, <span className="text-sky-700">AngularJS</span> e <span className="text-sky-700">Vue</span>, mas
                                     me aprimorando no back-end com a stack voltada para plataforma <span className="text-sky-700">Node</span> utilizando o <span className="text-sky-700">Express</span>, <span className="text-sky-700">Fastify</span>, <span className="text-sky-700">NextJS</span> e <span className="text-sky-700">Nestjs</span> onde me considero júnior
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


                        <div className="text-center pt-20">
                            <h2 className=" relative text-7xl uppercase p-22 font-bold text-gray-700">Technology Skills</h2>
                            <p className="relative -top-10  text-6xl text-slate-50 font-bold">
                                Habilidades nas   <span className="underline decoration-sky-700">Tecnologias</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap pl-20 pr-20 pt-5 gap-4 justify-center">

                            <div className="flex flex-col bg-gray-800  border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md">
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

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md">
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


                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md">
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

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md">
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

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md">
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

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md">
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


                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md">
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


                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md">
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

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md">
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

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/node.png'} width={43} height={43} alt="NodeJS" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold">Node</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
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