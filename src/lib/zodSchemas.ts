import { z } from "zod";
import { EInvoiceFormData } from "./types";


const despatchDocumentReferenceSchema = z.object({
  IssueDate: z.string()
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir tarih/saat formatı girin"
    })
    .optional(),
  Value: z.string().min(1, "Değer boş olamaz"),
});

const OrderReferenceSchema = z.object({
  IssueDate: z.string()
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir tarih/saat formatı girin"
    })
    .optional(),
  Value: z.string().min(1, "Değer boş olamaz"),
});

const AttachmentSchema = z.object({
  Base64Data: z.string().min(1, "Base64 verisi boş olamaz"),
  MimeCode: z.string().min(1, "MIME tipi boş olamaz"),
  FileName: z.string().min(1, "Dosya adı boş olamaz")
});

const OrderReferenceDocumentSchema = z.object({
  ID: z.string().min(1, "Doküman ID boş olamaz"),
  IssueDate: z.string()
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir tarih/saat formatı girin"
    })
    .optional(), 
  DocumentType: z.string().min(1, "Doküman tipi boş olamaz"),
  DocumentTypeCode: z.string().min(1, "Doküman tip kodu boş olamaz"),
  DocumentDescription: z.string().optional(),
  Attachment: z.array(AttachmentSchema)
});

const AdditionalDocumentReferencesSchema = z.object({
  ID: z.string().min(1, "Doküman ID boş olamaz"),
  IssueDate: z.string()
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir tarih/saat formatı girin"
    })
    .optional(), 
  DocumentType: z.string().min(1, "Doküman tipi boş olamaz"),
  DocumentTypeCode: z.string().min(1, "Doküman tip kodu boş olamaz"),
  DocumentDescription: z.string().optional(),
  Attachment: z.array(AttachmentSchema)
});


const TaxExemptionReasonInfoSchema = z.object({
  KDVExemptionReasonCode: z.string().min(1, "KDV muafiyet kodu boş olamaz"),
  OTVExemptionReasonCode: z.string().min(1, "ÖTV muafiyet kodu boş olamaz"),
  AccommodationTaxExemptionReasonCode: z.string().min(1, "Konaklama vergisi muafiyet kodu boş olamaz")
});

const PaymentTermsInfoSchema = z.object({
  Percent: z.number().optional(),
  Amount: z.number().optional(),
  Note: z.string().optional()
});

const PaymentMeansInfoSchema = z.object({
  Code: z.string().optional(),
  ChannelCode: z.string().optional(),
  DueDate: z.string()
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir tarih/saat formatı girin"
    })
    .optional(), 
  PayeeFinancialAccountID: z.string().optional(),
  Note: z.string().optional()
});

const OKCInfoSchema = z.object({
  ID: z.string().optional(),
  IssueDate: z.string()
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir tarih/saat formatı girin"
    })
    .optional(),
  Time: z.string().optional(),
  ZNo: z.string().optional(),
  EndPointID: z.string().optional(),
  DocumentDescription: z.string().optional()
});

const ESUReportInfoSchema = z.object({
  ID: z.string().optional(),
  IssueDate: z.string()
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir tarih/saat formatı girin"
    })
    .optional(),
});

const ReturnInvoiceItemSchema = z.object({
  InvoiceNumber: z.string().min(1, "Fatura numarası boş olamaz"),
  IssueDate: z.string()
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir tarih/saat formatı girin"
    })
    .optional(),
});

const InvoicePeriodSchema = z.object({
  StartDate: z.string()
    .datetime({ offset: true })
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir başlangıç tarihi girin"
    })
    .optional(),
  StartTime: z.string().optional(),
  EndDate: z.string()
    .datetime({ offset: true })
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir bitiş tarihi girin"
    })
    .optional(),
  EndTime: z.string().optional(),
  DurationMeasureValue: z.number().optional(),
  Description: z.string().optional()
});

const SGKInfoSchema = z.object({
  RegisterName: z.string().optional(),
  DocumentNumber: z.string().optional(),
  RegisterCode: z.string().optional()
});

const ExpenseItemSchema = z.object({
  ExpenseType: z.string().min(1, "Gider tipi boş olamaz"),
  Percent: z.number().optional(),
  Amount: z.number().optional()
});

