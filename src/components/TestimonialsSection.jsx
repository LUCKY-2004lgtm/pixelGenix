import React from 'react'
import { FaStar } from 'react-icons/fa'

const clientData = [
    {
        id: 1,
        name: 'Fareed Muhammed',
        founder: 'Forexcitypro',
        title: 'Project Summary:Runner Consulting',
        image: 'https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-dcb3e06/d274cmdd0goq94.cloudfront.net/wp-content/themes/octal/images/home-new/dummy-user.png',
        description:
            'Octal IT Solution has built a stock and forex trading app for a stock and forex trading firm. They’ve added features like live market data, trading capabilities, portfolio management, and performance trackers.',
        // Budget: '$10,000 to $49,999',
        // Duration: 'Jan.2025-Apr.2025',
    },
    {
        id: 2,
        name: 'Jeans Quevedo',
        founder: 'Runner Consulting',
        title: 'Project Summary:Runner Consulting',
        image: 'https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-dcb3e06/d274cmdd0goq94.cloudfront.net/wp-content/themes/octal/images/home-new/dummy-user.png',
        description:
            'Octal IT Solution has built a stock and forex trading app for a stock and forex trading firm. They’ve added features like live market data, trading capabilities, portfolio management, and performance trackers.',
        // Budget: '$50,000 to $199,999',
        // Duration: 'May.2025-on-going',
    },

    {
        id: 3,
        name: 'Catherine Mueni',
        founder: 'mVOCHA',
        title: 'Project Summary:Runner Consulting',
        image: 'https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-dcb3e06/d274cmdd0goq94.cloudfront.net/wp-content/themes/octal/images/home-new/dummy-user.png',
        description:
            'Octal IT Solution has built a stock and forex trading app for a stock and forex trading firm. They’ve added features like live market data, trading capabilities, portfolio management, and performance trackers.',
        // Budget: '$10,000 to $49,999',
        // Duration: 'Jan.2025-Apr.2025',
    },
    {
        id: 4,
        name: 'Addam Vagley',
        founder: 'Founder,Runner,Consulting',
        title: 'Project Summary:Runner Consulting',
        image: 'https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-dcb3e06/d274cmdd0goq94.cloudfront.net/wp-content/themes/octal/images/home-new/dummy-user.png',
        description:
            'Octal IT Solution has built a stock and forex trading app for a stock and forex trading firm. They’ve added features like live market data, trading capabilities, portfolio management, and performance trackers.',
        // Budget: '$50,000 to $199,999',
        // Duration: 'May.2025-on-going',
    },
    {
        id: 5,
        name: 'Ms. Joyce Mesick',
        founder: 'Finding Trusted Care',
        title: 'Project Summary:Runner Consulting',
        image: 'https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-dcb3e06/d274cmdd0goq94.cloudfront.net/wp-content/themes/octal/images/home-new/dummy-user.png',
        description:
            'Octal IT Solution has built a stock and forex trading app for a stock and forex trading firm. They’ve added features like live market data, trading capabilities, portfolio management, and performance trackers.',
        // Budget: '$10,000 to $49,999',
        // Duration: 'Jan.2025-Apr.2025',
    },
    {
        id: 6,
        name: 'Jeans Quevedo',
        founder: 'Fintech Company',
        title: 'Project Summary:Runner Consulting',
        image: 'https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-dcb3e06/d274cmdd0goq94.cloudfront.net/wp-content/themes/octal/images/home-new/dummy-user.png',
        description:
            'Octal IT Solution has built a stock and forex trading app for a stock and forex trading firm. They’ve added features like live market data, trading capabilities, portfolio management, and performance trackers.',
        // Budget: '$50,000 to $199,999',
        // Duration: 'May.2025-on-going',
    },

    {
        id: 7,
        name: 'Manon Schipper',
        founder: 'Barbacoa.PRO',
        title: 'Project Summary:Runner Consulting',
        image: 'https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-dcb3e06/d274cmdd0goq94.cloudfront.net/wp-content/themes/octal/images/home-new/dummy-user.png',
        description:
            'Octal IT Solution has built a stock and forex trading app for a stock and forex trading firm. They’ve added features like live market data, trading capabilities, portfolio management, and performance trackers.',
        // Budget: '$10,000 to $49,999',
        // Duration: 'Jan.2025-Apr.2025',
    },
    {
        id: 8,
        name: 'Addam Vagley',
        founder: 'Founder,Runner,Consulting',
        title: 'Project Summary:Runner Consulting',
        image: 'https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-dcb3e06/d274cmdd0goq94.cloudfront.net/wp-content/themes/octal/images/home-new/dummy-user.png',
        description:
            'Octal IT Solution has built a stock and forex trading app for a stock and forex trading firm. They’ve added features like live market data, trading capabilities, portfolio management, and performance trackers.',
        // Budget: '$50,000 to $199,999',
        // Duration: 'May.2025-on-going',
    },
    // add more as needed...
]

const TestimonialsSection = () => {
    return (
        <>
            <div className='py-5 bg-gray-100'>


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
                                    className="bg-white p-6 pb-[7rem] rounded-xl shadow-lg"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src={image}
                                            alt={name}
                                            className="w-25 h-25 rounded-full object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-[20px]">{name}</h3>
                                            <p className="text-sm text-gray-500">{founder}</p>
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
