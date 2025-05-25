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
  
  Address: z.string()
    .min(1, "Adres boş bırakılamaz")
    .max(200, "Adres çok uzun"),
  
  City: z.string()
    .min(1, "Şehir boş bırakılamaz")
    .max(20, "Şehir adı çok uzun"),
  
  Phone: z.string()
    .min(10, "Telefon numarası en az 10 karakter olmalıdır")
    .max(15, "Telefon numarası çok uzun")
    .regex(/^[0-9+]+$/, "Geçerli bir telefon numarası girin"),
  
  Mail: z.string()
    .min(1, "E-posta boş bırakılamaz")
    .email("Geçerli bir e-posta adresi girin")
    .max(100, "E-posta çok uzun")
});

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

  Address: z.string()
    .min(1, "Adres boş bırakılamaz")
    .max(200, "Adres çok uzun"),

  City: z.string()
    .min(1, "Şehir boş bırakılamaz")
    .max(20, "Şehir adı çok uzun"),

  Phone: z.string()
    .min(10, "Telefon numarası en az 10 karakter olmalıdır")
    .max(15, "Telefon numarası çok uzun")
    .regex(/^[0-9+]+$/, "Geçerli bir telefon numarası girin"),

  Mail: z.string()
    .min(1, "E-posta boş bırakılamaz")
    .email("Geçerli bir e-posta adresi girin")
    .max(100, "E-posta çok uzun")
});

const EInvoiceSchema = z.object({
  InvoiceInfo: InvoiceInfoSchema,
  CompanyInfo: CompanyInfoSchema,
  CustomerInfo: CustomerInfoSchema
});

export const EInvoiceFormDataSchema: z.ZodType<EInvoiceFormData> = z.object({
  EInvoice: EInvoiceSchema
});