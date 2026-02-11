"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// ข้อมูลคำศัพท์
const vocabularyData = [
  { id: 1, word: "Resilient", definition: "ยืดหยุ่น, ล้มแล้วลุกเร็ว", color: "bg-blue-500" },
  { id: 2, word: "Inevitably", definition: "อย่างหลีกเลี่ยงไม่ได้", color: "bg-emerald-500" },
  { id: 3, word: "Authentic", definition: "แท้จริง, น่าเชื่อถือ", color: "bg-amber-500" },
  { id: 4, word: "Collaboration", definition: "การร่วมมือกัน", color: "bg-purple-500" },
  { id: 5, word: "Innovative", definition: "ซึ่งเป็นนวัตกรรมใหม่", color: "bg-rose-500" },
  { id: 6, word: "Persistence", definition: "ความพยายามเยี่ยงอย่าง", color: "bg-indigo-500" },
  { id: 7, word: "Resilient", definition: "ยืดหยุ่น, ล้มแล้วลุกเร็ว", color: "bg-red-500" },
  { id: 8, word: "Inevitably", definition: "อย่างหลีกเลี่ยงไม่ได้", color: "bg-sky-400" },
  { id: 9, word: "Authentic", definition: "แท้จริง, น่าเชื่อถือ", color: "bg-purple-400" },
  { id: 10, word: "Collaboration", definition: "การร่วมมือกัน", color: "bg-teal-400" },
  { id: 11, word: "Innovative", definition: "ซึ่งเป็นนวัตกรรมใหม่", color: "bg-zinc-700" },
  { id: 12, word: "Persistence", definition: "ความพยายามเยี่ยงอย่าง", color: "bg-cyan-500" },
  { id: 13, word: "Resilient", definition: "ยืดหยุ่น, ล้มแล้วลุกเร็ว", color: "bg-green-500" },
  { id: 14, word: "Inevitably", definition: "อย่างหลีกเลี่ยงไม่ได้", color: "bg-fuchsia-600" },
  { id: 15, word: "Authentic", definition: "แท้จริง, น่าเชื่อถือ", color: "bg-lime-500" },
  { id: 16, word: "Collaboration", definition: "การร่วมมือกัน", color: "bg-violet-600" },
  { id: 17, word: "Innovative", definition: "ซึ่งเป็นนวัตกรรมใหม่", color: "bg-orange-700" },
  { id: 18, word: "Persistence", definition: "ความพยายามเยี่ยงอย่าง", color: "bg-zinc-900" },
  { id: 19, word: "Resilient", definition: "ยืดหยุ่น, ล้มแล้วลุกเร็ว", color: "bg-fuchsia-600" },
  { id: 20, word: "Inevitably", definition: "อย่างหลีกเลี่ยงไม่ได้", color: "bg-cyan-500" },
];

export default function FlashcardGrid() {
  // เก็บสถานะการพลิกแยกแต่ละใบโดยใช้ ID
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">หน้าคำศัพท์ที่แปลได้ทั้งหมด</h1>
        <p className="text-slate-500">คลิกที่การ์ดแต่ละใบเพื่อดูคำแปล</p>
      </header>

      {/* Grid Layout: ปรับจำนวน Column ตามขนาดหน้าจอ */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vocabularyData.map((item) => (
          <div 
            key={item.id} 
            className="h-48 perspective-1000 cursor-pointer"
            onClick={() => toggleFlip(item.id)}
          >
            <motion.div
              animate={{ rotateY: flippedCards[item.id] ? 180 : 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-full h-full w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* หน้าหน้า (Front) */}
              <div 
                className="absolute inset-0 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center p-4"
                style={{ backfaceVisibility: "hidden" }}
              >
                <h2 className="text-2xl font-bold text-slate-700">{item.word}</h2>
              </div>

              {/* หน้าหลัง (Back) */}
              <div 
                className={`absolute inset-0 ${item.color} rounded-xl shadow-lg flex items-center justify-center p-6 text-white text-center`}
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <p className="text-xl font-medium leading-tight">{item.definition}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}