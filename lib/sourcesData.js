// lib/sourcesData.js
// Central repository for all source information

export const sources = {
  // --- Example Sources --- 
  "doc-001": {
    claim: "Statement about Q3 2023 budget allocation.",
    type: "Internal Document",
    date: "2023-10-15",
    reference: "Budget Report Q3 2023, Page 5",
    reliability: "high", // 'high', 'medium', 'low', 'unverified'
    verification: "Cross-referenced with meeting minutes dated 2023-10-12.",
    fullTextLink: "/documents/budget-q3-2023.pdf", // Optional: Link if available (internal or external)
    notes: "Original document stored securely."
  },
  "email-proj-timeline": {
    claim: "Confirmation of project deadline shift to March 1st.",
    type: "Email Communication",
    date: "2024-01-20",
    reference: "Subject: Project Timeline Update | From: Project Manager",
    reliability: "medium",
    verification: "Email received directly from the project manager.",
    notes: "Follow-up confirmation requested."
  },
  "obs-site-visit-mar5": {
      claim: "Observed condition of specific equipment during site visit.",
      type: "Direct Observation",
      date: "2024-03-05",
      reference: "Site Visit Log #4, Section 2",
      reliability: "medium", // Observer bias possible, not independently verified yet
      verification: "Personal observation by author during scheduled site visit.",
  },
   "interview-source-a": {
      claim: "Statement regarding team morale challenges.",
      type: "Interview",
      date: "Circa Feb 2024", // Use approximate dates if needed
      reference: "Interview with Source A (anonymous)",
      reliability: "low", // Single source, anonymous, potential bias
      verification: "Notes taken during interview. Corroboration pending.",
      notes: "Source requested anonymity."
  },
  // --- Add your actual sources below --- 
  // "your-source-id-1": {
  //   claim: "Specific fact or statement being cited.",
  //   type: "Type of Source (e.g., Email, Document, Webpage, Interview)",
  //   date: "YYYY-MM-DD or description",
  //   reference: "Unique identifier (e.g., Doc Title, URL, Subject Line, Interviewee)",
  //   reliability: "high | medium | low | unverified",
  //   verification: "How was this verified? (e.g., Cross-referenced, Direct copy, Unverified)",
  //   fullTextLink: "Optional link to source",
  //   notes: "Optional internal notes about the source"
  // },
}; 

// Helper function to get citation number based on order in the object
// NOTE: This relies on object insertion order, which is generally stable in modern JS
// but consider using an array of objects [{id: ..., ...details}, ...] if strict ordering 
// becomes critical or if you need easier sorting/filtering later.
const sourceIds = Object.keys(sources);

export const getCitationNumber = (sourceId) => {
    const index = sourceIds.indexOf(sourceId);
    return index !== -1 ? index + 1 : '?'; // Return 1-based index or '?' if not found
};

// Helper to get reliability class string
export const getReliabilityClass = (reliability, styles) => {
  switch (reliability?.toLowerCase()) {
    case 'high': return styles.reliabilityHigh;
    case 'medium': return styles.reliabilityMedium;
    case 'low': return styles.reliabilityLow;
    default: return styles.reliabilityUnverified;
  }
}; 