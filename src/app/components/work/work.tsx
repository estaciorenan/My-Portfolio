import Modal from "../modal/modal";
import { dataModal } from "@/app/data/dataWorks";

export default function Work() {
    return (
        <>
            {/* ---------------------------------------------Container--------------------------------------------- */}
            <div className="fixed relative w-5/5 overflow-auto">
                <div className=" xl:absolute lg:fixed md:absolute sm:static xs:static w-full justify-center">
                    <div className="w-5/5 mb-10 m-auto">

                        {/* ---------------------------------------------Content--------------------------------------------- */}

                        <div className="text-center p-5" id='works'>
                            <h2 className=" relative text-6xl uppercase p-22 font-bold text-gray-700">Works</h2>
                            <p className="relative -top-8  text-4xl text-slate-50 font-bold">
                                Trabalhos <span className="underline decoration-sky-700">Profissionais</span>
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


                            <div className="xl:w-3/12 lg:w-3/12 md:w-12/12 sm:w-12/12 xs:w-12/12 md:m-2 sm:m-2 xs:m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div>
                                    <a href="#">
                                        <img className="rounded-t-lg" src="/media/works/sismogran_tela1.png" alt="" />
                                    </a>
                                    <div className="p-2 w-full">
                                        <a href="#">
                                            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">DTLA - Sismogran</h5>
                                        </a>
                                        <p className="mb-2 font-normal text-gray-700 dark:text-slate-50 text-left">Sistema de monitoramento de umidade e temperatura de equipamentos e ambiente.</p>
                                    </div>
                                </div>
                                <div className="flex justify-between mx-1">
                                    <a href="https://mtechsp.com.br/monitoramento/" target="_blank">
                                        <button type="button" className="ml-2 text-gray-900 bg-white border focus:outline-none border-gray-300  hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-mono rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                            Sobre
                                        </button>
                                    </a>
                                    <a href="https://dtlab4.dtlab.com.br/" target="_blank">
                                        <button type="button" className="mr-2 text-gray-900 bg-white border border-gray-300  hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                            Projeto
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="xl:w-3/12 lg:w-3/12 md:w-12/12 sm:w-12/12 xs:w-12/12 md:m-2 sm:m-2 xs:m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div>
                                    <a href="#">
                                        <img className="rounded-t-lg" src="/media/works/sismaplan_tela1.png" alt="" />
                                    </a>
                                    <div className="p-2 w-full">
                                        <a href="#">
                                            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">DTLA - Sismaplan</h5>
                                        </a>
                                        <p className="mb-2 font-normal text-gray-700 dark:text-slate-50 text-left">Sistema de Gestão Integrado para seguimento de ativos e serviços.</p>
                                    </div>
                                </div>
                                <div className="flex justify-between mx-1">
                                    <a href="https://mtechsp.com.br/gestao/" target="_blank">
                                        <button type="button" className="ml-2 text-gray-900 bg-white border focus:outline-none border-gray-300  hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-mono rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                            Sobre
                                        </button>
                                    </a>
                                    <a href="https://dtlab4.dtlab.com.br/" target="_blank">
                                        <button type="button" className="mr-2 text-gray-900 bg-white border border-gray-300  hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                            Projeto
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </div>
                        {/* ---------------------------------------------Content End--------------------------------------------- */}

                    </div>
                </div>
            </div >
            {/* ---------------------------------------------Container End--------------------------------------------- */}
        </>
    )
}