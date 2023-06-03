import { useContext } from "react";
import { Context } from "@/contexts/auth";

export default function Work() {

    const { themeDark } = useContext(Context);

    return (
        <>

            <div className="fixed relative w-5/5 overflow-auto">
                <div className=" xl:absolute lg:fixed md:absolute sm:static xs:static w-full justify-center">

                    <div className="w-5/5 mb-10">
                        <div id="works">
                            Trabalhos Profissionais.
                        </div>

                        <div >
                            <img src="/media/works/sismaplantela.png" />
                            <div >
                                <h4>SISMAPLAN</h4>
                                <h5>Sistema de Gestão</h5>
                                <p>
                                    O Sismaplan é um sistema de gestão empresarial, que permite ao cliente acesso online a todas as informações referentes ao
                                    planejamento e aos serviços técnicos e de apoio.
                                </p>

                            </div>
                        </div>

                        <div>
                            <img src="/media/works/sismograntela.png" />
                            <div >
                                <h4>SISMOGRAN</h4>
                                <h5>Sistema de Monitiramento</h5>
                                <p>
                                    O Sismogran é um sistema de gestão monitoramento de temperatura e umidade em diversas grandeza em ambiente e equipamento seguindo as
                                    certificações e qualificação exigidas.
                                </p>

                            </div>
                        </div>


                        <div >
                            <img src="/media/works/sismaplantela.png" />
                            <div >
                                <h4>SISMAPLAN</h4>
                                <h5>Sistema de Gestão</h5>
                                <p>
                                    O Sismaplan é um sistema de gestão empresarial, que permite ao cliente acesso online a todas as informações referentes ao
                                    planejamento e aos serviços técnicos e de apoio.
                                </p>

                            </div>
                        </div>

                        <div>
                            <img src="/media/works/sismograntela.png" />
                            <div >
                                <h4>SISMOGRAN</h4>
                                <h5>Sistema de Monitiramento</h5>
                                <p>
                                    O Sismogran é um sistema de gestão monitoramento de temperatura e umidade em diversas grandeza em ambiente e equipamento seguindo as
                                    certificações e qualificação exigidas.
                                </p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </>
    )
}