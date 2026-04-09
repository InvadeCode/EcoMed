import React, { useState, useEffect } from 'react';
import { 
  HeartPulse, Stethoscope, Activity, Phone, Mail, MapPin, Search, Menu, X, 
  ChevronRight, ShieldCheck, Truck, CheckCircle2, FileText, Building2, 
  Users, ArrowRight, Upload, PhoneCall, MessageSquare, ChevronDown, Globe,
  Download, BookOpen, Award, Map, Video
} from 'lucide-react';

// --- MOCK DATA ---

const COMPANY_INFO = {
  name: "EcoMed Solutions",
  tagline: "B2B Medical Equipment & Healthcare Supply",
  phone: "+91 98765 43210",
  email: "sales@ecomedsolutions.co.in",
  whatsapp: "+91 98765 43210",
  address: "102, Healthcare Hub, Andheri East, Mumbai, MH 400069",
  gst: "27AADCM1234E1Z9",
  turnover: "₹50 - ₹100 Cr",
  experience: "15+ Years",
  legalStatus: "Private Limited Company"
};

const CATEGORIES = [
  { id: 'critical-care', name: 'Critical Care', icon: Activity },
  { id: 'hospital-furniture', name: 'Hospital Furniture', icon: Building2 },
  { id: 'rehab-aids', name: 'Rehabilitation Aids', icon: Users },
  { id: 'oxygen-therapy', name: 'Oxygen Therapy', icon: HeartPulse },
  { id: 'surgical-consumables', name: 'Surgical Consumables', icon: FileText },
  { id: 'diagnostic-devices', name: 'Diagnostic Devices', icon: Stethoscope }
];

const PRODUCTS = [
  {
    id: 'p1',
    categoryId: 'oxygen-therapy',
    name: 'OxyFlow 5L Medical Oxygen Concentrator',
    brand: 'RespCare',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=400',
    shortDesc: 'Purity: 93% ±3%, Flow Rate: 0.5-5L/min, Continuous Operation.',
    features: ['FDA Approved', '<40dB Noise Level', 'Low oxygen alarm', 'Nebulization included'],
    specs: { 'Flow Rate': '0.5-5 Liters/min', 'Purity': '93% ± 3%', 'Power': '350W', 'Weight': '15 kg', 'Warranty': '2 Years' },
    moq: '5 Units'
  },
  {
    id: 'p2',
    categoryId: 'hospital-furniture',
    name: 'Advanced 5-Function Motorized ICU Bed',
    brand: 'EcoMed Furniture',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400',
    shortDesc: 'ABS panels, CPR release, split side rails, central locking.',
    features: ['Backrest & Knee rest', 'Trendelenburg', 'Height adjustment', 'Battery Backup'],
    specs: { 'Material': 'Epoxy Coated Steel', 'Safe Load': '250 kg', 'Castors': '125mm central lock', 'Operation': 'Wired Remote' },
    moq: '2 Units'
  },
  {
    id: 'p3',
    categoryId: 'critical-care',
    name: 'VitaTrack Pro Multipara Patient Monitor',
    brand: 'LifeSign',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400',
    shortDesc: '12.1" Touch Screen, ECG, SpO2, NIBP, RESP, TEMP.',
    features: ['ST segment analysis', 'Networkable', 'Li-ion battery', 'OxyCRG for neonates'],
    specs: { 'Display': '12.1" TFT Touch', 'Parameters': 'Standard 5-Para', 'Battery Life': '4 Hours', 'Storage': '720 hours trend' },
    moq: '1 Unit'
  },
  {
    id: 'p4',
    categoryId: 'rehab-aids',
    name: 'Premium Folding Manual Wheelchair',
    brand: 'Mobilite',
    image: 'https://images.unsplash.com/photo-1581055989569-7c42730a91db?auto=format&fit=crop&q=80&w=400',
    shortDesc: 'Chrome plated frame, solid tires, washable upholstery.',
    features: ['Flip-up armrests', 'Detachable footrests', 'Anti-tippers', 'Attendant brakes'],
    specs: { 'Frame': 'Chrome Plated Steel', 'Seat Width': '18 inches', 'Capacity': '100 kg', 'Wheels': 'Solid MAG' },
    moq: '10 Units'
  }
];

const PROCESS_STEPS = [
  { title: "Browse Catalog", desc: "Select from certified medical SKUs." },
  { title: "Request Quote", desc: "Submit requirement for bulk pricing." },
  { title: "Confirm Order", desc: "Review BOQ & finalize terms." },
  { title: "Fast Delivery", desc: "Pan-India logistics & documentation." }
];

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "10,000+", label: "Products Delivered" },
  { value: "500+", label: "Hospital Partners" },
  { value: "24/7", label: "Support Available" }
];

