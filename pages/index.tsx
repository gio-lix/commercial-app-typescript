import type {NextPage} from 'next'
import Layout from "../components/Layout";
import Image from "next/image";
import image1 from '../public/img.jpg'
import image2 from '../public/img2.jpg'
import {useState} from "react";
import {ChartBarIcon} from "@heroicons/react/solid";
import {ArrowLeftIcon} from "@heroicons/react/solid";
import {ArrowRightIcon} from "@heroicons/react/solid";

const Home: NextPage = () => {
    const [image, setImage] = useState<number>(0);
    const images: any = [
        {img: image1},
        {img: image2},
    ]

    return (
        <Layout hideSideMenu>
            <div className='relative'>
                <div className='w-full h-[530px] relative '>
                    <Image src={images[image].img} layout='fill' loading='lazy' className='absolute top-0' alt='image' />
                    <div className='absolute bg-black bg-opacity-20 w-full h-full flex  px-14 top-0 z-10 text-gray-400'>
                        <div className='mt-20'>
                            <p className='text-white uppercase font-bold text-3xl'>New season arrivals</p>
                            <p className='text-white uppercase font-bold text-xl'> check put all trends </p>
                        </div>
                    </div>
                </div>
                <div className='flex absolute z-20 bottom-0  w-full hidden md:inline-flex'>
                    <section className='grow h-36 rounded-tr-[60px] bg-white flex justify-evenly pt-2 '>
                        <div className='w-32 h-32  font-semibold text-gray-600'>
                            <div className='w-9 h-9 p-0.5  bg-yellow-400 rounded-lg'> <ChartBarIcon className='text-white' />  </div>
                            <p className='my-1.5'>Free Shopping</p>
                            <p className='text-sm  '>our purchases over $199</p>
                        </div>
                        <div className='w-auto h-32  font-semibold text-gray-600'>
                            <div className='w-9 h-9 p-0.5 bg-yellow-400 rounded-lg'> <ChartBarIcon className='text-white' />  </div>
                            <p  className='my-1.5'>99% Satisfied Costumers</p>
                            <p className='text-sm  '>our purchases over $199</p>
                        </div>
                        <div className='w-80 h-32  font-semibold text-gray-600'>
                            <div className='w-9 h-9 p-0.5 bg-yellow-400 rounded-lg '> <ChartBarIcon className='text-white' /> </div>
                            <p   className='my-1.5'>Our clients opinions speak for themselves </p>
                            <p   className='text-sm'>Our clients opinions speak for themselves from our store </p>
                        </div>
                    </section>
                    <div className='w-44 h-28 '>
                        <button onClick={() => setImage(1)} className='absolute z-20 right-10 text-white bottom-10 w-12 h-12 hover:bg-white text-black bg-black bg-opacity-30'>
                            <ArrowLeftIcon className='text-white hover:text-black'  />
                        </button>
                        <button onClick={() => setImage(0)} className='absolute z-20 right-24 text-white bottom-10 w-12 h-12 hover:bg-white text-black bg-black bg-opacity-30'>
                            <ArrowRightIcon className='text-white hover:text-black'  />
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home

