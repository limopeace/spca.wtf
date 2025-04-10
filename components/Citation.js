import React from 'react';
import Link from 'next/link';
import styles from './Citation.module.css';
import { getReliabilityClass } from '../lib/sourcesData'; // Import helper

/**
 * Citation Component
 * Displays a superscript link that shows source details on hover/focus.
 *
 * Props:
 * - sourceId: A unique identifier matching a key in lib/sourcesData.js.
 * - sourceData: The source details object from lib/sourcesData.js.
 * - citationNumber: The sequential number for this citation.
 */
const Citation = ({ sourceId, sourceData, citationNumber }) => {
  if (!sourceData) {
    console.warn(`Citation component missing sourceData for ID: ${sourceId}`);
    // Display a placeholder if data is missing, linking to the potential anchor
    return (
      <span className={styles.citation}>
        <Link href={`/sources#${sourceId}`} legacyBehavior>
          <a className={styles.referenceLink} aria-label={`Missing source data for citation ${citationNumber || ''}`}>[{citationNumber || '?'}]</a>
        </Link>
      </span>
    );
  }

  const { type, date, reference, reliability, claim } = sourceData;
  const reliabilityClass = getReliabilityClass(reliability, styles);
  const reliabilityText = reliability ? reliability.charAt(0).toUpperCase() + reliability.slice(1) : 'Unverified';

  // Construct the href for the Sources page link, targeting the specific source ID
  const sourcesPageLink = `/sources#${sourceId}`;

  return (
    <span className={styles.citation}>
      {/* Link wrapping the citation number */}
      <Link href={sourcesPageLink} legacyBehavior>
        <a
          className={styles.referenceLink}
          aria-label={`Source ${citationNumber}: ${type} dated ${date || 'N/A'}`}
          aria-describedby={`tooltip-${sourceId}`} // Link tooltip for screen readers
          tabIndex={0} // Make it focusable
        >
          {citationNumber}
        </a>
      </Link>

      {/* Tooltip, positioned relative to the span */}
      <div className={styles.tooltip} role="tooltip" id={`tooltip-${sourceId}`}>
        <div className={styles.tooltipHeader}>Source {citationNumber}</div>
        <div className={styles.tooltipContent}>
          {claim && <p><em>{claim}</em></p>} {/* Display claim if available */}
          <p><strong>Type:</strong> {type || 'N/A'}</p>
          <p><strong>Date:</strong> {date || 'N/A'}</p>
          {reference && <p><strong>Ref:</strong> {reference}</p>}
          <p className={`${styles.reliability} ${reliabilityClass}`}>
             <strong>Reliability:</strong>
             <span className={styles.reliabilityIndicator} aria-hidden="true"></span> {/* Visual indicator */}
             <span className={styles.reliabilityText}>{reliabilityText}</span>
          </p>
          <p><Link href={sourcesPageLink}><a>See full details on Sources page</a></Link></p>
        </div>
      </div>
    </span>
  );
};

export default Citation; 