/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Glasses, 
  ShieldCheck, 
  Zap, 
  Package, 
  MapPin,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Use a type cast to avoid JSX intrinsic elements issues
  const StripeBuyButton = 'stripe-buy-button' as any;

  useEffect(() => {
    // Load Stripe Buy Button script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-100 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-zinc-200">
              <Smartphone size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tighter text-xl leading-none">UNCLE SHAMMY</span>
              <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">Premium Optics</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#buy" className="px-6 py-2.5 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">Order Now</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#buy" onClick={() => setIsMenuOpen(false)} className="text-lg font-black tracking-tight uppercase">Order Your 3-Pack</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold mb-6">
              <Zap size={14} className="text-yellow-500 fill-yellow-500" />
              <span>THE ULTIMATE SCREEN CLEANER</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              DIRTY, <br />
              <span className="text-zinc-300">STICKY</span> <br />
              SCREEN?
            </h1>
            <p className="text-xl text-zinc-500 mb-10 max-w-md leading-relaxed font-medium">
              Clear, unobstructed vision will keep you alive. Uncle Shammy's Digital Device Cloth wipes away the spots that slow you down.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#buy" 
                className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white rounded-2xl font-black tracking-tight hover:bg-zinc-800 transition-all shadow-2xl shadow-zinc-200 text-center uppercase text-sm"
              >
                Order Your 3-Pack
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-zinc-50 rounded-3xl overflow-hidden shadow-2xl border border-zinc-100 flex items-center justify-center p-12">
              <img 
                src="https://i.ibb.co/LXQ5BjT5/image.jpg" 
                alt="Uncle Shammy Product" 
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="font-bold text-sm">Local Quality</div>
                  <div className="text-xs text-zinc-500">Support Local Business</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-4">Engineered for Perfection</h2>
            <p className="text-zinc-500">Designed to handle the daily accumulation of smudges and oils on your most-used devices.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="text-zinc-900" />,
                title: "Digital Devices",
                desc: "Perfect for phones, tablets, and laptops. Leaves zero streaks behind.",
                img: "https://i.ibb.co/nNgjb6Dt/image.jpg"
              },
              {
                icon: <Glasses className="text-zinc-900" />,
                title: "Eyewear & Optics",
                desc: "Gentle enough for high-end eyeglasses and action sports eyewear.",
                img: "https://i.ibb.co/r2BXQn8S/image.jpg"
              },
              {
                icon: <Package className="text-zinc-900" />,
                title: "Resealable Pouch",
                desc: "Comes in a vinyl pouch to keep it clean and ready in your pocket or bag.",
                img: "https://i.ibb.co/4gstSn76/image.jpg"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{feature.desc}</p>
                <img src={feature.img} alt={feature.title} className="w-full h-48 object-cover rounded-2xl" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Uses Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">One Cloth, <br />Infinite Uses.</h2>
              <p className="text-zinc-500 mb-8 leading-relaxed">
                Beyond your phone, Uncle Shammy is the perfect companion for all your high-touch surfaces. We've expanded our testing to ensure safety and clarity across all your gear.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Car Screens", desc: "No more fingerprints on your Tesla or infotainment system." },
                  { title: "Camera Gear", desc: "Safe for expensive lenses and delicate filters." },
                  { title: "VR Headsets", desc: "Keep your immersion clear and smudge-free." },
                  { title: "Gaming", desc: "Perfect for Nintendo Switch and Steam Deck screens." },
                  { title: "Smartwatches", desc: "Wipe away wrist oils in a single pass." },
                  { title: "Home Optics", desc: "Mirrors, glass, and smart home displays." }
                ].map((use, i) => (
                  <div key={i} className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <div className="font-bold text-sm mb-1">{use.title}</div>
                    <div className="text-xs text-zinc-400">{use.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://i.ibb.co/Xxk8gr9X/image.jpg" alt="Use Case 1" className="rounded-2xl shadow-md aspect-square object-cover" referrerPolicy="no-referrer" />
              <img src="https://i.ibb.co/ZzGWf3fT/image.jpg" alt="Use Case 2" className="rounded-2xl shadow-md aspect-[3/4] object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://i.ibb.co/4gstSn76/image.jpg" 
                alt="Uncle Shammy Pouch" 
                className="rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-6">
                <MapPin size={14} />
                <span>Utah Film Co / V.O. Digital</span>
              </div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Always with you, <br />wherever you go.</h2>
              <p className="text-zinc-500 mb-8 leading-relaxed">
                Uncle Shammy is perfect for on-the-go cleaning. Carry it in your bag, pocket, glove compartment, or wallet with ease. We bring your vision to life with high-quality video content, and we keep your view clear.
              </p>
              <ul className="space-y-4 mb-10">
                {['Efficiently wipes away spots', 'Resealable vinyl pouch', 'Perfect for action sports eyewear', 'Support local business'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-5 h-5 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                      <ChevronRight size={12} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Payment Section */}
      <section id="buy" className="py-32 bg-zinc-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[40px] border border-zinc-100 shadow-2xl overflow-hidden grid md:grid-cols-2">
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold mb-6">
                  <ShieldCheck size={14} />
                  <span>SECURE CHECKOUT</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                  Ready for <br />
                  <span className="text-zinc-300">Total Clarity?</span>
                </h2>
                <p className="text-zinc-500 mb-10 leading-relaxed">
                  Join thousands of satisfied customers. Our 3-pack ensures you have an Uncle Shammy in your car, your bag, and your home.
                </p>
                
                <div className="space-y-4 mb-12">
                  {[
                    "Free Shipping on all orders",
                    "3-Pack Premium Microfiber",
                    "Resealable Travel Pouches",
                    "100% Satisfaction Guarantee"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold">
                      <div className="w-5 h-5 bg-zinc-900 text-white rounded-full flex items-center justify-center">
                        <Zap size={10} className="fill-white" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <StripeBuyButton
                      buy-button-id="buy_btn_1T79Iz17BQzkyJwMeWniPuUp"
                      publishable-key="pk_test_51T2Uiw17BQzkyJwMBZ6h8AoT4qehe9mPf7Z9UHKYKenCgBCHeVlwBogZKrVNFu2bgMT1hLCs0VjmmMA1XdBHemOT00r43Be3c6"
                    ></StripeBuyButton>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="bg-zinc-900 p-12 md:p-20 flex flex-col justify-center text-white relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="text-6xl font-black tracking-tighter mb-4">$19.99</div>
                <div className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-8">Limited Time 3-Pack Offer</div>
                
                <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-8 flex items-center justify-center">
                  <img 
                    src="https://i.ibb.co/4gstSn76/image.jpg" 
                    alt="Uncle Shammy 3-Pack" 
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white rounded-full blur-[100px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white shadow-md">
              <Smartphone size={16} />
            </div>
            <span className="font-black tracking-tighter text-lg leading-none">UNCLE SHAMMY</span>
          </div>
          <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} UNCLE SHAMMY & E.L. NEILSON.
          </div>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            <span className="cursor-default">Secure Checkout</span>
            <span className="cursor-default">Fast Shipping</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
