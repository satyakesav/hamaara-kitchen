"use client";

import { useSyncExternalStore } from "react";

// Happy hour runs 3 PM – 5:30 PM daily
const HAPPY_HOUR_START = 15;       // 3:00 PM
const HAPPY_HOUR_END_H = 17;
const HAPPY_HOUR_END_M = 30;
const HAPPY_HOUR_END = HAPPY_HOUR_END_H + HAPPY_HOUR_END_M / 60; // 5.5 = 5:30 PM

type CountdownState = { active: boolean; remaining: number };

function computeCountdownState(): CountdownState {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const totalSecondsNow = h * 3600 + m * 60 + s;
  const startSeconds = HAPPY_HOUR_START * 3600;
  const endSeconds = HAPPY_HOUR_END_H * 3600 + HAPPY_HOUR_END_M * 60;

  if (totalSecondsNow >= startSeconds && totalSecondsNow < endSeconds) {
    return { active: true, remaining: endSeconds - totalSecondsNow };
  } else if (totalSecondsNow < startSeconds) {
    return { active: false, remaining: startSeconds - totalSecondsNow };
  } else {
    return { active: false, remaining: 86400 - totalSecondsNow + startSeconds };
  }
}

// Module-level cached snapshot so useSyncExternalStore receives a stable
// reference between ticks and doesn't loop during render.
let cachedSnapshot: CountdownState = computeCountdownState();

function subscribe(callback: () => void) {
  const interval = setInterval(() => {
    const next = computeCountdownState();
    if (
      next.active !== cachedSnapshot.active ||
      next.remaining !== cachedSnapshot.remaining
    ) {
      cachedSnapshot = next;
      callback();
    }
  }, 1000);
  return () => clearInterval(interval);
}

function getSnapshot(): CountdownState {
  return cachedSnapshot;
}

function getServerSnapshot(): CountdownState | null {
  return null;
}

function formatTime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return {
    h: String(h).padStart(2, "0"),
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0"),
  };
}

export default function HappyHourCountdown() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!state) return null;

  const { h, m, s } = formatTime(state.remaining);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-200/80">
        {state.active ? "Happy Hour ends in" : "Next Happy Hour starts in"}
      </p>
      <div className="flex items-center gap-2">
        {[h, m, s].map((unit, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="flex flex-col items-center">
              <span
                className="text-4xl font-black tabular-nums"
                style={{
                  background: "linear-gradient(180deg, #fff 60%, rgba(255,255,255,0.6))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "none",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {unit}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-200/60 mt-0.5">
                {i === 0 ? "hrs" : i === 1 ? "min" : "sec"}
              </span>
            </span>
            {i < 2 && (
              <span className="text-3xl font-black text-amber-300/60 mb-3">:</span>
            )}
          </span>
        ))}
      </div>
      {state.active && (
        <span className="mt-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-green-500/20 text-green-300 border border-green-400/30">
          ● Live now
        </span>
      )}
    </div>
  );
}
