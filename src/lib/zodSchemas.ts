import { z } from "zod";
import { EInvoiceFormData } from "./types";


const despatchDocumentReferenceSchema = z.object({
  IssueDate: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Geçerli bir tarih formatı girin (YYYY-MM-DD)")
    .refine(date => new Date(date).toString() !== "Invalid Date", {
      message: "Geçerli bir tarih girin"
    }),
  Value: z.string().min(1, "Değer boş olamaz"),
});

const OrderReferenceSchema = z.object({
  IssueDate: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Geçerli bir tarih formatı girin (YYYY-MM-DD)")
    .refine(date => new Date(date).toString() !== "Invalid Date", {
      message: "Geçerli bir tarih girin"
    }),
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
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Geçerli bir tarih formatı girin (YYYY-MM-DD)")
    .refine(date => new Date(date).toString() !== "Invalid Date", {
      message: "Geçerli bir tarih girin"
    }), 
  DocumentType: z.string().min(1, "Doküman tipi boş olamaz"),
  DocumentTypeCode: z.string().min(1, "Doküman tip kodu boş olamaz"),
  DocumentDescription: z.string().optional(),
  Attachment: z.array(AttachmentSchema)
});

const AdditionalDocumentReferencesSchema = z.object({
  ID: z.string().min(1, "Doküman ID boş olamaz"),
  IssueDate: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Geçerli bir tarih formatı girin (YYYY-MM-DD)")
    .refine(date => new Date(date).toString() !== "Invalid Date", {
      message: "Geçerli bir tarih girin"
    }), 
  DocumentType: z.string().min(1, "Doküman tipi boş olamaz"),
  DocumentTypeCode: z.string().min(1, "Doküman tip kodu boş olamaz"),
  DocumentDescription: z.string().optional(),
  Attachment: z.array(AttachmentSchema)
});

// InvoiceInfo için Zod Şeması
const InvoiceInfoSchema = z.object({
  UUID: z.string(),

  InvoiceSerieOrNumber: z.string()
    .min(1, "Fatura Seri/Numara boş bırakılamaz")
    .max(50, "Fatura Seri/Numara çok uzun"),
  
  IssueDate: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Geçerli bir tarih formatı girin (YYYY-MM-DD)")
    .refine(date => new Date(date).toString() !== "Invalid Date", {
      message: "Geçerli bir tarih girin"
    }),
  
  InvoiceType: z.string()
    .min(1, "Fatura Tipi boş bırakılamaz")
    .max(20, "Fatura Tipi çok uzun"),
  
  CurrencyCode: z.string()
    .length(3, "Para birimi kodu 3 karakter olmalıdır")
    .toUpperCase(),
  
  InvoiceProfile: z.string()
    .min(1, "Fatura Profili boş bırakılamaz")
    .max(50, "Fatura Profili çok uzun"),

  DespatchDocumentReference: z.array(despatchDocumentReferenceSchema),
  OrderReference: z.array(OrderReferenceSchema),
  OrderReferenceDocument: z.array(OrderReferenceDocumentSchema),
  AdditionalDocumentReferences: z.array(AdditionalDocumentReferencesSchema),
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

// Ana EInvoiceFormData Şeması
export const EInvoiceFormDataSchema: z.ZodType<EInvoiceFormData> = z.object({
  InvoiceInfo: InvoiceInfoSchema,
  CompanyInfo: CompanyInfoSchema,
  CustomerInfo: CustomerInfoSchema
});