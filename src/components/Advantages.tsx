"use client";

import { Card } from "@/components/ui/card";
import {
  ShieldCheck,
  Truck,
  Banknote,
  HeadphonesIcon,
  Clock,
  Award
} from "lucide-react";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Юридическая чистота",
    description: "Полная проверка истории автомобиля, гарантия отсутствия ограничений и залогов",
  },
  {
    icon: Truck,
    title: "Быстрая доставка",
    description: "Средний срок доставки 14 дней от момента покупки до границы РФ",
  },
  {
    icon: Banknote,
    title: "Прозрачные цены",
    description: "Никаких скрытых платежей, фиксируем цену в договоре до начала работ",
  },
  {
    icon: HeadphonesIcon,
    title: "Полное сопровождение",
    description: "Помощь на всех этапах: от поиска до постановки на учёт в ГИБДД",
  },
  {
    icon: Clock,
    title: "24/7 поддержка",
    description: "Всегда на связи, отвечаем на вопросы в любое время суток",
  },
  {
    icon: Award,
    title: "Опыт работы",
    description: "Более 1000 успешно доставленных автомобилей с 2019 года",
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-emerald-400 font-medium mb-4">
            <Award className="w-5 h-5" />
            Преимущества
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Наши <span className="gradient-text">преимущества</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Высокое качество услуг на каждом этапе работы
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="group p-8 glass-card glow-border hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                <advantage.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {advantage.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {advantage.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
