import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const EnhancedHeroCarousel = ({ slides, onReadPolicy }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { isOdia } = useLanguage();

  const handleReadPolicy = () => {
    if (onReadPolicy) {
      onReadPolicy();
    } else {
      document.getElementById('policy-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide Background */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        {slide.type === 'video' ? (
          <div className="relative w-full h-full">
            <img
              src={slide.videoUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          </div>
        )}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-in fade-in slide-in-from-left duration-1000">
            {/* Event Badge - Animated */}
            {slide.event && (
              <div className="mb-4 inline-block animate-in fade-in slide-in-from-top duration-700">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border-2 border-orange-400 animate-pulse-slow">
                  🎯 {isOdia && slide.eventOd ? slide.eventOd : slide.event}
                </div>
              </div>
            )}

            {/* Government Logos */}
            <div className="flex items-center flex-wrap gap-3 mb-6">
              {slide.logos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 animate-in fade-in duration-1000"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-white text-xs font-semibold">{logo}</span>
                </div>
              ))}
            </div>

            {/* Title - Animated */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-left animate-in fade-in slide-in-from-left duration-1000">
              {isOdia && slide.titleOd ? slide.titleOd : slide.title}
            </h1>

            {/* Subtitle - Animated */}
            <h2 className="text-2xl md:text-3xl text-orange-400 font-semibold mb-4 text-left animate-in fade-in slide-in-from-left duration-1000 delay-200">
              {slide.subtitle}
            </h2>

            {/* Description - Animated */}
            <p className="text-xl text-gray-200 mb-8 leading-relaxed text-left max-w-2xl animate-in fade-in slide-in-from-left duration-1000 delay-300">
              {isOdia && slide.descriptionOd ? slide.descriptionOd : slide.description}
            </p>

            {/* CTA Buttons - Animated */}
            <div className="flex flex-wrap gap-4 justify-start animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 shadow-2xl transform transition-all hover:scale-105"
                onClick={() => document.getElementById('submit-idea-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {isOdia ? 'ଆପଣଙ୍କ AI ପ୍ରସ୍ତାବ ଦାଖଲ କରନ୍ତୁ' : 'Submit Your AI Proposal'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 transform transition-all hover:scale-105"
                onClick={handleReadPolicy}
              >
                {isOdia ? 'ଓଡ଼ିଶା AI ନୀତି ୨୦୨୫ ପଢ଼ନ୍ତୁ' : 'Read Odisha AI policy 2025'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Left Navigation Button */}
      <Button
        onClick={prevSlide}
        size="icon"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full border-2 border-white/40 hover:border-white/60 transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
      </Button>

      {/* Right Navigation Button */}
      <Button
        onClick={nextSlide}
        size="icon"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full border-2 border-white/40 hover:border-white/60 transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
      </Button>

      {/* Slide Indicators - Hidden */}
      <div className="hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'w-12 bg-orange-500'
                : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 z-20 text-white text-sm bg-black/30 hover:bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full transition-colors"
      >
        {isAutoPlaying ? (isOdia ? '⏸ ବିରତି' : '⏸ Pause') : (isOdia ? '▶ ଚଳାନ୍ତୁ' : '▶ Play')}
      </button>
    </div>
  );
};

export default EnhancedHeroCarousel;
