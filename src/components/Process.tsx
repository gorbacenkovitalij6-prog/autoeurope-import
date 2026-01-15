"use client";

import { Card } from "@/components/ui/card";
import { Search, FileText, Truck, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Поиск автомобиля",
    description: "Подбираем автомобиль по вашим критериям из проверенных аукционов Европы",
  },
  {
    number: "02",
    icon: FileText,
    title: "Оформление документов",
    description: "Проверяем историю, юридическую чистоту и оформляем все необходимые документы",
  },
  {
    number: "03",
    icon: Truck,
    title: "Доставка в РФ",
    description: "Организуем логистику, растаможку и доставку автомобиля до границы России",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Постановка на учёт",
    description: "Помогаем с регистрацией в ГИБДД и передаём вам ключи от автомобиля",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-gradient-to-br from-emerald-950 via-gray-900 to-teal-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_70%)]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-emerald-400 font-medium mb-4">
            <CheckCircle2 className="w-5 h-5" />
            Как мы работаем
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Процесс <span className="gradient-text">работы</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Прозрачный процесс в 4 шага
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Step number */}
                <div className="absolute -top-4 left-6 px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold text-white shadow-lg shadow-emerald-500/25">
                  {step.number}
                </div>

                <div className="pt-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                    <step.icon className="w-7 h-7 text-emerald-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-emerald-500/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
