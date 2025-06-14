import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Star, CheckCircle, ArrowRight, Menu, X, ChevronLeft, ChevronRight, Heart, ShoppingCart } from 'lucide-react';
import { products } from './products';
import { Footer } from './Footer';
import { Header } from './Header';
export default function GTTradersWebsite() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeCarousels, setActiveCarousels] = useState({});
    const [favorites, setFavorites] = useState(new Set());

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };
    const nextSlide = (categoryIndex) => {
        setActiveCarousels(prev => ({
            ...prev,
            [categoryIndex]: ((prev[categoryIndex] || 0) + 1) % products[categoryIndex].items.length
        }));
    };

    const prevSlide = (categoryIndex) => {
        setActiveCarousels(prev => ({
            ...prev,
            [categoryIndex]: ((prev[categoryIndex] || 0) - 1 + products[categoryIndex].items.length) % products[categoryIndex].items.length
        }));
    };

    const goToSlide = (categoryIndex, slideIndex) => {
        setActiveCarousels(prev => ({
            ...prev,
            [categoryIndex]: slideIndex
        }));
    };

    const toggleFavorite = (categoryIndex, itemIndex) => {
        const key = `${categoryIndex}-${itemIndex}`;
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(key)) {
                newFavorites.delete(key);
            } else {
                newFavorites.add(key);
            }
            return newFavorites;
        });
    };

    return (
        <div className="min-h-screen bg-white">
            <Header scrolled={scrolled} scrollToSection={scrollToSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            {/* Hero Section */}
            <section id="home" className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent)] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent)] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium animate-pulse">
                            Premium Imported Products
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fadeInUp">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient bg-300% bg-size-300">
                                GT Traders
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200 px-2">
                            Your trusted partner for premium imported products including luxury hair care, advanced skincare, and wrapping products.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fadeInUp animation-delay-400 px-4">
                            <button
                                onClick={() => scrollToSection('products')}
                                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto justify-center"
                            >
                                <span>Explore Products</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            About GT Traders
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                            We specialize in importing and distributing premium quality products that enhance your lifestyle and meet your everyday needs.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:rotate-6 transition-transform duration-300">
                                <Star className="text-white group-hover:scale-110 transition-transform duration-300" size={28} />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Premium Quality</h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                We source only the finest imported products that meet international quality standards and exceed customer expectations.
                            </p>
                        </div>

                        <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:rotate-6 transition-transform duration-300">
                                <CheckCircle className="text-white group-hover:scale-110 transition-transform duration-300" size={28} />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Trusted Service</h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                With years of experience in import trading, we provide reliable service and maintain long-lasting relationships with our clients.
                            </p>
                        </div>

                        <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group sm:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:rotate-6 transition-transform duration-300">
                                <ArrowRight className="text-white group-hover:scale-110 transition-transform duration-300" size={28} />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Fast Delivery</h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                Our efficient supply chain ensures quick delivery of products to meet your business needs and timelines.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Our Premium Products
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                            Discover our carefully curated selection of imported premium products designed to elevate your lifestyle.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 sm:gap-8 lg:gap-10">
                        {products.map((productCategory, categoryIndex) => (
                            <div key={categoryIndex} className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="p-4 sm:p-6 lg:p-8">
                                    <div className="text-center mb-6">
                                        <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-3">
                                            {productCategory.category}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                                            {productCategory.title}
                                        </h3>
                                    </div>

                                    {/* Carousel Container */}
                                    <div className="relative">
                                        <div className="overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-blue-50">
                                            <div
                                                className="flex transition-transform duration-500 ease-in-out"
                                                style={{ transform: `translateX(-${(activeCarousels[categoryIndex] || 0) * 100}%)` }}
                                            >
                                                {productCategory.items.map((item, itemIndex) => (
                                                    <div key={itemIndex} className="w-full flex-shrink-0 p-3 sm:p-4">
                                                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                                            <div className="relative group">
                                                                <div className="aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.name}
                                                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                                <div className="absolute bottom-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                                                                    {item.price}
                                                                </div>
                                                            </div>
                                                            <div className="p-4 sm:p-5">
                                                                <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                                                    {item.name}
                                                                </h4>
                                                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                                                                    {item.description}
                                                                </p>
                                                                {item.features.length > 0 && (
                                                                    <div className="space-y-2">
                                                                        {item.features.map((feature, idx) => (
                                                                            <div key={idx} className="flex items-start text-sm text-gray-600">
                                                                                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                                                <span>{feature}</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Navigation Buttons */}
                                        <button
                                            onClick={() => prevSlide(categoryIndex)}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none"
                                            aria-label="Previous slide"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={() => nextSlide(categoryIndex)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none"
                                            aria-label="Next slide"
                                        >
                                            <ChevronRight size={24} />
                                        </button>

                                        {/* Dots Navigation */}
                                        <div className="flex justify-center space-x-2 mt-4">
                                            {productCategory.items.map((_, itemIndex) => (
                                                <button
                                                    key={itemIndex}
                                                    onClick={() => goToSlide(categoryIndex, itemIndex)}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${(activeCarousels[categoryIndex] || 0) === itemIndex
                                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125'
                                                        : 'bg-gray-300 hover:bg-gray-400'
                                                        }`}
                                                    aria-label={`Go to slide ${itemIndex + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Get In Touch
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                            Ready to explore our premium products? Contact us today for inquiries, orders, or partnership opportunities.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Contact Information</h3>
                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="flex items-start space-x-3 sm:space-x-4 group">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                                                <Phone className="text-white" size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Phone & WhatsApp</h4>
                                                <a href="tel:+923154067544" className="text-blue-600 hover:text-blue-700 transition-colors font-medium text-sm sm:text-base">
                                                    +92 315 4067544
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3 sm:space-x-4 group">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                                                <Mail className="text-white" size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Email</h4>
                                                <a href="mailto:official.gt.traders@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors font-medium text-sm sm:text-base break-all">
                                                    official.gt.traders@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3 sm:space-x-4 group">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                                                <MapPin className="text-white" size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Location</h4>
                                                <p className="text-gray-600 text-sm sm:text-base">Lahore, Punjab, Pakistan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Why Choose GT Traders?</h3>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                                        <span className="text-gray-700 text-sm sm:text-base">Premium imported products</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                                        <span className="text-gray-700 text-sm sm:text-base">Competitive wholesale pricing</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                                        <span className="text-gray-700 text-sm sm:text-base">Reliable supply chain</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                                        <span className="text-gray-700 text-sm sm:text-base">Professional customer service</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                                        <span className="text-gray-700 text-sm sm:text-base">Quality assurance guarantee</span>
                                    </div>
                                </div>

                                <div className="mt-6 sm:mt-8">
                                    <a
                                        href="https://wa.me/923161451031"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                                    >
                                        <Phone size={18} className="mr-2" />
                                        WhatsApp Us Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}