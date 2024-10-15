import React, { useState, useEffect } from 'react';

const images = [
   'https://w.wallhaven.cc/full/jx/wallhaven-jxpvom.jpg'
   ,
    'https://w.wallhaven.cc/full/o5/wallhaven-o5rz87.jpg'
    ,
    'https://w.wallhaven.cc/full/we/wallhaven-wegw5p.jpg'
    ,
    'https://w.wallhaven.cc/full/85/wallhaven-85v8dy.png'
    ,
    'https://w.wallhaven.cc/full/3l/wallhaven-3lv3q6.jpg'
    ,

];

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-1/2 h-auto overflow-hidden rounded-lg shadow-sm shadow-gray-600">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-100 object-cover"
            />

            {/* Previous Button */}
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white px-3 py-2 rounded-full shadow-md hover:bg-gray-200"
            >
                ❮
            </button>

            {/* Next Button */}
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white px-3 py-2 rounded-full shadow-md hover:bg-gray-200"
            >
                ❯
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center ">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'
                            } cursor-pointer`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slideshow;
