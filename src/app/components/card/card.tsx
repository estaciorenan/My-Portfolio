import React from 'react'
import { DataCards } from '@/app/interface/interface';
import Skeleton from 'react-loading-skeleton'

const Card = ({ img, title, loading }: DataCards) => {
    return (
        <>
            {loading ?
                <div>
                    <Skeleton height={'80px'} width={"80px"}  baseColor="#202020" highlightColor="#f5f5f5" direction='rtl' />
                </div>
                :
                <div className="flex flex-col justify-center bg-gray-800 border-2 border-slate-600 hover:border-sky-700  
            xl:w-20 lg:w-20 md:w-20 sm:w-full xs:w-full
            xl:h-20 lg:h-20 md:h-20 sm:min-h-fit xs:min-h-fit
            rounded-md "
                >
                    <div className="group flex relative justify-center">



                        <div>
                            <img src={img} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
                        </div>
                        <span className="group-hover:opacity-100 transition-opacity bg-gray-700 px-2 py-1 text-md text-gray-100 rounded-md absolute left-1/1 opacity-0 m-6">
                            {title}
                        </span>

                    </div>
                </div>
            }
        </>

    )
}
export default Card;
