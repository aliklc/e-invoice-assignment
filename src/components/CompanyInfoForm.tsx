"use client";

import { useFormContext } from "react-hook-form";
import { EInvoiceFormData } from "../lib/types";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

export function CompanyInfoForm() {
  const { control } = useFormContext<EInvoiceFormData>();

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold mt-5">Şirket Bilgileri</h2>
      <div className="grid grid-cols-3 gap-4">
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.TaxNumber"
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
          name="EInvoice.CompanyInfo.Name"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Şirket İsmi</FormLabel>
              <FormControl>
                <Input placeholder="XXXX" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.TaxOffice"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Vergi Dairesi</FormLabel>
              <FormControl>
                <Input placeholder="XXXX" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        
        {/* PartyIdentifications - Basit olarak ilk elemanı gösteriyorum */}
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.PartyIdentifications.0.SchemeID"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Taraf Kimlik Şema ID</FormLabel>
              <FormControl>
                <Input placeholder="VKN_TCKN" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.PartyIdentifications.0.Value"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Taraf Kimlik Değeri</FormLabel>
              <FormControl>
                <Input placeholder="Kimlik değeri" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* AgentPartyIdentifications - Basit olarak ilk elemanı gösteriyorum */}
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.AgentPartyIdentifications.0.SchemeID"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Vekil Taraf Şema ID</FormLabel>
              <FormControl>
                <Input placeholder="VKN_TCKN" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.AgentPartyIdentifications.0.Value"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Vekil Taraf Değeri</FormLabel>
              <FormControl>
                <Input placeholder="Vekil kimlik değeri" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="EInvoice.CompanyInfo.District"
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
          name="EInvoice.CompanyInfo.City"
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
          name="EInvoice.CompanyInfo.Country"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Ülke</FormLabel>
              <FormControl>
                <Input placeholder="Türkiye" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.PostalCode"
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
          name="EInvoice.CompanyInfo.Phone"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Tel No</FormLabel>
              <FormControl>
                <Input placeholder="+90XXXXXXXXXX" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.Fax"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Fax</FormLabel>
              <FormControl>
                <Input placeholder="+90XXXXXXXXXX" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="EInvoice.CompanyInfo.Address"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-3">
              <FormLabel>Adres</FormLabel>
              <FormControl>
                <Input placeholder="Tam adres bilgisi" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.Mail"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-2">
              <FormLabel>Mail</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.WebSite"
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