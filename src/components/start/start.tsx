import { Context } from "@/contexts/auth";
import { useContext } from "react";
import Fontawesome from "../fontawesome/fontawesome";
import img from 'next/img'

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
                                    <img src={'/media/tecnology/html-5.png'} width={45} height={45} alt="HTML-5" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">HTML</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        É uma linguagem de marcação utilizada na construção de páginas na Web.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/css.png'} width={45} height={45} alt="CSS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">CSS</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web.
                                    </p>
                                </div>
                            </div>


                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/javascript.svg'} width={34} height={43} alt="Javascript" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">Javascript</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Script em alto nível com tipagem dinâmica fraca e multiparadigma.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/typescript.png'} width={43} height={43} alt="Typescript" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">Typescript</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/react.png'} width={45} height={45} alt="ReactJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">ReactJS</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        É uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/native.png'} width={45} height={45} alt="React Native" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">React Native</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.
                                    </p>
                                </div>
                            </div>


                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/Tailwind.png'} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">Tailwind</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Estrutura CSS de código aberto que não possui classes de elementos predefinidos.
                                    </p>
                                </div>
                            </div>


                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/styled.png'} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">Styled-Components</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Biblioteca de estilização em componentes criada dentro do arquivo javascript.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/material-ui.png'} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">Material UI</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Coleção de componentes predefinidos e pronto para uso em frameworks Javascript.
                                    </p>
                                </div>
                            </div>


                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/chakra-ui.png'} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">Chakra UI</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Coleção de componentes simples predefinidos e pronto para uso em frameworks Javascript.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md break-words">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/next.png'} width={45} height={45} alt="NextJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">NextJS</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left">
                                        Framework dinâmico e estático usando o React com renderização do lado do servidor.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/node.png'} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">Node</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Executa códigos JavaScript fora de um navegador web, arquitetura assíncrona e orientada por eventos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/NestJS.png'} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className="text-slate-50 text-bold text-center">NestJS</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Framework back-end baseado no Express, utilizando o Typescript trazendo confiança e escalabilidade.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/fastify.png'} width={60} height={50} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">Fastify</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Framework back-end baseado no Express e inspirado em plug-in permitindo melhor reusabilidade.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/express.png'} width={43} height={50} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">Express</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Framework back-end bazeado em Node com recurso de contrução de serviços de aplicações web.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/mysql.png'} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">MySQL</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/mongodb.png'} width={60} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">MongoDB</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Banco de dados de documentos com a consulta e indexação na nuvem ou servidor.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/sqllite.png'} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">SQLite</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Biblioteca em linguagem C que implementa uma base de dados SQL embutida.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/prisma.png'} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">Prisma</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        ORM que cosntroi queries de forma automatizadas com sistema de migração e interface.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 w-52 h-52 rounded-md ">
                                <div className="flex justify-center">
                                    <img src={'/media/tecnology/git.png'} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
                                </div>
                                <div >
                                    <h3 className=" text-slate-50 text-bold text-center">Git</h3>
                                    <p className=" text-slate-400 text-bold text-md text-left break-words">
                                        Sistema de controle de versionamento que possui histórico e pode trabalhar com qualquer arquivo.
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