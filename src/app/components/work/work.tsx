import { useEffect, useState, FC } from "react";
import Skeleton from "react-loading-skeleton";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, styled } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { dataModal } from "@/app/data/dataWorks";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Work: FC = () => {
    const [loading, setLoading] = useState<boolean>(true),
        [sendModal, setSendModal] = useState<Object>(
            {
                open: false,
                image: '',
                title: '',
                information: '',
                technologies: '',
                activities: ''
            }
        )

    const handleShow = (id: number) => {
        const selected = dataModal.filter((f) => f.id === id)
        setSendModal({
            open: true,
            image: selected[0]?.image,
            title: selected[0]?.title,
            information: selected[0]?.information,
            technologies: selected[0]?.technologies,
            activities: selected[0]?.activities,
        })
    }

    const handleClose = () => {
        setSendModal({
            open: false,
            title: '',
            description: '',
            technology: ''
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    })

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

                            {loading ?
                                <div>
                                    <Skeleton height={'346px'} width={"241px"} baseColor="#616161" highlightColor="#f5f5f5" direction='rtl' borderRadius={15} />
                                </div>
                                :
                                <div className="xl:w-3/12 lg:w-3/12 md:w-12/12 sm:w-12/12 xs:w-12/12 md:m-2 sm:m-2 xs:m-2 bg-bg-aside border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div>
                                        <div onClick={() => handleShow(1)} className="rounded-md">
                                            <img className="rounded-t-lg" src="/media/works/sismogran_tela1.png" alt="" />
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="w-full text-center">
                                                <h5 className="mb-2 text-1xl font-bold tracking-tight text-slate-50 dark:text-white"><span className="text-sky-700">Front-End</span> | DTLA - Sismogran</h5>
                                            </div>
                                            <p className="mb-2 font-normal text-slate-50 dark:text-slate-50 text-left">Sistema de monitoramento de umidade e temperatura de equipamentos e ambiente.</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mx-1">
                                        <a href="https://mtechsp.com.br/monitoramento/" target="_blank">
                                            <Button variant="outlined" color="primary"><span className="text-slate-50 capitalize">Sobre</span> </Button>
                                        </a>
                                        <a href="https://dtlab4.dtlab.com.br/" target="_blank">
                                            <Button variant="outlined" color="primary"><span className="text-slate-50 capitalize">Projeto</span> </Button>
                                        </a>
                                    </div>
                                </div>
                            }
                            {loading ?
                                <div>
                                    <Skeleton height={'346px'} width={"241px"} baseColor="#616161" highlightColor="#f5f5f5" direction='rtl' borderRadius={15} />
                                </div>
                                :
                                <div className="xl:w-3/12 lg:w-3/12 md:w-12/12 sm:w-12/12 xs:w-12/12 md:m-2 sm:m-2 xs:m-2 bg-bg-aside   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div>
                                        <div onClick={() => handleShow(2)}>
                                            <img className="rounded-t-lg cursor-pointer" src="/media/works/sismaplan_tela1.png" alt="" />
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="w-full text-center">
                                                <h5 className="mb-2 text-1xl font-bold tracking-tight text-slate-50 dark:text-white"><span className="text-sky-700">Front-End</span> | DTLA - Sismaplan</h5>
                                            </div>
                                            <p className="mb-2 font-normal text-slate-50 dark:text-slate-50 text-left">Sistema de Gestão Integrado para seguimento de ativos e serviços.</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mx-1">
                                        <a href="https://mtechsp.com.br/gestao/" target="_blank" className="m-1">
                                            <Button variant="outlined" color="primary"><span className="text-slate-50 capitalize">Sobre</span> </Button>
                                        </a>
                                        <a href="https://dtlab4.dtlab.com.br/" target="_blank" className="m-1">
                                            <Button variant="outlined" color="primary"><span className="text-slate-50 capitalize">Projeto</span> </Button>
                                        </a>
                                    </div>
                                </div>
                            }
                            {loading ?
                                <div>
                                    <Skeleton height={'346px'} width={"241px"} baseColor="#616161" highlightColor="#f5f5f5" direction='rtl' borderRadius={15} />
                                </div>
                                :
                                <div className="xl:w-3/12 lg:w-3/12 md:w-12/12 sm:w-12/12 xs:w-12/12 md:m-2 sm:m-2 xs:m-2 bg-bg-aside   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div>
                                        <div onClick={() => handleShow(3)}>
                                            <img className="rounded-t-lg cursor-pointer" src="/media/works/sismaplan_manfing1.png" alt="" />
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="w-full text-center">
                                                <h5 className="mb-2 text-1xl font-bold tracking-tight text-slate-50 dark:text-white"><span className="text-sky-700">Front-End</span> | Manfing One</h5>
                                            </div>
                                            <p className="mb-2 font-normal text-slate-50 dark:text-slate-50 text-left">Sistema de Previsão de Vendas e demanda que utilizar IA.</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mx-1">
                                        <a href="https://www.manfing.com/funcionalidades" target="_blank" className="m-1">
                                            <Button variant="outlined" color="primary"><span className="text-slate-50 capitalize">Sobre</span> </Button>
                                        </a>
                                        <a href="https://app.manfing.com/" target="_blank" className="m-1">
                                            <Button variant="outlined" color="primary"><span className="text-slate-50 capitalize">Projeto</span> </Button>
                                        </a>
                                    </div>
                                </div>
                            }
                        </div>
                        {/* ---------------------------------------------Content End--------------------------------------------- */}

                        {/* ---------------------------------------------Modal --------------------------------------------- */}

                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={sendModal?.open}
                        >
                            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className="bg-bg-aside  text-slate-50">
                                {sendModal?.title}
                            </DialogTitle>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <DialogContent dividers className="bg-bg-aside ">
                                <div className="w-full flex justify-center py-2">
                                    <img src={sendModal?.image} alt="" className="w-full h-80" />
                                </div>
                                <Typography gutterBottom>
                                    <h3>
                                        <strong className="text-center text-slate-50">
                                            {sendModal?.information}
                                        </strong>
                                    </h3>
                                </Typography>
                                <Typography gutterBottom>
                                    <div className="text-justify text-slate-50">
                                        {sendModal?.activities}
                                    </div>
                                </Typography>
                                <Typography gutterBottom>
                                    <div className="text-sky-700 text-justify">
                                        {sendModal?.technologies}
                                    </div>
                                </Typography>
                            </DialogContent>
                        </BootstrapDialog>

                        {/* ---------------------------------------------Modal End--------------------------------------------- */}
                    </div>
                </div>
            </div >
            {/* ---------------------------------------------Container End--------------------------------------------- */}
        </>
    )
}
export default Work