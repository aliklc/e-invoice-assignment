export interface DespatchDocumentReference {
  IssueDate?: string;
  Value: string;
}

export interface OrderReference {
  IssueDate?: string;
  Value: string;
}

export interface Attachment {
  Base64Data: string;
  MimeCode: string;
  FileName: string;
}

export interface OrderReferenceDocument {
  ID: string;
  IssueDate?: string;
  DocumentType: string;
  DocumentTypeCode: string;
  DocumentDescription?: string;
  Attachment: Attachment[];
}

export interface AdditionalDocumentReferences {
  ID: string;
  IssueDate?: string;
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

export interface OKCInfo {
  ID?: string;
  IssueDate?: string;
  Time?: string;
  ZNo?: string;
  EndPointID?: string;
  DocumentDescription?: string;
}

export interface ESUReportInfo {
  ID?: string;
  IssueDate?: string;
}

export interface ReturnInvoiceItem {
  InvoiceNumber?: string;
  IssueDate?: string;
}

export interface InvoicePeriod {
  StartDate?: string;
  StartTime?: string;
  EndDate?: string;
  EndTime?: string;
  DurationMeasureValue?: number;
  Description?: string;
}

export interface InvoiceInfo {
  UUID: string;

  
  InvoiceSerieOrNumber: string;
  IssueDate?: string;
  InvoiceType: string;
  CurrencyCode: string;
  InvoiceProfile: string;
  AccountingCost?: string;
  InvoicePeriod?: InvoicePeriod;
  DespatchDocumentReference: DespatchDocumentReference[];
  OrderReference: OrderReference[];
  OrderReferenceDocument?: OrderReferenceDocument[];
  AdditionalDocumentReferences: AdditionalDocumentReferences[];
  TaxExemptionReasonInfo?: TaxExemptionReasonInfo;
  PaymentTermsInfo?: PaymentTermsInfo;
  PaymentMeansInfo?: PaymentMeansInfo;
  OKCInfo?: OKCInfo;
  ESUReportInfo?: ESUReportInfo;
  ReturnInvoiceInfo?: ReturnInvoiceItem[];
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

// EInvoice wrapper interface
export interface EInvoice {
  InvoiceInfo: InvoiceInfo;
  CompanyInfo: CompanyInfo;
  CustomerInfo: CustomerInfo;
}

// Ana form data interface - EInvoice wrapper ile
export interface EInvoiceFormData {
  EInvoice: EInvoice;
}