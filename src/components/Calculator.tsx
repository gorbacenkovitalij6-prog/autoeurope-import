"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Calculator as CalcIcon, Euro, Truck, FileCheck } from "lucide-react";

const countries = [
  { value: "germany", label: "Германия", deliveryCost: 800, days: "12-14" },
  { value: "poland", label: "Польша", deliveryCost: 600, days: "10-12" },
  { value: "belgium", label: "Бельгия", deliveryCost: 900, days: "13-15" },
  { value: "netherlands", label: "Нидерланды", deliveryCost: 900, days: "13-15" },
];

export function Calculator() {
  const [carPrice, setCarPrice] = useState("");
  const [country, setCountry] = useState("");
  const [result, setResult] = useState<{
    customsDuty: number;
    deliveryCost: number;
    serviceFee: number;
    total: number;
    days: string;
  } | null>(null);

  const calculate = () => {
    if (!carPrice || !country) return;

    const price = Number.parseFloat(carPrice);
    const selectedCountry = countries.find((c) => c.value === country);
    if (!selectedCountry) return;

    const customsDuty = price * 0.15;
    const deliveryCost = selectedCountry.deliveryCost;
    const serviceFee = 50000;
    const euroRate = 100;
    const total = (price + customsDuty + deliveryCost) * euroRate + serviceFee;

    setResult({
      customsDuty: customsDuty * euroRate,
      deliveryCost: deliveryCost * euroRate,
      serviceFee,
      total,
      days: selectedCountry.days,
    });
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("ru-RU").format(Math.round(value));
  };

  return (
    <section id="calculator" className="section-padding bg-gray-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-emerald-400 font-medium mb-4">
            <CalcIcon className="w-5 h-5" />
            Калькулятор
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Рассчитайте <span className="gradient-text">стоимость</span> пригона
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Узнайте примерную стоимость доставки вашего автомобиля из Европы
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-10 glass-card glow-border">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Стоимость автомобиля (EUR)
                  </label>
                  <div className="relative">
                    <Euro className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      type="number"
                      placeholder="Например: 25000"
                      value={carPrice}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCarPrice(e.target.value)}
                      className="pl-12 h-14 text-lg bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Страна покупки
                  </label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger className="h-14 text-lg bg-gray-900/50 border-gray-700 text-white focus:border-emerald-500 focus:ring-emerald-500/20">
                      <SelectValue placeholder="Выберите страну" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      {countries.map((c) => (
                        <SelectItem key={c.value} value={c.value} className="text-base text-gray-200 focus:bg-emerald-500/20 focus:text-white">
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={calculate}
                  className="w-full h-14 text-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25"
                >
                  Рассчитать стоимость
                </Button>
              </div>

              {/* Result Section */}
              <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-2xl p-6 border border-emerald-500/20">
                {result ? (
                  <div className="space-y-6">
                    <div className="text-center pb-6 border-b border-white/10">
                      <p className="text-sm text-gray-400 mb-2">Итоговая стоимость</p>
                      <p className="text-4xl font-bold text-emerald-400">
                        {formatPrice(result.total)} ₽
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        Срок доставки: {result.days} дней
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2 text-gray-400">
                          <FileCheck className="w-4 h-4 text-emerald-400" />
                          Таможенные платежи
                        </span>
                        <span className="font-medium text-white">{formatPrice(result.customsDuty)} ₽</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2 text-gray-400">
                          <Truck className="w-4 h-4 text-emerald-400" />
                          Доставка
                        </span>
                        <span className="font-medium text-white">{formatPrice(result.deliveryCost)} ₽</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2 text-gray-400">
                          <CalcIcon className="w-4 h-4 text-emerald-400" />
                          Услуги компании
                        </span>
                        <span className="font-medium text-white">{formatPrice(result.serviceFee)} ₽</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 pt-4 border-t border-white/10">
                      * Расчёт приблизительный. Точную стоимость уточняйте у менеджера.
                    </p>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-8">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 border border-emerald-500/20">
                      <CalcIcon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <p className="text-lg font-medium text-white mb-2">Готовы рассчитать?</p>
                    <p className="text-sm text-gray-500">
                      Заполните все поля и нажмите кнопку &quot;Рассчитать стоимость&quot;
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
