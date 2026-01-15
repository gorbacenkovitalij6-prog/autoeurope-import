"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Процесс", href: "#process" },
  { label: "Работы", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-950/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>
          <div>
            <span className="font-bold text-xl tracking-tight text-white">
              <span className="text-emerald-400">Пуль</span>ман
            </span>
            <p className="text-xs text-gray-500 -mt-1">Премиальный импорт</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA and Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+74951326098"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+7 (495) 132-60-98</span>
          </a>

          <Button className="hidden sm:flex bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 border-0">
            Консультация
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gray-950 border-gray-800">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-bold text-xl text-white">
                    <span className="text-emerald-400">Пуль</span>ман
                  </span>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-lg font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 rounded-xl transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-8 border-t border-gray-800">
                  <a
                    href="tel:+74951326098"
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">+7 (495) 132-60-98</span>
                  </a>
                  <Button className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                    Консультация
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
