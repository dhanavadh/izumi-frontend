"use client";
import React from "react";
import Clock from "react-live-clock";
import { AlarmClock } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-row items-start justify-start font-sans min-h-screen">
      <section id="time" className="flex flex-col p-4 h-screen border-r-2 border-gray-100">
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-semibold">เวลาปัจจุบัน</h2>
          <p className="text-gray-600">กรุงเทพฯ, ประเทศไทย</p>                
          <Clock format={"MMMM Mo, YYYY"} timezone={"Asia/Bangkok"} className="text-gray-600"/>
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Bangkok"} className="text-2xl font-medium" />
        </div>
        <div className="flex flex-col items-start mt-4">
          <span className="flex items-center justify-center gap-1">
            <AlarmClock className="w-5 h-5 text-green-700"/>
            <h2 className="text-xl font-medium">ประกาศ</h2>            
          </span>
          <p className="text-gray-600">ยินดีต้อนรับสู่ระบบของเรา</p>
        </div>
      </section>
      <section id="dashboard" className="p-4 flex flex-col w-full min-h-full">
        <h2 className="text-xl font-semibold">แดชบอร์ด</h2>
        <div className="flex flex-col items-start">
          <p className="text-gray-600">ข้อมูลสรุปและการแจ้งเตือนจะปรากฏที่นี่</p>          
        </div>
      </section>
    </main>
  );
}
