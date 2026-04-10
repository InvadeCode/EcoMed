import React, { useState, useEffect, useRef } from 'react';
import { 
  HeartPulse, Stethoscope, Activity, Phone, Mail, MapPin, Search, Menu, X, 
  ChevronRight, ShieldCheck, Truck, CheckCircle2, FileText, Building2, 
  Users, ArrowRight, Upload, PhoneCall, MessageSquare, ChevronDown, Globe,
  Download, BookOpen, Award, Map, Video, ArrowUpRight, BadgeCheck, Check, Star, ArrowUp
} from 'lucide-react';

// --- CUSTOM ANIMATION COMPONENT ---
const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    }, { threshold: 0.1 });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const baseTranslate = direction === "up" ? "translate-y-12" : direction === "left" ? "-translate-x-12" : direction === "right" ? "translate-x-12" : "translate-y-0";
  
  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${baseTranslate}`} ${className}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- ECOMED SOLUTIONS REAL DATA ---

const COMPANY_INFO = {
  name: "Ecomed Solutions",
  tagline: "IndiaMART TrustSeal Verified Medical Supplier",
  phone: "08043853505",
  email: "contact@ecomedsolutions.co.in",
  whatsapp: "918043853505",
  address: "Fld3/B403, Sn44a, Vardhaman Township, Sasane Nagar, Hadapsar, Pune - 411028, Maharashtra, India",
  gst: "27BOBPM6383J1ZJ",
  turnover: "₹10 - ₹25 Cr",
  experience: "15+ Years",
  legalStatus: "Proprietorship (Neeta Wani)",
  certification: "IndiaMART TrustSeal Verified"
};

const CATEGORIES = [
  { id: 'oxygen-therapy', name: 'Oxygen Concentrators', icon: HeartPulse },
  { id: 'hospital-furniture', name: 'Hospital Furniture', icon: Building2 },
  { id: 'diagnostic-devices', name: 'Diagnostic Equipment', icon: Stethoscope },
  { id: 'pharma-injections', name: 'Pharma Injections', icon: Activity },
  { id: 'rehab-aids', name: 'Rehabilitation Aids', icon: Users },
  { id: 'surgical-consumables', name: 'Surgical Consumables', icon: FileText }
];

const PRODUCTS = [
  {
    id: 'p1',
    categoryId: 'oxygen-therapy',
    name: 'Medtech Oxygen Concentrator (5L/10L)',
    brand: 'Medtech Life',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', // Mocking additional angles
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'High purity continuous oxygen supply. Trusted by leading hospitals.',
    features: ['93% ± 3% Oxygen Purity', 'Low Noise Operation', 'Nebulizer Function Included', 'CE Certified'],
    specs: { 'Capacity': '5L - 10L Options', 'Purity': '93% ± 3%', 'Type': 'Portable / Stationary', 'Warranty': '2 Years' },
    moq: '1 Unit'
  },
  {
    id: 'p2',
    categoryId: 'hospital-furniture',
    name: 'Semi Fowler Bed With Side Rails',
    brand: 'Ecomed Solutions',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581055989569-7c42730a91db?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Durable epoxy-coated steel hospital bed with adjustable backrest.',
    features: ['Collapsible Side Rails', 'Heavy Duty IV Pole', 'Smooth Crank Mechanism', 'Lockable Castors'],
    specs: { 'Material': 'Epoxy Coated Mild Steel', 'Adjustment': 'Manual Backrest', 'Safe Load': '150 kg', 'Wheels': '125mm Dia' },
    moq: '5 Units'
  },
  {
    id: 'p3',
    categoryId: 'diagnostic-devices',
    name: 'Poct Gluco Spot Glucometer (With 25 Strips)',
    brand: 'POCT Services',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Accurate and rapid blood glucose monitoring system for clinical & home use.',
    features: ['Results in 5 Seconds', 'Auto Coding', 'Tiny Blood Sample', 'Large LCD Display'],
    specs: { 'Testing Time': '5 Seconds', 'Sample Volume': '0.5 µL', 'Memory': '500 Test Results', 'Kit Includes': 'Meter + 25 Strips' },
    moq: '20 Pieces'
  },
  {
    id: 'p4',
    categoryId: 'hospital-furniture',
    name: 'Gynec Examination Table',
    brand: 'Ecomed Solutions',
    image: 'https://images.unsplash.com/photo-1581055989569-7c42730a91db?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1581055989569-7c42730a91db?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Premium upholstered examination table with lithotomy poles.',
    features: ['Lithotomy Crutches', 'Adjustable Backrest', 'Stainless Steel Bowl', 'High-Density Foam'],
    specs: { 'Frame': 'Tubular Steel Frame', 'Top': 'Two Section Cushioned', 'Finish': 'Pre-treated & Epoxy Powder Coated', 'Load': '120 kg' },
    moq: '2 Pieces'
  }
];

const PROCESS_STEPS = [
  { title: "Browse Catalog", desc: "Select from our verified range of medical equipment." },
  { title: "Request Quote", desc: "Submit requirement for B2B wholesale pricing." },
  { title: "Secure Order", desc: "Finalize terms with completely transparent documentation." },
  { title: "Fast Dispatch", desc: "Insured Pan-India delivery from our Pune headquarters." }
];

const STATS = [
  { value: "15+", label: "YEARS EXPERIENCE" },
  { value: "10,000+", label: "PRODUCTS DELIVERED" },
  { value: "500+", label: "HOSPITAL PARTNERS" },
  { value: "24/7", label: "SUPPORT AVAILABLE" }
];

const USP = [
  { title: "IndiaMART TrustSeal", desc: "We are a verified supplier passing rigorous credibility and trust checks.", icon: BadgeCheck },
  { title: "Direct Distribution", desc: "Wholesale pricing directly sourced from premium medical OEMs.", icon: Search },
  { title: "Strict Compliance", desc: "All dispatches include proper GST billing, E-Way bills, and quality certificates.", icon: ShieldCheck },
  { title: "Pan-India Logistics", desc: "Swift, safe, and insured delivery network operating directly from Pune, MH.", icon: Truck }
];

const REVIEWS = [
  { text: "Ecomed Solutions provided excellent Semi Fowler beds for our new ward. Pricing was highly competitive and delivery to Mumbai was swift.", author: "Dr. A. Sharma", role: "Hospital Administrator" },
  { text: "We consistently procure our POC Oxygen Concentrators from them. Reliable stock availability and 100% genuine products.", author: "S. Patel", role: "Procurement Head" },
  { text: "The TrustSeal badge gave us confidence, but their post-sales support proved they are the best B2B medical supplier in Maharashtra.", author: "Dr. K. Reddy", role: "Clinic Director" }
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

// Toast Notification Component
const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-[200] animate-in slide-in-from-right-8 fade-in duration-300">
      <div className={`flex items-center px-4 py-3 rounded-lg shadow-lg border ${type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-blue-50 border-blue-200 text-blue-800'}`}>
        {type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />}
        <p className="font-semibold text-sm mr-4">{message}</p>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X className="w-4 h-4" /></button>
      </div>
    </div>
  );
};

