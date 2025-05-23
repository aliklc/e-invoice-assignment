export interface InvoiceInfo {
  InvoiceSerieOrNumber: string;
  IssueDate: string;
  InvoiceType: string;
  CurrencyCode: string;
  InvoiceProfile: string;
}

export interface EInvoiceFormData {
  InvoiceInfo: InvoiceInfo;

}