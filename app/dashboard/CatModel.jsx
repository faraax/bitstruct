"use client"
import { motion as m } from 'framer-motion'
import { CgCloseO } from '../Utils/icons'
import { useSearchParams, useRouter } from 'next/navigation'

export default function CatModel({ portalData }) {
    const searchParams = useSearchParams()
    const router = useRouter()
    if (searchParams.get('catsModel') === "show")
        return (
            <m.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.2 }}
                className='h-screen w-screen absolute top-0 left-0 backdrop-blur-md flex justify-center items-center z-50'
            >
                <div className='bg-[#CECEDC] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-xl w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col gap-4 max-h-screen overflow-y-auto'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-primary font-normal text-4xl'>CategoriesList</h2>
                        <button onClick={() => {
                            router.push('/dashboard')
                        }}>
                            <CgCloseO className="text-3xl hover:text-primary/60 cursor-pointer duration-150" />
                        </button>
                    </div>
                    <div>
                        <ul>
                            {
                                portalData && portalData.portal_data.map(({ CategoriesList, ...rest }) => (
                                    CategoriesList.map((catList, _i) => (
                                        <li key={_i}>
                                            {_i + 1} - {catList}
                                        </li>
                                    ))
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </m.div>

        )
}
