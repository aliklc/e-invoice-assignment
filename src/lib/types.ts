export interface InvoiceInfo {
  InvoiceSerieOrNumber: string;
  IssueDate: string;
  InvoiceType: string;
  CurrencyCode: string;
  InvoiceProfile: string;
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