// InvoiceInfo için Zod Şeması
const InvoiceInfoSchema = z.object({
  UUID: z.string(),
  

  InvoiceSerieOrNumber: z.string()
    .min(1, "Fatura Seri/Numara boş bırakılamaz")
    .max(50, "Fatura Seri/Numara çok uzun"),
  
  IssueDate: z.string()
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir tarih/saat formatı girin"
    })
    .optional(),
  
  InvoiceType: z.string()
    .min(1, "Fatura Tipi boş bırakılamaz")
    .max(20, "Fatura Tipi çok uzun"),
  
  CurrencyCode: z.string()
    .length(3, "Para birimi kodu 3 karakter olmalıdır")
    .toUpperCase(),
  
  InvoiceProfile: z.string()
    .min(1, "Fatura Profili boş bırakılamaz")
    .max(50, "Fatura Profili çok uzun"),

  AccountingCost: z.string().optional(),

  DespatchDocumentReference: z.array(despatchDocumentReferenceSchema),
  OrderReference: z.array(OrderReferenceSchema),
  OrderReferenceDocument: z.array(OrderReferenceDocumentSchema),
  AdditionalDocumentReferences: z.array(AdditionalDocumentReferencesSchema),
  TaxExemptionReasonInfo: TaxExemptionReasonInfoSchema.optional(),
  PaymentTermsInfo: PaymentTermsInfoSchema.optional(),
  PaymentMeansInfo: PaymentMeansInfoSchema.optional(),
  OKCInfo: OKCInfoSchema.optional(),
  ESUReportInfo: ESUReportInfoSchema.optional(),
  ReturnInvoiceInfo: z.array(ReturnInvoiceItemSchema).optional(),
  InvoicePeriod: InvoicePeriodSchema.optional(),
  SGKInfo: SGKInfoSchema.optional(),
  Expenses: z.array(ExpenseItemSchema).optional(),

  LineExtensionAmount: z.number().optional(),
  GeneralKDV1Total: z.number().optional(),
  GeneralKDV8Total: z.number().optional(),
  GeneralKDV18Total: z.number().optional(),
  GeneralKDV10Total: z.number().optional(),
  GeneralKDV20Total: z.number().optional(),
  GeneralAllowanceTotal: z.number().optional(),
  PayableAmount: z.number().optional(),
  KdvTotal: z.number().optional(),
});

const PartyIdentificationSchema = z.object({
  SchemeID: z.string().min(1, "Şema ID boş olamaz"),
  Value: z.string().min(1, "Değer boş olamaz")
});

const AgentPartyIdentificationSchema = z.object({
  SchemeID: z.string().min(1, "Şema ID boş olamaz"),
  Value: z.string().min(1, "Değer boş olamaz")
});

// CompanyInfo için Zod Şeması
const CompanyInfoSchema = z.object({
  TaxNumber: z.string()
    .min(1, "Vergi numarası en az 1 karakter olmalıdır")
    .max(11, "Vergi numarası en fazla 11 karakter olmalıdır")
    .regex(/^[0-9]+$/, "Vergi numarası sadece rakamlardan oluşmalıdır"),
  
  Name: z.string()
    .min(1, "Şirket adı boş bırakılamaz")
    .max(30, "Şirket adı çok uzun"),
  
  TaxOffice: z.string()
    .min(1, "Vergi dairesi boş bırakılamaz")
    .max(30, "Vergi dairesi adı çok uzun"),
  
  PartyIdentifications: z.array(PartyIdentificationSchema).optional(),
  AgentPartyIdentifications: z.array(AgentPartyIdentificationSchema).optional(),
  
  Address: z.string()
    .min(1, "Adres boş bırakılamaz")
    .max(200, "Adres çok uzun"),
  
  District: z.string().optional(),
  
  City: z.string()
    .min(1, "Şehir boş bırakılamaz")
    .max(20, "Şehir adı çok uzun"),
  
  Country: z.string().optional(),
  PostalCode: z.string().optional(),
  
  Phone: z.string()
    .min(10, "Telefon numarası en az 10 karakter olmalıdır")
    .max(15, "Telefon numarası çok uzun")
    .regex(/^[0-9+]+$/, "Geçerli bir telefon numarası girin"),
  
  Fax: z.string().optional(),
  
  Mail: z.string()
    .min(1, "E-posta boş bırakılamaz")
    .email("Geçerli bir e-posta adresi girin")
    .max(100, "E-posta çok uzun"),
  
  WebSite: z.string().url("Geçerli bir web sitesi adresi girin").optional().or(z.literal(""))
});

