export interface DespatchDocumentReference {
  IssueDate: string;
  Value: string;
}

export interface OrderReference {
  IssueDate: string;
  Value: string;
}

export interface Attachment {
  Base64Data: string;
  MimeCode: string;
  FileName: string;
}

export interface OrderReferenceDocument {
  ID: string;
  IssueDate: string;
  DocumentType: string;
  DocumentTypeCode: string;
  DocumentDescription?: string;
  Attachment: Attachment[];
}
export interface AdditionalDocumentReferences {
  ID: string;
  IssueDate: string;
  DocumentType: string;
  DocumentTypeCode: string;
  DocumentDescription?: string;
  Attachment: Attachment[];
}

export interface TaxExemptionReasonInfo {
  KDVExemptionReasonCode?: string;
  OTVExemptionReasonCode?: string;
  AccommodationTaxExemptionReasonCode?: string;
}

export interface PaymentTermsInfo {
  Percent?: number;
  Amount?: number;
  Note?: string;
}

export interface PaymentMeansInfo {
  Code?: string;
  ChannelCode?: string;
  DueDate?: string;
  PayeeFinancialAccountID?: string;
  Note?: string;
}

export interface InvoiceInfo {
  UUID: string;
  InvoiceSerieOrNumber: string;
  IssueDate: string;
  InvoiceType: string;
  CurrencyCode: string;
  InvoiceProfile: string;
  DespatchDocumentReference: DespatchDocumentReference[];
  OrderReference: OrderReference[];
  OrderReferenceDocument?: OrderReferenceDocument[];
  AdditionalDocumentReferences: AdditionalDocumentReferences[];
  TaxExemptionReasonInfo?: TaxExemptionReasonInfo;
  PaymentTermsInfo?: PaymentTermsInfo;
  PaymentMeansInfo?: PaymentMeansInfo;
}

export interface CompanyInfo {
  TaxNumber: string;
  Name: string;
  TaxOffice: string;
  Address: string;
  City: string;
  Phone: string;
  Mail: string;
}

export interface CustomerInfo {
  TaxNumber: string;
  Name: string;
  TaxOffice: string;
  Address: string;
  City: string;
  Phone: string;
  Mail: string;
}

export interface EInvoiceFormData {
  InvoiceInfo: InvoiceInfo;
  CompanyInfo: CompanyInfo;
  CustomerInfo: CustomerInfo;
}