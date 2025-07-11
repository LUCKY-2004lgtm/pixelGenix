// App.jsx
import React from "react";
import { FaFontAwesome, FaPhone } from "react-icons/fa";



const App = () => {
    const phoneNumber = "7976601227";
    const message = "Hello, I visited your site and want to know more!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-[7rem] right-6 z-50 bg-red-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-bounce"
            >
                <FaPhone size={28} />
            </a>
        </div>
    );
};

export default App;
