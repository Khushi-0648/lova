import React from 'react';

/**
 * Reusable image component that provides a graceful fallback when the primary
 * image fails to load. It also enables lazy‑loading for better performance.
 *
 * Props:
 *   - src:        primary image URL (required)
 *   - fallback:   fallback image URL (required)
 *   - alt:        alt text (optional, defaults to empty string)
 *   - className:  CSS classes applied to the <img> element (optional)
 */
export default function ImageWithFallback({ src, fallback, alt = '', className = '' }) {
  const [srcUrl, setSrcUrl] = React.useState(src);

  const handleError = (e) => {
    if (srcUrl !== fallback) {
      setSrcUrl(fallback);
    }
    // Prevent infinite error loops
    e.target.onerror = null;
  };

  return (
    <img
      src={srcUrl}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
    />
  );
}
