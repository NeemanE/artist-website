import { motion } from "framer-motion";
import { AiOutlinePlayCircle } from "react-icons/ai";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-gradient-to-r from-black via-gray-800 to-purple-800 text-gold">
        <h1 className="text-4xl font-bold">Kanaan Media</h1>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#artists" className="hover:underline">
            Artists
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-animated">
        <motion.h2
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Music. Elevating Voices.
        </motion.h2>
        <motion.p
          className="mt-4 text-xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Welcome to Kanaan Media, where talent meets opportunity.
        </motion.p>
        <motion.button
          className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:scale-105 transition-transform"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <AiOutlinePlayCircle size={24} />
          <span>Explore Our Work</span>
        </motion.button>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="bg-black text-gray-300 py-16 px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">About Kanaan Media</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Kanaan Media is a record label and production powerhouse dedicated to
          amplifying diverse voices and crafting unforgettable sounds. From
          hip-hop to R&B and beyond, we’re here to shape the future of music.
        </p>
      </section>

      {/* Featured Artists Section */}
      <section
        id="artists"
        className="py-16 px-8 text-center bg-gradient-to-b from-gray-900 to-black"
      >
        <h2 className="text-4xl font-bold text-white mb-8">Our Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Artist One</h3>
            <p className="text-gray-400 mt-2">R&B | Soul</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Artist Two</h3>
            <p className="text-gray-400 mt-2">Hip-Hop | Rap</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Artist Three</h3>
            <p className="text-gray-400 mt-2">Pop | Alternative</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-black text-gray-300 py-16 px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Interested in working with Kanaan Media? Reach out to us and let's
          create something amazing together.
        </p>
        <motion.button
          className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
        >
          Get in Touch
        </motion.button>
      </section>
    </div>
  );
}
