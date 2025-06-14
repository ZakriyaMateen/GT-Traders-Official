import React from 'react'
import { Menu, X } from 'lucide-react'
export const Header = ({ scrolled, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
    return (

        < header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`
        }>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform hover:rotate-3 transition-transform duration-300">
                            <span className="text-white font-bold text-xl">GT</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                GT Traders
                            </h1>
                            <p className="text-sm text-gray-600">Premium Imported Products</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                            Products
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t pt-4 animate-fadeIn">
                        <div className="flex flex-col space-y-4">
                            <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium p-2 rounded hover:bg-blue-50">Home</button>
                            <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium p-2 rounded hover:bg-blue-50">About</button>
                            <button onClick={() => scrollToSection('products')} className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium p-2 rounded hover:bg-blue-50">Products</button>
                            <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium p-2 rounded hover:bg-blue-50">Contact</button>
                        </div>
                    </nav>
                )}
            </div>
        </ header >)
}

export default Header