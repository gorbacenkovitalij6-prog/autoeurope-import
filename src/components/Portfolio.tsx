"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Send } from "lucide-react";

const cars = [
  {
    name: "Kia Ceed",
    year: 2023,
    country: "Германия",
    price: "1 190 000",
    days: 14,
    image: "/images/mazda-cx60.jpg",
    delivered: true,
  },
  {
    name: "Volkswagen Tiguan",
    year: 2022,
    country: "Польша",
    price: "2 125 000",
    days: 11,
    image: "/images/kia-ceed-gt.jpg",
    delivered: true,
  },
  {
    name: "Skoda Kodiaq",
    year: 2022,
    country: "Германия",
    price: "2 400 000",
    days: 13,
    image: "/images/skoda-kodiaq.jpg",
    delivered: true,
  },
  {
    name: "Chevrolet Traverse",
    year: 2022,
    country: "Германия",
    price: "3 500 000",
    days: 15,
    image: "/images/chevrolet-traverse.jpg",
    delivered: true,
  },
  {
    name: "Hyundai Santa Fe",
    year: 2022,
    country: "Германия",
    price: "1 680 000",
    days: 12,
    image: "/images/hyundai-santa-fe.jpg",
    delivered: true,
  },
  {
    name: "Mazda CX-60",
    year: 2024,
    country: "Германия",
    price: "2 950 000",
    days: 12,
    image: "/images/vw-tiguan-white.jpg",
    delivered: true,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-emerald-400 font-medium mb-4">
            <ExternalLink className="w-5 h-5" />
            Портфолио
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Наши <span className="gradient-text">работы</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
            Автомобили, которые мы уже доставили нашим клиентам
          </p>
          <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2 border-emerald-500/30 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10">
              <Send className="w-4 h-4" />
              Смотреть в Telegram
            </Button>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cars.map((car, index) => (
            <Card
              key={index}
              className="group overflow-hidden glass-card glow-border hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-emerald-500 text-white border-0">
                  Доставлен
                </Badge>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  {car.name}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    {car.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    {car.country}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <p className="text-xs text-gray-500">Стоимость</p>
                    <p className="text-lg font-bold text-emerald-400">{car.price} ₽</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Срок</p>
                    <p className="text-lg font-bold text-white">{car.days} дней</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
