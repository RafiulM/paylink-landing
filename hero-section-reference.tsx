import React, { useState, useEffect } from "react";
import {
  Link as LinkIcon,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  MessageSquare,
  ChevronRight,
  Wallet,
  Globe,
  Smartphone,
  Copy,
  ExternalLink,
  Shield,
} from "lucide-react";

const App = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-animate the flow visualization
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 0,
      title: "Buat & Kirim Link",
      icon: <LinkIcon className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-100",
      accent: "border-blue-600",
      preview: (
        <div className="w-full max-w-[320px] space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
          {/* WhatsApp Simulation */}
          <div className="bg-[#E7FED3] p-3 rounded-2xl rounded-tl-none shadow-md border border-black/5 relative ml-4">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
              <div className="h-24 bg-blue-50 flex items-center justify-center border-b border-gray-100">
                <div className="bg-blue-600 p-2 rounded-lg shadow-lg">
                  <Zap className="text-white w-6 h-6 fill-current" />
                </div>
              </div>
              <div className="p-3">
                <div className="text-[10px] font-bold text-blue-600 uppercase mb-1">
                  Paylink.id
                </div>
                <div className="text-xs font-bold text-gray-800 line-clamp-1">
                  Pembayaran Sepatu Sneakers Retro
                </div>
                <div className="text-[10px] text-gray-500 mt-1">
                  Selesaikan pembayaran aman via rekber otomatis.
                </div>
              </div>
            </div>
            <div className="text-blue-600 text-[11px] mt-2 underline truncate">
              paylink.id/tr-9281XJ
            </div>
            <div className="absolute bottom-1 right-2 text-[9px] text-gray-400">
              14:02 ✓✓
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2 text-[10px] font-medium text-gray-400">
              <Copy className="w-3 h-3" /> Link disalin ke clipboard
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Dana Ditahan Aman",
      icon: <Lock className="w-6 h-6 text-amber-600" />,
      color: "bg-amber-100",
      accent: "border-amber-600",
      preview: (
        <div className="w-full max-w-[300px] animate-in fade-in zoom-in duration-700">
          <div className="bg-white rounded-[32px] shadow-2xl border-4 border-amber-500 p-6 relative overflow-hidden">
            {/* Security Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <Shield className="w-full h-full scale-150 rotate-12" />
            </div>

            <div className="relative z-10 text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto ring-8 ring-amber-50">
                <Lock className="w-8 h-8 text-amber-600" />
              </div>

              <div>
                <div className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">
                  Escrow Secured
                </div>
                <div className="text-3xl font-black text-slate-900 leading-none">
                  Rp450.000
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-gray-500 uppercase font-bold tracking-tighter">
                    Status
                  </span>
                  <span className="text-amber-600 font-black">DITAHAN</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 w-[65%] rounded-full"></div>
                </div>
                <div className="text-[9px] text-gray-400 mt-2 italic text-left">
                  Dana aman di sistem sampai barang diterima pembeli.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Dana Dicairkan",
      icon: <Zap className="w-6 h-6 text-green-600" />,
      color: "bg-green-100",
      accent: "border-green-600",
      preview: (
        <div className="w-full max-w-[300px] animate-in fade-in slide-in-from-top-6 duration-700">
          <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            {/* Success Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"></div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-green-400 font-bold uppercase tracking-wide leading-none">
                    Berhasil Terkirim
                  </div>
                  <div className="text-sm font-bold text-white">
                    Pencairan Dana
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] text-slate-400 font-medium">
                  Jumlah Diterima Penjual:
                </div>
                <div className="text-2xl font-black text-white">Rp445.000</div>
                <div className="text-[9px] text-slate-500 italic">
                  Fee sistem: Rp5.000 (Dipotong otomatis)
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-slate-800 rounded-md flex items-center justify-center text-[8px] font-bold text-white">
                    BCA
                  </div>
                  <div className="text-[10px] text-slate-300">
                    8830 **** 1211
                  </div>
                </div>
                <div className="text-[10px] font-bold text-green-400">
                  SUCCESS
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-slate-50 bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
              <div className="px-3 h-8 rounded-full border-2 border-slate-50 bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                +140 User Hari Ini
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-xl">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
            Paylink
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-500">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Cara Kerja
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Testimoni
          </a>
          <a
            href="#"
            className="bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
          >
            Mulai Jualan Aman
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-2xl text-xs font-black uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Rekening Bersama Otomatis</span>
            </div>

            <h1 className="text-6xl md:text-[84px] font-black leading-[0.95] text-slate-900 tracking-tighter">
              Solusi Jual Beli{" "}
              <span className="text-blue-600">Tanpa Was-was.</span>
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed max-w-lg font-medium">
              Kirim link pembayaran ke pembeli di WhatsApp/IG. Dana kami amankan
              sampai barang sampai. Transaksi C2C kini seaman belanja di Mall.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-5 bg-blue-600 text-white rounded-[24px] font-black text-xl hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3 group">
                Buat Link Sekarang
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-[24px] font-black text-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                Cek Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">100%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Aman & Terjamin
                </span>
              </div>
              <div className="w-px h-10 bg-slate-100"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">Rp0</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Biaya Registrasi
                </span>
              </div>
            </div>
          </div>

          {/* Right Content: The Visualizer */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>

            <div className="bg-white rounded-[48px] shadow-[0_32px_80px_rgba(0,0,0,0.08)] border border-slate-50 p-6 md:p-10 relative overflow-hidden">
              {/* Step Indicators (Vertical Labels) */}
              <div className="flex justify-between mb-12 relative">
                <div className="absolute top-5 left-8 right-8 h-0.5 bg-slate-100 -z-0"></div>
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`relative z-10 flex flex-col items-center gap-3 group transition-all duration-300 ${
                      activeStep === step.id
                        ? "opacity-100"
                        : "opacity-40 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shadow-lg ${
                        activeStep === step.id
                          ? `${step.color} scale-110 ring-4 ring-white`
                          : "bg-slate-100"
                      }`}
                    >
                      {React.cloneElement(step.icon, {
                        className: `w-5 h-5 ${activeStep === step.id ? "" : "text-slate-400"}`,
                      })}
                    </div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider ${activeStep === step.id ? "text-slate-900" : "text-slate-400"}`}
                    >
                      {step.title.split(". ")[1] || step.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Central App Mockup Display */}
              <div className="min-h-[380px] flex items-center justify-center p-4 bg-slate-50/50 rounded-[32px] border border-slate-100">
                {steps[activeStep].preview}
              </div>

              {/* App Meta Info */}
              <div className="mt-8 flex justify-between items-center px-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Verified by Paylink Protocol
                  </span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${activeStep === i - 1 ? "w-6 bg-blue-600" : "w-1.5 bg-slate-200"}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Float Element: Payment Methods */}
            <div className="absolute -bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white flex justify-around items-center">
              <div className="flex flex-col items-center opacity-40 grayscale">
                <div className="text-xs font-black italic">QRIS</div>
              </div>
              <div className="flex flex-col items-center opacity-40 grayscale">
                <div className="text-xs font-black">BCA</div>
              </div>
              <div className="flex flex-col items-center opacity-40 grayscale">
                <div className="text-xs font-black italic underline decoration-blue-500 underline-offset-2">
                  GOPAY
                </div>
              </div>
              <div className="flex flex-col items-center opacity-40 grayscale">
                <div className="text-xs font-black">OVO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-slate-50 rounded-[40px] p-12 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="flex -space-x-4 shrink-0">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-3xl border-4 border-white bg-slate-200 overflow-hidden"
              >
                <div className="w-full h-full bg-blue-100 flex items-center justify-center font-bold text-blue-300">
                  U{i}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-2xl font-bold text-slate-800 italic">
              "Berkat Paylink, jualan di TikTok DM jadi makin lancar. Pembeli
              nggak ragu lagi buat transfer nominal besar."
            </h4>
            <p className="mt-2 font-bold text-blue-600">
              — Budi S., Penjual Gadget Second
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Mobile Only) */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
        <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-2xl shadow-blue-300">
          Mulai Sekarang
        </button>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `,
        }}
      />
    </div>
  );
};

export default App;
