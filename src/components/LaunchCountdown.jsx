import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, Clock, Rocket, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Confetti/Celebration Component
const CelebrationEffect = ({ onComplete }) => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Create celebration particles
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'];
        const newParticles = [];

        for (let i = 0; i < 150; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: -10 - Math.random() * 20,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: 5 + Math.random() * 10,
                rotation: Math.random() * 360,
                speedY: 2 + Math.random() * 4,
                speedX: (Math.random() - 0.5) * 4,
                rotationSpeed: (Math.random() - 0.5) * 10,
                type: Math.random() > 0.5 ? 'circle' : 'rect',
                delay: Math.random() * 1000
            });
        }
        setParticles(newParticles);

        // End celebration after 4 seconds
        const timeout = setTimeout(() => {
            onComplete?.();
        }, 4000);

        return () => clearTimeout(timeout);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden">
            <style>{`
                @keyframes confettiFall {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(720deg);
                        opacity: 0;
                    }
                }
                @keyframes celebrateText {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
            `}</style>

            {/* Confetti particles */}
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.type === 'rect' ? particle.size * 0.6 : particle.size,
                        backgroundColor: particle.color,
                        borderRadius: particle.type === 'circle' ? '50%' : '2px',
                        animation: `confettiFall ${3 + Math.random() * 2}s ease-out forwards`,
                        animationDelay: `${particle.delay}ms`,
                        transform: `rotate(${particle.rotation}deg)`
                    }}
                />
            ))}

            {/* Celebration message */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className="text-center animate-bounce"
                    style={{ animation: 'celebrateText 0.5s ease-in-out infinite' }}
                >
                    <div className="text-7xl mb-4">🎉</div>
                    {/* <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg mb-2">
                        Welcome!
                    </h2> */}
                    {/* <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
                        The wait is over!
                    </p> */}
                </div>
            </div>
        </div>
    );
};

