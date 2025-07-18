
import { FaArrowRight, FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, EffectCoverflow, Pagination, } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import HEAVENBakery from '../assets/HEAVENBAKERY.jpg'
import Cake from '../assets/Cake.jpg'
import PintHouse from '../assets/PintHouse.jpg'
import DORI from '../assets/DORI.jpg'
import EAKIA from '../assets/EAKIA.jpg'
import EAKIALogo from '../assets/EAKIALogo.jpg'
import DORILogo from '../assets/DORILogo.jpg'
import PintHouseLogo from '../assets/PINTHOUSELogo.jpg'

let clientData = [

    {
        id: 1,
        title: 'HEAVEN BAKERY',
        founder: 'Veena Rathod',


        image: HEAVENBakery,
        description: "At Heaven Bakery, we believe in the magic of fresh ingredients, timeless recipes, and a touch of love in every creation. From soft, buttery pastries to rich, indulgent cakes, our bakery is your go-to destination for delightful treats. Whether you're celebrating a special occasion or simply craving something sweet, our handcrafted baked goods are made to satisfy every taste and make every moment special.",
        image2: Cake
    },

    {
        id: 2,

        founder: 'Aashish Sharma',
        title: 'PINT HOUSE',

        image: PintHouseLogo,
        description: "Pint House is more than just a place to grab a drink – it's where great conversations, good vibes, and unforgettable moments come together. With a carefully curated selection of craft beers, classic cocktails, and delicious food, we create the perfect setting for every occasion. Whether you're catching up with friends, celebrating a milestone, or just unwinding after a long day, Pint House offers the perfect blend of comfort and class.",
        image2: PintHouse


    },


    {
        id: 3,

        founder: 'Aditi and Sankriti Choudhary',
        title: 'DORI',
        image: DORILogo,
        description: "DORI is your trusted partner in digital innovation. We specialize in crafting seamless user experiences, cutting-edge web and mobile solutions, and impactful branding strategies that bring your vision to life. Our team blends creativity with technology to deliver smart, scalable, and stunning digital products tailored to your goals.From startups to enterprises, DORI empowers businesses to grow, connect, and lead in the digital world.",
        image2: DORI,
    },

    {
        id: 4,
        name: '',
        founder: 'Manvendra Singh Shekhawat',
        title: 'EAKIA',

        image: EAKIALogo,
        description: "At EAKIA, we are committed to turning ideas into impactful realities. Whether it’s technology, design, or strategy, we offer end-to-end solutions that drive success and sustainable growth. Our team blends expertise with innovation to deliver customized services that meet your unique business needs.Driven by creativity and powered by technology, EAKIA is your partner in building a smarter, stronger future.",
        image2: EAKIA

    }

    // other objects...
]

const Client = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='flex items-center justify-center font-bold text-3xl pt-4'>
                <h1>Testimonials- Hear From Our Clients </h1>
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.4}
                spaceBetween={20}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {/* Loop through all clientData */}

                {
                    clientData.map(({ id, name, founder, title, description, image, image2 }) => (
                        <SwiperSlide>
                            <div className='container mx-auto w-full h-100 my-10 max-w-7xl  flex flex-col sm:flex-row bg-[#2b2d32] bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900  rounded-lg py-8' key={id}>


                                <div className='w-[50%] h-full  px-5 py-4 flex flex-col  items-center justify-center sm:flex row '>
                                    <div>
                                        <div className='w-[100px] h-[100px] mx-auto flex bg-white  rounded-full overflow-hidden border-1 border-white'>
                                            <img className='rounded-full object-cover mx-auto bg-auto  run dev h-[100px] w-[100px] ' src={image} alt="" />
                                        </div>
                                        <div className='text-center'>
                                            <h2 className='text-[30px] text-white 
                                            '>{title}</h2>
                                            <h4 className='text-[18px] text-white'>{founder}</h4>

                                            <div className="flex text-amber-300 text-2xl justify-center items-center my-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='border-1 border-gray-300 flex flex-col'></div>

                                {/* Center */}
                                <div className="w-[50%] h-full px-1">
                                    <div>
                                        <div className="w-full h-full  flex items-center justify-center">
                                            <img
                                                src={image2}
                                                alt="Image"
                                                className="w-[400px] h-[335px] object-contain block mx-auto"
                                            />
                                        </div>
                                    </div>
                                </div>







                                {/* Right Side */}
                                <div className='border-1 border-gray-300 flex flex-col'></div>
                                <div className='px-5 w-[50%]  flex flex-col justify-center items-center'>
                                    {/* <div className='py-5'>
                                        <p className='text-[16px] text-white'>{Review} </p>
                                    </div> */}

                                    <div className='border-1 border-gray-300 flex flex-col'></div>

                                    <div>
                                        <div className='py-2'>
                                            <h2 className='font-semibold text-[18px] text-white'>{name}</h2>
                                        </div>

                                        <div className='py-2'>
                                            <p className='text-[16px] text-white'>{description}</p>
                                        </div>


                                        <div className='py-2'>
                                            <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-6 rounded-lg shadow-lg text-white flex items-center gap-1 cursor-pointer ' onClick={() => navigate('/testimonialsSection')}>Read Full Review <FaArrowRight className='w-5' /></button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </>
    )
}

export default Client









