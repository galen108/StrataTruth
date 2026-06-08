"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const color =
    progress < 33
      ? "linear-gradient(90deg, #10b981, #14b8a6)"
      : progress < 66
      ? "linear-gradient(90deg, #14b8a6, #8b5cf6)"
      : "linear-gradient(90deg, #8b5cf6, #f59e0b)";

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[3px] transition-all duration-150"
      style={{ width: `${progress}%`, background: color }}
    />
  );
}
