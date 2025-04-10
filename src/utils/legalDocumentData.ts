import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export type LegalDocument = {
  slug: string;
  documentName: string;
  caseAuthority: string;
  caseNumber: string;
  accessInstructions: string;
  plainTextLink: string;
  additionalInformation: string;
};

export function getAllLegalDocuments(): LegalDocument[] {
  try {
    const csvFilePath = path.join(process.cwd(), 'sourceDocs', 'DocumentName-CaseAuthority-CaseNumber-Step-by-StepAccessInstructions-PlainTextLink-AdditionalInformation.csv');
    const fileContents = fs.readFileSync(csvFilePath, 'utf8');
    
    // Parse CSV data
    const records = parse(fileContents, {
      columns: true,
      skip_empty_lines: true
    });
    
    // Transform into our data structure with slugs
    return records.map((record: any) => {
      // Create a URL-friendly slug from the document name
      const slug = record['Document Name']
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-');
      
      return {
        slug,
        documentName: record['Document Name'],
        caseAuthority: record['Case/Authority'],
        caseNumber: record['Case Number'],
        accessInstructions: record['Step-by-Step Access Instructions'],
        plainTextLink: record['Plain Text Link'],
        additionalInformation: record['Additional Information']
      };
    });
  } catch (error) {
    console.error('Error loading legal document data:', error);
    return [];
  }
}

export function getLegalDocumentBySlug(slug: string): LegalDocument | null {
  const documents = getAllLegalDocuments();
  return documents.find(doc => doc.slug === slug) || null;
}

export function getAllLegalDocumentSlugs(): string[] {
  const documents = getAllLegalDocuments();
  return documents.map(doc => doc.slug);
} 