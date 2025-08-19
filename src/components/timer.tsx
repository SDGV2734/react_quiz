import { TimerIcon } from "lucide-react";

interface TimerProps {
  timeLeft: number;
}
export default function Timer({ timeLeft }: TimerProps) {
  // Add warning class when time is less than or equal to 10 seconds
  const isLowTime = timeLeft <= 10;
  const timerClasses = `flex items-center justify-center space-x-2 text-2xl font-bold mb-8 ${
    isLowTime ? "text-red-600 warning danger" : "text-gray-700"
  }`;

  return (
    <div className={timerClasses} data-testid="timer">
      <TimerIcon className={`w-6 h-6 ${isLowTime ? "animate-pulse" : ""}`} />
      <span>{timeLeft}s</span>
    </div>
  );
}
