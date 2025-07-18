// BlogPage.jsx
// BlogPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.jpeg";
import blog4 from "../assets/blog4.jpeg";
import blog5 from "../assets/blog5.webp";
import blog6 from "../assets/blog6.webp";
import blog7 from "../assets/blog7.png";
import blog8 from "../assets/blog8.jpeg";
import blog9 from "../assets/blog9.webp";
import blog10 from "../assets/blog10.jpeg";
import blog11 from "../assets/blog11.webp"; // Add more images as needed


const categories = [
  "Latest",
  "Fintech",
  "Mobile App Development",
  "On Demand Apps",
  "App Ideas"
];

const postsByCat = {
  Latest: [
    {
      id: 1,
      title: "Rapid Application Development: A Detailed Guide",
      category: "Mobile App Development",
      author: "Rajat Verma",
      date: "12 June, 2025",
      img: blog1,
      content:
        "Rapid Application Development (RAD) is a software development methodology that emphasizes quick development and iteration of prototypes. It enables developers to adjust quickly to changing requirements using reusable components and rapid prototyping.",
    },
    {
      id: 2,
      title: "How to Develop Enterprise Mobile Application: A Detailed Guide",
      category: "Mobile App Development",
      author: "Suman Mishra",
      date: "11 June, 2025",
      img: blog2,
      content:
        "Enterprise mobile apps streamline business processes, enhance productivity, and provide secure access to corporate data. This guide explores architecture, platform choices, and integration strategies.",
    },
    {
      id: 3,
      title: "AI in DevOps: Key Trends, Use Cases and Benefits in 2025",
      category: "Mobile App Development",
      author: "Ajay Kumar",
      date: "10 June, 2025",
      img: blog3,
      content:
        "Artificial Intelligence is revolutionizing DevOps by automating CI/CD pipelines, enhancing predictive maintenance, and improving system reliability through anomaly detection.",
    },
  ],
  Fintech: [
    {
      id: 4,
      title: "How To Develop Money Management Software Like Quicken In 2025?",
      category: "Fintech",
      author: "Neha Singh",
      date: "11 March, 2025",
      img: blog4,
      content:
        "Money management software like Quicken integrates budgeting tools, account sync, and investment tracking. This article discusses architecture, compliance, and user-focused features.",
    },
    {
      id: 5,
      title: "Bitcoin - The Network of Digital Payments",
      category: "Fintech",
      author: "Manish Kumar",
      date: "22 February, 2025",
      img: blog5,
      content:
        "Bitcoin has evolved into a decentralized financial system that enables global digital payments without intermediaries. This post covers blockchain principles and transaction validation.",
    },
    {
      id: 6,
      title: "Driving the Future of Finance with Technology.",
      category: "Fintech",
      author: "Manish Kumar",
      date: "22 February, 2025",
      img: 'https://images.pexels.com/photos/8927463/pexels-photo-8927463.jpeg',
      content:
        "From digital wallets to robo-advisors, fintech is reshaping how individuals and businesses manage, invest, and grow their money."


    },
  ],
  "Mobile App Development": [
    {
      id: 7,
      title: "Mobile App Development Timeline: All You Need to Know in 2025",
      category: "Mobile App Development",
      author: "Priya Yadav",
      date: "29 May, 2025",
      img: blog6,
      content:
        "Understanding timelines helps in planning app releases efficiently. This guide explains discovery, design, development, testing, and launch phases.",
    },
    {
      id: 8,
      title: "TypeScript vs JavaScript: Key Differences and Use Cases in 2025",
      category: "Mobile App Development",
      author: "Vivek Jha",
      date: "28 May, 2025",
      img: blog7,
      content:
        "TypeScript offers static typing and robust tooling, while JavaScript is dynamically typed. Learn which one to choose depending on your app requirements.",
    },

    {
      id: 9,
      title: "Powering Mobile Experiences with Smart App Development in  2025",
      category: "Mobile App Development",
      author: "Vivek Jha",
      date: "28 May, 2025",
      img: 'https://media.istockphoto.com/id/1488105257/photo/chatbot-powered-by-ai-transforming-industries-and-customer-service-yellow-chatbot-icon-over.webp?a=1&b=1&s=612x612&w=0&k=20&c=3ByePiHIuSLInPFn1V7fClxV67CrUFXmW0MC1JzKeHA=',
      content:
        "We craft intelligent mobile apps that combine sleek design with smart AI-driven features.From startups to enterprises, our solutions are built to scale and engage.",
    },
  ],
  "On Demand Apps": [
    {
      id: 10,
      title: "How to Develop a Hotel Booking App Like OYO in 2025",
      category: "On Demand Apps",
      author: "Anita Chauhan",
      date: "29 January, 2025",
      img: blog8,
      content:
        "Hotel booking apps require listing integration, secure payments, geo-targeting, and availability sync. We explore how to develop scalable OYO-like apps.",
    },
    {
      id: 11,
      title: "Top 20 OTT App Development Companies in 2025",
      category: "On Demand Apps",
      author: "Raghav Sharma",
      date: "3 January, 2025",
      img: blog9,
      content:
        "OTT platforms are growing exponentially. This article lists 20 reliable OTT app development companies with proven success and innovative solutions.",
    },

    {
      id: 12,
      title: "Your Business, On-Demand — Anytime, Anywhere",
      category: "On Demand Apps",
      author: "Raghav Sharma",
      date: "3 January, 2025",
      img: 'https://images.pexels.com/photos/7309309/pexels-photo-7309309.jpeg',
      content:
        "OTT platforms are growing exponentially. This article lists 20 reliable OTT app development companies with proven success and innovative solutions.",
    },
  ],
  "App Ideas": [
    {
      id: 13,
      title: "How to Develop a Morse Code Translator App",
      category: "App Ideas",
      author: "Deepa Mehta",
      date: "31 January, 2025",
      img: blog10,
      content:
        "A Morse code translator app requires encoding/decoding logic and a user-friendly interface. Learn how to build one with audio playback and vibration support.",
    },
    {
      id: 14,
      title:
        "Document Verification | Authenticating Identity in the Financial Sector",
      category: "App Ideas",
      author: "Kunal Grover",
      date: "29 January, 2025",
      img: blog11,
      content:
        "Document verification apps aid financial institutions in validating user identity using OCR, machine learning, and real-time document scanning.",
    },
    {
      id: 15,
      title:
        "Turn Brilliant Ideas Into Powerful Apps",
      category: "App Ideas",
      author: "Kunal Grover",
      date: "29 January, 2025",
      img: 'https://images.pexels.com/photos/248528/pexels-photo-248528.jpeg',
      content:
        "Document verification apps aid financial institutions in validating user identity using OCR, machine learning, and real-time document scanning.",
    },
  ],
};




