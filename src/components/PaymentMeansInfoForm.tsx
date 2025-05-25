"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { EInvoiceFormData } from "../lib/types";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const paymentMethodOptions = [
  { value: "KREDIKARTI", label: "Kredi Kartı" },
  { value: "HAVALE", label: "Havale" },
  { value: "NAKIT", label: "Nakit" },
  { value: "CEK", label: "Çek" },
];

const paymentChannelOptions = [
  { value: "BANK", label: "Banka" },
  { value: "MOBILE", label: "Mobil Ödeme" },
  { value: "WEB", label: "Web Ödeme" },
];

const expensetypeOptions = [
  { value: "HKSKOMİSYON", label: "Hizmet Komisyonu" },
  { value: "NAKLİYE", label: "Nakliye Gideri" },
  { value: "AMBALAJ", label: "Ambalaj Gideri" },
  { value: "DİĞER", label: "Diğer Giderler" },
];

export function PaymentMeansInfoForm() {
  const { control } = useFormContext<EInvoiceFormData>();

  const { fields: expenseFields, append: appendExpense, remove: removeExpense } = useFieldArray({
    control,
    name: "EInvoice.InvoiceInfo.Expenses"
  });

  const { fields: returnInvoiceFields, append: appendReturnInvoice, remove: removeReturnInvoice } = useFieldArray({
    control,
    name: "EInvoice.InvoiceInfo.ReturnInvoiceInfo"
  });

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-red-600">Ödeme Bilgileri</h2>
        <FormField
          control={control}
          name="EInvoice.InvoiceInfo.UUID"
          render={({ field }) => (
            <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded whitespace-nowrap">
              UUID: {field.value}
            </div>
          )}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-red-600">Vergi Muafiyet Bilgileri</h3>
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.TaxExemptionReasonInfo.KDVExemptionReasonCode"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>KDV Muafiyet Kodu</FormLabel>
                <FormControl>
                  <Input placeholder="301" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.TaxExemptionReasonInfo.OTVExemptionReasonCode"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>ÖTV Muafiyet Kodu</FormLabel>
                <FormControl>
                  <Input placeholder="501" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.TaxExemptionReasonInfo.AccommodationTaxExemptionReasonCode"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Konaklama Vergisi Muafiyet Kodu</FormLabel>
                <FormControl>
                  <Input placeholder="701" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-red-600">Ödeme Şartları</h3>
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.PaymentTermsInfo.Percent"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Ödeme Yüzdesi</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="%" 
                    {...field} 
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.PaymentTermsInfo.Amount"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Ödeme Tutarı</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Tutar" 
                    {...field} 
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.PaymentTermsInfo.Note"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Ödeme Notu</FormLabel>
                <FormControl>
                  <Input placeholder="Açıklama" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-red-600">Ödeme Araçları</h3>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.PaymentMeansInfo.Code"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Ödeme Yöntemi</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Ödeme yöntemi seçin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {paymentMethodOptions.map((type) => (
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
            control={control}
            name="EInvoice.InvoiceInfo.PaymentMeansInfo.ChannelCode"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Ödeme Kanalı</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Ödeme kanalı seçin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {paymentChannelOptions.map((type) => (
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
        </div>

        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.PaymentMeansInfo.DueDate"
            render={({ field }) => {
              const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
              return (
                <FormItem className="space-y-2">
                  <FormLabel>Son Ödeme Tarihi</FormLabel>
                  <FormControl>
                    <Input 
                      type="datetime-local"
                      value={value}
                      onChange={(e) => {
                        field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )
            }}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.PaymentMeansInfo.PayeeFinancialAccountID"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Hesap No/IBAN</FormLabel>
                <FormControl>
                  <Input placeholder="TRXX XXXX XXXX XXXX XXXX XXXX XX" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.PaymentMeansInfo.Note"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Ödeme Açıklaması</FormLabel>
                <FormControl>
                  <Input placeholder="Ödeme ile ilgili açıklama" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-red-600">Fatura Özet Bilgileri</h3>
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.LineExtensionAmount"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Satır Genişletme Tutarı</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="0.00"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.GeneralAllowanceTotal"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Genel İndirim Toplamı</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="0.00"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.PayableAmount"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Ödenecek Tutar</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="0.00"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.GeneralKDV1Total"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>KDV %1 Toplam</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="0.00"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.GeneralKDV8Total"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>KDV %8 Toplam</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="0.00"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.GeneralKDV10Total"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>KDV %10 Toplam</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="0.00"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.GeneralKDV18Total"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>KDV %18 Toplam</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="0.00"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.GeneralKDV20Total"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>KDV %20 Toplam</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="0.00"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.KdvTotal"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Toplam KDV</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="0.00"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-red-600">OKC Bilgileri</h3>
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.OKCInfo.ID"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>OKC ID</FormLabel>
                <FormControl>
                  <Input placeholder="OKC numarası" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.OKCInfo.IssueDate"
            render={({ field }) => {
              const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
              return (
                <FormItem className="space-y-2">
                  <FormLabel>Düzenlenme Tarihi</FormLabel>
                  <FormControl>
                    <Input 
                      type="datetime-local"
                      value={value}
                      onChange={(e) => {
                        field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )
            }}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.OKCInfo.Time"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Saat</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.OKCInfo.ZNo"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Z No</FormLabel>
                <FormControl>
                  <Input placeholder="Z numarası" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.OKCInfo.EndPointID"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Endpoint ID</FormLabel>
                <FormControl>
                  <Input placeholder="Endpoint ID" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.OKCInfo.DocumentDescription"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Açıklama</FormLabel>
                <FormControl>
                  <Input placeholder="OKC açıklaması" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-red-600">ESU Rapor Bilgileri</h3>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.ESUReportInfo.ID"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Rapor ID</FormLabel>
                <FormControl>
                  <Input placeholder="Rapor numarası" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.ESUReportInfo.IssueDate"
            render={({ field }) => {
              const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
              return (
                <FormItem className="space-y-2">
                  <FormLabel>Rapor Tarihi</FormLabel>
                  <FormControl>
                    <Input 
                      type="datetime-local"
                      value={value}
                      onChange={(e) => {
                        field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )
            }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-red-600">İade Fatura Bilgileri</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => appendReturnInvoice({ InvoiceNumber: "", IssueDate: "" })}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ekle
          </Button>
        </div>
        
        {returnInvoiceFields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-3 gap-4 items-end">
            <FormField
              control={control}
              name={`EInvoice.InvoiceInfo.ReturnInvoiceInfo.${index}.InvoiceNumber`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Fatura Numarası</FormLabel>
                  <FormControl>
                    <Input placeholder="Fatura numarası" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.InvoiceInfo.ReturnInvoiceInfo.${index}.IssueDate`}
              render={({ field }) => {
                const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
                return (
                  <FormItem className="space-y-2">
                    <FormLabel>Fatura Tarihi</FormLabel>
                    <FormControl>
                      <Input 
                        type="datetime-local"
                        value={value}
                        onChange={(e) => {
                          field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )
              }}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => removeReturnInvoice(index)}
              className="mb-1"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-red-600">Muhasebe ve Fatura Dönem Bilgileri</h3>
        <FormField
          control={control}
          name="EInvoice.InvoiceInfo.AccountingCost"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Muhasebe Kodu</FormLabel>
              <FormControl>
                <Input placeholder="Muhasebe kodu" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium">Başlangıç Bilgileri</h4>
            <FormField
              control={control}
              name="EInvoice.InvoiceInfo.InvoicePeriod.StartDate"
              render={({ field }) => {
                const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
                return (
                  <FormItem className="space-y-2">
                    <FormLabel>Başlangıç Tarihi</FormLabel>
                    <FormControl>
                      <Input 
                        type="datetime-local"
                        value={value}
                        onChange={(e) => {
                          field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={control}
              name="EInvoice.InvoiceInfo.InvoicePeriod.StartTime"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Başlangıç Saati</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Bitiş Bilgileri</h4>
            <FormField
              control={control}
              name="EInvoice.InvoiceInfo.InvoicePeriod.EndDate"
              render={({ field }) => {
                const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
                return (
                  <FormItem className="space-y-2">
                    <FormLabel>Bitiş Tarihi</FormLabel>
                    <FormControl>
                      <Input 
                        type="datetime-local"
                        value={value}
                        onChange={(e) => {
                          field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={control}
              name="EInvoice.InvoiceInfo.InvoicePeriod.EndTime"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Bitiş Saati</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.InvoicePeriod.DurationMeasureValue"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Süre (Gün)</FormLabel>
                <FormControl>
                  <Input 
                    type="number"  
                    {...field} 
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.InvoicePeriod.Description"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Açıklama</FormLabel>
                <FormControl>
                  <Input placeholder="Dönem açıklaması" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
      </div>
        <div className="space-y-4">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-red-600">SGK Bilgileri</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
            <FormField
            control={control}
            name="EInvoice.InvoiceInfo.SGKInfo.RegisterName"
            render={({ field }) => (
                <FormItem className="space-y-2">
                <FormLabel>SGK Kayıt Adı</FormLabel>
                <FormControl>
                    <Input placeholder="SGK Kayıt Adı" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
                </FormItem>
            )}
            />
            <FormField
            control={control}
            name="EInvoice.InvoiceInfo.SGKInfo.DocumentNumber"
            render={({ field }) => (
                <FormItem className="space-y-2">
                <FormLabel>Belge Numarası</FormLabel>
                <FormControl>
                    <Input placeholder="Belge Numarası" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
                </FormItem>
            )}
            />
            <FormField
            control={control}
            name="EInvoice.InvoiceInfo.SGKInfo.RegisterCode"
            render={({ field }) => (
                <FormItem className="space-y-2">
                <FormLabel>Kayıt Kodu</FormLabel>
                <FormControl>
                    <Input placeholder="Kayıt Kodu" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
                </FormItem>
            )}
            />
        </div>
            <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-red-600">Gider Bilgileri</h3>
                <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => appendExpense({ ExpenseType: "", Percent: 0, Amount: 0 })}
                >
                <Plus className="w-4 h-4 mr-2" />
                Ekle
                </Button>
            </div>
            
            {expenseFields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-4 gap-4 items-end">
                <FormField
                    control={control}
                    name={`EInvoice.InvoiceInfo.Expenses.${index}.ExpenseType`}
                    render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel>Gider Tipi</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                            <SelectValue placeholder="Gider tipi seçin" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {expensetypeOptions.map((type) => (
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
                    control={control}
                    name={`EInvoice.InvoiceInfo.Expenses.${index}.Percent`}
                    render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel>Yüzde</FormLabel>
                        <FormControl>
                        <Input 
                            type="number" 
                            placeholder="%" 
                            {...field} 
                            onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        />
                        </FormControl>
                        <FormMessage className="text-xs" />
                    </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name={`EInvoice.InvoiceInfo.Expenses.${index}.Amount`}
                    render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel>Tutar</FormLabel>
                        <FormControl>
                        <Input 
                            type="number" 
                            placeholder="Tutar" 
                            {...field} 
                            onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        />
                        </FormControl>
                        <FormMessage className="text-xs" />
                    </FormItem>
                    )}
                />
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeExpense(index)}
                    className="mb-1"
                >
                    <Trash2 className="w-4 h-4" />
                </Button>
                </div>
            ))}
            </div>
            </div>
</section>
);
}