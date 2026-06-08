"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {  SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Timer from "@/components/ui/timer";
import Controls from "@/components/ui/controls";
import { useState } from "react";


export default function Home() {
  const enum PomodoroState {
    pomodoro = "pomodoro",
    shortBreak = "shortBreak",
    longBreak = "longBreak",  
  };

  const [pomodoroState, setPomodoroState] = useState(null);
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <Card className="w-full bg-[#F6E3E5] max-w-sm shadow-lg">
        <CardHeader className="flex justify-between">
          <div className="flex items-end">
            <Image src="/pomo-clock.png" alt="logo" width={30} height={30} />
            <span className="font-kaushan text-[#EC4F51]">Pompom</span>
          </div>
          <div className="flex items-end gap-2">
            <SettingsIcon color="#EC4F51" size={32} />
          </div>
        </CardHeader>
        <CardContent>
          <Timer />
          <Controls />
          <div className="mt-12 flex flex-col items-center justify-center gap-4">
            <Button size="lg" variant={pomodoroState === PomodoroState.pomodoro ? "active" : "inactive"}>Pomodoro</Button>

          <div className="mb-4 flex flex-row items-center justify-center gap-4">
            <Button size="lg" variant={pomodoroState === PomodoroState.shortBreak ? "active" : "inactive"}>Short Break</Button>
            <Button size="lg" variant={pomodoroState === PomodoroState.longBreak ? "active" : "inactive"}>Long Break</Button>
          </div>
            </div>
        </CardContent>
      </Card>

    </main>
  );
}
