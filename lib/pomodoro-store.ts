import { create } from "zustand";

export const MAX_TIME = 25 * 60;

export const POMODORO_SESSION_OPTIONS = [30, 60];

interface PomodoroState {
    
}

export const useTimerStore = create<PomodoroState>((set) => ({

}));
