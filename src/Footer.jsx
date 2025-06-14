import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

export const Footer = ({ scrollToSection }) => {
    return (

        < footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">GT</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">GT Traders</h3>
                                <p className="text-gray-400 text-sm">Premium Imported Products</p>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Your trusted partner for premium imported products including luxury hair care, advanced skincare, and essential wrapping products.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors">Home</button>
                            <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About Us</button>
                            <button onClick={() => scrollToSection('products')} className="block text-gray-400 hover:text-white transition-colors">Products</button>
                            <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Contact</button>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone size={16} className="text-blue-400" />
                                <a href="tel:+923154067544" className="text-gray-400 hover:text-white transition-colors">
                                    +92 315 4067544
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail size={16} className="text-purple-400" />
                                <a href="mailto:official.gt.traders@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                    official.gt.traders@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin size={16} className="text-green-400" />
                                <span className="text-gray-400">Lahore, Punjab, Pakistan</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 GT Traders. All rights reserved. | Premium Imported Products Specialist
                    </p>
                </div>
            </div>
        </ footer >
    )
}

export default Footer