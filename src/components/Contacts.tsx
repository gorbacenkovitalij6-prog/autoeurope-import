"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MessageCircle, Clock, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (495) 132-60-98",
    href: "tel:+74951326098",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@pulman-auto.ru",
    href: "mailto:info@pulman-auto.ru",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@Prigon7775",
    href: "https://t.me/Prigon7775",
  },
];

const workHours = [
  { days: "Пн - Пт:", hours: "09:00 - 20:00" },
  { days: "Сб - Вс:", hours: "10:00 - 18:00" },
];

export function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contacts" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-emerald-400 font-medium mb-4">
            <Send className="w-5 h-5" />
            Контакты
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Свяжитесь <span className="gradient-text">с нами</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 glass-card glow-border">
              <h3 className="text-xl font-bold text-white mb-6">
                Контактная информация
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                      <contact.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{contact.label}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 glass-card glow-border">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                Часы работы
              </h3>
              <div className="space-y-3">
                {workHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-gray-300"
                  >
                    <span>{schedule.days}</span>
                    <span className="font-medium text-white">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 glass-card glow-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Адрес</p>
                  <p className="font-medium text-white">
                    169570, Республика Коми, г. Вуктыл, ул. 60 лет Октября, д. 19, кв. 184
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 glass-card glow-border">
            <h3 className="text-xl font-bold text-white mb-6">
              Оставить заявку
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Ваше имя
                </label>
                <Input
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Телефон
                </label>
                <Input
                  type="tel"
                  placeholder="+7 (900) 123-45-67"
                  value={formData.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Сообщение
                </label>
                <textarea
                  placeholder="Расскажите, какой автомобиль вас интересует..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full h-32 px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 text-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25"
              >
                <Send className="w-5 h-5 mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
