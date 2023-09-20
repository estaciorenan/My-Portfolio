import React from 'react'
import { DataCards } from '@/app/interface/interface';

const Card = ({img, title}:DataCards) => {

    return (
        <div className="flex flex-col justify-center bg-gray-800 border-2 border-slate-600 hover:border-sky-700  
            xl:w-20 lg:w-20 md:w-20 sm:w-full xs:w-full
            xl:h-20 lg:h-20 md:h-20 sm:min-h-fit xs:min-h-fit
            rounded-md "
        >
            <div className="flex justify-center">
                <img src={img} width={43} height={43} alt="NodeJS" className="drop-shadow-shadow-white" />
            </div>
        </div>
    )
}
export default Card;
