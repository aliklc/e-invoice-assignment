"use client";

import React from "react";
import { EInvoiceFormData } from "../lib/types";
import { EInvoiceFormDataSchema } from "../lib/zodSchemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { InvoiceInfoForm } from "./InvoiceInfoForm";
import { CompanyInfoForm } from "./CompanyInfoForm";
import { CustomerInfoForm } from "./CustomerInfoForm";

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
        TaxNumber: "",
        Name: "",
        TaxOffice: "",
        Address: "",
        City: "",
        Phone: "",
        Mail: "",
      },
      CustomerInfo: {
        TaxNumber: "",
        Name: "",
        TaxOffice: "",
        Address: "",
        City: "",
        Phone: "",
        Mail: "",
      },
    },
  });

  const onSubmit = (data: EInvoiceFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <Card className="bg-green-50 max-w-6xl mx-auto">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <InvoiceInfoForm />
            <CompanyInfoForm />
            <CustomerInfoForm />

            <Button type="submit" className="w-1/2">
              Gönder
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}