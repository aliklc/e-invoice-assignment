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
import { PaymentMeansInfoForm } from "./PaymentMeansInfoForm";
import { ExportCustomerInfoForm } from "./ExportCustomerInfoForm";
import { TaxFreeInfoForm } from "./TaxFreeInfoForm";
import { InvoiceLinesForm } from "./InvoiceLinesForm";
import { MedicineAndMedicalDeviceForm } from "./MedicineAndMedicalDeviceForm";

const steps = [
  { id: "invoice-info", name: "Fatura Bilgileri" },
  { id: "payment-info", name: "Ödeme Bilgileri"},
  { id: "company-info", name: "Şirket Bilgileri" },
  { id: "customer-info", name: "Müşteri Bilgileri" },
  { id: "buyer-customer-info", name: "Alıcı Müşteri Bilgileri" },
  { id: "export-customer-info", name: "İhracat Müşteri Bilgileri" },
  { id: "tax-free-info", name: "Vergisiz Satış Bilgileri" },
  { id: "ınvoice-lines-info", name : "Fatura Satırları"},
  { id: "medicine-medical-device-info", name: "İlaç & Tıbbi Cihaz Bilgileri" }
];

export default function EInvoiceForm() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const form = useForm<EInvoiceFormData>({
    resolver: zodResolver(EInvoiceFormDataSchema),
    shouldUnregister: false,
    defaultValues: {
      EInvoice: {
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
      AdditionalDocumentReferences: [
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
      ],
      AccountingCost: "", 
      InvoicePeriod: {
        StartDate: "",
        StartTime: "",
        EndDate: "",
        EndTime: "",
        DurationMeasureValue: undefined,
        Description: ""
      },
      SGKInfo: {
        RegisterName: "",
        DocumentNumber: "",
        RegisterCode: ""
      },
      Expenses: [
        {
          ExpenseType: "",
          Percent: undefined,
          Amount: undefined
        }
      ],
        LineExtensionAmount: undefined,
        GeneralKDV1Total: undefined,
        GeneralKDV8Total: undefined,
        GeneralKDV18Total: undefined,
        GeneralKDV10Total: undefined,
        GeneralKDV20Total: undefined,
        GeneralAllowanceTotal: undefined,
        PayableAmount: undefined,
        KdvTotal: undefined,           
      },
        CompanyInfo: {
          TaxNumber: "",
          Name: "",
          TaxOffice: "",
          PartyIdentifications: [
            {
              SchemeID: "",
              Value: ""
            }
          ],
          AgentPartyIdentifications: [
            {
              SchemeID: "",
              Value: ""
            }
          ],
          Address: "",
          District: "",
          City: "",
          Country: "",
          PostalCode: "",
          Phone: "",
          Fax: "",
          Mail: "",
          WebSite: "",
        },
      CustomerInfo: {
        TaxNumber: "",
        Name: "",
        TaxOffice: "",
        PartyIdentifications: [
          {
            SchemeID: "",
            Value: ""
          }
        ],
        AgentPartyIdentifications: [
          {
            SchemeID: "",
            Value: ""
          }
        ],
        Address: "",
        District: "",
        City: "",
        Country: "",
        PostalCode: "",
        Phone: "",
        Fax: "",
        Mail: "",
        WebSite: "",
      },
      BuyerCustomerInfo: {
        TaxNumber: "",
        Name: "",
        TaxOffice: "",
        PartyIdentifications: [
          {
            SchemeID: "",
            Value: ""
          }
        ],
        AgentPartyIdentifications: [
          {
            SchemeID: "",
            Value: ""
          }
        ],
        Address: "",
        District: "",
        City: "",
        Country: "",
        PostalCode: "",
        Phone: "",
        Fax: "",
        Mail: "",
        WebSite: "",
      },
      ExportCustomerInfo: {
        TaxNumber: "",
        LegalRegistrationName: "",
        PersonName: "",
        PersonSurName: "",
        Address: "",
        District: "",
        City: "",
        Country: "",
        PostalCode: "",
        Phone: "",
        Fax: "",
        Mail: "",
        WebSite: ""
      },
      TaxFreeInfo: {
        TouristInfo: {
          Name: "",
          SurName: "",
          CountryCode: "",
          PassportNo: "",
          PassportDate: "",
          AddressInfo: {
            Address: "",
            District: "",
            City: "",
            Country: "",
            PostalCode: "",
            Phone: "",
            Fax: "",
            Mail: "",
            WebSite: ""
          },
          FinancialAccountInfo: {
            BankName: "",
            BranchName: "",
            ID: "",
            CurrencyCode: "",
            PaymentNote: ""
          }
        },
        TaxRepresentativeInfo: {
          RegisterNumber: "",
          Alias: "",
          Address: {
            Address: "",
            District: "",
            City: "",
            Country: "",
            PostalCode: "",
            Phone: "",
            Fax: "",
            Mail: "",
            WebSite: ""
          }
        }
    },
      InvoiceLines: [{
        Index: "1",
        SellerCode: "",
        BuyerCode: "",
        Name: "",
        Description: "",
        Quantity: 1,
        UnitType: "ADET",
        Price: 0,
        AllowanceTotal: 0,
        KDVPercent: 0,
        KDVTotal: 0,
        Taxes: [{
          TaxCode: "",
          Total: 0,
          Percent: 0
        }],
        DeliveryInfo: {
          GTIPNo: "",
          DeliveryTermCode: "",
          TransportModeCode: "",
          PackageBrandName: "",
          ProductTraceID: "",
          PackageID: "",
          PackageQuantity: 1,
          PackageTypeCode: "",
          DeliveryAddress: {
            Address: "",
            District: "",
            City: "",
            Country: "",
            PostalCode: "",
            Phone: "",
            Fax: "",
            Mail: "",
            WebSite: ""
          }
        },
        ManufacturerCode: "",
        BrandName: "",
        ModelName: "",
        Note: "",
        SerialID: "",
        OzelMatrahReason: "",
        OzelMatrahTotal: 0,
        VatAmountWithoutTevkifat: 0,
        MedicineAndMedicalDevice: {
          Medicine: [{
            GTIN: "",
            BatchNumber: "",
            SerialNumber: "",
            ExpirationDate: ""
          }],
          MedicalDevice: [{
            ProductNumber: "",
            LotNumber: "",
            SerialNumber: "",
            ProductionDate: ""
          }],
        },
        ExportRegisteredInfo: {
          DIIBLineCode: "",
          GTIPNo: "",
        },
        AdditionalItemIdentification: {
          TagNumber: "",
          OwnerName: "",
          OwnerTaxNumber: "",
        }
      }],
      Notes: [
      { text: "" }
      ],
    },
  }
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
              {currentStep === 1 && <PaymentMeansInfoForm/>}
              {currentStep === 2 && <CompanyInfoForm />}
              {currentStep === 3 && <CustomerInfoForm type="CustomerInfo" title="Müşteri Bilgileri" />}
              {currentStep === 4 && <CustomerInfoForm type="BuyerCustomerInfo" title="Alıcı Müşteri Bilgileri" />}
              {currentStep === 5 && <ExportCustomerInfoForm />}
              {currentStep === 6 && <TaxFreeInfoForm />}
              {currentStep === 7 && <InvoiceLinesForm />}
              {currentStep === 8 && <MedicineAndMedicalDeviceForm invoiceLineIndex={0} />}
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