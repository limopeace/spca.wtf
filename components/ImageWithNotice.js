import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ImageWithNotice.module.css';

/**
 * ImageWithNotice Component
 * Displays an image using next/image with a structured caption containing origin/permission notice.
 *
 * Props:
 * - src: Path to the image (relative to /public or absolute URL). REQUIRED.
 * - alt: Descriptive alt text for the image (required for accessibility). REQUIRED.
 * - width: Intrinsic width of the image in pixels. REQUIRED by next/image.
 * - height: Intrinsic height of the image in pixels. REQUIRED by next/image.
 * - caption: Optional text caption describing the image content.
 * - origin: Description of the image source (e.g., "Photo by Author", "Screenshot from Document X", "Public domain via NASA"). REQUIRED.
 * - permission: Statement about usage rights/policy (e.g., "Used with permission", "Fair use claimed for commentary", "CC BY-SA 4.0"). REQUIRED.
 * - usagePolicyLink: Optional path to a page detailing image usage policy (e.g., "/image-usage-policy").
 * - alignment: Optional alignment for the container ('left', 'center', 'right'). Requires setting max-width on the container for center/right to work effectively as block elements. Defaults to 'left'.
 * - layout: Optional float layout ('floatLeft', 'floatRight'). Apply to wrap text. Requires clearfix on parent.
 * - priority: Optional boolean. If true, adds `priority` prop to next/image (for LCP images).
 * - className: Optional additional CSS class(es) for the main container.
 */
const ImageWithNotice = ({
  src,
  alt,
  width,
  height,
  caption,
  origin,
  permission,
  usagePolicyLink,
  alignment = 'left', // Default alignment
  layout, // 'floatLeft', 'floatRight'
  priority = false,
  className = ''
}) => {

  // Combine base styles with alignment and layout classes
  const containerClasses = [
    styles.container,
    alignment === 'center' ? styles.alignCenter : '',
    alignment === 'right' ? styles.alignRight : '',
    layout === 'floatLeft' ? styles.floatLeft : '',
    layout === 'floatRight' ? styles.floatRight : '',
    className, // Allow external classes
  ].filter(Boolean).join(' '); // Filter out empty strings and join

  // Basic validation
  if (!src || !alt || !width || !height || !origin || !permission) {
      console.warn('ImageWithNotice missing required props: src, alt, width, height, origin, permission');
      // In a real application, you might want a more robust error display or fallback image
      return <div className={`${styles.container} ${className || ''}`} style={{color: 'red', border: '1px dashed red', padding: '1rem'}}>Image Error: Missing required props (src, alt, width, height, origin, permission). Check component usage.</div>; 
  }

  return (
    // Use <figure> for semantic grouping of image and caption
    <figure className={containerClasses}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.image}
          priority={priority}
          // Consider adding sizes prop for responsive images if applicable
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {/* Only render figcaption if there is content for it */}
      {(caption || origin || permission) && (
        <figcaption className={styles.figcaption}>
            {caption && 
              // Display caption text, allowing basic HTML if needed (use with caution)
              <span className={styles.captionText} dangerouslySetInnerHTML={{ __html: caption }}></span>
            } 
            {/* Use <small> for the notice as it represents side comments/fine print */}
            <small className={styles.notice}> 
                Source: {origin}. 
                Usage: {permission}.
                {/* Conditionally render the link to usage policy */}
                {usagePolicyLink && (
                  <>
                    {' ('}<Link href={usagePolicyLink}><a>Policy</a></Link>{/* Closing parenthesis is now outside the Link */}
                  {')'}
                  </>
                )}
            </small>
          </figcaption>
      )}
    </figure>
  );
};

export default ImageWithNotice; 