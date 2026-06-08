import { create } from "zustand";

export const MAX_TIME = 25 * 60;
interface TimerState {
  timeLeftInSeconds: number;
  isTimerRunning: boolean;
  tick: () => void;
  reset: () => void;
  start: () => void;
  pause: () => void;
}

export const useTimerStore = create<TimerState>((set) => ({
  timeLeftInSeconds: MAX_TIME,
  isTimerRunning: false,
  tick: () => set((state) => ({ timeLeftInSeconds: state.timeLeftInSeconds - 1})),
  reset: () => set((state) => ({ timeLeftInSeconds: MAX_TIME, isTimerRunning: false})),
  start: () => set((state) => ({ isTimerRunning: true})),
  pause: () => set((state) => ({ isTimerRunning: false})),
}));
