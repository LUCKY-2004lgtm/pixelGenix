import React, { useState } from "react";
import {
  FaMobileAlt,
  FaCode,
  FaGlobe,
  FaGamepad,
  FaBullhorn,
  FaRocket,
  FaRobot,
  FaShoppingCart,
} from "react-icons/fa";
// import appDevelopmentImage from "../assets/appdevelpoment.jpg";
import AiDevelopmet from '../assets/AiDevelopment.jpg'

const serviceData = [
  {
    title: "Mobile App Development",
    description:
      "We build native and cross-platform mobile applications with seamless performance. We design and developpowerful mobile apps tailored to your business goals.From iOS to Android and hybrid platforms — our apps are fast, scalable, and user-focused.",
    icon: <FaMobileAlt className="text-indigo-600 text-4xl" />,
    image: 'https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    packages: [
      {
        name: "Starter",
        priceINR: "₹35,000",
        priceUSD: "$450",
        priceEUR: "€420",
        features: [
          "Android/iOS basic version",
          "UI Design Included",
          "Basic API integration",
        ],
      },
      {
        name: "Business",
        priceINR: "₹85,000",
        priceUSD: "$999",
        priceEUR: "€950",
        features: [
          "Cross-platform support",
          "Backend API included",
          "Push Notifications",
        ],
      },
      {
        name: "Enterprise",
        priceINR: "₹2,00,000+",
        priceUSD: "$2500+",
        priceEUR: "€2400+",
        features: [
          "Full enterprise suite",
          "DevOps & CI/CD pipeline",
          "24/7 Support & Maintenance",
        ],
      },
    ],
    payments: ["PayPal", "Stripe", "Wise"],
  },
  {
    title: "Software Development",
    description:
      "Enterprise-grade software solutions for automation, CRM, ERP, and more. Transform your workflow with powerful, tailor-made software.Our development team delivers reliable, flexible, and future-ready solutions for your unique needs.",
    icon: <FaCode className="text-indigo-600 text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    packages: [
      {
        name: "Starter",
        priceINR: "₹50,000",
        priceUSD: "$600",
        priceEUR: "€550",
        features: [
          "Basic automation tool",
          "Local database setup",
          "2-month support",
        ],
      },
      {
        name: "Business",
        priceINR: "₹1,00,000",
        priceUSD: "$1200",
        priceEUR: "€1150",
        features: [
          "CRM/ERP integration",
          "Cloud support",
          "Extended reporting",
        ],
      },
      {
        name: "Enterprise",
        priceINR: "₹3,00,000+",
        priceUSD: "$3500+",
        priceEUR: "€3300+",
        features: [
          "Custom solution",
          "Advanced security",
          "Dedicated support & maintenance",
        ],
      },
    ],
    payments: ["Bank Transfer", "Stripe", "PayPal"],
  },
  {
    title: "Web Development",
    description:
      `Modern websites with React, Node, and scalable backend solutions.  
      Our expert web developers create high-performance websites with clean UI, modern tech stacks, and SEO-ready architecture.
Get a site that’s built to engage, convert, and grow with you.
      `,
    icon: <FaGlobe className="text-indigo-600 text-4xl" />,
    image:
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    packages: [
      {
        name: "Starter",
        priceINR: "₹25,000",
        priceUSD: "$300",
        priceEUR: "€280",
        features: ["Static website", "Responsive design", "SEO ready"],
      },
      {
        name: "Business",
        priceINR: "₹75,000",
        priceUSD: "$900",
        priceEUR: "€850",
        features: ["Dynamic content", "Admin panel", "Blog/News CMS"],
      },
      {
        name: "Enterprise",
        priceINR: "₹1,50,000+",
        priceUSD: "$1800+",
        priceEUR: "€1700+",
        features: [
          "Full-stack web app",
          "Cloud hosting",
          "API & DB integration",
        ],
      },
    ],
    payments: ["Stripe", "PayPal", "Razorpay"],
  },
  {
    title: "Game Development",
    description: "2D/3D and AR/VR games for mobile, PC, and web platforms. We create immersive and engaging games for mobile, desktop, and web platforms.From concept to launch, our game developers turn ideas into unforgettable interactive experiences.",
    icon: <FaGamepad className="text-indigo-600 text-4xl" />,
    image:
      "https://plus.unsplash.com/premium_photo-1750143183105-e0e546b2bf30?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    packages: [
      {
        name: "Starter",
        priceINR: "₹60,000",
        priceUSD: "$750",
        priceEUR: "€700",
        features: ["2D Game", "Basic levels", "Ad integration"],
      },
      {
        name: "Business",
        priceINR: "₹1,50,000",
        priceUSD: "$1800",
        priceEUR: "€1700",
        features: ["3D game engine", "Multiplayer support", "In-game store"],
      },
      {
        name: "Enterprise",
        priceINR: "₹4,00,000+",
        priceUSD: "$4800+",
        priceEUR: "€4600+",
        features: [
          "AR/VR support",
          "Console deployment",
          "Post-launch updates",
        ],
      },
    ],
    payments: ["Stripe", "Crypto", "Bank Transfer"],
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, PPC, Social Media, and content marketing strategies that convert. We help brands grow with data-driven digital marketing strategies.From SEO to social media, we drive traffic, boost visibility, and convert leads into customers.",
    icon: <FaBullhorn className="text-indigo-600 text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60",
    packages: [
      {
        name: "Starter",
        priceINR: "₹15,000",
        priceUSD: "$200",
        priceEUR: "€180",
        features: ["Social media setup", "SEO audit", "Monthly report"],
      },
      {
        name: "Business",
        priceINR: "₹40,000",
        priceUSD: "$500",
        priceEUR: "€470",
        features: ["Google Ads", "Content marketing", "Performance tracking"],
      },
      {
        name: "Enterprise",
        priceINR: "₹1,00,000+",
        priceUSD: "$1300+",
        priceEUR: "€1250+",
        features: [
          "Full funnel strategy",
          "Email marketing",
          "24/7 Analytics dashboard",
        ],
      },
    ],
    payments: ["PayPal", "Stripe", "Payoneer"],
  },
  {
    title: "On-Demand",
    description: "Taxi, food, home services — fully managed on-demand apps. Build powerful on-demand apps that connect users with services in real-time.From food delivery to healthcare — we develop scalable, feature-rich, and user-friendly solutions.",
    icon: <FaRocket className="text-indigo-600 text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1630442923896-244dd3717b35?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    packages: [
      {
        name: "Starter",
        priceINR: "₹45,000",
        priceUSD: "$550",
        priceEUR: "€500",
        features: ["Customer app", "Basic admin panel", "Basic booking flow"],
      },
      {
        name: "Business",
        priceINR: "₹1,00,000",
        priceUSD: "$1200",
        priceEUR: "€1100",
        features: [
          "Multiple user roles",
          "Real-time tracking",
          "Payment gateway",
        ],
      },
      {
        name: "Enterprise",
        priceINR: "₹2,50,000+",
        priceUSD: "$3000+",
        priceEUR: "€2900+",
        features: ["Full app suite", "AI-based dispatch", "Custom analytics"],
      },
    ],
    payments: ["Stripe", "Wise", "UPI"],
  },
  {
    title: "AI Development",
    description:
      "Chatbots, predictive analytics, NLP, and ML-based applications. We develop intelligent AI solutions that automate processes, analyze data, and drive smarter decisions.From chatbots to predictive analytics — we help businesses innovate with artificial intelligence.",
    icon: <FaRobot className="text-indigo-600 text-4xl" />,
    image:
      AiDevelopmet,
    packages: [
      {
        name: "Starter",
        priceINR: "₹70,000",
        priceUSD: "$850",
        priceEUR: "€800",
        features: ["Basic chatbot", "ML model integration", "Simple dashboard"],
      },
      {
        name: "Business",
        priceINR: "₹1,50,000",
        priceUSD: "$1800",
        priceEUR: "€1700",
        features: [
          "Predictive analytics",
          "AI recommendations",
          "Speech recognition",
        ],
      },
      {
        name: "Enterprise",
        priceINR: "₹3,50,000+",
        priceUSD: "$4200+",
        priceEUR: "€4000+",
        features: [
          "NLP engine",
          "Real-time ML pipelines",
          "Enterprise analytics suite",
        ],
      },
    ],
    payments: ["Stripe", "Bank Transfer", "Wise"],
  },
  {
    title: "eCommerce Development",
    description:
      "Custom eCommerce stores with secure payment, cart, and admin panel.",
    icon: <FaShoppingCart className="text-indigo-600 text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    packages: [
      {
        name: "Starter",
        priceINR: "₹30,000",
        priceUSD: "$400",
        priceEUR: "€380",
        features: ["Product catalog", "Cart & checkout", "Mobile-ready"],
      },
      {
        name: "Business",
        priceINR: "₹80,000",
        priceUSD: "$950",
        priceEUR: "€900",
        features: ["Payment gateways", "User dashboard", "Order management"],
      },
      {
        name: "Enterprise",
        priceINR: "₹2,00,000+",
        priceUSD: "$2400+",
        priceEUR: "€2300+",
        features: [
          "Multi-vendor system",
          "Inventory automation",
          "Advanced analytics",
        ],
      },
    ],
    payments: ["PayPal", "Razorpay", "Stripe"],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(serviceData[0]);

  return (
    <section className="bg-gradient-to-br from-white to-indigo-50 py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
          Our <span className="text-gray-900">Services</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-1">
            <div className="bg-white p-4 rounded-xl shadow-md space-y-3">
              {serviceData.map((service, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedService(service)}
                  className={`cursor-pointer p-3 rounded-lg transition-all duration-200 flex items-center gap-3 hover:bg-indigo-50 ${selectedService.title === service.title
                    ? "bg-indigo-100 border-l-4 border-indigo-500"
                    : ""
                    }`}
                >
                  <div>{service.icon}</div>
                  <span className="text-sm font-medium text-gray-800">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
              {/* Image if image URL is present */}
              {selectedService.image && (
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    {/* <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                      {selectedService.title}
                    </h3> */}
                    <img className="w-screen h-screen object-cover" src={selectedService.image} alt={selectedService.title} />

                  </div>
                </div>
              )}

              {/* Content Box */}
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  {selectedService.description}
                </p>

                {/* Packages */}
                {selectedService.packages && (
                  <>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">
                      Packages
                    </h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      {selectedService.packages.map((pkg, i) => (
                        <div
                          key={i}
                          className="bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 p-5 rounded-lg shadow-sm transition duration-300"
                        >
                          <h5 className="text-lg font-semibold text-indigo-700 mb-1">
                            {pkg.name}
                          </h5>
                          <div className="text-sm text-gray-600 mb-3 space-y-1">
                            <p>
                              <strong>INR:</strong> {pkg.priceINR}
                            </p>
                            <p>
                              <strong>USD:</strong> {pkg.priceUSD}
                            </p>
                            <p>
                              <strong>EUR:</strong> {pkg.priceEUR}
                            </p>
                          </div>
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            {pkg.features.map((feature, j) => (
                              <li key={j}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Payment Options */}
                {/* {selectedService.payments && (
                  <>
                    <h4 className="text-xl font-semibold text-gray-800 mt-10 mb-3">Payment Options</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedService.payments.map((method, i) => (
                        <span
                          key={i}
                          className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
