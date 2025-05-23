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

export function InvoiceInfoForm() {
  const { control } = useFormContext<EInvoiceFormData>();

  return (
    <section className="space-y-4">
        <div className="flex items-center justify-normal mt-5">
        <h2 className="text-xl font-semibold">Fatura Bilgileri</h2>
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
        <div className="grid grid-cols-5 gap-4">
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
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Düzenlenme Tarihi</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
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
        <FormField
        control={control}
        name="InvoiceInfo.DespatchDocumentReference.0.IssueDate"
        render={({ field }) => (
            <FormItem className="space-y-2 col-span-2">
            <FormLabel>İrsaliye Tarihi</FormLabel>
            <FormControl>
                <Input type="date" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
            </FormItem>
        )}
        />
        <FormField
        control={control}
        name="InvoiceInfo.DespatchDocumentReference.0.Value"
        render={({ field }) => (
            <FormItem className="space-y-2 col-span-2">
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
        render={({ field }) => (
            <FormItem className="space-y-2 col-span-2">
            <FormLabel>Sipariş Tarihi</FormLabel>
            <FormControl>
                <Input type="date" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
            </FormItem>
        )}
        />

        <FormField
        control={control}
        name="InvoiceInfo.OrderReference.0.Value"
        render={({ field }) => (
            <FormItem className="space-y-2 col-span-2">
            <FormLabel>Sipariş Numarası</FormLabel>
            <FormControl>
                <Input placeholder="Sipariş numarası girin" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
            </FormItem>
        )}
        />                
      </div>
    </section>
  );
}