// 1. Navigation & Header
const Navbar = ({ navigate, onOpenQuote }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Smart Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live Search Logic
  const searchResults = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 4);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-200' : 'bg-white/90 backdrop-blur-md border-b border-gray-200'}`}>
      {/* Top Bar - Social Proof (Hides on Scroll) */}
      <div className={`bg-slate-900 text-gray-300 overflow-hidden transition-all duration-300 hidden md:block ${isScrolled ? 'h-0 py-0 opacity-0' : 'h-auto py-2 opacity-100'}`}>
        <div className="w-full max-w-7xl mx-auto px-[5%] flex justify-between items-center text-[11px] font-bold tracking-widest uppercase">
          <div className="flex space-x-6">
            <span className="flex items-center text-emerald-400"><BadgeCheck className="w-4 h-4 mr-1.5" /> IndiaMART TrustSeal Verified</span>
            <span className="flex items-center"><Truck className="w-4 h-4 mr-1.5 text-blue-400" /> Pan-India Fulfillment</span>
          </div>
          <div className="flex space-x-6">
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors duration-300 flex items-center"><Mail className="w-3.5 h-3.5 mr-1.5"/> Email Us</a>
            <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors duration-300 flex items-center"><Phone className="w-3.5 h-3.5 mr-1.5"/> {COMPANY_INFO.phone}</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full max-w-7xl mx-auto px-[5%] flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
        <div className="flex items-center cursor-pointer group" onClick={() => navigate('home')}>
          <img 
            src="https://5.imimg.com/data5/SELLER/Logo/2025/1/484689701/IV/JM/GC/74917398/ecomed-logo-page-0001-90x90.jpg" 
            alt="EcoMed Logo" 
            className="w-10 h-10 mr-3 group-hover:scale-110 transition-transform duration-500 ease-out object-contain rounded mix-blend-multiply" 
          />
          <span className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-transparent bg-clip-text">EcoMed.</span>
        </div>

        {/* Live Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative group">
          <input 
            type="text" 
            placeholder="Search equipment, SKUs..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-100/70 border border-gray-200 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50 rounded-lg outline-none text-sm transition-all duration-300 font-medium text-slate-800"
          />
          <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4 group-focus-within:text-blue-600 transition-colors duration-300" />
          
          {/* Predictive Search Dropdown */}
          {isSearchFocused && searchQuery.length > 1 && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 shadow-2xl rounded-xl overflow-hidden z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
              {searchResults.length > 0 ? (
                <div className="py-2">
                  <div className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border-b border-gray-100">Products</div>
                  {searchResults.map(item => (
                    <div 
                      key={item.id} 
                      onClick={() => { navigate('product', item.id); setSearchQuery(''); }}
                      className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center gap-3 transition-colors border-b border-gray-50 last:border-0"
                    >
                      <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded bg-slate-100 mix-blend-multiply" />
                      <div>
                        <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5">{item.brand}</p>
                        <p className="text-sm font-bold text-slate-800 leading-tight">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-slate-500 text-sm font-medium">No equipment found matching "{searchQuery}"</div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
          <button onClick={() => navigate('home')} className="text-slate-700 hover:text-blue-600 transition-colors duration-300">Home</button>
          <div className="relative group h-full flex items-center">
            <button onClick={() => navigate('category', CATEGORIES[0].id)} className="text-slate-700 hover:text-blue-600 flex items-center transition-colors duration-300 py-6">
              Products <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-50 group-hover:rotate-180 transition-transform duration-500 ease-out" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-60 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl shadow-blue-900/10 rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 origin-top">
              {CATEGORIES.map((cat) => (
                <button key={cat.id} onClick={() => navigate('category', cat.id)} className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-200 font-medium">
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => navigate('about')} className="text-slate-700 hover:text-blue-600 transition-colors duration-300">Company Profile</button>
          <button onClick={() => navigate('contact')} className="text-slate-700 hover:text-blue-600 transition-colors duration-300">Contact</button>
          
          <button onClick={onOpenQuote} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-500 ease-out flex items-center shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-0.5">
            Request Quote
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 rounded-lg bg-gray-100 text-slate-800 hover:bg-gray-200 transition-colors duration-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 p-6 flex flex-col space-y-2 shadow-2xl transition-all duration-500">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-gray-100 border border-transparent focus:border-blue-300 rounded-lg outline-none text-sm mb-4 transition-colors" 
          />
          {/* Mobile Search Results */}
          {searchQuery.length > 1 && searchResults.length > 0 && (
             <div className="bg-white rounded-lg border border-gray-200 shadow-inner mb-4 overflow-hidden">
               {searchResults.map(item => (
                 <div key={item.id} onClick={() => { navigate('product', item.id); setIsMobileMenuOpen(false); setSearchQuery(''); }} className="p-3 border-b border-gray-100 flex items-center gap-3">
                   <img src={item.image} className="w-8 h-8 object-cover rounded bg-slate-50 mix-blend-multiply" alt=""/>
                   <p className="text-sm font-bold text-slate-800 truncate">{item.name}</p>
                 </div>
               ))}
             </div>
          )}

          <button onClick={() => { navigate('home'); setIsMobileMenuOpen(false); }} className="text-left text-sm font-bold py-3 text-slate-800 border-b border-gray-50">Home</button>
          <button onClick={() => { navigate('category', CATEGORIES[0].id); setIsMobileMenuOpen(false); }} className="text-left text-sm font-bold py-3 text-slate-800 border-b border-gray-50">All Products</button>
          <button onClick={() => { navigate('about'); setIsMobileMenuOpen(false); }} className="text-left text-sm font-bold py-3 text-slate-800 border-b border-gray-50">Company Profile</button>
          <button onClick={() => { navigate('contact'); setIsMobileMenuOpen(false); }} className="text-left text-sm font-bold py-3 text-slate-800 border-b border-gray-50">Contact Us</button>
          <button onClick={() => { onOpenQuote(); setIsMobileMenuOpen(false); }} className="bg-blue-600 text-white py-3.5 rounded-lg font-bold text-sm mt-4 shadow-md">Get Quote</button>
        </div>
      )}
    </header>
  );
};

// 2. Quote Modal
const QuoteModal = ({ isOpen, onClose, productContext = null, onToast }) => {
  const [requirements, setRequirements] = useState("");

  useEffect(() => {
    if (isOpen) {
      setRequirements(productContext ? `Requesting quote for:\nSKU: ${productContext.sku || 'N/A'}\nProduct: ${productContext.name}\nQuantity Required: ` : "");
    }
  }, [isOpen, productContext]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    onToast("Enquiry submitted successfully. Our team will contact you shortly.");
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4 transition-all duration-500">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500 ease-out border border-white/20">
        <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Procurement Request</h3>
            {productContext && <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mt-1">Ref: {productContext.name}</p>}
          </div>
          <button onClick={onClose} className="p-2 bg-white border border-gray-200 rounded-lg text-gray-400 hover:text-gray-800 hover:bg-gray-50 transition-colors duration-300 shadow-sm"><X className="w-5 h-5" /></button>
        </div>
        <form className="p-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors duration-300">Full Name *</label>
              <input required type="text" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300" />
            </div>
            <div className="group">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors duration-300">Organization / Hospital</label>
              <input type="text" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors duration-300">Phone *</label>
              <input required type="tel" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300" />
            </div>
            <div className="group">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors duration-300">Email</label>
              <input type="email" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300" />
            </div>
          </div>
          <div className="group">
            <div className="flex justify-between items-end mb-2">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-blue-600 transition-colors duration-300">Requirement Details / BOQ *</label>
            </div>
            <textarea 
              required 
              rows={5} 
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="e.g. Need 5 ICU beds, 2 oxygen concentrators..."
              className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none resize-none transition-all duration-300" 
            />
          </div>
          <div className="pt-2">
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-500 ease-out text-sm shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-0.5">
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// 3. Views

const HomeView = ({ navigate, onOpenQuote }) => (
  <div className="animate-in fade-in duration-1000">
    {/* 1. Full Screen Hero - Magnificent Entrance */}
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col bg-slate-900 overflow-hidden pt-24 md:pt-[116px]">
      {/* Animated Subtle Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
      
      {/* Dynamic Glow Blobs */}
      <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none duration-10000"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse pointer-events-none duration-7000" style={{animationDelay: '2s'}}></div>

      {/* Main Hero Content - Centered */}
      <div className="w-full max-w-4xl mx-auto px-[5%] flex flex-col items-center justify-center text-center relative z-20 pt-8 pb-12 flex-grow">
        <FadeIn delay={100}>
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold tracking-wider mb-8 backdrop-blur-md shadow-lg cursor-pointer hover:bg-white/20 transition-colors" onClick={() => window.open('https://www.indiamart.com/ecomed-solutions/', '_blank')}>
            <BadgeCheck className="w-5 h-5 mr-2 text-emerald-400" />
            <span className="text-emerald-300 mr-1">IndiaMART</span> TrustSeal Verified Supplier
          </div>
        </FadeIn>
        
        <FadeIn delay={300}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.05] mb-8 drop-shadow-2xl">
            Smarter B2B <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200">medical supply.</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={500}>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto mb-10 leading-relaxed font-medium opacity-90">
            Equipping healthcare institutions with premium, certified medical infrastructure. Direct sourcing from Pune, strict compliance, zero clutter.
          </p>
        </FadeIn>

        <FadeIn delay={700}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button onClick={() => onOpenQuote()} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-lg text-sm font-extrabold transition-all duration-500 ease-out shadow-[0_0_30px_-10px_rgba(59,130,246,0.8)] hover:shadow-[0_0_40px_-5px_rgba(59,130,246,1)] hover:-translate-y-1 border border-blue-500">
              Get a Quote
            </button>
            <button onClick={() => navigate('category', CATEGORIES[0].id)} className="w-full sm:w-auto bg-white/5 border border-white/20 text-white text-sm font-extrabold px-10 py-4 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-500 ease-out flex items-center justify-center group backdrop-blur-md">
              Explore Catalog <ArrowRight className="w-4 h-4 ml-3 text-cyan-400 transform group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Cinematic Image container before Stats */}
      <div className="w-full max-w-6xl mx-auto px-[5%] relative z-10 flex items-end justify-center mb-12 mt-auto">
        <FadeIn delay={900} className="w-full">
          <div className="w-full aspect-[21/8] md:aspect-[21/6] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/50 relative group bg-slate-800">
            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" alt="Medical Supply" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out opacity-50 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
          </div>
        </FadeIn>
      </div>

      {/* Stats Strip matching exact screenshot layout */}
      <div className="w-full bg-[#1e3a8b] relative z-20 border-t border-[#3b5baf]">
        <div className="max-w-6xl mx-auto px-[5%] py-8 flex flex-wrap justify-center md:justify-between items-center gap-y-8 gap-x-4">
          {STATS.map((stat, idx) => {
            const words = stat.label.split(' ');
            const word1 = words[0];
            const word2 = words.slice(1).join(' ');
            return (
              <FadeIn key={idx} delay={1000 + (idx * 150)} direction="up" className="flex flex-col justify-center flex-1 min-w-[140px] pl-6 border-l border-[#3b5baf]">
                <p className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-1 drop-shadow-md">{stat.value}</p>
                <p className="text-[10px] lg:text-[11px] font-bold text-blue-200/80 uppercase tracking-widest leading-snug">
                  {word1}<br/>{word2}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>

    {/* Verified Trust Strip */}
    <div className="bg-slate-50 py-10 border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-[5%] flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center md:text-left whitespace-nowrap">Verified & Trusted Certifications</p>
        <div className="flex flex-wrap justify-center md:justify-end w-full gap-8 md:gap-16 grayscale opacity-70">
          <span className="flex items-center text-lg md:text-xl font-extrabold text-slate-900 tracking-tight hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"><BadgeCheck className="w-6 h-6 mr-2 text-emerald-600"/> IndiaMART TrustSeal</span>
          <span className="flex items-center text-lg md:text-xl font-extrabold text-slate-900 tracking-tight hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"><Award className="w-6 h-6 mr-2 text-blue-600"/> ISO 13485</span>
          <span className="flex items-center text-lg md:text-xl font-extrabold text-slate-900 tracking-tight hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"><CheckCircle2 className="w-6 h-6 mr-2 text-indigo-600"/> MSME Registered</span>
        </div>
      </div>
    </div>

    {/* 4. Categories */}
    <section className="py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-[5%]">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Procurement Categories</h2>
              <p className="text-slate-500 font-medium text-base">Browse our comprehensive, certified medical inventory from top OEMs.</p>
            </div>
            <button onClick={() => navigate('category', CATEGORIES[0].id)} className="text-blue-600 text-sm font-bold hover:bg-blue-50 px-5 py-3 rounded-lg transition-all duration-300 flex items-center border border-transparent hover:border-blue-100">
              View Full Catalog <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <FadeIn key={cat.id} delay={idx * 100}>
                <div onClick={() => navigate('category', cat.id)} className="cursor-pointer bg-slate-50 border border-gray-200 rounded-xl p-8 text-center hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:bg-white transition-all duration-500 ease-out group hover:-translate-y-2 h-full flex flex-col justify-center">
                  <div className="w-16 h-16 mx-auto bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-500 shadow-sm">
                    <Icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-700 transition-colors">{cat.name}</h3>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>

    {/* 5. Why Choose Us (USPs) */}
    <section className="py-28 bg-slate-50 border-y border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="w-full max-w-7xl mx-auto px-[5%] relative z-10">
        <FadeIn className="mb-20 max-w-2xl text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">The EcoMed Advantage</h2>
          <p className="text-slate-500 text-lg font-medium">We engineer out the complexity of B2B healthcare procurement with full authenticity.</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {USP.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-blue-300 transition-all duration-500 ease-out group hover:-translate-y-2 h-full">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500 ease-out">
                  <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-extrabold text-slate-900 mb-4 text-lg tracking-tight group-hover:text-blue-700 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* 6. Featured Products - FULL BLEED IMAGES */}
    <section className="py-32 bg-white">
      <div className="w-full max-w-7xl mx-auto px-[5%]">
        <FadeIn className="mb-16 border-b border-gray-100 pb-6 flex flex-col md:flex-row justify-between items-end gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Featured Inventory</h2>
          <span className="text-sm font-bold text-slate-500 bg-slate-100 px-4 py-2 rounded-lg flex items-center"><BadgeCheck className="w-4 h-4 mr-2 text-emerald-600"/> Verified Stock</span>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, idx) => (
            <FadeIn key={product.id} delay={idx * 150}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] hover:border-blue-300 overflow-hidden flex flex-col group transition-all duration-500 ease-out hover:-translate-y-2 h-full">
                {/* Full Bleed Image Container */}
                <div className="h-64 relative overflow-hidden bg-slate-100 cursor-pointer" onClick={() => navigate('product', product.id)}>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms] ease-out mix-blend-multiply" />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow bg-white relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-blue-600 font-extrabold mb-3 bg-blue-50 w-fit px-2 py-1 rounded">{product.brand}</span>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-5 cursor-pointer hover:text-blue-600 leading-snug transition-colors" onClick={() => navigate('product', product.id)}>{product.name}</h3>
                  
                  <div className="mt-auto pt-5 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Minimum Order</span>
                      <span className="text-xs text-slate-900 font-extrabold bg-slate-50 px-3 py-1.5 rounded-md border border-gray-200">{product.moq}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <button onClick={() => navigate('product', product.id)} className="w-full py-3 text-xs font-extrabold text-slate-700 bg-white border border-gray-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300">
                        Specs
                      </button>
                      <button onClick={() => onOpenQuote({ name: product.name })} className="w-full py-3 text-xs font-extrabold text-white bg-slate-900 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md">
                        Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* 10. Testimonials & Social Proof */}
    <section className="py-32 bg-slate-50 border-t border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-[5%]">
        <FadeIn>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-16 text-center">Client Trust & Reviews</h2>
        </FadeIn>

        {/* Reputation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <FadeIn delay={100} direction="left">
            <a href="https://www.indiamart.com/ecomed-solutions/" target="_blank" rel="noreferrer" className="flex items-center p-8 bg-white rounded-2xl border border-gray-200 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center mr-6 border border-emerald-100 group-hover:scale-110 transition-transform duration-500 relative z-10 shrink-0">
                <BadgeCheck className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="relative z-10 flex-grow">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">IndiaMART TrustSeal</h3>
                <p className="text-sm font-medium text-slate-500 mt-1">Verified Premium Supplier</p>
              </div>
              <ArrowUpRight className="w-6 h-6 ml-4 text-slate-300 group-hover:text-emerald-600 transition-colors relative z-10 shrink-0" />
            </a>
          </FadeIn>
          
          <FadeIn delay={200} direction="right">
            <a href="https://share.google/JYR8A2Bmw1ma7f5oP" target="_blank" rel="noreferrer" className="flex items-center p-8 bg-white rounded-2xl border border-gray-200 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center mr-6 border border-slate-100 group-hover:scale-110 transition-transform duration-500 relative z-10 shrink-0">
                {/* Custom Google Icon SVG */}
                <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-extrabold text-slate-900 mb-1">EcoMed Solutions</h3>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[15px] font-bold text-slate-700 leading-none mt-0.5">4.9</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <span className="text-[14px] font-bold text-blue-600 ml-1 leading-none hover:underline cursor-pointer">405 Google reviews</span>
                </div>
                <p className="text-[14px] font-medium text-slate-600 mt-1 line-clamp-1">Surgical products wholesaler in Pune, Maharashtra</p>
              </div>
              <ArrowUpRight className="w-6 h-6 ml-4 text-slate-300 group-hover:text-blue-600 transition-colors relative z-10 shrink-0" />
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="bg-white p-8 md:p-10 rounded-[1.25rem] border border-gray-200 hover:border-blue-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group">
                <div className="mb-6">
                   <svg className="w-12 h-12 text-[#b0c4de] group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/></svg>
                </div>
                <p className="text-slate-700 text-[15px] md:text-[16px] font-medium leading-relaxed mb-10 flex-grow italic">"{review.text}"</p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-blue-50/80 rounded-xl mr-4 flex items-center justify-center text-blue-600 font-extrabold text-lg border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">{review.author.charAt(0)}</div>
                  <div>
                    <p className="font-extrabold text-slate-900 text-base">{review.author}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">{review.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* 10.7 Global Infrastructure */}
    <section className="py-32 bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
      
      <div className="w-full max-w-7xl mx-auto px-[5%] relative z-10 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-1.5 bg-blue-900/50 text-cyan-300 text-[10px] font-extrabold uppercase tracking-widest rounded-lg mb-8 border border-blue-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <MapPin className="w-3 h-3 mr-2" /> Central HQ: Pune, Maharashtra
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-lg">Unmatched Logistics Infrastructure</h2>
            <p className="text-blue-50 text-lg font-medium leading-relaxed mb-12 max-w-lg opacity-90">
              Our fulfillment centers operate 24/7 across 15+ states. Equipped with temperature-controlled transit systems and real-time GPS tracking, we ensure your critical healthcare supplies arrive intact and on time.
            </p>
          </FadeIn>

          <div className="space-y-5 max-w-md">
             <FadeIn delay={200}>
               <div className="flex items-center bg-white/10 p-5 rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                 <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300"><Truck className="w-6 h-6 text-white" /></div>
                 <div>
                   <h4 className="font-extrabold text-white text-lg tracking-tight">Pan-India Warehousing</h4>
                   <p className="text-sm text-blue-100 font-medium mt-1">Strategic hubs ensuring sub-48h deliveries.</p>
                 </div>
               </div>
             </FadeIn>
             <FadeIn delay={400}>
               <div className="flex items-center bg-white/10 p-5 rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                 <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300"><ShieldCheck className="w-6 h-6 text-white" /></div>
                 <div>
                   <h4 className="font-extrabold text-white text-lg tracking-tight">Insured Transit</h4>
                   <p className="text-sm text-blue-100 font-medium mt-1">100% comprehensive coverage on high-value items.</p>
                 </div>
               </div>
             </FadeIn>
          </div>
        </div>

        <div className="lg:w-1/2 w-full relative">
          <FadeIn delay={600} direction="left">
            <div className="aspect-square bg-cyan-400/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] animate-pulse blur-[120px] pointer-events-none duration-10000"></div>
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-[0_30px_60px_rgba(8,_112,_184,_0.8)] relative z-10 bg-slate-900 group">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80" alt="Logistics Warehouse" className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* 11. Form & Profile */}
    <section className="py-32 bg-slate-50">
      <div className="w-full max-w-7xl mx-auto px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Corporate Procurement</h2>
          <p className="text-slate-600 mb-12 text-lg max-w-md leading-relaxed font-medium">
            Streamline your supply chain. We provide compliant documentation, wholesale pricing, and direct OEM sourcing from our Headquarters in Pune.
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-sm">
            <div className="border-l-[4px] border-blue-600 pl-5 bg-white p-4 rounded-r-xl shadow-sm border-y border-r border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-slate-400 mb-1.5 uppercase text-[10px] tracking-widest font-extrabold">Status</p>
              <p className="font-extrabold text-slate-900 text-base">{COMPANY_INFO.legalStatus}</p>
            </div>
            <div className="border-l-[4px] border-blue-600 pl-5 bg-white p-4 rounded-r-xl shadow-sm border-y border-r border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-slate-400 mb-1.5 uppercase text-[10px] tracking-widest font-extrabold">GST/PAN</p>
              <p className="font-extrabold text-slate-900 text-base">{COMPANY_INFO.gst}</p>
            </div>
            <div className="border-l-[4px] border-blue-600 pl-5 bg-white p-4 rounded-r-xl shadow-sm border-y border-r border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-slate-400 mb-1.5 uppercase text-[10px] tracking-widest font-extrabold">Experience</p>
              <p className="font-extrabold text-slate-900 text-base">{COMPANY_INFO.experience}</p>
            </div>
            <div className="border-l-[4px] border-blue-600 pl-5 bg-white p-4 rounded-r-xl shadow-sm border-y border-r border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-slate-400 mb-1.5 uppercase text-[10px] tracking-widest font-extrabold">Verification</p>
              <p className="font-extrabold text-emerald-600 text-sm flex items-center"><BadgeCheck className="w-4 h-4 mr-1.5"/> TrustSeal</p>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={300} direction="left">
          <div className="bg-white rounded-2xl p-8 lg:p-12 text-slate-900 shadow-2xl shadow-blue-900/5 border border-gray-100">
            <h3 className="text-3xl font-extrabold mb-8 tracking-tight flex items-center"><MessageSquare className="w-6 h-6 mr-4 text-blue-600"/> Quick Enquiry</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onOpenQuote(); }}>
              <div>
                <input type="text" placeholder="Name / Hospital" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-5 py-4 text-sm focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 font-medium" />
              </div>
              <div>
                <input type="tel" placeholder="Mobile Number" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-5 py-4 text-sm focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 font-medium" />
              </div>
              <div>
                <textarea rows={4} placeholder="Requirements / List of Items" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-5 py-4 text-sm focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none resize-none transition-all duration-300 font-medium"></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white font-extrabold py-4 rounded-lg text-base hover:bg-blue-600 transition-all duration-500 ease-out shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_25px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-1 mt-2 flex justify-center items-center">
                Send Requirement <ArrowUpRight className="w-5 h-5 ml-2 opacity-70"/>
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
);

const CategoryView = ({ categoryId, navigate, onOpenQuote }) => {
  const category = CATEGORIES.find(c => c.id === categoryId) || CATEGORIES[0];
  const products = PRODUCTS.filter(p => p.categoryId === category.id);

  return (
    <div className="bg-slate-50 min-h-screen py-12 animate-in fade-in duration-500 pt-24 md:pt-[140px]">
      <div className="w-full max-w-7xl mx-auto px-[5%]">
        {/* Breadcrumb */}
        <div className="flex items-center text-[11px] font-bold text-slate-400 mb-10 uppercase tracking-widest">
          <button onClick={() => navigate('home')} className="hover:text-blue-600 transition-colors">Home</button>
          <ChevronRight className="w-3 h-3 mx-3" />
          <span className="text-slate-800">{category.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 mb-8 sticky top-28">
              <h3 className="font-extrabold text-slate-900 mb-5 text-xs uppercase tracking-widest border-b border-gray-100 pb-4">Categories</h3>
              <ul className="space-y-1.5">
                {CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => navigate('category', cat.id)}
                      className={`text-sm font-semibold w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${cat.id === categoryId ? 'bg-slate-900 text-white shadow-md transform scale-[1.02]' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
              <button onClick={() => onOpenQuote()} className="w-full mt-6 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 hover:border-transparent text-sm font-extrabold py-4 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm group">
                <Upload className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" /> Upload BOQ List
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm mb-10">
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">{category.name}</h1>
              <p className="text-slate-600 text-base leading-relaxed max-w-3xl font-medium">
                Industrial-grade {category.name.toLowerCase()} sourced from verified OEMs. All equipment strictly complies with national healthcare standards. Enquire for exact B2B bulk pricing and customization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.length > 0 ? products.map((product, idx) => (
                <FadeIn key={product.id} delay={idx * 100}>
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 overflow-hidden flex flex-col group transition-all duration-500 ease-out hover:-translate-y-2 h-full">
                    {/* Full Bleed Image Header */}
                    <div className="h-64 relative overflow-hidden bg-slate-100 cursor-pointer" onClick={() => navigate('product', product.id)}>
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow bg-white relative z-10">
                      <span className="text-[10px] uppercase tracking-widest text-blue-600 font-extrabold mb-3 bg-blue-50 w-fit px-2.5 py-1 rounded">{product.brand}</span>
                      <h3 className="font-extrabold text-slate-900 text-lg mb-5 cursor-pointer hover:text-blue-600 leading-snug transition-colors" onClick={() => navigate('product', product.id)}>{product.name}</h3>
                      
                      <div className="mt-auto pt-5 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-5">
                          <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Min. Order</span>
                          <span className="text-xs text-slate-900 font-extrabold bg-slate-50 px-3 py-1.5 rounded-md border border-gray-200">{product.moq}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                           <button onClick={() => navigate('product', product.id)} className="flex-1 py-3 text-xs font-extrabold text-slate-700 bg-white border border-gray-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300">Specs</button>
                           <button onClick={() => onOpenQuote({ name: product.name })} className="flex-1 py-3 text-xs font-extrabold text-white bg-slate-900 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md">Get Quote</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )) : (
                <div className="col-span-full bg-white p-20 text-center rounded-2xl border border-gray-200 shadow-sm">
                  <Activity className="w-12 h-12 text-slate-300 mx-auto mb-5" />
                  <p className="text-slate-500 text-base font-bold">Catalog currently updating. Send an enquiry for this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductView = ({ productId, navigate, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState('specs');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  const category = CATEGORIES.find(c => c.id === product.categoryId);
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white min-h-screen py-12 animate-in fade-in duration-500 pb-32 pt-24 md:pt-[140px]">
      <div className="w-full max-w-7xl mx-auto px-[5%]">
        <div className="flex items-center text-[11px] font-bold text-slate-400 mb-10 uppercase tracking-widest border-b border-gray-100 pb-5">
          <button onClick={() => navigate('home')} className="hover:text-blue-600 transition-colors">Home</button>
          <ChevronRight className="w-3 h-3 mx-3" />
          <button onClick={() => navigate('category', category.id)} className="hover:text-blue-600 transition-colors">{category?.name}</button>
          <ChevronRight className="w-3 h-3 mx-3" />
          <span className="text-slate-800 truncate">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mt-10">
          <FadeIn>
            <div className="flex flex-col gap-4">
              <div className="bg-slate-50 border border-gray-200 rounded-2xl p-12 flex items-center justify-center aspect-square shadow-inner relative overflow-hidden group">
                <img 
                  src={product.gallery ? product.gallery[activeImageIndex] : product.image} 
                  alt={product.name} 
                  className="max-w-full h-auto mix-blend-multiply transition-all duration-500 ease-out relative z-10" 
                />
                <div className="absolute top-6 left-6 z-20 flex gap-2">
                  <span className="bg-white border border-gray-200 text-emerald-600 text-[10px] font-extrabold px-3 py-1.5 rounded-md shadow-sm flex items-center"><BadgeCheck className="w-3 h-3 mr-1"/> IndiaMART Verified</span>
                </div>
              </div>
              
              {/* Interactive Image Gallery */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {product.gallery.map((img, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all duration-300 bg-slate-50 ${activeImageIndex === idx ? 'border-blue-600 shadow-md' : 'border-transparent hover:border-blue-300'}`}
                    >
                      <img src={img} alt={`View ${idx+1}`} className="w-full h-full object-cover mix-blend-multiply opacity-80 hover:opacity-100" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={200} className="flex flex-col justify-center">
            <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-extrabold uppercase tracking-widest mb-5 border border-blue-200 w-fit">
              {product.brand}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tighter">{product.name}</h1>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">{product.shortDesc}</p>

            <div className="flex flex-wrap gap-10 mb-10 border-y border-gray-200 py-8 bg-slate-50 rounded-xl px-8 shadow-inner">
              <div>
                <p className="text-[11px] uppercase font-extrabold text-slate-500 mb-2 tracking-widest">Pricing Base</p>
                <p className="text-2xl font-extrabold text-slate-900">Price on Request</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-10">
                <p className="text-[11px] uppercase font-extrabold text-slate-500 mb-2 tracking-widest">Minimum Order</p>
                <p className="text-2xl font-extrabold text-slate-900">{product.moq}</p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="font-extrabold text-slate-900 text-xs mb-5 uppercase tracking-widest">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-700 font-bold bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />{feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button onClick={() => onOpenQuote(product)} className="flex-1 bg-slate-900 hover:bg-blue-600 text-white font-extrabold py-4 rounded-lg text-base transition-all duration-500 ease-out shadow-lg hover:shadow-[0_15px_25px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-1 text-center flex justify-center items-center">
                Request Formal Quote <ArrowUpRight className="w-5 h-5 ml-2 opacity-70" />
              </button>
              <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="sm:px-10 bg-white border-2 border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-800 font-extrabold py-4 rounded-lg text-base transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md">
                 <MessageSquare className="w-5 h-5 mr-3 text-emerald-600" /> WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Detailed Tabs Area */}
        <FadeIn delay={300} className="mt-32">
          <div className="flex border-b border-gray-200 gap-3 overflow-x-auto whitespace-nowrap pb-4">
            <button onClick={() => setActiveTab('specs')} className={`px-6 py-3 rounded-lg text-xs font-extrabold uppercase tracking-widest transition-all duration-300 ${activeTab === 'specs' ? 'bg-slate-900 text-white shadow-lg transform -translate-y-1' : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900'}`}>Specifications</button>
            <button onClick={() => setActiveTab('compliance')} className={`px-6 py-3 rounded-lg text-xs font-extrabold uppercase tracking-widest transition-all duration-300 ${activeTab === 'compliance' ? 'bg-slate-900 text-white shadow-lg transform -translate-y-1' : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900'}`}>Compliance Details</button>
            <button onClick={() => setActiveTab('resources')} className={`px-6 py-3 rounded-lg text-xs font-extrabold uppercase tracking-widest transition-all duration-300 ${activeTab === 'resources' ? 'bg-slate-900 text-white shadow-lg transform -translate-y-1' : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900'}`}>Downloads & Resources</button>
          </div>
          
          <div className="pt-10 min-h-[200px] animate-in fade-in duration-500">
             {activeTab === 'specs' && (
                <div className="border border-gray-200 rounded-xl overflow-hidden max-w-4xl shadow-sm bg-white">
                  <table className="w-full text-left text-sm">
                    <tbody>
                      {Object.entries(product.specs).map(([key, value], idx) => (
                        <tr key={key} className={`border-b border-gray-100 last:border-0 hover:bg-blue-50/50 transition-colors ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                          <th className="py-5 px-8 font-extrabold text-slate-800 w-1/3 border-r border-gray-100 uppercase tracking-wider text-[11px]">{key}</th>
                          <td className="py-5 px-8 text-slate-700 font-semibold">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             )}
             {activeTab === 'compliance' && (
                <div className="max-w-3xl bg-white p-10 rounded-xl border border-gray-200 shadow-sm">
                   <p className="text-base text-slate-600 mb-8 leading-relaxed font-medium">This equipment strictly adheres to national and international healthcare standards. Below are the standard compliance checks applied before dispatch.</p>
                   <ul className="space-y-4">
                     <li className="flex items-center text-base text-slate-900 font-extrabold"><CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4"/> ISO 13485:2016 Certified Facility</li>
                     <li className="flex items-center text-base text-slate-900 font-extrabold"><CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4"/> Pre-dispatch Quality Inspection (PQI) Passed</li>
                     <li className="flex items-center text-base text-slate-900 font-extrabold"><CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4"/> GST and E-Way Bill compliant billing</li>
                   </ul>
                </div>
             )}
             {activeTab === 'resources' && (
                <div className="max-w-3xl">
                   <p className="text-base text-slate-600 mb-8 leading-relaxed font-medium">Download technical brochures, user manuals, and detailed compliance certificates.</p>
                   <div className="space-y-4">
                     <button className="w-full flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                       <div className="flex items-center">
                         <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-5 border border-red-100 group-hover:bg-red-500 transition-colors duration-300"><FileText className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300" /></div>
                         <span className="font-extrabold text-base text-slate-900 group-hover:text-blue-600 transition-colors">Technical Brochure PDF</span>
                       </div>
                       <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                     </button>
                     <button className="w-full flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                       <div className="flex items-center">
                         <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-5 border border-slate-200 group-hover:bg-slate-800 transition-colors duration-300"><FileText className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300" /></div>
                         <span className="font-extrabold text-base text-slate-900 group-hover:text-blue-600 transition-colors">User Manual & Installation Guide</span>
                       </div>
                       <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                     </button>
                     <button className="w-full flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                       <div className="flex items-center">
                         <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-5 border border-blue-100 group-hover:bg-blue-600 transition-colors duration-300"><Video className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors duration-300" /></div>
                         <span className="font-extrabold text-base text-slate-900 group-hover:text-blue-600 transition-colors">Product Demo & Walkthrough Video</span>
                       </div>
                       <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
                     </button>
                   </div>
                </div>
             )}
          </div>
        </FadeIn>

        {/* Related Products - FULL BLEED IMAGES */}
        <div className="mt-32 pt-20 border-t border-gray-200">
           <h2 className="text-3xl font-extrabold text-slate-900 mb-10 tracking-tight">You May Also Need</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {relatedProducts.map((relProduct, idx) => (
                <FadeIn key={relProduct.id} delay={idx * 150}>
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out" onClick={() => {navigate('product', relProduct.id); window.scrollTo(0,0);}}>
                    {/* Full Bleed Image Header */}
                    <div className="h-48 relative overflow-hidden bg-slate-100">
                      <img src={relProduct.image} alt={relProduct.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                    </div>
                    <div className="p-6 relative z-10 bg-white flex-grow">
                      <p className="text-[10px] text-blue-600 font-extrabold uppercase tracking-widest mb-2 bg-blue-50 w-fit px-2 py-1 rounded">{relProduct.brand}</p>
                      <h4 className="text-base font-extrabold text-slate-900 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors">{relProduct.name}</h4>
                    </div>
                  </div>
                </FadeIn>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

const AboutContactView = ({ view, onOpenQuote }) => (
  <div className="bg-slate-50 min-h-screen animate-in fade-in pb-32 pt-16 md:pt-[116px]">
    <div className="bg-slate-900 py-32 text-center text-white relative overflow-hidden border-b-[8px] border-blue-600">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-[-50%] left-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none animate-pulse"></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-[5%]">
        <FadeIn>
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-wider mb-8 backdrop-blur-md cursor-pointer hover:bg-emerald-800/40 transition-colors" onClick={() => window.open('https://www.indiamart.com/ecomed-solutions/', '_blank')}>
            <BadgeCheck className="w-4 h-4 mr-2 text-emerald-400" />
            Verified IndiaMART Supplier
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter drop-shadow-lg">{view === 'about' ? 'Corporate Profile' : 'Contact Us'}</h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
            {view === 'about' ? 'Building reliable medical supply chains across India through transparency, compliance, and direct sourcing.' : 'Get in touch with our dedicated procurement, support, and sales teams.'}
          </p>
        </FadeIn>
      </div>
    </div>

    <div className="w-full max-w-7xl mx-auto px-[5%] py-20">
      {view === 'about' ? (
        <div className="space-y-32">
          {/* Intro Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <FadeIn className="space-y-8">
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Who We Are</h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-sm"></div>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                <strong className="text-slate-900 font-extrabold">Ecomed Solutions</strong> is a premier distributor of critical care equipment, hospital furniture, and surgical consumables based in Pune, Maharashtra. With over a decade of domain expertise, we serve as the critical link between top-tier medical manufacturers and healthcare providers across India.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                We focus strictly on the B2B supply chain, ensuring that hospitals, diagnostic centers, and clinics receive certified equipment at wholesale pricing, backed by complete documentation and post-sales support.
              </p>
            </FadeIn>
            <FadeIn delay={300} direction="left">
              <div className="bg-white border border-gray-200 shadow-2xl shadow-slate-200/50 p-10 rounded-2xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500">
                <h3 className="font-extrabold text-slate-900 mb-8 text-xl tracking-tight border-b border-gray-100 pb-4">Company Snapshot</h3>
                <div className="space-y-5 text-base mb-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center"><span className="text-slate-500 font-bold uppercase tracking-widest text-[11px] mb-1 sm:mb-0">Legal Status</span><span className="font-extrabold text-slate-900 bg-slate-50 px-3 py-1.5 rounded border border-gray-100">{COMPANY_INFO.legalStatus}</span></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center"><span className="text-slate-500 font-bold uppercase tracking-widest text-[11px] mb-1 sm:mb-0">GST Number</span><span className="font-extrabold text-slate-900 bg-slate-50 px-3 py-1.5 rounded border border-gray-100">{COMPANY_INFO.gst}</span></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center"><span className="text-slate-500 font-bold uppercase tracking-widest text-[11px] mb-1 sm:mb-0">Turnover</span><span className="font-extrabold text-slate-900 bg-slate-50 px-3 py-1.5 rounded border border-gray-100">{COMPANY_INFO.turnover}</span></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center"><span className="text-slate-500 font-bold uppercase tracking-widest text-[11px] mb-1 sm:mb-0">Headquarters</span><span className="font-extrabold text-slate-900 bg-slate-50 px-3 py-1.5 rounded border border-gray-100">Pune, Maharashtra</span></div>
                </div>
                
                {/* Embedded Reputation Links */}
                <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
                  <a href="https://www.indiamart.com/ecomed-solutions/" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all duration-300 group">
                    <BadgeCheck className="w-6 h-6 text-emerald-500 mr-3 group-hover:scale-110 transition-transform" />
                    <div>
                       <p className="text-sm font-bold text-slate-900 leading-tight">IndiaMART</p>
                       <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-0.5">Verified</p>
                    </div>
                  </a>
                  <a href="https://share.google/JYR8A2Bmw1ma7f5oP" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300 group">
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <div>
                       <p className="text-sm font-bold text-slate-900 leading-tight">Google</p>
                       <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-0.5">5.0 Rating</p>
                    </div>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Mission / Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={200}>
              <div className="bg-slate-900 text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 ease-out border border-slate-800">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center mb-8 backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                  <Activity className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300"/>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 tracking-tight relative z-10">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed text-base font-medium relative z-10">To democratize access to high-quality, compliant medical infrastructure for healthcare facilities of all sizes, ensuring uncompromised patient care through a reliable supply chain.</p>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="bg-blue-600 text-white p-12 rounded-2xl shadow-2xl shadow-blue-600/30 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 ease-out border border-blue-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>
                <div className="w-16 h-16 bg-black/10 border border-white/20 rounded-xl flex items-center justify-center mb-8 backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                  <Globe className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 tracking-tight relative z-10">Infrastructure & Reach</h3>
                <p className="text-blue-50 leading-relaxed text-base font-medium relative z-10">Operating from our central hub in Pune, we utilize a network of modern warehousing facilities and logistics partners to guarantee safe, insured, and rapid delivery to every state in India.</p>
              </div>
            </FadeIn>
          </div>

          {/* Core Values */}
          <div className="pt-16 border-t border-gray-200">
            <FadeIn>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-16 text-center">Our Core Values</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CORE_VALUES.map((val, idx) => (
                <FadeIn key={idx} delay={idx * 200}>
                  <div className="bg-white text-center p-10 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 group h-full">
                    <div className="w-20 h-20 mx-auto bg-slate-50 rounded-xl flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-blue-600 transition-colors duration-500">
                      <val.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors">{val.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed font-medium">{val.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-10">
            <FadeIn>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
                <h4 className="font-extrabold text-slate-900 mb-3 uppercase tracking-widest text-[11px] text-blue-600 flex items-center"><MapPin className="w-5 h-5 mr-3 group-hover:animate-bounce"/> Head Office</h4>
                <p className="text-slate-800 font-bold text-lg">{COMPANY_INFO.address}</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={150}>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
                <h4 className="font-extrabold text-slate-900 mb-6 uppercase tracking-widest text-[11px] text-blue-600 flex items-center"><Phone className="w-5 h-5 mr-3"/> Department Contacts</h4>
                <div className="space-y-6 text-base">
                  <div className="p-4 bg-slate-50 rounded-lg border border-gray-100">
                    <p className="font-extrabold text-slate-900 mb-1.5">Sales & Procurement</p>
                    <p className="text-blue-600 font-bold hover:underline cursor-pointer">{COMPANY_INFO.email}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-gray-100">
                    <p className="font-extrabold text-slate-900 mb-1.5">Support & Service</p>
                    <p className="text-blue-600 font-bold hover:underline cursor-pointer">support@ecomedsolutions.co.in</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl border border-slate-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full pointer-events-none group-hover:bg-blue-500/40 transition-colors duration-500"></div>
                <h4 className="font-extrabold mb-6 uppercase tracking-widest text-[11px] text-cyan-400 flex items-center relative z-10"><Globe className="w-5 h-5 mr-3"/> Regional Offices</h4>
                <div className="space-y-8 text-sm relative z-10">
                  {REGIONAL_OFFICES.map((office, idx) => (
                    <div key={idx} className="border-l-2 border-slate-700 pl-4">
                      <p className="font-extrabold text-white text-base mb-1.5">{office.city}</p>
                      <p className="text-slate-400 font-medium text-sm">{office.address}</p>
                      <p className="text-cyan-400 font-bold mt-2 bg-slate-800/50 w-fit px-2 py-1 rounded">{office.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={200} direction="left">
              <form className="space-y-6 bg-white border border-gray-200 p-10 md:p-14 rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500" onSubmit={(e) => { e.preventDefault(); onOpenQuote(); }}>
                 <div className="mb-10 border-b border-gray-100 pb-8">
                   <h3 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Direct Transmission</h3>
                   <p className="text-slate-500 font-medium text-base">Our enterprise team typically responds within 2 hours.</p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="group">
                     <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-blue-600 transition-colors">Full Name *</label>
                     <input type="text" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-5 py-4 text-sm font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-300" required />
                   </div>
                   <div className="group">
                     <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-blue-600 transition-colors">Organization</label>
                     <input type="text" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-5 py-4 text-sm font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-300" />
                   </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="group">
                     <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-blue-600 transition-colors">Phone Number *</label>
                     <input type="tel" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-5 py-4 text-sm font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-300" required />
                   </div>
                   <div className="group">
                     <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-blue-600 transition-colors">Email Address *</label>
                     <input type="email" className="w-full bg-slate-50 border border-gray-200 rounded-lg px-5 py-4 text-sm font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-300" required />
                   </div>
                 </div>
                 <div className="group">
                   <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-blue-600 transition-colors">How can we assist you? *</label>
                   <textarea rows={6} className="w-full bg-slate-50 border border-gray-200 rounded-lg px-5 py-4 text-sm font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-300 resize-none" required></textarea>
                 </div>
                 <button type="submit" className="bg-slate-900 hover:bg-blue-600 text-white font-extrabold py-4 px-10 rounded-lg text-base transition-all duration-500 ease-out shadow-lg hover:shadow-[0_15px_25px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-1 w-full md:w-auto mt-4 flex justify-center items-center">
                   Submit Enquiry <ArrowUpRight className="w-5 h-5 ml-2 opacity-70" />
                 </button>
              </form>
            </FadeIn>
          </div>
        </div>
      )}
    </div>
  </div>
);

const Footer = ({ navigate }) => (
  <footer className="bg-slate-900 text-white pt-20 pb-28 lg:pb-12 text-sm border-t-[6px] border-blue-600 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 mix-blend-overlay"></div>
    <div className="w-full max-w-7xl mx-auto px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
      <div>
        <div className="flex items-center mb-6 cursor-pointer group" onClick={() => navigate('home')}>
          <img 
            src="https://5.imimg.com/data5/SELLER/Logo/2025/1/484689701/IV/JM/GC/74917398/ecomed-logo-page-0001-90x90.jpg" 
            alt="EcoMed Logo" 
            className="w-10 h-10 mr-4 group-hover:scale-110 transition-transform duration-500 ease-out object-contain rounded bg-white p-1" 
          />
        </div>
        <p className="text-slate-400 mb-4 font-medium leading-relaxed text-sm pr-4 opacity-90">{COMPANY_INFO.tagline}</p>
        <div className="flex items-center text-emerald-400 text-xs font-bold uppercase tracking-widest mt-2"><BadgeCheck className="w-4 h-4 mr-1.5"/> IndiaMART Verified</div>
      </div>
      <div>
        <h4 className="font-extrabold text-white mb-6 uppercase tracking-widest text-[11px] opacity-80">Categories</h4>
        <ul className="space-y-4 text-slate-400 font-medium text-sm">
          {CATEGORIES.slice(0, 4).map(cat => (
            <li key={cat.id}><button onClick={() => navigate('category', cat.id)} className="hover:text-cyan-400 transition-colors duration-300 flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"/> {cat.name}</button></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-extrabold text-white mb-6 uppercase tracking-widest text-[11px] opacity-80">Company</h4>
        <ul className="space-y-4 text-slate-400 font-medium text-sm">
          <li><button onClick={() => navigate('about')} className="hover:text-cyan-400 transition-colors duration-300 flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"/> About Us</button></li>
          <li><button onClick={() => navigate('contact')} className="hover:text-cyan-400 transition-colors duration-300 flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"/> Contact</button></li>
          <li><button className="hover:text-cyan-400 transition-colors duration-300 flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"/> Privacy Policy</button></li>
        </ul>
      </div>
      <div>
        <h4 className="font-extrabold text-white mb-6 uppercase tracking-widest text-[11px] opacity-80">Contact</h4>
        <ul className="space-y-4 text-slate-400 font-medium text-sm">
          <li className="flex items-center"><Phone className="w-4 h-4 mr-4 text-cyan-500 opacity-70"/>{COMPANY_INFO.phone}</li>
          <li className="flex items-center"><Mail className="w-4 h-4 mr-4 text-cyan-500 opacity-70"/>{COMPANY_INFO.email}</li>
        </ul>
      </div>
    </div>
    <div className="w-full max-w-7xl mx-auto px-[5%] pt-8 border-t border-slate-800/50 text-[11px] font-bold text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 uppercase tracking-widest relative z-10">
      <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}.</p>
      <p>Premium B2B Healthcare Supply</p>
    </div>
  </footer>
);

// Floating WhatsApp Widget
const FloatingWhatsApp = () => (
  <a 
    href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
    target="_blank" 
    rel="noreferrer"
    className="hidden lg:flex fixed bottom-8 right-8 z-[90] bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group"
  >
    <MessageSquare className="w-8 h-8" />
    {/* Tooltip */}
    <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
      Chat with Sales
    </span>
  </a>
);

// Back to Top Button
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return isVisible && (
    <button 
      onClick={scrollToTop}
      className="hidden lg:flex fixed bottom-24 right-8 z-[80] bg-slate-900/80 hover:bg-slate-900 text-white p-3 rounded-full backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

// Mobile Sticky Bar
const MobileStickyBar = ({ onOpenQuote }) => (
  <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 p-3 z-40 flex gap-3 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.15)]">
    <a href={`tel:${COMPANY_INFO.phone}`} className="flex-1 bg-slate-50 rounded-lg border border-gray-200 flex flex-col items-center justify-center py-2.5 text-slate-800 hover:bg-blue-50 transition-colors">
      <PhoneCall className="w-5 h-5 mb-1 text-blue-600" /> <span className="text-[10px] font-extrabold uppercase tracking-widest">Call</span>
    </a>
    <div className="flex-[2]">
      <button onClick={() => onOpenQuote()} className="w-full h-full bg-slate-900 text-white font-extrabold rounded-lg text-base flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
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
  const [toastConfig, setToastConfig] = useState(null); // { message: '', type: 'success' }

  // Update Document Title based on Route
  useEffect(() => {
    let title = COMPANY_INFO.name;
    if (route.page === 'category') {
      const cat = CATEGORIES.find(c => c.id === route.id);
      title = cat ? `${cat.name} | ${COMPANY_INFO.name}` : title;
    } else if (route.page === 'product') {
      const prod = PRODUCTS.find(p => p.id === route.id);
      title = prod ? `${prod.name} | ${COMPANY_INFO.name}` : title;
    } else if (route.page === 'about') {
      title = `Company Profile | ${COMPANY_INFO.name}`;
    } else if (route.page === 'contact') {
      title = `Contact Us | ${COMPANY_INFO.name}`;
    }
    document.title = title;
    window.scrollTo({top: 0, behavior: 'smooth'}); 
  }, [route]);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const navigate = (page, id = null) => setRoute({ page, id });
  
  const handleOpenQuote = (context = null) => { 
    setQuoteContext(context); 
    setIsQuoteModalOpen(true); 
  };

  const handleShowToast = (message, type = 'success') => {
    setToastConfig({ message, type });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {toastConfig && (
        <Toast 
          message={toastConfig.message} 
          type={toastConfig.type} 
          onClose={() => setToastConfig(null)} 
        />
      )}
      
      <Navbar navigate={navigate} onOpenQuote={handleOpenQuote} />
      <main className="w-full pt-[116px] lg:pt-[116px]">
        {route.page === 'home' && <HomeView navigate={navigate} onOpenQuote={handleOpenQuote} />}
        {route.page === 'category' && <CategoryView categoryId={route.id} navigate={navigate} onOpenQuote={handleOpenQuote} />}
        {route.page === 'product' && <ProductView productId={route.id} navigate={navigate} onOpenQuote={handleOpenQuote} />}
        {route.page === 'about' && <AboutContactView view="about" onOpenQuote={handleOpenQuote} />}
        {route.page === 'contact' && <AboutContactView view="contact" onOpenQuote={handleOpenQuote} />}
      </main>
      <Footer navigate={navigate} />
      
      {/* Global Utilities */}
      <MobileStickyBar onOpenQuote={handleOpenQuote} />
      <FloatingWhatsApp />
      <BackToTop />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        productContext={quoteContext} 
        onToast={handleShowToast}
      />
    </div>
  );
}
