"use client"
import React, { useState } from 'react'
import StoryCard from './StoryCard'

const StorySection = () => {
    const sliderRef = React.useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(event.pageX - (sliderRef.current?.offsetLeft || 0));
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const x = event.pageX - (sliderRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; // Adjust the sensitivity of the dragging
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };


    return (
        <section
            ref={sliderRef}
            className="slider flex gap-3 md:w-[630px] w-full h-[85px] relative bg-red-100 overflow-x-auto"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className="flex gap-4 items-center">
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
            </div>
        </section>

    )
}

export default StorySection