const USP = [
  { title: "Direct OEM Sourcing", desc: "We bypass middlemen to bring you direct-from-manufacturer pricing.", icon: Search },
  { title: "Strict Compliance", desc: "All products are rigorously vetted for CE, FDA, and ISO certifications.", icon: ShieldCheck },
  { title: "Dedicated Accounts", desc: "Get a single point of contact for your entire hospital procurement.", icon: Users },
  { title: "Pan-India Logistics", desc: "Insured, fast, and safe delivery network across all Indian states.", icon: Truck }
];

const INDUSTRIES = [
  { name: "Multi-Specialty Hospitals", desc: "Complete ICU, OT, and ward setups." },
  { name: "Diagnostic Centers", desc: "Precision imaging and pathology tools." },
  { name: "Nursing Homes", desc: "Cost-effective core medical furniture." },
  { name: "Rehabilitation Clinics", desc: "Mobility and physiotherapy aids." }
];

const REVIEWS = [
  { text: "EcoMed transformed our procurement process. Reliable and perfectly compliant.", author: "Dr. A. Sharma", role: "Procurement Head" },
  { text: "Their response time for ICU bed bulk orders was unmatched. Highly recommended.", author: "S. Patel", role: "Hospital Director" },
  { text: "Genuine products and transparent pricing. The best B2B medical supplier we've used.", author: "Dr. K. Reddy", role: "Chief Surgeon" }
];

const BRANDS = ['Philips', 'GE Healthcare', 'Siemens Healthineers', 'Dräger', 'Mindray', 'Nihon Kohden'];

const REGIONAL_OFFICES = [
  { city: "Delhi NCR", address: "Sector 62, Noida, UP 201309", phone: "+91 98765 43211" },
  { city: "Bangalore", address: "Electronic City Phase 1, KA 560100", phone: "+91 98765 43212" },
  { city: "Kolkata", address: "Salt Lake Sector V, WB 700091", phone: "+91 98765 43213" }
];

const CORE_VALUES = [
  { title: "Uncompromising Quality", desc: "Every product strictly adheres to international medical standards.", icon: Award },
  { title: "Radical Transparency", desc: "Clear pricing, origin tracking, and documentation for every order.", icon: Search },
  { title: "Continuous Support", desc: "24/7 technical and warranty support for our hospital partners.", icon: HeartPulse }
];

// --- COMPONENTS ---

// 1. Navigation & Header
const Navbar = ({ navigate, onOpenQuote }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-gray-300 py-1.5 hidden md:block">
        <div className="w-full px-[5%] flex justify-between items-center text-xs font-medium">
          <div className="flex space-x-6">
            <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-blue-400" /> ISO 9001:2015</span>
            <span className="flex items-center"><Truck className="w-3.5 h-3.5 mr-1.5 text-blue-400" /> Pan-India Supply</span>
          </div>
          <div className="flex space-x-6">
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
            <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full px-[5%] h-16 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('home')}>
          <img 
            src="https://5.imimg.com/data5/SELLER/Logo/2025/1/484689701/IV/JM/GC/74917398/ecomed-logo-page-0001-90x90.jpg" 
            alt="EcoMed" 
            className="h-8 w-8 object-contain mr-2"
          />
          <span className="text-xl font-bold text-slate-900 tracking-tight">EcoMed<span className="text-blue-600">.</span></span>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <input 
            type="text" 
            placeholder="Search products, categories..." 
            className="w-full pl-4 pr-10 py-1.5 bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 rounded-md outline-none text-sm transition-colors"
          />
          <Search className="absolute right-3 top-2 text-gray-400 w-4 h-4" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <button onClick={() => navigate('home')} className="text-slate-600 hover:text-blue-600 transition-colors">Home</button>
          <div className="relative group">
            <button onClick={() => navigate('category', CATEGORIES[0].id)} className="text-slate-600 hover:text-blue-600 flex items-center transition-colors">
              Products <ChevronDown className="w-3.5 h-3.5 ml-1" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 shadow-lg rounded-md p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {CATEGORIES.slice(0, 5).map(cat => (
                <button key={cat.id} onClick={() => navigate('category', cat.id)} className="block w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-gray-50 hover:text-blue-600 rounded-sm">
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => navigate('about')} className="text-slate-600 hover:text-blue-600 transition-colors">About</button>
          <button onClick={() => navigate('contact')} className="text-slate-600 hover:text-blue-600 transition-colors">Contact</button>
          
          <button onClick={onOpenQuote} className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-semibold transition-colors flex items-center shadow-sm">
            Get Quote
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 p-4 flex flex-col space-y-2 px-[5%] shadow-lg">
          <input type="text" placeholder="Search..." className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md outline-none text-sm mb-2" />
          <button onClick={() => { navigate('home'); setIsMobileMenuOpen(false); }} className="text-left text-sm font-medium py-2">Home</button>
          <button onClick={() => { navigate('category', CATEGORIES[0].id); setIsMobileMenuOpen(false); }} className="text-left text-sm font-medium py-2">All Products</button>
          <button onClick={() => { navigate('about'); setIsMobileMenuOpen(false); }} className="text-left text-sm font-medium py-2">About Us</button>
          <button onClick={() => { navigate('contact'); setIsMobileMenuOpen(false); }} className="text-left text-sm font-medium py-2">Contact</button>
          <button onClick={() => { onOpenQuote(); setIsMobileMenuOpen(false); }} className="bg-red-600 text-white py-2 rounded-md font-semibold text-sm mt-2">Get Quote</button>
        </div>
      )}
    </header>
  );
};

