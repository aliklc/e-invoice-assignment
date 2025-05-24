"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EInvoiceFormData } from "../lib/types";
import { EInvoiceFormDataSchema } from "../lib/zodSchemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Stepper } from "@/components/Stepper";
import { InvoiceInfoForm } from "./InvoiceInfoForm";
import { CompanyInfoForm } from "./CompanyInfoForm";
import { CustomerInfoForm } from "./CustomerInfoForm";

const steps = [
  { id: "invoice-info", name: "Fatura Bilgileri" },
  { id: "company-info", name: "Şirket Bilgileri" },
  { id: "customer-info", name: "Müşteri Bilgileri" },
];

export default function EInvoiceForm() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const form = useForm<EInvoiceFormData>({
    resolver: zodResolver(EInvoiceFormDataSchema),
    shouldUnregister: false,
    defaultValues: {
      InvoiceInfo: {
        UUID: uuidv4(),
        InvoiceSerieOrNumber: "",
        IssueDate: "",
        InvoiceType: "",
        CurrencyCode: "",
        InvoiceProfile: "",
        DespatchDocumentReference: [
          {
            IssueDate: "",
            Value: "",
          },
        ],
        OrderReference: [
          {
            IssueDate: "",
            Value: "",
          },
        ],
        OrderReferenceDocument: [
          {
            ID: "",
            IssueDate: "",
            DocumentType: "",
            DocumentTypeCode: "",
            DocumentDescription: "",
            Attachment: [
              {
                Base64Data: "",
                MimeCode: "",
                FileName: "",
              },
            ],
          },
        ],
      AdditionalDocumentReferences: [ // Bu alanı ekliyoruz
        {
          ID: "",
          IssueDate: "",
          DocumentType: "",
          DocumentTypeCode: "",
          DocumentDescription: "", // Eğer opsiyonel değilse burada boş string olmalı
          Attachment: [
            {
              Base64Data: "",
              MimeCode: "",
              FileName: "",
            },
          ],
        },
      ],
      TaxExemptionReasonInfo: {
        KDVExemptionReasonCode: "",
        OTVExemptionReasonCode: "",
        AccommodationTaxExemptionReasonCode: ""
      },
      PaymentTermsInfo: {
        Percent: undefined,
        Amount: undefined,
        Note: ""
      },
      PaymentMeansInfo: {
        Code: "",
        ChannelCode: "",
        DueDate: "",
        PayeeFinancialAccountID: "",
        Note: ""
      },
      OKCInfo: {
        ID: "",
        IssueDate: "",
        Time: "",
        ZNo: "",
        EndPointID: "",
        DocumentDescription: ""
      },
      ESUReportInfo: {
        ID: "",
        IssueDate: ""
      },
      ReturnInvoiceInfo: [
        {
          InvoiceNumber: "",
          IssueDate: ""
        }
      ]             
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

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Card className="bg-white max-w-6xl mx-auto">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
            <Stepper 
              steps={steps} 
              currentStep={currentStep} 
              setCurrentStep={setCurrentStep} 
            />

            <div className="mt-8">
              {currentStep === 0 && <InvoiceInfoForm/>}
              {currentStep === 1 && <CompanyInfoForm />}
              {currentStep === 2 && <CustomerInfoForm />}
            </div>

            <div className="flex justify-between mt-8">
              {currentStep > 0 ? (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Önceki
                </Button>
              ) : (
                <div></div>
              )}

              {currentStep < steps.length - 1 ? (
                <Button type="button" onClick={nextStep}>
                  Sonraki
                </Button>
              ) : (
                <Button type="submit">Fatura Oluştur</Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}