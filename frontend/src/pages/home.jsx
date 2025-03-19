// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-yellow-400 text-white flex flex-col">
      
      {/* 🌟 Header avec navigation */}
      <header className="flex justify-between items-center p-6 bg-white bg-opacity-10 backdrop-blur-md fixed w-full top-0 shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg tracking-widest">
          🍔 CES'EATS 
        </h1>
        <nav className="space-x-6">
          <Link to="/client" className="hover:text-gray-200 transition">Commander</Link>
          <Link to="/restaurant" className="hover:text-gray-200 transition">Restaurants</Link>
          <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
        </nav>
      </header>

      {/* 💡 Contenu principal */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-6 mt-20">
        
        {/* 🎉 Titre animé */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold drop-shadow-lg"
        >
          🚀 Commandez en 1 clic !
        </motion.h1>

        {/* 📝 Slogan */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-2xl mt-4 font-semibold text-center"
        >
          Vos restaurants préférés livrés en un éclair ! ⚡
        </motion.p>

        {/* 🎯 Boutons d'action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-10 flex flex-col md:flex-row gap-5"
        >
          <Link to="/client">
            <button className="px-6 py-3 bg-white text-red-500 font-bold rounded-full shadow-lg text-lg transition transform hover:scale-110">
              🍽 Commander
            </button>
          </Link>
          <Link to="/restaurant">
            <button className="px-6 py-3 bg-white text-yellow-500 font-bold rounded-full shadow-lg text-lg transition transform hover:scale-110">
              🏪 Inscrire mon restaurant
            </button>
          </Link>
        </motion.div>
      </div>

      {/* 🍔 Images flottantes des plats */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-10 opacity-90">
        <motion.img 
          src="https://i.ibb.co/23hww3x7/burger.png" 
          alt="Burger"
          className="w-24 h-24"
          initial={{ y: 0 }}
           animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        <motion.img 
          src="https://i.ibb.co/F4scN8WJ/pizza.png" 
          alt="Pizza"
          className="w-24 h-24"
          initial={{ y: 0 }}
          animate={{ y: [-15, 15, -15] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        />
        <motion.img 
           src="https://i.ibb.co/D6f1HfF/sushi.png" 
           alt="Sushi"
           className="w-24 h-24"
           initial={{ y: 0 }}
           animate={{ y: [-20, 20, -20] }}
           transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
      </div>

    </div>
  );
}