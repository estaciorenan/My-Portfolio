import React from 'react'
import { DataCards } from '@/app/interface/interface';
import Skeleton from 'react-loading-skeleton'

const Card = ({ img, title, loading }: DataCards) => {
    return (
        <>
            {loading ?
                <div>
                    <Skeleton height={'128px'} width={"128px"} baseColor="#616161" highlightColor="#f5f5f5" direction='rtl' />
                </div>
                :
                <div className=" flex flex-col justify-center text-center
                bg-gray-800 border-2 border-slate-600 hover:border-sky-700  
                xl:w-32 lg:w-32 md:w-32 sm: w-32
                xl:h-32 lg:h-32 md:h-32 sm:w-32 
                rounded-md "
                >
                    <div className="flex justify-center m-1">
                        <img src={img} width={43} height={43} alt={title}/>
                    </div>
                    <div className="text-md text-gray-100 mt-1 ">
                        {title}
                    </div>
                </div>
            }
        </>

    )
}
export default Card;
