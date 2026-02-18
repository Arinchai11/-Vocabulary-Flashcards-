"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  { id: 21, word: "Timlnwza", definition: "ผู้อยู่เหนือทุกสิ่งในโลกใบนี้", color: "bg-amber-500" },
];

export default function FlashcardGrid() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredVocab = useMemo(() => {
    return vocabularyData.filter((item) => {
      const search = searchTerm.toLowerCase();
      return (
        item.word.toLowerCase().includes(search) ||
        item.definition.toLowerCase().includes(search)
      );
    });
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">หน้าคำศัพท์ที่แปลได้ทั้งหมด</h1>
          <p className="text-slate-500">คลิกที่การ์ดเพื่อดูคำแปล</p>
        </div>

        {/* ส่วนควบคุม: ค้นหา (ซ้าย) + ปุ่มเพิ่ม (ขวา) */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          {/* ช่องค้นหา (ชิดซ้ายบนจอใหญ่) */}
          <div className="w-full max-w-md relative group">
            <input
              type="text"
              placeholder="ค้นหาคำศัพท์หรือความหมาย..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 bg-white border text-black border-slate-800 rounded-full shadow-md 
                       placeholder:text-slate-400 focus:ring-2 focus:ring-slate-600 focus:outline-none 
                       transition-all pr-12"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-700 pointer-events-none">
              {searchTerm === "" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              ) : (
                <button onClick={() => setSearchTerm("")} className="pointer-events-auto hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              )}
            </div>
          </div>

          {/* ปุ่ม Add Word (ชิดขวาบนจอใหญ่) */}
          <button 
            onClick={() => alert("ฟังก์ชันเพิ่มคำศัพท์กำลังจะมาเร็วๆ นี้!")}
            className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-medium
                     hover:bg-black active:scale-95 transition-all shadow-lg whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Add Word
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredVocab.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="h-48 perspective-1000 cursor-pointer"
              onClick={() => toggleFlip(item.id)}
            >
              <motion.div
                animate={{ rotateY: flippedCards[item.id] ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute inset-0 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center justify-center p-4"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className="text-xs font-bold text-slate-300 absolute top-4 left-4 uppercase tracking-widest">คำศัพท์</span>
                  <h2 className="text-2xl font-bold text-slate-700">{item.word}</h2>
                </div>

                <div
                  className={`absolute inset-0 ${item.color} rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 text-white text-center`}
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <span className="text-xs font-bold opacity-50 absolute top-4 left-4 uppercase tracking-widest">ความหมาย</span>
                  <p className="text-xl font-medium leading-tight">{item.definition}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredVocab.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-center py-20 text-slate-700"
        >
          <p className="text-xl">ไม่พบคำศัพท์ "{searchTerm}" ในฐานข้อมูล</p>
        </motion.div>
      )}

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}