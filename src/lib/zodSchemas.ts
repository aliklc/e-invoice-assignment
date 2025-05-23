import { z } from "zod";
import { EInvoiceFormData } from "./types";

// InvoiceInfo için Zod Şeması
const InvoiceInfoSchema = z.object({
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
    .max(50, "Fatura Profili çok uzun")
});

// Ana EInvoiceFormData Şeması
export const EInvoiceFormDataSchema: z.ZodType<EInvoiceFormData> = z.object({
  InvoiceInfo: InvoiceInfoSchema
});