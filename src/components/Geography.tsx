"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Euro, CheckCircle } from "lucide-react";

const countries = [
  {
    name: "Германия",
    code: "DE",
    popular: true,
    days: "12-14 дней",
    price: "€800",
  },
  {
    name: "Польша",
    code: "PL",
    popular: true,
    days: "10-12 дней",
    price: "€600",
  },
  {
    name: "Бельгия",
    code: "BE",
    popular: false,
    days: "13-15 дней",
    price: "€900",
  },
  {
    name: "Нидерланды",
    code: "NL",
    popular: false,
    days: "13-15 дней",
    price: "€900",
  },
];

export function Geography() {
  return (
    <section className="section-padding bg-gray-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-emerald-400 font-medium mb-4">
            <MapPin className="w-5 h-5" />
            География
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            География <span className="gradient-text">доставки</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Работаем с проверенными партнёрами по всей Европе
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <Card
              key={index}
              className="group p-6 glass-card glow-border hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {country.popular && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
                  Популярно
                </Badge>
              )}

              <div className="w-16 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center mb-4 font-bold text-emerald-400 text-lg border border-emerald-500/20">
                {country.code}
              </div>

              <h3 className="text-xl font-bold mb-4 text-white">
                {country.name}
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>{country.days}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Euro className="w-4 h-4 text-emerald-400" />
                  <span>От {country.price}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Проверенные аукционы</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
