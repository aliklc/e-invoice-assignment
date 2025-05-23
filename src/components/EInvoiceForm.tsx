"use client";

import React from "react";
import { EInvoiceFormData } from "../lib/types";
import { EInvoiceFormDataSchema } from "../lib/zodSchemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger,SelectValue,} from "@/components/ui/select"

export default function EInvoiceForm() {
  const form = useForm<EInvoiceFormData>({
    resolver: zodResolver(EInvoiceFormDataSchema),
    defaultValues: {
      InvoiceInfo: {
        InvoiceSerieOrNumber: "",
        IssueDate: "",
        InvoiceType: "",
        CurrencyCode: "TRY", // Varsayılan değer ekledim
        InvoiceProfile: "EARSIVFATURA" // Varsayılan değer ekledim
      }
    }
  });

  const onSubmit = (data: EInvoiceFormData) => {
    console.log("Form submitted:", data);
    // API çağrısı veya form işleme logic'i buraya gelecek
  };

  const currencyOptions = [
  { value: "TRY", label: "Türk Lirası (TRY)" },
  { value: "USD", label: "ABD Doları (USD)" },
  { value: "EUR", label: "Euro (EUR)" },
  { value: "GBP", label: "İngiliz Sterlini (GBP)" },
];

  return (
    <Card className="bg-amber-50 max-w-6xl mx-auto">
      <CardHeader>
        <h2 className="text-xl font-semibold">Fatura Bilgileri</h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Invoice Info */}
            <section className="space-y-4">
              <div className="grid grid-cols-5 gap-4">
                <FormField
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
                  name="InvoiceInfo.InvoiceType"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Fatura Tipi</FormLabel>
                      <FormControl>
                        <Input placeholder="SATIS" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
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
                  control={form.control}
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
            </section>
            <Button type="submit" className="w-1/2">
              Gönder
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}