// 2. Quote Modal
const QuoteModal = ({ isOpen, onClose, productContext = null }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Request Quote</h3>
            {productContext && <p className="text-xs text-blue-600 font-medium mt-0.5">Ref: {productContext.name}</p>}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-800 transition-colors"><X className="w-5 h-5" /></button>
        </div>
        <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Request Sent.'); onClose(); }}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
              <input required type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Organization</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Phone *</label>
              <input required type="tel" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Requirement Details *</label>
            <textarea required rows={3} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none" />
          </div>
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-md transition-colors text-sm">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

// 3. Views

const HomeView = ({ navigate, onOpenQuote }) => (
  <div className="animate-in fade-in duration-500">
    {/* 1. Minimal Hero */}
    <section className="bg-white pt-20 pb-16 md:pt-32 md:pb-24 border-b border-gray-100">
      <div className="w-full px-[5%] flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-[1.05] mb-6">
            Smarter B2B <br/> medical supply.
          </h1>
          <p className="text-lg text-gray-500 max-w-md mb-10 leading-relaxed font-medium">
            Equipping healthcare institutions with premium, certified medical infrastructure. Direct sourcing, zero clutter.
          </p>
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <button onClick={() => onOpenQuote()} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded text-sm font-semibold transition-colors">
              Get a Quote
            </button>
            <button onClick={() => navigate('category', CATEGORIES[0].id)} className="text-slate-900 text-sm font-bold hover:text-blue-600 transition-colors flex items-center group">
              Explore Catalog <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
            {STATS.map((stat, idx) => (
              <div key={idx}>
                <p className="text-2xl font-bold text-slate-900 mb-0.5">{stat.value}</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="aspect-[4/3] w-full overflow-hidden rounded bg-gray-50 border border-gray-100">
            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" alt="Medical Supply" className="w-full h-full object-cover opacity-90" />
          </div>
        </div>
      </div>
    </section>

    {/* 2. Logos / Trust */}
    <div className="bg-gray-50 py-10 border-b border-gray-200">
      <div className="w-full px-[5%] flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center md:text-left whitespace-nowrap">Supplying India's Leading Institutions</p>
        <div className="flex flex-wrap justify-center md:justify-end w-full gap-8 md:gap-16 grayscale opacity-50">
          {['Apollo', 'Fortis', 'Max Healthcare', 'Care Hospitals', 'AIIMS'].map((brand, i) => (
             <span key={i} className="text-lg md:text-xl font-bold text-slate-900">{brand}</span>
          ))}
        </div>
      </div>
    </div>

    {/* 4. Categories */}
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="w-full px-[5%]">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Categories</h2>
          <button onClick={() => navigate('category', CATEGORIES[0].id)} className="text-blue-600 text-sm font-semibold hover:underline flex items-center">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} onClick={() => navigate('category', cat.id)} className="cursor-pointer border border-gray-200 rounded-lg p-8 text-center hover:border-blue-500 transition-colors bg-white group">
                <Icon className="w-7 h-7 mx-auto mb-4 text-slate-600 group-hover:text-blue-600 transition-colors" />
                <h3 className="font-semibold text-slate-900 text-sm leading-tight">{cat.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* 5. Why Choose Us (USPs) */}
    <section className="py-24 bg-gray-50 border-b border-gray-200">
      <div className="w-full px-[5%]">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">The EcoMed Advantage</h2>
          <p className="text-gray-500 text-lg">We eliminate the complexity of B2B healthcare procurement.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {USP.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
              <item.icon className="w-6 h-6 text-blue-600 mb-6" />
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 6. Featured Products */}
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="w-full px-[5%]">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Featured Products</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map(product => (
            <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col hover:border-blue-300 transition-colors">
              <div className="h-56 bg-gray-100 cursor-pointer border-b border-gray-100" onClick={() => navigate('product', product.id)}>
                <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-2">{product.brand}</span>
                <h3 className="font-semibold text-slate-900 text-sm mb-4 cursor-pointer hover:text-blue-600 leading-tight" onClick={() => navigate('product', product.id)}>{product.name}</h3>
                
                <div className="mt-auto">
                  <div className="text-xs text-slate-700 bg-gray-50 px-3 py-2 rounded mb-4 font-medium border border-gray-100">
                    MOQ: {product.moq}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => navigate('product', product.id)} className="w-full py-2.5 text-xs font-semibold text-slate-700 border border-gray-300 rounded hover:bg-gray-50">
                      Specs
                    </button>
                    <button onClick={() => onOpenQuote({ name: product.name })} className="w-full py-2.5 text-xs font-semibold text-white bg-slate-900 rounded hover:bg-red-600 transition-colors">
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 7. Industries Served */}
    <section className="py-24 bg-slate-900 text-white">
      <div className="w-full px-[5%]">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Industries We Serve</h2>
          <p className="text-gray-400 text-lg">Tailored supply chain solutions for specific healthcare segments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, idx) => (
            <div key={idx} className="p-6 border border-slate-700 rounded-lg hover:border-blue-500 transition-colors bg-slate-800/30">
              <h3 className="font-bold text-white mb-2">{ind.name}</h3>
              <p className="text-sm text-gray-400">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 8. Process & Info Strip */}
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="w-full px-[5%] grid grid-cols-1 md:grid-cols-4 gap-12">
        {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col">
              <p className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">Step 0{idx + 1}</p>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
        ))}
      </div>
    </section>

    {/* 9. Compliance & Certifications */}
    <section className="py-12 bg-gray-50 border-b border-gray-200">
       <div className="w-full px-[5%] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-sm font-bold text-slate-700 uppercase tracking-widest">
         <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-600" /> ISO 13485:2016</span>
         <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-600" /> CE Marked Products</span>
         <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-600" /> FDA Approved</span>
         <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-600" /> GMP Certified</span>
       </div>
    </section>

    {/* 10. Testimonials */}
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="w-full px-[5%]">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-12 text-center">Client Trust</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-lg border border-gray-200 flex flex-col">
              <div className="mb-6 text-gray-300">
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/></svg>
              </div>
              <p className="text-slate-700 text-sm font-medium leading-relaxed mb-8 flex-grow">"{review.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{review.author}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 10.5 Trusted Brands (NEW) */}
    <section className="py-16 bg-gray-50 border-b border-gray-200 overflow-hidden">
      <div className="w-full px-[5%] text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Authorized Distributor For</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
          {BRANDS.map((brand, idx) => (
            <span key={idx} className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">{brand}</span>
          ))}
        </div>
      </div>
    </section>

    {/* 10.6 Newsletter/Insights (NEW) */}
    <section className="py-24 bg-blue-600 text-white">
      <div className="w-full px-[5%] max-w-4xl mx-auto text-center">
        <BookOpen className="w-12 h-12 mx-auto mb-6 text-blue-200" />
        <h2 className="text-3xl font-bold mb-4">Stay Updated with Healthcare Procurement Trends</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join 5,000+ hospital administrators and procurement heads receiving our monthly insights on medical equipment supply chains and compliance updates.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
          <input type="email" placeholder="Your Work Email" className="flex-1 px-4 py-3 rounded-md text-slate-900 outline-none" required />
          <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-md font-bold transition-colors">Subscribe</button>
        </form>
      </div>
    </section>

    {/* 11. Form & Profile */}
    <section className="py-24 bg-slate-900 text-white">
      <div className="w-full px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Corporate Procurement</h2>
          <p className="text-gray-400 mb-10 text-sm max-w-md leading-relaxed">
            Streamline your supply chain. We provide compliant documentation, wholesale pricing, and direct OEM sourcing.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 text-sm">
            <div className="border-l-2 border-blue-600 pl-4">
              <p className="text-gray-500 mb-1 uppercase text-xs tracking-wider font-bold">Status</p>
              <p className="font-semibold text-lg">{COMPANY_INFO.legalStatus}</p>
            </div>
            <div className="border-l-2 border-blue-600 pl-4">
              <p className="text-gray-500 mb-1 uppercase text-xs tracking-wider font-bold">GST/PAN</p>
              <p className="font-semibold text-lg">{COMPANY_INFO.gst}</p>
            </div>
            <div className="border-l-2 border-blue-600 pl-4">
              <p className="text-gray-500 mb-1 uppercase text-xs tracking-wider font-bold">Experience</p>
              <p className="font-semibold text-lg">{COMPANY_INFO.experience}</p>
            </div>
            <div className="border-l-2 border-blue-600 pl-4">
              <p className="text-gray-500 mb-1 uppercase text-xs tracking-wider font-bold">Turnover</p>
              <p className="font-semibold text-lg">{COMPANY_INFO.turnover}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 lg:p-10 text-slate-900">
          <h3 className="text-2xl font-bold mb-6 tracking-tight">Quick Enquiry</h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name / Hospital" className="w-full border-b border-gray-300 py-2.5 text-sm focus:border-blue-600 outline-none transition-colors" />
            <input type="tel" placeholder="Mobile Number" className="w-full border-b border-gray-300 py-2.5 text-sm focus:border-blue-600 outline-none transition-colors" />
            <textarea rows={3} placeholder="Requirements" className="w-full border-b border-gray-300 py-2.5 text-sm focus:border-blue-600 outline-none resize-none transition-colors"></textarea>
            <button className="w-full bg-red-600 text-white font-bold py-3.5 rounded text-sm hover:bg-red-700 transition-colors mt-2">
              Send Requirement
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
);

