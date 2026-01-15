"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const navigation = [
  { label: "Главная", href: "#hero" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Процесс", href: "#process" },
  { label: "Работы", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  "Подбор автомобиля",
  "Доставка из Европы",
  "Таможенное оформление",
  "Постановка на учёт",
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-white/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
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
                <span className="font-bold text-xl text-white">
                  <span className="text-emerald-400">Пуль</span>ман
                </span>
              </div>
            </Link>
            <p className="text-gray-500 leading-relaxed mb-6">
              ООО "Пульман" - премиальный пригон автомобилей из Европы с полным юридическим
              сопровождением с 2019 года.
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/Prigon7775"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-emerald-500 border border-white/10 hover:border-emerald-500 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/74951326098"
                className="w-10 h-10 bg-white/5 hover:bg-emerald-500 border border-white/10 hover:border-emerald-500 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Навигация</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Услуги</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-500">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+74951326098"
                  className="flex items-center gap-3 text-gray-500 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+7 (495) 132-60-98</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pulman-auto.ru"
                  className="flex items-center gap-3 text-gray-500 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@pulman-auto.ru</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-500">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>169570, Республика Коми, г. Вуктыл, ул. 60 лет Октября, д. 19, кв. 184</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/5" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2026 ООО "Пульман". Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-emerald-400 transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="text-gray-600 hover:text-emerald-400 transition-colors">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