// CustomerInfo için genişletilmiş Zod Şeması
const CustomerInfoSchema = z.object({
  TaxNumber: z.string()
    .min(1, "Vergi numarası en az 1 karakter olmalıdır")
    .max(11, "Vergi numarası en fazla 11 karakter olmalıdır")
    .regex(/^[0-9]+$/, "Vergi numarası sadece rakamlardan oluşmalıdır"),

  Name: z.string()
    .min(1, "Müşteri adı boş bırakılamaz")
    .max(30, "Müşteri adı çok uzun"),

  TaxOffice: z.string()
    .min(1, "Vergi dairesi boş bırakılamaz")
    .max(30, "Vergi dairesi adı çok uzun"),

  PartyIdentifications: z.array(PartyIdentificationSchema).optional(),
  AgentPartyIdentifications: z.array(AgentPartyIdentificationSchema).optional(),

  Address: z.string()
    .min(1, "Adres boş bırakılamaz")
    .max(200, "Adres çok uzun"),

  District: z.string()
    .max(30, "İlçe adı çok uzun")
    .optional(),

  City: z.string()
    .min(1, "Şehir boş bırakılamaz")
    .max(20, "Şehir adı çok uzun"),

  Country: z.string()
    .max(30, "Ülke adı çok uzun")
    .optional(),

  PostalCode: z.string()
    .max(10, "Posta kodu çok uzun")
    .optional(),

  Phone: z.string()
    .min(10, "Telefon numarası en az 10 karakter olmalıdır")
    .max(15, "Telefon numarası çok uzun")
    .regex(/^[0-9+]+$/, "Geçerli bir telefon numarası girin"),

  Fax: z.string()
    .max(15, "Faks numarası çok uzun")
    .regex(/^[0-9+]*$/, "Geçerli bir faks numarası girin")
    .optional(),

  Mail: z.string()
    .min(1, "E-posta boş bırakılamaz")
    .email("Geçerli bir e-posta adresi girin")
    .max(100, "E-posta çok uzun"),

  WebSite: z.string()
    .url("Geçerli bir web sitesi adresi girin")
    .optional()
    .or(z.literal(""))
});

// BuyerCustomerInfo için Zod Şeması (CustomerInfo ile aynı yapı)
const BuyerCustomerInfoSchema = z.object({
  TaxNumber: z.string()
    .min(1, "Alıcı vergi numarası en az 1 karakter olmalıdır")
    .max(11, "Alıcı vergi numarası en fazla 11 karakter olmalıdır")
    .regex(/^[0-9]+$/, "Alıcı vergi numarası sadece rakamlardan oluşmalıdır"),

  Name: z.string()
    .min(1, "Alıcı adı boş bırakılamaz")
    .max(30, "Alıcı adı çok uzun"),

  TaxOffice: z.string()
    .min(1, "Alıcı vergi dairesi boş bırakılamaz")
    .max(30, "Alıcı vergi dairesi adı çok uzun"),

  PartyIdentifications: z.array(PartyIdentificationSchema).optional(),
  AgentPartyIdentifications: z.array(AgentPartyIdentificationSchema).optional(),

  Address: z.string()
    .min(1, "Alıcı adresi boş bırakılamaz")
    .max(200, "Alıcı adresi çok uzun"),

  District: z.string()
    .max(30, "Alıcı ilçe adı çok uzun")
    .optional(),

  City: z.string()
    .min(1, "Alıcı şehri boş bırakılamaz")
    .max(20, "Alıcı şehir adı çok uzun"),

  Country: z.string()
    .max(30, "Alıcı ülke adı çok uzun")
    .optional(),

  PostalCode: z.string()
    .max(10, "Alıcı posta kodu çok uzun")
    .optional(),

  Phone: z.string()
    .min(10, "Alıcı telefon numarası en az 10 karakter olmalıdır")
    .max(15, "Alıcı telefon numarası çok uzun")
    .regex(/^[0-9+]+$/, "Geçerli bir alıcı telefon numarası girin"),

  Fax: z.string()
    .max(15, "Alıcı faks numarası çok uzun")
    .regex(/^[0-9+]*$/, "Geçerli bir alıcı faks numarası girin")
    .optional(),

  Mail: z.string()
    .min(1, "Alıcı e-postası boş bırakılamaz")
    .email("Geçerli bir alıcı e-posta adresi girin")
    .max(100, "Alıcı e-postası çok uzun"),

  WebSite: z.string()
    .url("Geçerli bir alıcı web sitesi adresi girin")
    .optional()
    .or(z.literal(""))
});

