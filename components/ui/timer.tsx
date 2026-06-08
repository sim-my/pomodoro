"use client"

import { useTimer } from '@/hooks/useTimer';
import { MAX_TIME, useTimerStore } from '@/lib/timer-store';
import Image from 'next/image';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


export default function Timer() {
    useTimer();

    const { timeLeftInSeconds } = useTimerStore();
    const progressPercent = (( MAX_TIME- timeLeftInSeconds) / MAX_TIME) * 100;


    return <CircularProgressbarWithChildren
        value={progressPercent}
        strokeWidth={8}
        styles={{
            path: {
                stroke: `#EC4F51`,
            },
            trail: {
                stroke: "#d6d6d6",
            },
        }}
    >
        <Image src="/pomo-clock.png" alt="logo" width={150} height={150} />
        <div className="font-jersey_25 text-3xl text-[#EC4F51]">{formatTime(timeLeftInSeconds)}</div>

    </CircularProgressbarWithChildren>;
}