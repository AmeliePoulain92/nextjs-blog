import { useEffect, useRef, useState } from "react";

export const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const ref = useRef<HTMLImageElement>();

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
      setImageDimensions({
        width: ref?.current.clientWidth,
        height: ref?.current?.clientHeight,
      });
    }
  }, []);

  return [ref, imageDimensions, loaded, onLoad];
};
