import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#191414] via-[#1DB954] to-[#191414] text-white">
            {/* Hero Section */}
            <div className="flex justify-center items-center h-screen bg-cover bg-center relative"
                style={{ backgroundImage: "url('https://i.imgur.com/x8bAVa7.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Dark overlay */}
                <div className="text-center relative z-10">
                    <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1DB954] to-[#53C653]">
                        Welcome to Your Music Hub
                    </h1>
                    <p className="text-lg mb-6">Explore new music, manage playlists, and enjoy your favorite songs.</p>
                    <div className="flex justify-center space-x-6">
                        <button className="bg-[#1DB954] hover:bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
                            Get Started
                        </button>
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Cards Section */}
            <div className="py-20 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Popular Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Card 1 */}
                    <div className="bg-[#191414] p-8 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                        <h3 className="text-2xl font-semibold mb-4">Music Playlists</h3>
                        <p className="text-gray-300 mb-6">
                            Create and curate your personal playlists. Enjoy music like never before.
                        </p>
                        <button className="bg-[#1DB954] text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-200 ease-in-out">
                            Explore
                        </button>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-[#191414] p-8 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                        <h3 className="text-2xl font-semibold mb-4">Trending Now</h3>
                        <p className="text-gray-300 mb-6">
                            Check out what's trending. Discover the hottest tracks and artists right now.
                        </p>
                        <button className="bg-[#1DB954] text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-200 ease-in-out">
                            View Trends
                        </button>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-[#191414] p-8 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                        <h3 className="text-2xl font-semibold mb-4">Your Library</h3>
                        <p className="text-gray-300 mb-6">
                            Store and manage all your favorite songs and albums in one place.
                        </p>
                        <button className="bg-[#1DB954] text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-200 ease-in-out">
                            Go to Library
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-black text-center py-8">
                <p className="text-gray-500">&copy; 2024 Your Music Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
