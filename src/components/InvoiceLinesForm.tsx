"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { EInvoiceFormData } from "../lib/types";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, Package } from "lucide-react";
import { useEffect } from "react";

export function InvoiceLinesForm() {
  const { control, watch, setValue } = useFormContext<EInvoiceFormData>();
  
  const { fields: invoiceLineFields, append: appendInvoiceLine, remove: removeInvoiceLine } = useFieldArray({
    control,
    name: "EInvoice.InvoiceLines"
  });

  const watchedLines = watch("EInvoice.InvoiceLines");

  const unitTypes = [
    "ADET", "KG", "LITRE", "METRE", "M2", "M3", "TON", "PAKET", "KUTU", "SAAT"
  ];

  const kdvRates = [
    { value: 0, label: "%0" },
    { value: 1, label: "%1" },
    { value: 8, label: "%8" },
    { value: 10, label: "%10" },
    { value: 18, label: "%18" },
    { value: 20, label: "%20" }
  ];

  useEffect(() => {
    if (watchedLines) {
      watchedLines.forEach((line, index) => {
        if (line) {
          const quantity = line.Quantity || 0;
          const price = line.Price || 0;
          const allowanceTotal = line.AllowanceTotal || 0;
          const kdvPercent = line.KDVPercent || 0;

          const subtotal = (price * quantity) - allowanceTotal;
          const kdvTotal = (subtotal * kdvPercent) / 100;

          setValue(`EInvoice.InvoiceLines.${index}.KDVTotal`, Number(kdvTotal.toFixed(2)));
        }
      });
    }
  }, [watchedLines, setValue]);

  const addInvoiceLine = () => {
    const newIndex = invoiceLineFields.length + 1;
    appendInvoiceLine({
      Index: newIndex.toString(),
      SellerCode: "",
      BuyerCode: "",
      Name: "",
      Description: "",
      Quantity: 1,
      UnitType: "ADET",
      Price: 0,
      AllowanceTotal: 0,
      KDVPercent: 18,
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
    });
  };

  const removeInvoiceLineHandler = (index: number) => {
    removeInvoiceLine(index);
    setTimeout(() => {
      const currentLines = watch("EInvoice.InvoiceLines");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      currentLines.forEach((_: any, i: number) => {
        setValue(`EInvoice.InvoiceLines.${i}.Index`, (i + 1).toString());
      });
    }, 0);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calculateLineTotal = (line: any) => {
    if (!line) return 0;
    const subtotal = ((line.Price || 0) * (line.Quantity || 0)) - (line.AllowanceTotal || 0);
    return subtotal + (line.KDVTotal || 0);
  };

  const calculateGrandTotal = () => {
    if (!watchedLines) return 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return watchedLines.reduce((total: number, line: any) => total + calculateLineTotal(line), 0);
  };

  const calculateTotalKDV = () => {
    if (!watchedLines) return 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return watchedLines.reduce((total: number, line: any) => total + (line?.KDVTotal || 0), 0);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Package className="w-5 h-5" />
          Fatura Kalemleri
        </h2>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addInvoiceLine}
        >
          <Plus className="w-4 h-4 mr-2" />
          Kalem Ekle
        </Button>
      </div>

      {invoiceLineFields.map((field, index) => (
        <div key={field.id} className="border border-gray-200 rounded-lg p-6 bg-gray-50 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-800">
              Kalem #{index + 1}
            </h3>
            {invoiceLineFields.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeInvoiceLineHandler(index)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.Name`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Ürün Adı *</FormLabel>
                  <FormControl>
                    <Input placeholder="Ürün adını giriniz" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.SellerCode`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Satıcı Kodu</FormLabel>
                  <FormControl>
                    <Input placeholder="Satıcı kodu" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.Description`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Açıklama</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Ürün açıklaması"
                      className="min-h-[80px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.BuyerCode`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Alıcı Kodu</FormLabel>
                  <FormControl>
                    <Input placeholder="Alıcı kodu" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.ManufacturerCode`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Üretici Kodu</FormLabel>
                  <FormControl>
                    <Input placeholder="Üretici kodu" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.BrandName`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Marka</FormLabel>
                  <FormControl>
                    <Input placeholder="Marka adı" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.ModelName`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input placeholder="Model adı" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.SerialID`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Seri Numarası</FormLabel>
                  <FormControl>
                    <Input placeholder="Seri numarası" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.Note`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Not</FormLabel>
                  <FormControl>
                    <Input placeholder="Not" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.OzelMatrahReason`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Özel Matrah Nedeni</FormLabel>
                  <FormControl>
                    <Input placeholder="Özel matrah nedeni" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.OzelMatrahTotal`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Özel Matrah Tutarı</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.VatAmountWithoutTevkifat`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Tevkifatsız KDV Tutarı</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.Quantity`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Miktar *</FormLabel>
                  <FormControl>
                    <Input 
                      type="number"
                      min="0"
                      step="0.01"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.UnitType`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Birim</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Birim seçin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {unitTypes.map(unit => (
                        <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.Price`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Birim Fiyat *</FormLabel>
                  <FormControl>
                    <Input 
                      type="number"
                      min="0"
                      step="0.01"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.AllowanceTotal`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>İndirim Tutarı</FormLabel>
                  <FormControl>
                    <Input 
                      type="number"
                      min="0"
                      step="0.01"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.KDVPercent`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>KDV Oranı</FormLabel>
                  <Select onValueChange={(value) => field.onChange(parseFloat(value))} value={field.value?.toString()}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="KDV oranı seçin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {kdvRates.map(rate => (
                        <SelectItem key={rate.value} value={rate.value.toString()}>
                          {rate.label}
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
              name={`EInvoice.InvoiceLines.${index}.Taxes.0.TaxCode`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Vergi Kodu</FormLabel>
                  <FormControl>
                    <Input placeholder="Vergi kodu" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.InvoiceLines.${index}.Taxes.0.Percent`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Vergi Oranı (%)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number"
                      min="0"
                      step="0.01"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="font-medium text-yellow-800 mb-2">Teslimat Bilgileri</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.GTIPNo`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>GTIP No</FormLabel>
                    <FormControl>
                      <Input placeholder="GTIP No" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.DeliveryTermCode`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Teslim Şart Kodu</FormLabel>
                    <FormControl>
                      <Input placeholder="Teslim şart kodu" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.TransportModeCode`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Taşıma Şekli Kodu</FormLabel>
                    <FormControl>
                      <Input placeholder="Taşıma şekli kodu" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.PackageBrandName`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Paket Marka Adı</FormLabel>
                    <FormControl>
                      <Input placeholder="Paket marka adı" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.ProductTraceID`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Ürün Takip No</FormLabel>
                    <FormControl>
                      <Input placeholder="Ürün takip no" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.PackageID`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Paket ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Paket ID" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.PackageQuantity`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Paket Adedi</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        step="1"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value, 10) || 1)}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.PackageTypeCode`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Paket Tipi Kodu</FormLabel>
                    <FormControl>
                      <Input placeholder="Paket tipi kodu" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="font-medium text-yellow-800 mt-4">Teslimat Adresi</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.DeliveryAddress.Address`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Adres</FormLabel>
                    <FormControl>
                      <Input placeholder="Adres" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.DeliveryAddress.District`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>İlçe</FormLabel>
                    <FormControl>
                      <Input placeholder="İlçe" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.DeliveryAddress.City`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Şehir</FormLabel>
                    <FormControl>
                      <Input placeholder="Şehir" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.DeliveryAddress.Country`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Ülke</FormLabel>
                    <FormControl>
                      <Input placeholder="Ülke" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.DeliveryAddress.PostalCode`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Posta Kodu</FormLabel>
                    <FormControl>
                      <Input placeholder="Posta kodu" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.DeliveryAddress.Phone`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                      <Input placeholder="Telefon" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.DeliveryAddress.Fax`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Fax</FormLabel>
                    <FormControl>
                      <Input placeholder="Fax" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.DeliveryAddress.Mail`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>E-posta</FormLabel>
                    <FormControl>
                      <Input placeholder="E-posta" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.DeliveryInfo.DeliveryAddress.WebSite`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Web Sitesi</FormLabel>
                    <FormControl>
                      <Input placeholder="Web sitesi" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="font-medium text-purple-800 mb-2">İhracat ve Ek Ürün Kimlik Bilgileri</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.ExportRegisteredInfo.DIIBLineCode`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>DIIB Satır Kodu</FormLabel>
                    <FormControl>
                      <Input placeholder="DIIB Satır Kodu" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.ExportRegisteredInfo.GTIPNo`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GTIP No (İhracat)</FormLabel>
                    <FormControl>
                      <Input placeholder="GTIP No" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.AdditionalItemIdentification.TagNumber`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Etiket Numarası</FormLabel>
                    <FormControl>
                      <Input placeholder="Etiket Numarası" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.AdditionalItemIdentification.OwnerName`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sahip Adı</FormLabel>
                    <FormControl>
                      <Input placeholder="Sahip Adı" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${index}.AdditionalItemIdentification.OwnerTaxNumber`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sahip VKN/TCKN</FormLabel>
                    <FormControl>
                      <Input placeholder="VKN/TCKN" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Ara Toplam:</span>
                <div className="font-medium">
                  ₺{watchedLines?.[index] ? 
                    (((watchedLines[index].Price || 0) * (watchedLines[index].Quantity || 0)) - (watchedLines[index].AllowanceTotal || 0)).toFixed(2) 
                    : '0.00'}
                </div>
              </div>
              <div>
                <span className="text-gray-600">KDV Tutarı:</span>
                <div className="font-medium">
                  ₺{watchedLines?.[index]?.KDVTotal?.toFixed(2) || '0.00'}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Vergi Tutarı:</span>
                <div className="font-medium">
                  ₺{watchedLines?.[index]?.Taxes?.[0]?.Total?.toFixed(2) || '0.00'}
                </div>
              </div>
              <div className="border-l border-blue-300 pl-4">
                <span className="text-blue-700 font-medium">Satır Toplamı:</span>
                <div className="text-lg font-bold text-blue-800">
                  ₺{watchedLines?.[index] ? calculateLineTotal(watchedLines[index]).toFixed(2) : '0.00'}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {invoiceLineFields.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Henüz fatura kalemi eklenmemiş.</p>
          <Button
            type="button"
            variant="outline"
            onClick={addInvoiceLine}
            className="mt-4"
          >
            <Plus className="w-4 h-4 mr-2" />
            İlk Kalemi Ekle
          </Button>
        </div>
      )}

      {invoiceLineFields.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <div className="text-sm text-green-700">
                Toplam KDV: ₺{calculateTotalKDV().toFixed(2)}
              </div>
              <div className="text-sm text-green-700">
                Kalem Sayısı: {invoiceLineFields.length}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-green-700 mb-1">Genel Toplam</div>
              <div className="text-2xl font-bold text-green-800">
                ₺{calculateGrandTotal().toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}