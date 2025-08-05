import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const AnimatedLocationTime = () => {
  const [locations, setLocations] = useState([
    { code: "BDT", country: "Bangladesh", time: "", active: true },
    { code: "IST", country: "India", time: "", active: false },
    { code: "AEST", country: "Australia", time: "", active: false },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  // Update the times
  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // Get the current timezone offset in minutes
      const localOffset = now.getTimezoneOffset();

      setLocations((prev) =>
        prev.map((location) => {
          let time = "";
          let targetOffsetHours = 0;

          // Set the correct UTC offset for each location
          if (location.code === "BDT") {
            // Bangladesh (UTC+6)
            targetOffsetHours = 6;
          } else if (location.code === "IST") {
            // India (UTC+5:30)
            targetOffsetHours = 5.6;
          } else if (location.code === "AEST") {
            // Australia (UTC+10)
            targetOffsetHours = 10;
          }

          // Convert offset from hours to minutes
          const targetOffsetMinutes = targetOffsetHours * 60;

          // Calculate the time difference between local time and target timezone
          const diffMinutes = targetOffsetMinutes + localOffset;

          // Create a new date object with the adjusted time
          const targetTime = new Date(now.getTime() + diffMinutes * 60000);

          time = targetTime.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          });

          return { ...location, time };
        })
      );
    };

    updateTimes();
    const timeInterval = setInterval(updateTimes, 60000); // Update every minute

    return () => clearInterval(timeInterval);
  }, []);

  // Rotate through locations
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % locations.length;

        setLocations((prev) =>
          prev.map((loc, i) => ({
            ...loc,
            active: i === newIndex,
          }))
        );

        return newIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(rotationInterval);
  }, [locations.length]);

  return (
    <div className={cn("relative h-6 w-28 text-right overflow-hidden  font-medium")}>
      {locations.map((location) => (
        <div
          key={location.code}
          className={`absolute right-0 top-0 flex items-center justify-end gap-2 transition-all duration-700 ${location.active
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
          <p>
            <span>{location.code}</span> <span>{location.time}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default AnimatedLocationTime;