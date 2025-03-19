// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const restaurants = [
  { name: "Panzer Café", image: "https://i.ibb.co/B5ZkjB5W/Panzer-Caf.png" },
  { name: "Capybara Sushi", image: "https://i.ibb.co/tpsgxx0T/Capybara-Sushi.webp" },
  { name: "Crocodilo Bistrot", image: "https://i.ibb.co/0jGz7tsF/Crocodilo-Bistrot.webp" },
  { name: "Los Pollos Hermanos", image: "https://i.ibb.co/Pv8qGky9/Los-Pollos-Hermanos-logo.png" }
];

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-yellow-400 text-white flex flex-col">
      {/* 🌟 Header avec navigation */}
      <header className="flex justify-between items-center p-6 bg-white bg-opacity-10 backdrop-blur-md fixed w-full top-0 shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg tracking-widest">
          🍔 CES'EATS 
        </h1>
      </header>

      {/* 📜 Liste des restaurants avec scroll */}
      <div className="mt-24 w-full flex flex-col items-center space-y-6 overflow-y-auto h-[80vh] px-4">
        {restaurants.map((restaurant, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-20 rounded-full p-6 shadow-lg flex items-center space-x-6 w-10/12 max-w-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={restaurant.image} alt={restaurant.name} className="w-20 h-20 rounded-full object-cover" />
            <span className="text-xl font-semibold">{restaurant.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
