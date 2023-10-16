import React, { useEffect, useState } from 'react';
import {  FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import request from '../../server';
import PopularPostsCard from '../../Components/card/PopularPostCard/PopularPostCard';


const Home = () => {
    const [popularPosts,setPopularPosts] =useState([]);

    useEffect(()=>{
        const getData = async ()=>{
          let { data} = await request.get("post/lastones")
          setPopularPosts(data)
        }
        getData()
      }, [])
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <div className='px-10 md:px-20 pt-16 md:pt-32  md:h-[720px] hero-section '>
                <div className='relative z-10 pb-8'>
                    <h1 className=' tracking-[3px] leading-[48px] text-white text-base font-[Inter] '>POSTED ON <span className='font-bold'>STARTUP</span></h1>


                    <h1 className='tracking-[-2px] leading-[ 64px] md:text-[56px] font-bold text-[28px] font-[Sen] text-white md:mt-6 '>Step-by-step guide to choosing <br /> great font pairs </h1>

                    <p className='text-sm text-[Inter] text-white md:mt-6 mt-3 md:mb-4' >By <span className='text-[#FFD050]'>James West </span>  l   May 23, 2021 </p>

                    <p className='text-sm text-[Inter] mt-4  text-white'>Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur <br /> Excepteur sint occaecat cupidatat non proident.</p>

                    <button className='flex items-center px-6 md:px-12 bg-[#FFD050] py-4 text-lg font-bold font-[Sen] mt-6 md:mt-12'>  Read More <FaAngleRight /> </button>
                </div>

            </div>

            <div className='md:mx-20 mx-8'>
{/* 
            <section id="popular__blogs">
        <div className="container popular__blogs__container">
          <h2 className="popular__blogs__title">
            Popular Blogs
          </h2>
          <Slider {...settings}>
            {popularPosts?.map((post, i)=>{
              return <PopularPostsCard key={i} {...post} />
            })}
          </Slider>
          <span className="line"></span>
        </div>
      </section> */}
                <section className='md:mt-16 mt-8 mb-3'>
                    <h1 className=' mt-16 md:text-4xl text-2xl md:tracking-[-2px] leading-[48px]  font-bold font-[Sen] mb-12  flex justify-center '> Choose A Categories</h1>

                    <div className='md:grid md:grid-cols-4    justify-center gap-8' >

                        <Link className='   h-[228px] mb-8 border border-[#6D6E76] p-8  hover:bg-[#FFD050]'>
                            <img src="icon1.svg" alt="" />
                            <h1 className=' font-bold font-[Sen] text-[28px] mt-2'>Business </h1>
                            <p className='text-base text-[#6D6E76] font-[Inter] mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </Link>
                        <Link className=' h-[228px] mb-8  border border-[#6D6E76] p-8  hover:bg-[#FFD050]'>
                            <img className='bg-[#FBF6EA] p-3 rounded-xl' src="icon2.svg" alt="" />
                            <h1 className=' font-bold font-[Sen] text-[28px] mt-2'>Startup </h1>
                            <p className='text-base text-[#6D6E76] font-[Inter] mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </Link>
                        <Link className=' h-[228px] mb-8  border border-[#6D6E76] p-8  hover:bg-[#FFD050]'>
                            <img className='bg-[#FBF6EA] p-3 rounded-xl' src="icon3.svg" alt="" />
                            <h1 className=' font-bold font-[Sen] text-[28px] mt-2'>Startup </h1>
                            <p className='text-base text-[#6D6E76] font-[Inter] mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </Link>
                        <Link className=' h-[228px] mb-8  border border-[#6D6E76] p-8  hover:bg-[#FFD050]'>
                            <img className='bg-[#FBF6EA] p-3 rounded-xl' src="icon4.svg" alt="" />
                            <h1 className=' font-bold font-[Sen] text-[28px] mt-2'>Technology </h1>
                            <p className='text-base text-[#6D6E76] font-[Inter] mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </Link>


                    </div>

                </section>

    

            
        
            </div>
        </div>
    );
};

export default Home;