const LaunchCountdown = ({
    targetDate,
    title = "ODISHA AI Mission",
    titleOd = "ଓଡ଼ିଶା AI ମିଶନ",
    subtitle = "Get ready for the biggest AI event in Odisha!",
    subtitleOd = "ଓଡ଼ିଶାର ସର୍ବବୃହତ AI ଇଭେଣ୍ଟ ପାଇଁ ପ୍ରସ୍ତୁତ ହୁଅନ୍ତୁ!",
    lockWebsite = false,
    onClose
}) => {
    const { isOdia } = useLanguage();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isVisible, setIsVisible] = useState(true);
    const [isCountdownComplete, setIsCountdownComplete] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Check if countdown was already completed (from localStorage)
    useEffect(() => {
        const countdownCompleted = localStorage.getItem('countdownCompleted');
        const completedDate = localStorage.getItem('countdownCompletedDate');

        // If countdown was completed for this target date, don't show
        if (countdownCompleted === 'true' && completedDate === targetDate) {
            setIsVisible(false);
            onClose?.();
        }
    }, [targetDate, onClose]);

    // Disable body scroll when countdown is active
    useEffect(() => {
        if (isVisible && !isClosing && !showCelebration) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isVisible, isClosing, showCelebration]);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const target = new Date(targetDate);
            const difference = target - now;

            if (difference <= 0) {
                setIsCountdownComplete(true);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            });
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // Handle countdown completion with celebration
    const handleCelebrationComplete = useCallback(() => {
        setShowCelebration(false);
        setIsVisible(false);
        document.body.style.overflow = '';
        onClose?.();
    }, [onClose]);

    // Auto-close with celebration when countdown completes
    useEffect(() => {
        if (isCountdownComplete && !showCelebration) {
            // Mark countdown as completed in localStorage
            localStorage.setItem('countdownCompleted', 'true');
            localStorage.setItem('countdownCompletedDate', targetDate);

            // Show celebration
            setShowCelebration(true);
            setIsClosing(true);
        }
    }, [isCountdownComplete, showCelebration, targetDate]);

    const handleClose = () => {
        if (!lockWebsite) {
            setIsClosing(true);
            setTimeout(() => {
                setIsVisible(false);
                onClose?.();
            }, 800);
        }
    };

    // If celebration is showing, render only celebration
    if (showCelebration) {
        return <CelebrationEffect onComplete={handleCelebrationComplete} />;
    }

    if (!isVisible) return null;

    const timeUnits = [
        { label: 'Days', labelOd: 'ଦିନ', value: timeLeft.days },
        { label: 'Hours', labelOd: 'ଘଣ୍ଟା', value: timeLeft.hours },
        { label: 'Minutes', labelOd: 'ମିନିଟ୍', value: timeLeft.minutes },
        { label: 'Seconds', labelOd: 'ସେକେଣ୍ଡ୍', value: timeLeft.seconds }
    ];

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700
                ${isClosing ? 'animate-shutter-close' : 'opacity-100'}
            `}
            style={{
                animation: isClosing ? 'shutterClose 0.8s ease-in-out forwards' : 'none'
            }}
        >
            {/* Shutter Animation Styles */}
            <style>{`
                @keyframes shutterClose {
                    0% {
                        clip-path: inset(0 0 0 0);
                        opacity: 1;
                    }
                    50% {
                        clip-path: inset(0 0 0 0);
                        opacity: 1;
                    }
                    100% {
                        clip-path: inset(50% 0 50% 0);
                        opacity: 0;
                    }
                }
            `}</style>

            {/* Orange Gradient Background with Blur */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 backdrop-blur-sm"
                onClick={!lockWebsite ? handleClose : undefined}
            />

            {/* Visible Background Pattern with Blur */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large blurred circles for depth */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-400/40 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />

                {/* Floating blurred shapes */}
                <div className="absolute top-20 right-20 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-40 left-20 w-32 h-32 bg-orange-300/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }} />
                <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />

                {/* Sparkle Effects */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-white/70 rounded-full animate-ping"
                        style={{
                            top: `${10 + Math.random() * 80}%`,
                            left: `${10 + Math.random() * 80}%`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto py-6">
                {/* Logo at Top - Responsive and Larger */}
                <div className="mb-6 md:mb-8">
                    <img
                        src="/logo/Odisha_Ai_Mission.png"
                        alt="Odisha AI Mission"
                        className="h-20 sm:h-24 md:h-28 lg:h-48 mx-auto drop-shadow-lg"
                    />
                </div>

                {/* Coming Soon Badge */}
                <div className="mb-3 md:mb-4">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/25 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/40 shadow-lg">
                        <Rocket className="w-4 h-4" />
                        {isOdia ? 'ଶୀଘ୍ର ଆସୁଛି' : 'Launching Soon'}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 md:mb-10 tracking-tight drop-shadow-lg">
                    {isOdia ? titleOd : title}
                </h1>

                {/* Subtitle 
                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-xl mx-auto px-4">
                    {isOdia ? subtitleOd : subtitle}
                </p>
*/}
                {/* Countdown Timer */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto px-2">
                    {timeUnits.map((unit, index) => (
                        <div key={unit.label} className="relative">
                            {/* Card with blur effect */}
                            <div className="bg-white/25 backdrop-blur-lg rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 border border-white/40 shadow-xl hover:bg-white/35 transition-all duration-300">
                                {/* Number */}
                                <div className="relative">
                                    <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tabular-nums drop-shadow-md">
                                        {String(unit.value).padStart(2, '0')}
                                    </span>
                                    {unit.label === 'Seconds' && (
                                        <span className="absolute -right-0.5 md:-right-1 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 md:gap-1">
                                            <span className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full animate-pulse shadow-lg" />
                                            <span className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }} />
                                        </span>
                                    )}
                                </div>

                                {/* Label */}
                                <div className="mt-1 text-white/80 font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">
                                    {isOdia ? unit.labelOd : unit.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Event Date & Time */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white text-xs sm:text-sm md:text-base mb-4 md:mb-6 shadow-lg">
                    <Clock className="w-3.5 h-3.5 md:w-5 md:h-5" />
                    <span className="font-medium">
                        {new Date(targetDate).toLocaleDateString(isOdia ? 'or-IN' : 'en-IN', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                        <span className="mx-1.5 md:mx-2 opacity-60">•</span>
                        {new Date(targetDate).toLocaleTimeString(isOdia ? 'or-IN' : 'en-IN', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true
                        })}
                    </span>
                </div>

                {/* CTA Button - Only show if website is NOT locked */}
                {!lockWebsite && (
                    <div className="mt-3 md:mt-4">
                        <button
                            onClick={handleClose}
                            className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-orange-600 font-bold text-sm sm:text-base md:text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                        >
                            <span className="flex items-center gap-2">
                                {isOdia ? 'ୱେବସାଇଟ୍ ଦେଖନ୍ତୁ' : 'Continue to Website'}
                                <Rocket className="w-4 h-4 md:w-5 md:h-5" />
                            </span>
                        </button>
                    </div>
                )}

                {/* Locked message 
                {lockWebsite && (
                    <div className="mt-3 md:mt-4 text-white/80 text-xs sm:text-sm flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        {isOdia ? 'ଇଭେଣ୍ଟ ଆରମ୍ଭ ପର୍ଯ୍ୟନ୍ତ ଅପେକ୍ଷା କରନ୍ତୁ' : 'Website will be available when the event begins'}
                    </div>
                )}*/}
            </div>
        </div>
    );
};

export default LaunchCountdown;
