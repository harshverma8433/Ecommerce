import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    const product = [
        {
            id:1,
            image:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg"

        },
        {
            id:2,
            image:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg"
        },
        {
            id:3,
            image:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
        },
        {
            id:4,
            image:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg"
        }

    ]
  return (
    <div className=' w-[1535px]'>
        <Slider className="" {...settings}>
            {
                product.map((item) => {
                    return(
                        <div key={item.id} className='h-[450px] focus:outline-0 '>
                            <img src={item.image} className=' h-[450px]' />

                        </div>
                    )
                })
            }

        </Slider>
    </div>
  )
}

export default Carousel;