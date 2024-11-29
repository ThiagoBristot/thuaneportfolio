import React, { useState, useEffect } from 'react';

const CourseCard = ({ 
  title = "Course Title", 
  description = "Course Description", 
  images = ["/src/assets/*"]
}) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    // Auto-cycle through images every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentMediaIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  const handleMediaSelect = (index) => {
    setCurrentMediaIndex(index);
  };

  const isVideo = images[currentMediaIndex]?.endsWith('.mp4') || 
                 images[currentMediaIndex]?.includes('youtube.com');

  return (
    <div className="relative w-[90vw] h-[60vh] overflow-hidden">
      {/* Background Media */}
      {!isVideo ? (
        <img 
          src={images[currentMediaIndex]} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <video 
          src={images[currentMediaIndex]}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 p-8 text-white flex flex-col justify-between h-full">
        <div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl max-w-xl">{description}</p>
        </div>

        {/* Media Selection Buttons */}
        <div className="flex gap-2 mt-4">
          {images.map((media, index) => (
            <button 
              key={index}
              className={`
                w-12 h-12 rounded-md transition-all duration-300
                ${currentMediaIndex === index 
                  ? "bg-white text-black" 
                  : "bg-white/30 text-white hover:bg-white/50"}
              `}
              onClick={() => handleMediaSelect(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

// Example Usage
const Courseshowcase = () => {
  const courses = [
    {
      title: "Basic Course",
      description: "Comprehensive introduction to fundamental concepts",
      images: [
        "/api/placeholder/1600/900", 
        "/api/placeholder/1601/901", 
        "/api/placeholder/1602/902"
      ]
    },
    {
      title: "Intermediate Course",
      description: "Advanced techniques and practical applications",
      images: [
        "/api/placeholder/1603/903", 
        "/api/placeholder/1604/904"
      ]
    },
    {
      title: "Premium Course",
      description: "Expert-level insights and exclusive content",
      images: [
        "/api/placeholder/1605/905"
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-4">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
};