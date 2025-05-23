"use client";

import { useFormContext } from "react-hook-form";
import { EInvoiceFormData } from "../lib/types";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

export function CustomerInfoForm() {
  const { control } = useFormContext<EInvoiceFormData>();

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold mt-5">Müşteri Bilgileri</h2>
      <div className="grid grid-cols-5 gap-4">
        <FormField
          control={control}
          name="CustomerInfo.TaxNumber"
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
          name="CustomerInfo.Name"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>İsim</FormLabel>
              <FormControl>
                <Input placeholder="Ali Kılıç" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="CustomerInfo.TaxOffice"
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
        <FormField
          control={control}
          name="CustomerInfo.City"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Şehir</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="CustomerInfo.Phone"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Tel No</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="CustomerInfo.Address"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-3">
              <FormLabel>Adres</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="CustomerInfo.Mail"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-2">
              <FormLabel>Mail</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>
    </section>
  );
}