"use client";

import { useFormContext } from "react-hook-form";
import { EInvoiceFormData } from "../lib/types";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const currencyOptions = [
  { value: "TRY", label: "Türk Lirası (TRY)" },
  { value: "USD", label: "ABD Doları (USD)" },
  { value: "EUR", label: "Euro (EUR)" },
  { value: "GBP", label: "İngiliz Sterlini (GBP)" },
];

const invoiceTypeOptions = [
  { value: "SATİS", label: "SATİS" },
  { value: "İADE", label: "İADE" },
];

const paymentMethodOptions = [
  { value: "KREDIKARTI", label: "Kredi Kartı" },
  { value: "HAVALE", label: "Havale" },
  { value: "NAKIT", label: "Nakit" },
  { value: "CEK", label: "Çek" },
];

const paymentChannelOptions = [
  { value: "BANK", label: "Banka" },
  { value: "MOBILE", label: "Mobil Ödeme" },
  { value: "WEB", label: "Web Ödeme" },
];

export function InvoiceInfoForm() {
  const { control } = useFormContext<EInvoiceFormData>();

  return (
    <section className="space-y-4">
        <div className="flex items-center justify-normal mt-5">
        <h2 className="text-red-600 text-xl font-semibold">Fatura Bilgileri</h2>
        <FormField
          control={control}
          name="InvoiceInfo.UUID"
          render={({ field }) => (
              <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded whitespace-nowrap ml-5">
              UUID: {field.value}
              </div>
          )}
        />
        </div>
        <div className="grid grid-cols-4 gap-4">
        <div className="col-span-5 grid grid-cols-5 gap-4">
        <FormField
          control={control}
          name="InvoiceInfo.InvoiceSerieOrNumber"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Fatura Seri/Numara</FormLabel>
              <FormControl>
                <Input placeholder="F001-123" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.IssueDate"
          render={({ field }) => {
            const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
            return (
              <FormItem className="space-y-2">
                <FormLabel>Düzenlenme Tarihi</FormLabel>
                <FormControl>
                  <Input 
                    type="datetime-local"
                    value={value}
                    onChange={(e) => {
                      field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                    }}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )
          }}
        />
        <FormField
          control={control}
          name="InvoiceInfo.InvoiceType"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Fatura Tipi</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Fatura tipi seçin" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {invoiceTypeOptions.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.CurrencyCode"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Para Birimi</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Para birimi seçin" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {currencyOptions.map((currency) => (
                    <SelectItem key={currency.value} value={currency.value}>
                      {currency.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.InvoiceProfile"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Fatura Profili</FormLabel>
              <FormControl>
                <Input placeholder="EARSIVFATURA" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        </div>
        <div className="col-span-5 grid grid-cols-4 gap-4">
        <FormField
          control={control}
          name="InvoiceInfo.DespatchDocumentReference.0.IssueDate"
          render={({ field }) => {
            const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
            return (
              <FormItem className="space-y-2">
                <FormLabel>İrsaliye Tarihi</FormLabel>
                <FormControl>
                  <Input 
                    type="datetime-local"
                    value={value}
                    onChange={(e) => {
                      field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                    }}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )
          }}
        />
        <FormField
        control={control}
        name="InvoiceInfo.DespatchDocumentReference.0.Value"
        render={({ field }) => (
            <FormItem className="space-y-2">
            <FormLabel>İrsaliye Numarası</FormLabel>
            <FormControl>
                <Input placeholder="İrsaliye numarası girin" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
            </FormItem>
        )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.OrderReference.0.IssueDate"
          render={({ field }) => {
            const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
            return (
              <FormItem className="space-y-2">
                <FormLabel>Sipariş Tarihi</FormLabel>
                <FormControl>
                  <Input 
                    type="datetime-local"
                    value={value}
                    onChange={(e) => {
                      field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                    }}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )
          }}
        />
        <FormField
        control={control}
        name="InvoiceInfo.OrderReference.0.Value"
        render={({ field }) => (
            <FormItem className="space-y-2 col-span-1">
            <FormLabel>Sipariş Numarası</FormLabel>
            <FormControl>
                <Input placeholder="Sipariş numarası girin" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
            </FormItem>
        )}
        />
        </div>
        <div className="flex items-center justify-normal mt-5">
        <h2 className="text-red-600 text-xl font-semibold">Döküman Bilgileri</h2>
        </div>
        <div className="col-span-5 grid grid-cols-4 gap-4">
        <FormField
          control={control}
          name="InvoiceInfo.OrderReferenceDocument.0.ID"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-1">
              <FormLabel>Sipariş Doküman No</FormLabel>
              <FormControl>
                <Input placeholder="Doküman numarası" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.OrderReferenceDocument.0.IssueDate"
          render={({ field }) => {
            const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
            return (
              <FormItem className="space-y-2">
                <FormLabel>Döküman Tarihi</FormLabel>
                <FormControl>
                  <Input 
                    type="datetime-local"
                    value={value}
                    onChange={(e) => {
                      field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                    }}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )
          }}
        />
        <FormField
          control={control}
          name="InvoiceInfo.OrderReferenceDocument.0.DocumentType"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Doküman Tipi</FormLabel>
              <FormControl>
                <Input placeholder="Tip" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.OrderReferenceDocument.0.DocumentTypeCode"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-1">
              <FormLabel>Doküman Tipi Kodu</FormLabel>
              <FormControl>
                <Input placeholder="Tip kodu" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={control}
          name="InvoiceInfo.OrderReferenceDocument.0.DocumentDescription"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-4">
              <FormLabel>Doküman Açıklaması</FormLabel>
              <FormControl>
                <Input placeholder="Açıklama" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        {/* Attachment Alanları */}
        <div className="col-span-5 grid grid-cols-4 gap-4">
        <FormField
          control={control}
          name="InvoiceInfo.OrderReferenceDocument.0.Attachment.0.FileName"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-2">
              <FormLabel>Dosya Adı</FormLabel>
              <FormControl>
                <Input placeholder="Dosya adı" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.OrderReferenceDocument.0.Attachment.0.MimeCode"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>MIME Tipi</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.OrderReferenceDocument.0.Attachment.0.Base64Data"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-1">
              <FormLabel>Base64 Veri</FormLabel>
              <FormControl>
                <Input placeholder="Base64 veri" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        </div>
        <div className="flex items-center justify-normal mt-5">
        <h2 className="text-red-600 text-xl font-semibold">Ek Döküman Bilgileri</h2>
        </div>
        <div className="col-span-5 grid grid-cols-4 gap-4">
        <FormField
          control={control}
          name="InvoiceInfo.AdditionalDocumentReferences.0.ID"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-1">
              <FormLabel>Ek Doküman No</FormLabel>
              <FormControl>
                <Input placeholder="Doküman numarası" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.AdditionalDocumentReferences.0.IssueDate"
          render={({ field }) => {
            const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
            return (
              <FormItem className="space-y-2">
                <FormLabel>Ek Döküman Tarihi</FormLabel>
                <FormControl>
                  <Input 
                    type="datetime-local"
                    value={value}
                    onChange={(e) => {
                      field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                    }}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )
          }}
        />
        <FormField
          control={control}
          name="InvoiceInfo.AdditionalDocumentReferences.0.DocumentType"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Ek Doküman Tipi</FormLabel>
              <FormControl>
                <Input placeholder="Tip" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.AdditionalDocumentReferences.0.DocumentTypeCode"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-1">
              <FormLabel>Ek Doküman Tipi Kodu</FormLabel>
              <FormControl>
                <Input placeholder="Tip kodu" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={control}
          name="InvoiceInfo.AdditionalDocumentReferences.0.DocumentDescription"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-4">
              <FormLabel>Ek Doküman Açıklaması</FormLabel>
              <FormControl>
                <Input placeholder="Açıklama" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        {/* Attachment Alanları */}
        <div className="col-span-5 grid grid-cols-4 gap-4">
        <FormField
          control={control}
          name="InvoiceInfo.AdditionalDocumentReferences.0.Attachment.0.FileName"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-2">
              <FormLabel>Dosya Adı</FormLabel>
              <FormControl>
                <Input placeholder="Dosya adı" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.AdditionalDocumentReferences.0.Attachment.0.MimeCode"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>MIME Tipi</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.AdditionalDocumentReferences.0.Attachment.0.Base64Data"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-1">
              <FormLabel>Base64 Veri</FormLabel>
              <FormControl>
                <Input placeholder="Base64 veri" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        </div>
        <div className="flex items-center justify-normal mt-5">
          <h2 className="text-red-600 text-xl font-semibold">Vergi Muafiyet Bilgileri</h2>
        </div>
        <div className="col-span-5 grid grid-cols-3 gap-4">
          <FormField
            control={control}
            name="InvoiceInfo.TaxExemptionReasonInfo.KDVExemptionReasonCode"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>KDV Muafiyet Kodu</FormLabel>
                <FormControl>
                  <Input placeholder="301" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="InvoiceInfo.TaxExemptionReasonInfo.OTVExemptionReasonCode"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>ÖTV Muafiyet Kodu</FormLabel>
                <FormControl>
                  <Input placeholder="501" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="InvoiceInfo.TaxExemptionReasonInfo.AccommodationTaxExemptionReasonCode"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Konaklama Vergisi Muafiyet Kodu</FormLabel>
                <FormControl>
                  <Input placeholder="701" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-5 grid grid-cols-3 gap-4 mt-4">
          <FormField
            control={control}
            name="InvoiceInfo.PaymentTermsInfo.Percent"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Ödeme Yüzdesi</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="%" 
                    {...field} 
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="InvoiceInfo.PaymentTermsInfo.Amount"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Ödeme Tutarı</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Tutar" 
                    {...field} 
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="InvoiceInfo.PaymentTermsInfo.Note"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Ödeme Notu</FormLabel>
                <FormControl>
                  <Input placeholder="Açıklama" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-normal mt-5">
          <h2 className="text-red-600 text-xl font-semibold">Ödeme Bilgileri</h2>
        </div>
        <div className="col-span-5 grid grid-cols-3 gap-4">
        <FormField
          control={control}
          name="InvoiceInfo.PaymentMeansInfo.Code"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Fatura Tipi</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Fatura tipi seçin" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {paymentMethodOptions.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="InvoiceInfo.PaymentMeansInfo.ChannelCode"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Fatura Tipi</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Fatura tipi seçin" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {paymentChannelOptions.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
          <FormField
            control={control}
            name="InvoiceInfo.PaymentMeansInfo.DueDate"
            render={({ field }) => {
              const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
              return (
                <FormItem className="space-y-2">
                  <FormLabel>Son Ödeme Tarihi</FormLabel>
                  <FormControl>
                    <Input 
                      type="datetime-local"
                      value={value}
                      onChange={(e) => {
                        field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )
            }}
          />
          <FormField
            control={control}
            name="InvoiceInfo.PaymentMeansInfo.PayeeFinancialAccountID"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Hesap No/IBAN</FormLabel>
                <FormControl>
                  <Input placeholder="TRXX XXXX XXXX XXXX XXXX XXXX XX" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        <FormField
          control={control}
          name="InvoiceInfo.PaymentMeansInfo.Note"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Ödeme Açıklaması</FormLabel>
              <FormControl>
                <Input placeholder="Ödeme ile ilgili açıklama" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        </div>
        <div className="flex items-center justify-normal mt-5">
          <h2 className="text-red-600 text-xl font-semibold">OKC Bilgileri</h2>
        </div>
        <div className="col-span-5 grid grid-cols-3 gap-4">
          <FormField
            control={control}
            name="InvoiceInfo.OKCInfo.ID"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>OKC ID</FormLabel>
                <FormControl>
                  <Input placeholder="OKC numarası" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="InvoiceInfo.OKCInfo.IssueDate"
            render={({ field }) => {
              const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
              return (
                <FormItem className="space-y-2">
                  <FormLabel>Düzenlenme Tarihi</FormLabel>
                  <FormControl>
                    <Input 
                      type="datetime-local"
                      value={value}
                      onChange={(e) => {
                        field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )
            }}
          />
          <FormField
            control={control}
            name="InvoiceInfo.OKCInfo.Time"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Saat</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-5 grid grid-cols-3 gap-4 mt-4">
          <FormField
            control={control}
            name="InvoiceInfo.OKCInfo.ZNo"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Z No</FormLabel>
                <FormControl>
                  <Input placeholder="Z numarası" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="InvoiceInfo.OKCInfo.EndPointID"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Endpoint ID</FormLabel>
                <FormControl>
                  <Input placeholder="Endpoint ID" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        <FormField
          control={control}
          name="InvoiceInfo.OKCInfo.DocumentDescription"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-4">
              <FormLabel>Açıklama</FormLabel>
              <FormControl>
                <Input placeholder="OKC açıklaması" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        </div>
        <div className="flex items-center justify-normal mt-5">
          <h2 className="text-red-600 text-xl font-semibold">ESU Rapor Bilgileri</h2>
        </div>
        <div className="col-span-5 grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="InvoiceInfo.ESUReportInfo.ID"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Rapor ID</FormLabel>
                <FormControl>
                  <Input placeholder="Rapor numarası" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="InvoiceInfo.ESUReportInfo.IssueDate"
            render={({ field }) => {
              const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
              return (
                <FormItem className="space-y-2">
                  <FormLabel>Rapor Tarihi</FormLabel>
                  <FormControl>
                    <Input 
                      type="datetime-local"
                      value={value}
                      onChange={(e) => {
                        field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )
            }}
          />
          </div>
        <div className="flex items-center justify-normal mt-5">
          <h2 className="text-red-600 text-xl font-semibold">İade Fatura Bilgileri</h2>
        </div>
        <div className="col-span-5 grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="InvoiceInfo.ReturnInvoiceInfo.0.InvoiceNumber"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Fatura Numarası</FormLabel>
                <FormControl>
                  <Input placeholder="Rapor numarası" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="InvoiceInfo.ReturnInvoiceInfo.0.IssueDate"
            render={({ field }) => {
              const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
              return (
                <FormItem className="space-y-2">
                  <FormLabel>Fatura Tarihi</FormLabel>
                  <FormControl>
                    <Input 
                      type="datetime-local"
                      value={value}
                      onChange={(e) => {
                        field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )
            }}
          />
          </div>   
      </div>
    </section>
  );
}