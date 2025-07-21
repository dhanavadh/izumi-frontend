"use client";
import React from "react";
import Clock from "react-live-clock";
import { AlarmClock, TriangleAlert } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-row items-start justify-start font-sans min-h-screen">
      <section id="time" className="flex flex-col p-4 h-screen border-r-2 border-gray-100 w-1/4">
        <div className="flex flex-col items-start">
          <span className="flex items-center justify-center gap-1">
            <AlarmClock className="w-5 h-5 text-green-700"/>
            <h2 className="text-lg font-medium">เวลาปัจจุบัน</h2>
          </span>          
          <p className="text-gray-600">กรุงเทพฯ, ประเทศไทย</p>                
          <Clock format={"D MMMM YYYY"} timezone={"Asia/Bangkok"} className="text-gray-600"/>
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Bangkok"} className="text-4xl font-medium" />
        </div>
        <div className="flex flex-col items-start mt-4">
          <span className="flex items-center justify-center gap-1">
            <TriangleAlert className="w-5 h-5 text-amber-700"/>            
            <h2 className="text-lg font-medium">ประกาศ</h2>            
          </span>
          <span className="flex flex-col items-start px-4 py-2 bg-amber-50 border-l-4 border-amber-500 mt-2">
            <p className="font-medium">ทดสอบระบบประกาศ</p>
            <p className="text-sm mt-1">ยินดีต้อนรับสู่ระบบของเรายินดีต้อนรับสู่ระบบของเรายินดีต้อนรับสู่ระบบของเรา</p>
            <a href="#" className="text-sm mt-2">อ่านต่อ</a>
          </span>
        </div>
      </section>
      <section id="dashboard" className="p-4 flex flex-col w-full min-h-full">
        <h2 className="text-lg font-semibold">แดชบอร์ด</h2>
        <div className="flex flex-col items-start">
          <p className="text-gray-600">ข้อมูลสรุปและการแจ้งเตือนจะปรากฏที่นี่</p>          
        </div>
      </section>
    </main>
  );
}
