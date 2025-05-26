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

export interface SGKInfo {
  RegisterName?: string;
  DocumentNumber?: string;
  RegisterCode?: string;
}

export interface ExpenseItem {
  ExpenseType: string;
  Percent?: number;
  Amount?: number;
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
  SGKInfo?: SGKInfo;
  Expenses?: ExpenseItem[];
  LineExtensionAmount?: number;
  GeneralKDV1Total?: number;
  GeneralKDV8Total?: number;
  GeneralKDV18Total?: number;
  GeneralKDV10Total?: number;
  GeneralKDV20Total?: number;
  GeneralAllowanceTotal?: number;
  PayableAmount?: number;
  KdvTotal?: number;
}

export interface PartyIdentification {
  SchemeID: string;
  Value: string;
}

export interface AgentPartyIdentification {
  SchemeID: string;
  Value: string;
}

export interface CompanyInfo {
  TaxNumber: string;
  Name: string;
  TaxOffice: string;
  PartyIdentifications?: PartyIdentification[];
  AgentPartyIdentifications?: AgentPartyIdentification[];
  Address: string;
  District?: string;
  City: string;
  Country?: string;
  PostalCode?: string;
  Phone: string;
  Fax?: string;
  Mail: string;
  WebSite?: string;
}

export interface CustomerInfo {
  TaxNumber: string;
  Name: string;
  TaxOffice: string;
  PartyIdentifications?: PartyIdentification[];
  AgentPartyIdentifications?: AgentPartyIdentification[];
  Address: string;
  District?: string;
  City: string;
  Country?: string;
  PostalCode?: string;
  Phone: string;
  Fax?: string;
  Mail: string;
  WebSite?: string;
}

export interface BuyerCustomerInfo {
  TaxNumber: string;
  Name: string;
  TaxOffice: string;
  PartyIdentifications?: PartyIdentification[];
  AgentPartyIdentifications?: AgentPartyIdentification[];
  Address: string;
  District?: string;
  City: string;
  Country?: string;
  PostalCode?: string;
  Phone: string;
  Fax?: string;
  Mail: string;
  WebSite?: string;
}

export interface ExportCustomerInfo {
  TaxNumber: string;
  LegalRegistrationName: string;
  PersonName: string;
  PersonSurName: string;
  Address?: string;
  District?: string;
  City?: string;
  Country?: string;
  PostalCode?: string;
  Phone?: string;
  Fax?: string;
  Mail?: string;
  WebSite?: string;
}

export interface AddressInfo {
  Address: string;
  District?: string;
  City: string;
  Country?: string;
  PostalCode?: string;
  Phone: string;
  Fax?: string;
  Mail: string;
  WebSite?: string;
}

export interface FinancialAccountInfo {
  BankName: string;
  BranchName?: string;
  ID: string;
  CurrencyCode: string;
  PaymentNote?: string;
}

export interface TaxRepresentativeInfo {
  RegisterNumber: string;
  Alias?: string;
  Address: AddressInfo;
}

export interface TouristInfo {
  Name: string;
  SurName: string;
  CountryCode: string;
  PassportNo: string;
  PassportDate?: string;
  AddressInfo: AddressInfo;
  FinancialAccountInfo: FinancialAccountInfo;
}

export interface TaxFreeInfo {
  TouristInfo: TouristInfo;
  TaxRepresentativeInfo?: TaxRepresentativeInfo;
}

export interface Tax {
  TaxCode: string;
  Total: number;
  Percent: number;
  ReasonCode?: string;
  ReasonDesc?: string;
}

export interface DeliveryAddress {
  Address: string;
  District?: string;
  City: string;
  Country?: string;
  PostalCode?: string;
  Phone: string;
  Fax?: string;
  Mail: string;
  WebSite?: string;
}

export interface DeliveryInfo {
  GTIPNo?: string;
  DeliveryTermCode?: string;
  TransportModeCode?: string;
  PackageBrandName?: string;
  ProductTraceID?: string;
  PackageID?: string;
  PackageQuantity?: number;
  PackageTypeCode?: string;
  DeliveryAddress?: DeliveryAddress;
}

export interface Medicine {
  GTIN: string;
  BatchNumber: string;
  SerialNumber: string;
  ExpirationDate: string;
}

export interface MedicalDevice {
  ProductNumber: string;
  LotNumber: string;
  SerialNumber: string;
  ProductionDate: string;
}

export interface MedicineAndMedicalDevice {
  Medicine?: Medicine[];
  MedicalDevice?: MedicalDevice[];
}

export interface ExportRegisteredInfo {
  DIIBLineCode?: string;
  GTIPNo?: string;
}

export interface AdditionalItemIdentification {
  TagNumber?: string;
  OwnerName?: string;
  OwnerTaxNumber?: string;
}

export interface InvoiceLine {
  Index: string;
  SellerCode: string;
  BuyerCode: string;
  Name: string;
  Description: string;
  Quantity: number;
  UnitType: string;
  Price: number;
  AllowanceTotal: number;
  KDVPercent: number;
  KDVTotal: number;
  Taxes: Tax[];
  DeliveryInfo?: DeliveryInfo;
  ManufacturerCode?: string;
  BrandName?: string;
  ModelName?: string;
  Note?: string;
  SerialID?: string;
  OzelMatrahReason?: string;
  OzelMatrahTotal?: number;
  VatAmountWithoutTevkifat?: number;
  MedicineAndMedicalDevice?: MedicineAndMedicalDevice;
  ExportRegisteredInfo?: ExportRegisteredInfo;
  AdditionalItemIdentification?: AdditionalItemIdentification;
}

export interface Note {
  text?: string;
}

export interface EInvoice {
  InvoiceInfo: InvoiceInfo;
  CompanyInfo: CompanyInfo;
  CustomerInfo: CustomerInfo;
  BuyerCustomerInfo?: BuyerCustomerInfo;
  ExportCustomerInfo?: ExportCustomerInfo;
  TaxFreeInfo?: TaxFreeInfo;
  InvoiceLines: InvoiceLine[];
  Notes?: Note[];
  CustomerAlias?: string;
}


export interface EInvoiceFormData {
  EInvoice: EInvoice;
}