const PER_PAGE = 6;

const BlogPage = () => {
  const [activeCat, setActiveCat] = useState("Latest");
  const [page, setPage] = useState(1);
  const posts = postsByCat[activeCat] || [];
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const displayPosts = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero + Search */}
      <div className="py-16 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Insights on Technology That Builds Futuristic Businesses
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Explore expert articles around mobile, fintech, app ideas, and more.
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-2/3 p-3 rounded-md border border-gray-300 focus:ring-indigo-500 focus:outline-none"
          />
        </motion.div>
      </div>

      {/* Categories Tabs */}
      <div className="mt-8 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCat(cat);
                setPage(1);
                setSelectedPost(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCat === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Detail View */}
        {selectedPost ? (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <img
                src={selectedPost.img}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded"
              />
              <h2 className="text-3xl font-bold mt-6 mb-2 text-gray-800">
                {selectedPost.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                By {selectedPost.author} | {selectedPost.date}
              </p>
              <p className="text-lg text-gray-700 whitespace-pre-wrap">
                {selectedPost.content}
              </p>
            </div>
            <div className="bg-gray-50 rounded p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
              {posts
                .filter((p) => p.id !== selectedPost.id)
                .slice(0, 3)
                .map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="cursor-pointer mb-4"
                  >
                    <p className="text-sm text-indigo-600 font-medium">
                      {post.category}
                    </p>
                    <p className="text-md font-semibold text-gray-800">
                      {post.title}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <>
            {/* Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-indigo-500 font-semibold mb-1">
                      {post.category}
                    </p>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      By {post.author} | {post.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex justify-center gap-4">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="px-4 py-2 border rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-4 py-2 border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
