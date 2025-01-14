"use client"

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlobeProps {
  className?: string;
  config?: COBEOptions;
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({ className, config = GLOBE_CONFIG }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phi = useRef(0);
  const width = useRef(0);

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      width.current = canvasRef.current.offsetWidth;
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    onResize();
    window.addEventListener('resize', onResize);
    
    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width.current,
      height: width.current,
      onRender: (state) => {
        state.phi = phi.current;
        phi.current += 0.003;
        config.onRender?.(state);
      },
    });

    return () => {
      window.removeEventListener('resize', onResize);
      globe.destroy();
    };
  }, [config, onResize]);

  return (
    <div className={cn("relative aspect-square w-full", className)}>
      <canvas
        ref={canvasRef}
        className={cn("h-full w-full")}
      />
    </div>
  );
} 