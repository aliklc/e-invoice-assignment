"use client";


import React from "react";
import { EInvoiceFormData } from "../lib/types";
import { EInvoiceFormDataSchema } from "../lib/zodSchemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
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
        CurrencyCode: "",
        InvoiceProfile: "",
      },
      CompanyInfo: {
        TaxNumber:"",
        Name:"",
        TaxOffice:"",
        Address:"",
        City:"",
        Phone:"",
        Mail:""
      },
      CustomerInfo: {
        TaxNumber: "",
        Name: "",
        TaxOffice: "",
        Address: "",
        City: "",
        Phone: "",
        Mail: "",
    }
    }
  });


  const onSubmit = (data: EInvoiceFormData) => {
    console.log("Form submitted:", data);
  };

  const currencyOptions = [
  { value: "TRY", label: "Türk Lirası (TRY)" },
  { value: "USD", label: "ABD Doları (USD)" },
  { value: "EUR", label: "Euro (EUR)" },
  { value: "GBP", label: "İngiliz Sterlini (GBP)" },
];

  const invoiceTypeOptions = [
    { value: "SATİS", label: "SATİS"},
    { value: "İADE", label: "İADE"},
  ]

  return (
    <Card className="bg-amber-50 max-w-6xl mx-auto">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Invoice Info */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold mt-5">Fatura Bilgileri</h2>
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Fatura tipi seçin"/>
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
            <section className="space-y-4">
              <h2 className="text-xl font-semibold mt-5">Şirket Bilgileri</h2>
              <div className="grid grid-cols-5 gap-4">
                  <FormField
                  control={form.control}
                  name="CompanyInfo.TaxNumber"
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
                  control={form.control}
                  name="CompanyInfo.Name"
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
                  control={form.control}
                  name="CompanyInfo.TaxOffice"
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
                  control={form.control}
                  name="CompanyInfo.City"
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
                  control={form.control}
                  name="CompanyInfo.Phone"
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
                  control={form.control}
                  name="CompanyInfo.Address"
                  render={({ field }) => (
                    <FormItem className="space-y-2 col-span-3">
                      <FormLabel>Adres</FormLabel>
                      <FormControl>
                        <Input  {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                  <FormField
                  control={form.control}
                  name="CompanyInfo.Mail"
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
            <section className="space-y-4">
              <h2 className="text-xl font-semibold mt-5">Müşteri Bilgileri</h2>
              <div className="grid grid-cols-5 gap-4">
                <FormField
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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

            <Button type="submit" className="w-1/2">
              Gönder
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}