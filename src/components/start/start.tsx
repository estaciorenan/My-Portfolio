import Link from "next/link";
import { Context } from "@/contexts/auth";
import { useContext } from "react";

export default function Start() {
    const { themeDark, setThemeDark } = useContext(Context)
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    return (
        <>
            <section >
                <div className="flex-col text-center">
                    <div >
                        <div >
                            SOBRE ME
                        </div>
                        <br />
                        <div >
                            <h3>Um breve resumo sobre meu trabalho e historico profissional...</h3>
                        </div>
                        <br />
                        <div >
                            <span>
                                Sou Formado em Analise e Desevolvimento e Pós-graduado em Gestão em Tecnologia, tenho {anoAtual - 1989} anos, Cearense
                                de Quixadá🌵 apaixonado por programação desde 2009, desenvolvi este pequeno portifolio para que você possa conhecer um
                                pouco do meu trabalho e habilidades.
                            </span>

                        </div>
                        <br />
                        <div >
                            Espero que goste do meu trabalho<br /> Estarei a disposição para contato e trabalhos.
                        </div>
                    </div>

                    <div >Tecnologias</div>

                    <div className="flex flex-row justify-center">
                        <img src={'/media/tecnology/html-5.png'} width={45} height={45} alt="HTML-5" />
                        <img src={'/media/tecnology/css.png'} width={45} height={45} alt="CSS" />
                        <img src={'/media/tecnology/javascript.svg'} width={43} height={43} alt="Javascript" />
                        <img src={'/media/tecnology/typescript.png'} width={43} height={43} alt="Typescript" />
                        <img src={'/media/tecnology/react.png'} width={45} height={45} alt="ReactJS" />
                        <img src={'/media/tecnology/native.png'} width={45} height={45} alt="React Native" />
                        <img src={'/media/tecnology/next.png'} width={45} height={45} alt="NextJS" />
                        <img src={'/media/tecnology/node.png'} width={43} height={43} alt="NodeJS" />
                        <img src={'/media/tecnology/nestJS.png'} width={43} height={43} alt="NestJS" />
                    </div>
                </div>
            </section>
        </>
    )
}