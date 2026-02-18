import { useEffect } from 'react';

export default function AdSense({ slot, style = { display: 'block' }, className = '' }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // ignore errors when Adsense isn't available
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client="ca-pub-9364684337389377"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
