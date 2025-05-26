"use client";

import { useFormContext } from "react-hook-form";
import { EInvoiceFormData } from "../lib/types";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

export function ExportCustomerInfoForm() {
  const { control } = useFormContext<EInvoiceFormData>();

  return (
    <section className="border border-gray-200 rounded-lg p-6 bg-gray-50 space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.TaxNumber"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Vergi Numarası</FormLabel>
              <FormControl>
                <Input placeholder="99999999" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.LegalRegistrationName"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Yasal Kayıt Adı</FormLabel>
              <FormControl>
                <Input placeholder="Şirket Ltd." className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.PersonName"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Kişi Adı</FormLabel>
              <FormControl>
                <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.PersonSurName"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Kişi Soyadı</FormLabel>
              <FormControl>
                <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.Address"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Adres</FormLabel>
              <FormControl>
                <Input placeholder="Tam adres bilgisi" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.District"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>İlçe</FormLabel>
              <FormControl>
                <Input placeholder="İlçe adı" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.City"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Şehir</FormLabel>
              <FormControl>
                <Input placeholder="Şehir adı" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.Country"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Ülke</FormLabel>
              <FormControl>
                <Input placeholder="Ülke adı" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.PostalCode"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Posta Kodu</FormLabel>
              <FormControl>
                <Input placeholder="34000" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.Phone"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Telefon</FormLabel>
              <FormControl>
                <Input placeholder="+90XXXXXXXXXX" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.Fax"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Faks</FormLabel>
              <FormControl>
                <Input placeholder="+90XXXXXXXXXX" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.Mail"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>E-posta</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@example.com" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.WebSite"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Web Sitesi</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>
    </section>
  );
}