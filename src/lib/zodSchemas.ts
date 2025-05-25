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

const EInvoiceSchema = z.object({
  InvoiceInfo: InvoiceInfoSchema,
  CompanyInfo: CompanyInfoSchema,
  CustomerInfo: CustomerInfoSchema,
  BuyerCustomerInfo: BuyerCustomerInfoSchema.optional()
});

export const EInvoiceFormDataSchema: z.ZodType<EInvoiceFormData> = z.object({
  EInvoice: EInvoiceSchema
});