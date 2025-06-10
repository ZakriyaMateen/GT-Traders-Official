import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Star, CheckCircle, ArrowRight, Menu, X, ChevronLeft, ChevronRight, Heart, ShoppingCart } from 'lucide-react';

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

    const products = [
        {
            category: "Hair Care",
            title: "Premium Imported Shampoos",
            items: [
                {
                    name: "Coconut Formula",
                    description: "Hair Loss Control & Shining - Shampoo + Conditioner",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545788/Coconut_Formula_qaw1ve.jpg",
                    features: ["No Sulfates", "No Parabens", "No Phthalates", "No Mineral Oil", "No Gluten", "No Dies"],
                    price: "Contact for price"
                },
                {
                    name: "Garlic Oil",
                    description: "Nutritive Anti-Hair Loss - Shampoo + Conditioner",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545793/Garlic_Oil_Shampoo_xet1yk.jpg",
                    features: ["No Sulfates", "No Parabens", "No Phthalates", "No Mineral Oil", "No Gluten", "No Dies"],
                    price: "Contact for price"
                },
                {
                    name: "Argan Oil",
                    description: "Hair Loss Control & Repair - Shampoo + Conditioner",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545787/Argan_Oil_Shampoo_mtwuk6.jpg",
                    features: ["No Sulfates", "No Parabens", "No Phthalates", "No Mineral Oil", "No Gluten", "No Dies"],
                    price: "Contact for price"
                },
                {
                    name: "Tea Tree Oil",
                    description: "Hair Loss Control & Hair Scalp - Shampoo + Conditioner",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545798/Tea_Tree_Oil_Shampoo_n9wynh.jpg",
                    features: ["No Sulfates", "No Parabens", "No Phthalates", "No Mineral Oil", "No Gluten", "No Dies"],
                    price: "Contact for price"
                }
            ]
        },
        {
            category: "Skin Care",
            title: "Premium Imported Skin Care",
            items: [
                {
                    name: "Fair & Brite - 100% Organic Face Mask",
                    description: "Discover our Bentonite Clay Powder with Vitamin C, an essential addition to your skincare routine! This 100% organic product is perfect for all skin types, offering gentle yet effective cleansing and nourishment. Perfect for achieving a radiant and healthy complexion effortlessly!",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545795/mask1_aobiww.jpg",
                    features: ["Bentonite Clay Powder", "Vitamin C", "100% Organic"],
                    price: "Contact for price"
                },
                {
                    name: "Fair & Brite - 100% Organic Face Mask",
                    description: "Discover our Bentonite Clay Powder with Vitamin C, an essential addition to your skincare routine! This 100% organic product is perfect for all skin types, offering gentle yet effective cleansing and nourishment. Perfect for achieving a radiant and healthy complexion effortlessly!",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545796/mask3_elzu2x.jpg",
                    features: ["Bentonite Clay Powder", "Vitamin C", "100% Organic"],
                    price: "Contact for price"
                },
                {
                    name: "Fair & Brite - 100% Organic Face Mask",
                    description: "Discover our Bentonite Clay Powder with Vitamin C, an essential addition to your skincare routine! This 100% organic product is perfect for all skin types, offering gentle yet effective cleansing and nourishment. Perfect for achieving a radiant and healthy complexion effortlessly!",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545795/mask2_tfhb4r.jpg",
                    features: ["Bentonite Clay Powder", "Vitamin C", "100% Organic"],
                    price: "Contact for price"
                },
            ]
        },
        {
            category: "Premium Trash Bags",
            title: "Premium Trash Bags",
            items: [
                {
                    name: "Heavy Duty Restaurants/Hospitals and Home Trash Bags",
                    description: "Different sizes available",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545799/trashBag2_uw22pj.jpg",
                    features: ["Extra strong", "Leak-proof seal", "Kitchen size"],
                    price: "Contact for price"
                },

                {
                    name: "Heavy Duty Restaurants and Home Trash Bags",
                    description: "Different sizes available",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545799/trashBag3_dyzlfc.jpg",
                    features: ["Extra strong", "Leak-proof seal", "Kitchen size"],
                    price: "Contact for price"
                },
                {
                    name: "Heavy Duty Restaurants and Home Trash Bags",
                    description: "Different sizes available",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545800/trashBag4_hglukj.jpg",
                    features: ["Extra strong", "Leak-proof seal", "Kitchen size"],
                    price: "Contact for price"
                },
                {
                    name: "Heavy Duty Restaurants and Home Trash Bags",
                    description: "Different sizes available",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545800/trashBag5_cs4zmk.jpg",
                    features: ["Extra strong", "Leak-proof seal", "Kitchen size"],
                    price: "Contact for price"
                },
                {
                    name: "Heavy Duty Restaurants and Home Trash Bags",
                    description: "Different sizes available",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545800/trashBag6_nnegz5.jpg",
                    features: ["Extra strong", "Leak-proof seal", "Kitchen size"],
                    price: "Contact for price"
                },
                {
                    name: "Heavy Duty Restaurants and Home Trash Bags",
                    description: "Different sizes available",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545798/trashBag1_s0suyq.jpg",
                    features: ["Extra strong", "Leak-proof seal", "Kitchen size"],
                    price: "Contact for price"
                },
            ]
        },

        {
            category: "Cling Film",
            title: "Cling Film (Food Grade)",
            items: [
                {
                    name: "Premium Gift Wrapping",
                    description: "Luxury gift wrapping paper with metallic finish",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545796/stretch1_rmvx2u.jpg",
                    features: [],
                    price: "Contact for price"
                },
                {
                    name: "Premium Gift Wrapping",
                    description: "Luxury gift wrapping paper with metallic finish",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545787/Cling_Film_pz9hbf.jpg",
                    features: [],
                    price: "Contact for price"
                },
                {
                    name: "Premium Gift Wrapping",
                    description: "Luxury gift wrapping paper with metallic finish",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545791/foodGrade4_co6wxl.jpg",
                    features: [],
                    price: "Contact for price"
                },
                {
                    name: "Premium Gift Wrapping",
                    description: "Luxury gift wrapping paper with metallic finish",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545792/foodGrade6_kxtaxa.jpg",
                    features: [],
                    price: "Contact for price"
                },
                {
                    name: "Premium Gift Wrapping",
                    description: "Luxury gift wrapping paper with metallic finish",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545791/foodGrade3_xh31nf.jpg",
                    features: [],
                    price: "Contact for price"
                },
                {
                    name: "Premium Gift Wrapping",
                    description: "Luxury gift wrapping paper with metallic finish",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545790/foodGrade2_jvfal9.jpg",
                    features: [],
                    price: "Contact for price"
                },
            ]
        },

        {
            category: "Imported Clinical Shampoo",
            title: "Gutto Clinical Shampoo",
            items: [
                {
                    name: "Gutto Clinical Shampoo",
                    description: "Clinical Shampoo for Hair Fall",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545788/clinical5_vovhj8.jpg",
                    features: [],
                    price: "Contact for price"
                },
                {
                    name: "Gutto Clinical Shampoo",
                    description: "Clinical Shampoo for Hair Fall",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545788/clinical1_bty1n1.jpg",
                    features: [],
                    price: "Contact for price"
                },
                {
                    name: "Gutto Clinical Shampoo",
                    description: "Clinical Shampoo for Hair Fall",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545787/clinical3_eofyko.jpg",
                    features: [],
                    price: "Contact for price"
                },
                {
                    name: "Gutto Clinical Shampoo",
                    description: "Clinical Shampoo for Hair Fall",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545787/clinical2_xo1gqs.jpg",
                    features: [],
                    price: "Contact for price"
                },
                {
                    name: "Gutto Clinical Shampoo",
                    description: "Clinical Shampoo for Hair Fall",
                    image: "https://res.cloudinary.com/dk6uqxx74/image/upload/v1749545788/clinical4_sgwsqe.jpg",
                    features: [],
                    price: "Contact for price"
                },
            ]
        }
    ];

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
            {/* Header */}
            <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
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
            </header>

            {/* Hero Section */}
            <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent)] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent)] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium animate-pulse">
                            Premium Imported Products
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient bg-300% bg-size-300">
                                GT Traders
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
                            Your trusted partner for premium imported products including luxury hair care, advanced skincare, and wrapping products.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-400">
                            <button
                                onClick={() => scrollToSection('products')}
                                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                            >
                                <span>Explore Products</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            About GT Traders
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We specialize in importing and distributing premium quality products that enhance your lifestyle and meet your everyday needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                                <Star className="text-white group-hover:scale-110 transition-transform duration-300" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Premium Quality</h3>
                            <p className="text-gray-600">
                                We source only the finest imported products that meet international quality standards and exceed customer expectations.
                            </p>
                        </div>

                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                                <CheckCircle className="text-white group-hover:scale-110 transition-transform duration-300" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Trusted Service</h3>
                            <p className="text-gray-600">
                                With years of experience in import trading, we provide reliable service and maintain long-lasting relationships with our clients.
                            </p>
                        </div>

                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                                <ArrowRight className="text-white group-hover:scale-110 transition-transform duration-300" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Fast Delivery</h3>
                            <p className="text-gray-600">
                                Our efficient supply chain ensures quick delivery of products to meet your business needs and timelines.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Our Premium Products
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our carefully curated selection of imported premium products designed to elevate your lifestyle.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {products.map((productCategory, categoryIndex) => (
                            <div key={categoryIndex} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500">
                                <div className="text-center mb-8">
                                    <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                                        {productCategory.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        {productCategory.title}
                                    </h3>
                                </div>

                                {/* Carousel Container */}
                                <div className="relative">
                                    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50">
                                        <div
                                            className="flex transition-transform duration-500 ease-in-out"
                                            style={{ transform: `translateX(-${(activeCarousels[categoryIndex] || 0) * 100}%)` }}
                                        >
                                            {productCategory.items.map((item, itemIndex) => (
                                                <div key={itemIndex} className="w-full flex-shrink-0 p-6">
                                                    <div className="relative group">
                                                        <div className="relative overflow-hidden rounded-xl mb-4">
                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                            {/* Heart Icon */}
                                                            {/* <button
                                                                onClick={() => toggleFavorite(categoryIndex, itemIndex)}
                                                                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110"
                                                            >
                                                                <Heart
                                                                    size={20}
                                                                    className={`${favorites.has(`${categoryIndex}-${itemIndex}`)
                                                                        ? 'text-red-500 fill-red-500'
                                                                        : 'text-gray-600'
                                                                        } transition-colors duration-300`}
                                                                />
                                                            </button> */}

                                                            {/* Price Tag */}
                                                            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                                {item.price}
                                                            </div>
                                                        </div>
                                                        <div className="space-y-4">
                                                            <div>
                                                                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                                                    {item.name}
                                                                </h4>
                                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                                    {item.description}
                                                                </p>
                                                            </div>

                                                            <div className="space-y-2">
                                                                {item.features.map((feature, idx) => (
                                                                    <div key={idx} className="flex items-center text-sm text-gray-600">
                                                                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                                                        {feature}
                                                                    </div>
                                                                ))}
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={() => prevSlide(categoryIndex)}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-10"
                                    >
                                        <ChevronLeft size={20} className="text-gray-700" />
                                    </button>
                                    <button
                                        onClick={() => nextSlide(categoryIndex)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-10"
                                    >
                                        <ChevronRight size={20} className="text-gray-700" />
                                    </button>

                                    {/* Dot Indicators */}
                                    <div className="flex justify-center space-x-2 mt-6">
                                        {productCategory.items.map((_, itemIndex) => (
                                            <button
                                                key={itemIndex}
                                                onClick={() => goToSlide(categoryIndex, itemIndex)}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${(activeCarousels[categoryIndex] || 0) === itemIndex
                                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125'
                                                    : 'bg-gray-300 hover:bg-gray-400'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Get In Touch
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to explore our premium products? Contact us today for inquiries, orders, or partnership opportunities.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4 group">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                                                <Phone className="text-white" size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">Phone & WhatsApp</h4>
                                                <a href="tel:+923161451031" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
                                                    +92 316 1451031
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 group">
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                                                <Mail className="text-white" size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                                                <a href="mailto:official.gt.traders@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
                                                    official.gt.traders@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 group">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                                                <MapPin className="text-white" size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                                                <p className="text-gray-600">Lahore, Punjab, Pakistan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">Why Choose GT Traders?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                        <span className="text-gray-700">Premium imported products</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                        <span className="text-gray-700">Competitive wholesale pricing</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                        <span className="text-gray-700">Reliable supply chain</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                        <span className="text-gray-700">Professional customer service</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                        <span className="text-gray-700">Quality assurance guarantee</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <a
                                        href="https://wa.me/923161451031"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        <Phone size={20} className="mr-2" />
                                        WhatsApp Us Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
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
                                    <a href="tel:+923161451031" className="text-gray-400 hover:text-white transition-colors">
                                        +92 316 1451031
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
            </footer>
        </div>
    );
}