const ExportCustomerInfoSchema = z.object({
  TaxNumber: z.string()
    .min(1, "Vergi numarası boş olamaz")
    .max(30, "Vergi numarası çok uzun"),
  
  LegalRegistrationName: z.string()
    .min(1, "Yasal kayıt adı boş olamaz")
    .max(100, "Yasal kayıt adı çok uzun"),
  
  PersonName: z.string()
    .min(1, "Kişi adı boş olamaz")
    .max(50, "Kişi adı çok uzun"),
  
  PersonSurName: z.string()
    .min(1, "Kişi soyadı boş olamaz")
    .max(50, "Kişi soyadı çok uzun"),
  
  Address: z.string()
    .min(1, "Adres boş olamaz")
    .max(200, "Adres çok uzun"),
  
  District: z.string()
    .max(50, "İlçe adı çok uzun")
    .optional(),
  
  City: z.string()
    .min(1, "Şehir boş olamaz")
    .max(50, "Şehir adı çok uzun"),
  
  Country: z.string()
    .min(1, "Ülke boş olamaz")
    .max(50, "Ülke adı çok uzun"),
  
  PostalCode: z.string()
    .max(20, "Posta kodu çok uzun")
    .optional(),
  
  Phone: z.string()
    .min(5, "Telefon numarası çok kısa")
    .max(20, "Telefon numarası çok uzun")
    .regex(/^[0-9+]+$/, "Geçerli bir telefon numarası girin"),
  
  Fax: z.string()
    .max(20, "Faks numarası çok uzun")
    .regex(/^[0-9+]*$/, "Geçerli bir faks numarası girin")
    .optional(),
  
  Mail: z.string()
    .min(1, "E-posta boş olamaz")
    .email("Geçerli bir e-posta adresi girin")
    .max(100, "E-posta çok uzun"),
  
  WebSite: z.string()
    .url("Geçerli bir URL girin")
    .optional()
    .or(z.literal(""))
});

const AddressInfoSchema = z.object({
  Address: z.string().min(1, "Adres boş olamaz"),
  District: z.string().optional(),
  City: z.string().min(1, "Şehir boş olamaz"),
  Country: z.string().optional(),
  PostalCode: z.string().optional(),
  Phone: z.string().min(1, "Telefon boş olamaz"),
  Fax: z.string().optional(),
  Mail: z.string().email("Geçerli bir e-posta adresi girin").min(1, "E-posta boş olamaz"),
  WebSite: z.string().url("Geçerli bir URL girin").optional().or(z.literal(""))
});

const FinancialAccountInfoSchema = z.object({
  BankName: z.string().min(1, "Banka adı boş olamaz"),
  BranchName: z.string().optional(),
  ID: z.string().min(1, "Hesap numarası boş olamaz"),
  CurrencyCode: z.string().length(3, "Para birimi kodu 3 karakter olmalıdır"),
  PaymentNote: z.string().optional()
});

const TaxRepresentativeInfoSchema = z.object({
  RegisterNumber: z.string().min(1, "Kayıt numarası boş olamaz"),
  Alias: z.string().optional(),
  Address: AddressInfoSchema
});

const TouristInfoSchema = z.object({
  Name: z.string().min(1, "Ad boş olamaz"),
  SurName: z.string().min(1, "Soyad boş olamaz"),
  CountryCode: z.string().length(2, "Ülke kodu 2 karakter olmalıdır"),
  PassportNo: z.string().min(1, "Pasaport numarası boş olamaz"),
  PassportDate: z.string()
    .datetime({ offset: true })
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir bitiş tarihi girin"
    }),
  AddressInfo: AddressInfoSchema,
  FinancialAccountInfo: FinancialAccountInfoSchema
});

export const TaxFreeInfoSchema = z.object({
  TouristInfo: TouristInfoSchema,
  TaxRepresentativeInfo: TaxRepresentativeInfoSchema.optional()
});

const TaxSchema = z.object({
  TaxCode: z.string().min(1, "Vergi kodu boş olamaz"),
  Total: z.number().min(0, "Vergi toplamı negatif olamaz"),
  Percent: z.number().min(0, "Vergi yüzdesi negatif olamaz"),
  ReasonCode: z.string().optional(),
  ReasonDesc: z.string().optional()
});

const DeliveryAddressSchema = z.object({
  Address: z.string().min(1, "Adres boş olamaz"),
  District: z.string().optional(),
  City: z.string().min(1, "Şehir boş olamaz"),
  Country: z.string().optional(),
  PostalCode: z.string().optional(),
  Phone: z.string().min(1, "Telefon boş olamaz"),
  Fax: z.string().optional(),
  Mail: z.string().email("Geçerli bir e-posta adresi girin").min(1, "E-posta boş olamaz"),
  WebSite: z.string().url("Geçerli bir URL girin").optional().or(z.literal(""))
});

