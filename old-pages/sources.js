import React from 'react';
import Head from 'next/head';
import { sources, getReliabilityClass } from '../lib/sourcesData'; // Adjust path as needed
import styles from '../styles/SourcesPage.module.css'; 

const SourcesPage = () => {
  // Convert sources object to an array for easier mapping and consistent ordering
  const sourceEntries = Object.entries(sources).map(([id, data], index) => ({
    id,
    ...data,
    number: index + 1, // Assign number based on array order
  }));

  return (
    <div className={styles.container}>
      <Head>
        <title>Sources and Verification | [Your Website Name]</title>
        <meta name="description" content="Details about the sources, methodology, and verification methods used on this website." />
      </Head>

      <h1 className={styles.title}>Sources and Verification Methods</h1>

      <section className={styles.section}>
        <h2 id="content-types">Explanation of Content Types</h2>
        <p>
          This website presents information derived from various sources. It is crucial to distinguish between:
        </p>
        <ul>
          <li>
              <strong>Factual Reporting:</strong> Information presented as fact, based on specific sources like documents, emails, official statements, or directly observed events. Factual statements are accompanied by superscript citation numbers (e.g., <sup><a href="#source-1">1</a></sup>) linking to the detailed source information below.
          </li>
          <li>
              <strong>Commentary/Analysis:</strong> Opinions, interpretations, hypotheses, or analyses based on the available information. While informed by factual reporting, commentary represents the author's perspective or synthesis. Commentary is visually distinct, typically presented [<em>Describe your visual style, e.g., "in italicized blocks with a colored left border"</em>].
          </li>
        </ul>
        <p>
          We strive for clarity in making this distinction. Readers should critically evaluate all content and refer to the cited sources. If you believe there is a factual inaccuracy, please <a href="/report-error">report it here</a>.
        </p>
      </section>

      <section className={styles.section}>
        <h2 id="verification-methods">Verification Methods & Reliability</h2>
        <p>
          We employ the following methods to verify information, where applicable and possible:
        </p>
        <ul>
          <li><strong>Cross-Referencing:</strong> Comparing information across multiple independent sources or documents.</li>
          <li><strong>Document Review:</strong> Examining original documents, authenticated copies, or publicly available records.</li>
          <li><strong>Direct Confirmation:</strong> Seeking confirmation from primary sources or individuals involved (where appropriate and ethical, noted in verification details).</li>
          <li><strong>Source Vetting:</strong> Assessing the known reliability, potential biases, or historical accuracy associated with a source type or specific source.</li>
        </ul>
        <p>
          Each source listed below includes a <strong>Reliability</strong> assessment (High, Medium, Low, Unverified) based on factors like source type, corroboration, directness, and potential bias. The specific <strong>Verification Notes</strong> detail the steps taken for that source.
        </p>
        <div className={styles.reliabilityKey}>
            <strong>Reliability Key:</strong>
            <span className={styles.reliabilityItem}><span className={`${styles.reliabilityIndicator} ${styles.reliabilityHigh}`}></span> High: Generally considered trustworthy (e.g., official documents, multiple corroborated sources).</span>
            <span className={styles.reliabilityItem}><span className={`${styles.reliabilityIndicator} ${styles.reliabilityMedium}`}></span> Medium: Reasonably reliable but may have limitations (e.g., single credible source, second-hand report from trusted source).</span>
            <span className={styles.reliabilityItem}><span className={`${styles.reliabilityIndicator} ${styles.reliabilityLow}`}></span> Low: Requires caution (e.g., anonymous source, known bias, uncorroborated claim, rumor).</span>
            <span className={styles.reliabilityItem}><span className={`${styles.reliabilityIndicator} ${styles.reliabilityUnverified}`}></span> Unverified: Claim presented but verification is pending or not possible.</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id="source-list">Source List</h2>
        {sourceEntries.length > 0 ? (
          <ul className={styles.sourceList}>
            {sourceEntries.map((source) => (
              <li key={source.id} id={source.id} className={styles.sourceItem}>
                {/* Anchor for direct linking */}
                 {/* <a id={source.id} className={styles.sourceAnchor} aria-hidden="true"></a> */}

                <h3>
                    <span className={styles.sourceNumber}>{source.number}.</span>
                    {source.type || 'Source'}
                </h3>
                {source.claim && <p><strong>Claim/Statement Referenced:</strong> "<em>{source.claim}</em>"</p>}
                <p><strong>Date:</strong> {source.date || 'N/A'}</p>
                {source.reference && <p><strong>Reference/Identifier:</strong> {source.reference}</p>}
                <p className={`${styles.reliabilityDetails} ${getReliabilityClass(source.reliability, styles)}`}>
                    <strong>Reliability:</strong>
                    <span className={styles.reliabilityIndicator} aria-hidden="true"></span>
                    <span className={styles.reliabilityText}>{source.reliability ? source.reliability.charAt(0).toUpperCase() + source.reliability.slice(1) : 'Unverified'}</span>
                </p>
                {source.verification && <p><strong>Verification Notes:</strong> {source.verification}</p>}
                {source.fullTextLink && <p><strong>Source Link:</strong> <a href={source.fullTextLink} target="_blank" rel="noopener noreferrer">View Source</a></p>}
                {source.notes && <p><strong>Notes:</strong> {source.notes}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <p>No sources have been documented yet. Please check back later.</p>
        )}
      </section>
    </div>
  );
};

export default SourcesPage; 