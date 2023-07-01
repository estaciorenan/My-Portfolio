import React from 'react'
import { DataCards } from '@/app/interface/interface';

const Card = ({img, title, paragraph}:DataCards) => {

    return (
        <div className="flex flex-col bg-gray-800 border-2 border-slate-600 hover:border-sky-700 p-2 
            xl:w-52 lg:w-52 md:w-52 sm:w-full xs:w-full
            xl:h-52 lg:h-52 md:h-52 sm:min-h-fit xs:min-h-fit
            rounded-md "
        >
            <div className="flex justify-center">
                <img src={img} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
            </div>
            <div >
                <h3 className="text-slate-50 text-bold text-center">{title}</h3>
                <p className=" text-slate-400 text-bold text-md text-left break-words">
                    {paragraph}
                </p>
            </div>
        </div>
    )
}
export default Card;
