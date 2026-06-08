"use client";

import { useTimerStore } from "@/lib/timer-store";
import { useEffect } from "react";

export function useTimer() {
  const { timeLeftInSeconds, isTimerRunning, tick, pause } = useTimerStore();

  useEffect(() => {
    if (!isTimerRunning) return;

    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, [isTimerRunning, tick]);

  useEffect(() => {
    if (timeLeftInSeconds <= 0 && isTimerRunning) {
      pause();
    }
  }, [timeLeftInSeconds, isTimerRunning, pause]);
}
