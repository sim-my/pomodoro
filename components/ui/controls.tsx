import { useTimerStore } from "@/lib/timer-store";
import { Pause, RefreshCw, Play } from "lucide-react";

export default function Controls() {
    const { isTimerRunning, start, pause, reset } = useTimerStore();
    return (
        <div className="mt-8 flex flex-row items-center justify-center gap-4">
            <button className="cursor-pointer transition-transform hover:rotate-360 hover:scale-110 duration-300" onClick={isTimerRunning ? pause : start}>
                {isTimerRunning ? <Pause color="#EC4F51" size={32} /> : <Play color="#EC4F51" size={32} />}
            </button>

            <RefreshCw
                className="cursor-pointer transition-transform hover:rotate-360 hover:scale-110 duration-300"
                onClick={reset}
                color="#EC4F51"
                size={32}
            />
        </div>
    );
};