const CategoryView = ({ categoryId, navigate, onOpenQuote }) => {
  const category = CATEGORIES.find(c => c.id === categoryId) || CATEGORIES[0];
  const products = PRODUCTS.filter(p => p.categoryId === category.id);

  return (
    <div className="bg-gray-50 min-h-screen py-10 animate-in fade-in">
      <div className="w-full px-[5%]">
        {/* Breadcrumb */}
        <div className="flex items-center text-xs font-semibold text-gray-500 mb-8 uppercase tracking-wider">
          <button onClick={() => navigate('home')} className="hover:text-blue-600">Home</button>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-slate-900">{category.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h3 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-widest border-b border-gray-100 pb-3">Categories</h3>
              <ul className="space-y-1">
                {CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => navigate('category', cat.id)}
                      className={`text-sm w-full text-left px-3 py-2.5 rounded transition-colors ${cat.id === categoryId ? 'bg-blue-50 text-blue-700 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <button onClick={() => onOpenQuote()} className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold py-3.5 rounded-lg flex items-center justify-center transition-colors">
              <Upload className="w-4 h-4 mr-2" /> Upload BOQ List
            </button>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{category.name}</h1>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed max-w-3xl">
                Industrial-grade {category.name.toLowerCase()} sourced from verified OEMs. All equipment strictly complies with national healthcare standards. Enquire for exact B2B bulk pricing and customization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.length > 0 ? products.map(product => (
                <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col hover:border-blue-300 transition-colors">
                  <div className="h-56 bg-gray-100 cursor-pointer border-b border-gray-100" onClick={() => navigate('product', product.id)}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-2">{product.brand}</span>
                    <h3 className="font-semibold text-slate-900 text-sm mb-4 cursor-pointer hover:text-blue-600" onClick={() => navigate('product', product.id)}>{product.name}</h3>
                    <div className="mt-auto space-y-4">
                      <div className="text-xs text-gray-600 flex justify-between bg-gray-50 px-3 py-2 rounded border border-gray-100">
                        <span>Min. Order</span>
                        <span className="font-bold text-slate-900">{product.moq}</span>
                      </div>
                      <div className="flex gap-2">
                         <button onClick={() => navigate('product', product.id)} className="flex-1 py-2.5 text-xs font-bold text-slate-700 bg-white border border-gray-300 rounded hover:bg-gray-50">Specs</button>
                         <button onClick={() => onOpenQuote({ name: product.name })} className="flex-1 py-2.5 text-xs font-bold text-white bg-red-600 rounded hover:bg-red-700">Get Quote</button>
                      </div>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="col-span-full bg-white p-16 text-center rounded-lg border border-gray-200">
                  <p className="text-gray-500 text-sm font-medium">Catalog currently updating. Send an enquiry for this category.</p>
                </div>
              )}
            </div>

            {/* Category FAQ Component */}
            <div className="mt-16 bg-white p-8 rounded-lg border border-gray-200">
               <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
               <div className="space-y-4">
                 <div className="border-b border-gray-100 pb-4">
                   <p className="font-bold text-sm text-slate-900 mb-1">What is the delivery timeline for {category.name.toLowerCase()}?</p>
                   <p className="text-xs text-gray-500">Standard delivery takes 3-7 business days across India. Bulk manufacturing orders may take 2-4 weeks.</p>
                 </div>
                 <div className="pb-2">
                   <p className="font-bold text-sm text-slate-900 mb-1">Are compliance documents provided?</p>
                   <p className="text-xs text-gray-500">Yes, all products come with CE, FDA, or ISO certifications along with necessary GST billing and e-way bills.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductView = ({ productId, navigate, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState('specs');
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  const category = CATEGORIES.find(c => c.id === product.categoryId);
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white min-h-screen py-10 animate-in fade-in pb-24">
      <div className="w-full px-[5%] max-w-7xl mx-auto">
        <div className="flex items-center text-xs font-semibold text-gray-500 mb-8 uppercase tracking-wider">
          <button onClick={() => navigate('home')} className="hover:text-blue-600">Home</button>
          <ChevronRight className="w-3 h-3 mx-2" />
          <button onClick={() => navigate('category', category.id)} className="hover:text-blue-600">{category?.name}</button>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-slate-900 truncate">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-10 flex items-center justify-center aspect-square md:aspect-auto">
            <img src={product.image} alt={product.name} className="max-w-full h-auto mix-blend-multiply" />
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">{product.brand}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">{product.name}</h1>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">{product.shortDesc}</p>

            <div className="flex flex-wrap gap-8 mb-10 border-y border-gray-100 py-6">
              <div>
                <p className="text-xs uppercase font-bold text-gray-400 mb-1">Pricing Base</p>
                <p className="text-xl font-bold text-slate-900">Price on Request</p>
              </div>
              <div className="border-l border-gray-200 pl-8">
                <p className="text-xs uppercase font-bold text-gray-400 mb-1">Minimum Order</p>
                <p className="text-xl font-bold text-slate-900">{product.moq}</p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wider">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />{feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-auto pt-4">
              <button onClick={() => onOpenQuote(product)} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded text-sm transition-colors shadow-sm">
                Request Formal Quote
              </button>
              <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="px-8 bg-white border border-gray-300 hover:bg-gray-50 text-slate-800 font-bold py-3.5 rounded text-sm transition-colors flex items-center shadow-sm">
                 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Tabs Area */}
        <div className="mt-20 pt-4">
          <div className="flex border-b border-gray-200 gap-10 overflow-x-auto whitespace-nowrap">
            <button onClick={() => setActiveTab('specs')} className={`pb-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'specs' ? 'border-b-2 border-slate-900 text-slate-900' : 'text-gray-400 hover:text-gray-600'}`}>Specifications</button>
            <button onClick={() => setActiveTab('compliance')} className={`pb-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'compliance' ? 'border-b-2 border-slate-900 text-slate-900' : 'text-gray-400 hover:text-gray-600'}`}>Compliance Details</button>
            <button onClick={() => setActiveTab('resources')} className={`pb-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'resources' ? 'border-b-2 border-slate-900 text-slate-900' : 'text-gray-400 hover:text-gray-600'}`}>Downloads & Resources</button>
          </div>
          
          <div className="pt-10 min-h-[200px]">
             {activeTab === 'specs' && (
                <div className="border border-gray-200 rounded-lg overflow-hidden max-w-4xl">
                  <table className="w-full text-left text-sm">
                    <tbody>
                      {Object.entries(product.specs).map(([key, value], idx) => (
                        <tr key={key} className={`border-b border-gray-100 last:border-0 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                          <th className="py-4 px-6 font-bold text-slate-800 w-1/3 border-r border-gray-100">{key}</th>
                          <td className="py-4 px-6 text-gray-700 font-medium">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             )}
             {activeTab === 'compliance' && (
                <div className="max-w-2xl">
                   <p className="text-sm text-gray-600 mb-4 leading-relaxed">This equipment strictly adheres to national and international healthcare standards. Below are the standard compliance checks applied before dispatch.</p>
                   <ul className="space-y-3">
                     <li className="flex items-center text-sm text-gray-800 font-semibold"><CheckCircle2 className="w-4 h-4 text-blue-600 mr-2"/> ISO 13485:2016 Certified Facility</li>
                     <li className="flex items-center text-sm text-gray-800 font-semibold"><CheckCircle2 className="w-4 h-4 text-blue-600 mr-2"/> Pre-dispatch Quality Inspection (PQI) Passed</li>
                     <li className="flex items-center text-sm text-gray-800 font-semibold"><CheckCircle2 className="w-4 h-4 text-blue-600 mr-2"/> GST and E-Way Bill compliant billing</li>
                   </ul>
                </div>
             )}
             {activeTab === 'resources' && (
                <div className="max-w-2xl">
                   <p className="text-sm text-gray-600 mb-6 leading-relaxed">Download technical brochures, user manuals, and detailed compliance certificates.</p>
                   <div className="space-y-4">
                     <button className="w-full flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded hover:border-blue-500 transition-colors group">
                       <div className="flex items-center">
                         <FileText className="w-5 h-5 text-red-500 mr-4" />
                         <span className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">Technical Brochure PDF</span>
                       </div>
                       <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                     </button>
                     <button className="w-full flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded hover:border-blue-500 transition-colors group">
                       <div className="flex items-center">
                         <FileText className="w-5 h-5 text-gray-500 mr-4" />
                         <span className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">User Manual & Installation Guide</span>
                       </div>
                       <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                     </button>
                     <button className="w-full flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded hover:border-blue-500 transition-colors group">
                       <div className="flex items-center">
                         <Video className="w-5 h-5 text-blue-500 mr-4" />
                         <span className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">Product Demo & Walkthrough Video</span>
                       </div>
                       <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                     </button>
                   </div>
                </div>
             )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24 pt-16 border-t border-gray-200">
           <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">You May Also Need</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {relatedProducts.map(relProduct => (
                <div key={relProduct.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col group cursor-pointer hover:border-blue-400" onClick={() => {navigate('product', relProduct.id); window.scrollTo(0,0);}}>
                  <div className="h-40 bg-gray-50 border-b border-gray-100 p-4 flex items-center justify-center">
                    <img src={relProduct.image} alt={relProduct.name} className="max-h-full mix-blend-multiply group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{relProduct.brand}</p>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{relProduct.name}</h4>
                  </div>
                </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

const AboutContactView = ({ view, onOpenQuote }) => (
  <div className="bg-white min-h-screen animate-in fade-in pb-24">
    <div className="bg-slate-900 py-20 text-center text-white border-b-4 border-blue-600">
      <h1 className="text-4xl font-bold mb-4 tracking-tight">{view === 'about' ? 'Corporate Profile' : 'Contact Us'}</h1>
      <p className="text-gray-400 text-base max-w-xl mx-auto">
        {view === 'about' ? 'Building reliable medical supply chains across India through transparency and compliance.' : 'Get in touch with our dedicated procurement, support, and sales teams.'}
      </p>
    </div>

    <div className="w-full px-[5%] py-16 max-w-6xl mx-auto">
      {view === 'about' ? (
        <div className="space-y-20">
          {/* Intro Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed font-medium">
                <strong className="text-slate-900">EcoMed Solutions</strong> is a premier distributor of critical care equipment, hospital furniture, and surgical consumables. With over a decade of domain expertise, we serve as the critical link between top-tier medical manufacturers and healthcare providers across India.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                We focus strictly on the B2B supply chain, ensuring that hospitals, diagnostic centers, and clinics receive certified equipment at wholesale pricing, backed by complete documentation and post-sales support.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-6 text-lg tracking-tight border-b border-gray-200 pb-3">Company Snapshot</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between"><span className="text-gray-500 font-semibold uppercase tracking-wider text-xs">Legal Status</span><span className="font-bold text-slate-900">{COMPANY_INFO.legalStatus}</span></div>
                <div className="flex justify-between"><span className="text-gray-500 font-semibold uppercase tracking-wider text-xs">GST Number</span><span className="font-bold text-slate-900">{COMPANY_INFO.gst}</span></div>
                <div className="flex justify-between"><span className="text-gray-500 font-semibold uppercase tracking-wider text-xs">Turnover</span><span className="font-bold text-slate-900">{COMPANY_INFO.turnover}</span></div>
                <div className="flex justify-between"><span className="text-gray-500 font-semibold uppercase tracking-wider text-xs">Headquarters</span><span className="font-bold text-slate-900">Mumbai, India</span></div>
              </div>
            </div>
          </div>

          {/* Mission / Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-10 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center"><Activity className="w-6 h-6 mr-3 text-blue-500"/> Our Mission</h3>
              <p className="text-gray-400 leading-relaxed text-sm font-medium">To democratize access to high-quality, compliant medical infrastructure for healthcare facilities of all sizes, ensuring uncompromised patient care through a reliable supply chain.</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 p-10 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center"><Globe className="w-6 h-6 mr-3 text-blue-600"/> Infrastructure & Reach</h3>
              <p className="text-slate-700 leading-relaxed text-sm font-medium">Operating from our central hub in Mumbai, we utilize a network of modern warehousing facilities and logistics partners to guarantee safe, insured, and rapid delivery to every state in India.</p>
            </div>
          </div>

          {/* Core Values */}
          <div className="pt-12 border-t border-gray-100">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-10 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CORE_VALUES.map((val, idx) => (
                <div key={idx} className="text-center p-6">
                  <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                    <val.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{val.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-xs text-blue-600">Head Office</h4>
              <p className="text-gray-700 font-medium">{COMPANY_INFO.address}</p>
            </div>
            
            <div className="border-t border-gray-100 pt-6">
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-xs text-blue-600">Department Contacts</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold text-slate-900">Sales & Procurement</p>
                  <p className="text-gray-600">sales@ecomedsolutions.co.in</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Support & Service</p>
                  <p className="text-gray-600">support@ecomedsolutions.co.in</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-xs text-blue-600">Regional Offices</h4>
              <div className="space-y-6 text-sm">
                {REGIONAL_OFFICES.map((office, idx) => (
                  <div key={idx}>
                    <p className="font-bold text-slate-900 flex items-center"><Map className="w-3.5 h-3.5 mr-2 text-gray-400" /> {office.city}</p>
                    <p className="text-gray-600 mt-1 pl-5.5">{office.address}</p>
                    <p className="text-gray-500 mt-1 pl-5.5">{office.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2 text-sm">Business Hours</h4>
              <p className="text-gray-600 text-sm font-medium">Mon - Sat: 9:30 AM - 6:30 PM <br/> Sunday: Closed</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form className="space-y-6 bg-white border border-gray-200 p-8 md:p-10 rounded-lg shadow-sm" onSubmit={(e) => { e.preventDefault(); alert("Enquiry Submitted Successfully"); }}>
               <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Send a Direct Message</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                   <input type="text" className="w-full border border-gray-300 rounded px-4 py-3 text-sm outline-none focus:border-blue-600 transition-colors" required />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Organization</label>
                   <input type="text" className="w-full border border-gray-300 rounded px-4 py-3 text-sm outline-none focus:border-blue-600 transition-colors" />
                 </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number *</label>
                   <input type="tel" className="w-full border border-gray-300 rounded px-4 py-3 text-sm outline-none focus:border-blue-600 transition-colors" required />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                   <input type="email" className="w-full border border-gray-300 rounded px-4 py-3 text-sm outline-none focus:border-blue-600 transition-colors" required />
                 </div>
               </div>
               <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">How can we assist you? *</label>
                 <textarea rows={5} className="w-full border border-gray-300 rounded px-4 py-3 text-sm outline-none focus:border-blue-600 transition-colors resize-none" required></textarea>
               </div>
               <button type="submit" className="bg-red-600 text-white font-bold py-3.5 px-8 rounded text-sm hover:bg-red-700 transition-colors">
                 Submit Enquiry
               </button>
            </form>
          </div>
        </div>
      )}
    </div>
  </div>
);

const Footer = ({ navigate }) => (
  <footer className="bg-white border-t border-gray-200 pt-12 pb-24 lg:pb-8 text-sm">
    <div className="w-full px-[5%] grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">EcoMed<span className="text-blue-600">.</span></h2>
        <p className="text-gray-500 mb-4">{COMPANY_INFO.tagline}</p>
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-4">Categories</h4>
        <ul className="space-y-2 text-gray-600">
          {CATEGORIES.slice(0, 4).map(cat => (
            <li key={cat.id}><button onClick={() => navigate('category', cat.id)} className="hover:text-blue-600">{cat.name}</button></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-4">Company</h4>
        <ul className="space-y-2 text-gray-600">
          <li><button onClick={() => navigate('about')} className="hover:text-blue-600">About Us</button></li>
          <li><button onClick={() => navigate('contact')} className="hover:text-blue-600">Contact</button></li>
          <li><button className="hover:text-blue-600">Privacy Policy</button></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
        <ul className="space-y-2 text-gray-600">
          <li>{COMPANY_INFO.phone}</li>
          <li>{COMPANY_INFO.email}</li>
        </ul>
      </div>
    </div>
    <div className="w-full px-[5%] pt-6 border-t border-gray-100 text-xs text-gray-400 flex justify-between">
      <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}.</p>
      <p>B2B Healthcare Supply</p>
    </div>
  </footer>
);

// Mobile Sticky Bar
const MobileStickyBar = ({ onOpenQuote }) => (
  <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-2 z-40 flex gap-2">
    <a href={`tel:${COMPANY_INFO.phone}`} className="flex-1 bg-gray-50 rounded border border-gray-200 flex flex-col items-center py-2 text-gray-700">
      <PhoneCall className="w-4 h-4 mb-0.5" /> <span className="text-[10px] font-bold">Call</span>
    </a>
    <div className="flex-[2]">
      <button onClick={() => onOpenQuote()} className="w-full h-full bg-red-600 text-white font-bold rounded text-sm flex items-center justify-center">
        Get Quote
      </button>
    </div>
  </div>
);

// --- MAIN APP ---

export default function App() {
  const [route, setRoute] = useState({ page: 'home', id: null });
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteContext, setQuoteContext] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [route]);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const navigate = (page, id = null) => setRoute({ page, id });
  const handleOpenQuote = (context = null) => { setQuoteContext(context); setIsQuoteModalOpen(true); };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar navigate={navigate} onOpenQuote={handleOpenQuote} />
      <main className="w-full">
        {route.page === 'home' && <HomeView navigate={navigate} onOpenQuote={handleOpenQuote} />}
        {route.page === 'category' && <CategoryView categoryId={route.id} navigate={navigate} onOpenQuote={handleOpenQuote} />}
        {route.page === 'product' && <ProductView productId={route.id} navigate={navigate} onOpenQuote={handleOpenQuote} />}
        {route.page === 'about' && <AboutContactView view="about" onOpenQuote={handleOpenQuote} />}
        {route.page === 'contact' && <AboutContactView view="contact" onOpenQuote={handleOpenQuote} />}
      </main>
      <Footer navigate={navigate} />
      <MobileStickyBar onOpenQuote={handleOpenQuote} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} productContext={quoteContext} />
    </div>
  );
}