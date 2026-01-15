"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "С чего начинается подбор и покупка автомобиля?",
    answer: "Процесс начинается с консультации, где мы обсуждаем ваши требования: марку, модель, бюджет, комплектацию. После этого мы подбираем варианты на проверенных европейских аукционах и площадках, предоставляем вам отчёты о состоянии автомобилей.",
  },
  {
    question: "Какие авто нельзя привезти в Россию для езды?",
    answer: "Ограничения касаются автомобилей с экологическим классом ниже Евро-4, праворульных авто из некоторых стран, а также авто без VIN-номера или с повреждённой идентификационной маркировкой. Также запрещён ввоз авто с правым рулём для коммерческого использования.",
  },
  {
    question: "Можете ли выбрать определённый автомобиль?",
    answer: "Да, мы можем найти конкретный автомобиль по вашим критериям: марка, модель, год выпуска, комплектация, цвет, пробег и бюджет. Также можем проверить и купить автомобиль по ссылке, которую вы нашли самостоятельно.",
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer: "Мы гарантируем юридическую чистоту автомобиля (отсутствие залогов, ограничений, скрученного пробега). Заключаем официальный договор с фиксированной ценой. В случае обнаружения скрытых дефектов после покупки, помогаем в решении спорных ситуаций.",
  },
  {
    question: "Как происходит оплата ваших услуг?",
    answer: "Оплата происходит поэтапно: аванс после заключения договора (20-30%), основная сумма за автомобиль после его проверки и подтверждения покупки, остаток за услуги после доставки в Россию и передачи документов.",
  },
  {
    question: "Помогаете ли вы с постановкой авто в ГИБДД?",
    answer: "Да, мы оказываем полный комплекс услуг, включая помощь в постановке автомобиля на учёт. Сопровождаем весь процесс, готовим необходимые документы и можем представлять ваши интересы в ГИБДД по доверенности.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-gray-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-emerald-400 font-medium mb-4">
            <HelpCircle className="w-5 h-5" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ответы на популярные вопросы о пригоне автомобилей
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card glow-border rounded-2xl px-6 data-[state=open]:border-emerald-500/40"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline text-white hover:text-emerald-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
