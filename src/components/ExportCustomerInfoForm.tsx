"use client";

import { useFormContext } from "react-hook-form";
import { EInvoiceFormData } from "../lib/types";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

export function ExportCustomerInfoForm() {
  const { control } = useFormContext<EInvoiceFormData>();

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">İhracat Müşteri Bilgileri</h2>
      
      <div className="grid grid-cols-4 gap-4">
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.TaxNumber"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Vergi Numarası</FormLabel>
              <FormControl>
                <Input placeholder="99999999" {...field} />
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
                <Input placeholder="Şirket Ltd." {...field} />
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
                <Input placeholder="John" {...field} />
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
                <Input placeholder="Doe" {...field} />
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
                <Input placeholder="Tam adres bilgisi" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.District"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>İlçe</FormLabel>
              <FormControl>
                <Input placeholder="İlçe adı" {...field} />
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
                <Input placeholder="Şehir adı" {...field} />
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
                <Input placeholder="Ülke adı" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <FormField
          control={control}
          name="EInvoice.ExportCustomerInfo.PostalCode"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Posta Kodu</FormLabel>
              <FormControl>
                <Input placeholder="34000" {...field} />
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
                <Input placeholder="+90XXXXXXXXXX" {...field} />
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
                <Input placeholder="+90XXXXXXXXXX" {...field} />
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
                <Input type="email" placeholder="email@example.com" {...field} />
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
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>
    </section>
  );
}