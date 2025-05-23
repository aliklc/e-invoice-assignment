export interface DespatchDocumentReference {
  IssueDate: string;
  Value: string;
}

export interface OrderReference {
  IssueDate: string;
  Value: string;
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