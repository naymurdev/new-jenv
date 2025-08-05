import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

const ForwardTimer = ({ className }: { className: string }) => {
    const [timePassed, setTimePassed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set the start date
        const startDate = new Date('December 15, 2024 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = now - startDate; // Count forward

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimePassed({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatNumber = (num: number): string => {
        return num < 10 ? `0${num}` : `${num}`;
    };

    return (
        <div className={cn("items-center justify-center font-medium", className)}>
            <div className="flex items-center mx-1 gap-1">
                <span>{formatNumber(timePassed.days)}</span>
                <span>D</span>
            </div>
            <span className="mx-0.5">:</span>
            <div className="flex items-center mx-1 gap-1">
                <span>{formatNumber(timePassed.hours)}</span>
                <span>H</span>
            </div>
            <span className="mx-0.5">:</span>
            <div className="flex items-center mx-1 gap-1">
                <span>{formatNumber(timePassed.minutes)}</span>
                <span>M</span>
            </div>
            <span className="mx-0.5">:</span>
            <div className="flex items-center mx-1 gap-1">
                <span>{formatNumber(timePassed.seconds)}</span>
                <span>S</span>
            </div>
        </div>
    );
};

export default ForwardTimer;
