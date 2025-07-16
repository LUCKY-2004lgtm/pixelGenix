import React from 'react'
import { FaStar } from 'react-icons/fa'
import HEAVENBakery from '../assets/HEAVENBAKERY.jpg'
import EAKIALogo from '../assets/EAKIALogo.jpg'
import PintHouseLogo from '../assets/PINTHOUSELogo.jpg'
import DORILogo from '../assets/DORILogo.jpg'

const clientData = [
    {
        id: 1,
        name: 'Veena Rathore',
        founder: 'HEAVENBAKERY',
        title: 'Project Summary:Runner Consulting',
        image: HEAVENBakery,
        description:
            "Pixel Genix has developed a modern digital presence for Heaven Bakery, a premium bakery brand. They’ve built a responsive website and integrated features like an interactive menu, online ordering system, customer reviews, and location-based delivery tracking.",

    },
    {
        id: 2,
        name: 'Manvendra Singh Shekhawat',
        founder: 'EAKIA',
        title: 'Project Summary:Runner Consulting',
        image: EAKIALogo,
        description:
            "Pixel Genix has developed a professional digital platform for EAKIA, a corporate service provider. The solution includes a dynamic website, service listing modules, inquiry management tools, and seamless integration with communication channels to improve client engagement and streamline operations.",

    },

    {
        id: 3,
        name: 'Aashish Sharma',
        founder: 'PINT HOUSE',
        title: 'Project Summary:Runner Consulting',
        image: PintHouseLogo,
        description:
            "Welcome to PINT HOUSE, your ultimate destination for great taste, good vibes, and unforgettable moments. Whether you're here for a chilled pint, handcrafted cocktails, delicious bites, or just to unwind with friends—PINT HOUSE delivers the perfect mix of flavor and atmosphere.Our space is designed for comfort, connection, and celebration. From casual catch-ups to weekend hangouts, we serve up more than just drinks—we serve experiences.",

    },
    {
        id: 4,
        name: 'Aditi and Sankriti Choudhary',
        founder: 'DORI',
        title: 'Project Summary:Runner Consulting',
        image: DORILogo,
        description:
            "DORI is more than just a brand—it's a story woven with elegance, tradition, and modern design. Inspired by the beauty of details and the strength of simplicity, DORI brings you handcrafted creations that speak of timeless charm and contemporary flair.Every piece is made with precision, passion, and purpose—whether it’s fashion, jewelry, or home decor. At DORI, we believe that the smallest thread can tie together the biggest expressions of identity and art.",

    },
    
    // add more as needed...
]

const TestimonialsSection = () => {
    return (
        <>
            <div className='py-5 bg-gray-300'>


                <div className='flex justify-center items-center '>
                    <h1 className='text-[40px] font-bold'>What Makes Us the Buzz of Tech Town</h1>
                </div>
                <div className='flex justify-center items-center pb-6'>
                    <h4 className='text-[20px] font-semibold'>Here’s what our business partners say about us.</h4>
                </div>

                <div className="max-w-6xl h-auto mx-auto px-4 py-12">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {clientData.map(
                            ({ id, name, founder, title, image, description, }) => (
                                <div
                                    key={id}
                                    className="bg-white p-6 pb-[5rem] rounded-xl shadow-lg"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src={image}
                                            alt={name}
                                            className="w-25 h-25 rounded-full object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-[20px]">{name}</h3>
                                            <p className="text-sm text-gray-500 font-semibold text-[20px]">{founder}</p>
                                            <div className="flex text-yellow-400 mt-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-gray-100 p-10 rounded-lg'>
                                        <h4 className="font-semibold text-[18px] mb-2">{title}</h4>
                                        <p className="text-[16px] text-gray-700 mb-4">{description}</p>


                                    </div>


                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialsSection
