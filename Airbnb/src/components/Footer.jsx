import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Asegúrate de tener react-icons instalados

const Footer = () => {
  return (
    <footer className="bg-[#a5d6a7] text-black py-8 mt-10">
      <div className="container mx-auto text-center space-y-6">
        {/* Logo y Nombre de la Empresa */}
        <div className="flex justify-center items-center">
          <img src="/img/logo.png" alt="KASHECOWORKING" className="w-40 h-auto mr-4" />
        </div>

        {/* Información de Contacto */}
        <div className="space-y-2">
          <p className="text-lg">Correo: contacto@kashecoworking.com</p>
          <p className="text-lg">Teléfono: +34 123 456 789</p>
        </div>

        {/* Enlaces a Redes Sociales */}
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://facebook.com/KASHECOWORKING" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/kashecoworking/reel/DCH0Dpkq0Y1/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/KASHECOWORKING" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/company/KASHECOWORKING" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin />
          </a>
        </div>

        {/* Derechos de Autor */}
        <div className="mt-6">
          <p>&copy; {new Date().getFullYear()} KASHECOWORKING. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
