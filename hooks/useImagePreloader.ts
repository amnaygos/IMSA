import { useState, useEffect } from "react";

interface PreloaderResult {
  images: (HTMLImageElement | null)[];
  isReady: boolean;
  progress: number;
}

export function useImagePreloader(baseUrl: string, frameCount: number): PreloaderResult {
  const [loadedCount, setLoadedCount] = useState(0);
  const [images, setImages] = useState<(HTMLImageElement | null)[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const tempImages: (HTMLImageElement | null)[] = new Array(frameCount).fill(null);
    let cancelled = false;

    const loadFrame = async (index: number) => {
      const img = new Image();
      const frameNumber = (index + 1).toString().padStart(3, "0");
      img.src = `${baseUrl}/frame_${frameNumber}.webp`;

      try {
        // Fix #4: Use img.decode() not just onload — ensures pixel data is ready before render
        await img.decode();
        if (cancelled) return;

        tempImages[index] = img;
        loaded++;

        // Trigger re-render periodically for progress tracking
        if (loaded % 5 === 0 || loaded === frameCount) {
          setLoadedCount(loaded);
          // Spread so React detects change
          setImages([...tempImages]);
        }

        if (loaded === frameCount) {
          setIsReady(true);
        }
      } catch {
        // Frame failed to load — leave as null
      }
    };

    // Load first frame immediately for instant display
    loadFrame(0);

    // Stagger the rest to avoid network flood
    for (let i = 1; i < frameCount; i++) {
      const delay = Math.floor(i / 10) * 20; // batch in groups of 10
      setTimeout(() => {
        if (!cancelled) loadFrame(i);
      }, delay);
    }

    return () => {
      cancelled = true;
    };
  }, [baseUrl, frameCount]);

  return {
    images,
    isReady,
    progress: frameCount > 0 ? loadedCount / frameCount : 0,
  };
}