const DeliveryInfoSchema = z.object({
  GTIPNo: z.string().optional(),
  DeliveryTermCode: z.string().optional(),
  TransportModeCode: z.string().optional(),
  PackageBrandName: z.string().optional(),
  ProductTraceID: z.string().optional(),
  PackageID: z.string().optional(),
  PackageQuantity: z.number().optional(),
  PackageTypeCode: z.string().optional(),
  DeliveryAddress: DeliveryAddressSchema.optional()
});

const MedicineSchema = z.object({
  GTIN: z.string().min(1, "GTIN boş olamaz"),
  BatchNumber: z.string().min(1, "Parti numarası boş olamaz"),
  SerialNumber: z.string().min(1, "Seri numarası boş olamaz"),
  ExpirationDate: z.string()
    .datetime({ offset: true })
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir bitiş tarihi girin"
    }),
});

const MedicalDeviceSchema = z.object({
  ProductNumber: z.string().min(1, "Ürün numarası boş olamaz"),
  LotNumber: z.string().min(1, "Lot numarası boş olamaz"),
  SerialNumber: z.string().min(1, "Seri numarası boş olamaz"),
  ProductionDate: z.string()
    .datetime({ offset: true })
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Geçerli bir bitiş tarihi girin"
    }),
});

const MedicineAndMedicalDeviceSchema = z.object({
  Medicine: z.array(MedicineSchema).optional(),
  MedicalDevice: z.array(MedicalDeviceSchema).optional()
}).optional();

const ExportRegisteredInfoSchema = z.object({
  DIIBLineCode: z.string().optional(),
  GTIPNo: z.string().optional()
}).optional();

const AdditionalItemIdentificationSchema = z.object({
  TagNumber: z.string().optional(),
  OwnerName: z.string().optional(),
  OwnerTaxNumber: z.string().optional()
}).optional();

const InvoiceLineSchema = z.object({
  Index: z.string().min(1, "Satır indeksi boş olamaz"),
  SellerCode: z.string().min(1, "Satıcı kodu boş olamaz"),
  BuyerCode: z.string().min(1, "Alıcı kodu boş olamaz"),
  Name: z.string().min(1, "Ürün adı boş olamaz"),
  Description: z.string().min(1, "Açıklama boş olamaz"),
  Quantity: z.number().min(0.0001, "Miktar sıfırdan büyük olmalı"),
  UnitType: z.string().min(1, "Birim tipi boş olamaz"),
  Price: z.number().min(0, "Fiyat negatif olamaz"),
  AllowanceTotal: z.number().min(0, "İndirim toplamı negatif olamaz"),
  KDVPercent: z.number().min(0, "KDV yüzdesi negatif olamaz"),
  KDVTotal: z.number().min(0, "KDV toplamı negatif olamaz"),
  Taxes: z.array(TaxSchema).min(1, "En az bir vergi bilgisi gereklidir"),
  DeliveryInfo: DeliveryInfoSchema.optional(),
  ManufacturerCode: z.string().optional(),
  BrandName: z.string().optional(),
  ModelName: z.string().optional(),
  Note: z.string().optional(),
  SerialID: z.string().optional(),
  OzelMatrahReason: z.string().optional(),
  OzelMatrahTotal: z.number().min(0, "Özel matrah toplamı negatif olamaz").optional(),
  VatAmountWithoutTevkifat: z.number().min(0, "Tevkifatsız KDV tutarı negatif olamaz").optional(),
  MedicineAndMedicalDevice: MedicineAndMedicalDeviceSchema.optional(),
  ExportRegisteredInfo: ExportRegisteredInfoSchema,
  AdditionalItemIdentification: AdditionalItemIdentificationSchema,
});

const NoteSchema = z.object({
  text: z.string().optional()
});

const EInvoiceSchema = z.object({
  InvoiceInfo: InvoiceInfoSchema,
  CompanyInfo: CompanyInfoSchema,
  CustomerInfo: CustomerInfoSchema,
  BuyerCustomerInfo: BuyerCustomerInfoSchema.optional(),
  ExportCustomerInfo: ExportCustomerInfoSchema.optional(),
  TaxFreeInfo: TaxFreeInfoSchema.optional(),
  InvoiceLines: z.array(InvoiceLineSchema).min(1, "En az bir fatura satırı gereklidir"),
  Notes: z.array(NoteSchema).optional(),
  CustomerAlias: z.string().optional(),
});

export const EInvoiceFormDataSchema: z.ZodType<EInvoiceFormData> = z.object({
  EInvoice: EInvoiceSchema
});