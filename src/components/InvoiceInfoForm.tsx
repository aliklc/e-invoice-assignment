"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { EInvoiceFormData } from "../lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2 } from "lucide-react";
import { Textarea } from "./ui/textarea";

const currencyOptions = [
  { value: "TRY", label: "Türk Lirası (TRY)" },
  { value: "USD", label: "ABD Doları (USD)" },
  { value: "EUR", label: "Euro (EUR)" },
  { value: "GBP", label: "İngiliz Sterlini (GBP)" },
];

const invoiceTypeOptions = [
  { value: "SATİS", label: "SATİS" },
  { value: "İADE", label: "İADE" },
];

export function InvoiceInfoForm() {
  const { control } = useFormContext<EInvoiceFormData>();

  const { fields: despatchFields, append: appendDespatch, remove: removeDespatch } = useFieldArray({
    control,
    name: "EInvoice.InvoiceInfo.DespatchDocumentReference"
  });

  const { fields: orderFields, append: appendOrder, remove: removeOrder } = useFieldArray({
    control,
    name: "EInvoice.InvoiceInfo.OrderReference"
  });

  const { fields: orderDocFields, append: appendOrderDoc, remove: removeOrderDoc } = useFieldArray({
    control,
    name: "EInvoice.InvoiceInfo.OrderReferenceDocument"
  });

  const { fields: additionalDocFields, append: appendAdditionalDoc, remove: removeAdditionalDoc } = useFieldArray({
    control,
    name: "EInvoice.InvoiceInfo.AdditionalDocumentReferences"
  });

  return (

    
    <section className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-red-600">Fatura Bilgileri</h3>
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
        
        <div className="grid grid-cols-5 gap-4">
          <FormField
            control={control}
            name="EInvoice.InvoiceInfo.InvoiceSerieOrNumber"
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
            control={control}
            name="EInvoice.InvoiceInfo.IssueDate"
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
            name="EInvoice.InvoiceInfo.InvoiceType"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Fatura Tipi</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Fatura tipi seçin" />
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
            control={control}
            name="EInvoice.InvoiceInfo.CurrencyCode"
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
            control={control}
            name="EInvoice.InvoiceInfo.InvoiceProfile"
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
      </div>

      <Separator className="my-4" />
            
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-red-600">İrsaliye Bilgileri</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => appendDespatch({ IssueDate: "", Value: "" })}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ekle
          </Button>
        </div>
        
        {despatchFields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-3 gap-4 items-end">
            <FormField
              control={control}
              name={`EInvoice.InvoiceInfo.DespatchDocumentReference.${index}.IssueDate`}
              render={({ field }) => {
                const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
                return (
                  <FormItem className="space-y-2">
                    <FormLabel>İrsaliye Tarihi</FormLabel>
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
              name={`EInvoice.InvoiceInfo.DespatchDocumentReference.${index}.Value`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>İrsaliye Numarası</FormLabel>
                  <FormControl>
                    <Input placeholder="İrsaliye numarası girin" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => removeDespatch(index)}
              className="mb-1"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <Separator className="my-4" />
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-red-600">Sipariş Bilgileri</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => appendOrder({ IssueDate: "", Value: "" })}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ekle
          </Button>
        </div>
        
        {orderFields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-3 gap-4 items-end">
            <FormField
              control={control}
              name={`EInvoice.InvoiceInfo.OrderReference.${index}.IssueDate`}
              render={({ field }) => {
                const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
                return (
                  <FormItem className="space-y-2">
                    <FormLabel>Sipariş Tarihi</FormLabel>
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
              name={`EInvoice.InvoiceInfo.OrderReference.${index}.Value`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Sipariş Numarası</FormLabel>
                  <FormControl>
                    <Input placeholder="Sipariş numarası girin" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => removeOrder(index)}
              className="mb-1"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-red-600">Döküman Bilgileri</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => appendOrderDoc({ 
              ID: "", 
              IssueDate: "", 
              DocumentType: "", 
              DocumentTypeCode: "", 
              DocumentDescription: "",
              Attachment: [{ FileName: "", MimeCode: "", Base64Data: "" }]
            })}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ekle
          </Button>
        </div>
        
        {orderDocFields.map((field, index) => (
          <div key={field.id} className="space-y-4 p-4 border rounded-lg">
            <div className="flex justify-end">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeOrderDoc(index)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <FormField
                control={control}
                name={`EInvoice.InvoiceInfo.OrderReferenceDocument.${index}.ID`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Sipariş Doküman No</FormLabel>
                    <FormControl>
                      <Input placeholder="Doküman numarası" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceInfo.OrderReferenceDocument.${index}.IssueDate`}
                render={({ field }) => {
                  const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
                  return (
                    <FormItem className="space-y-2">
                      <FormLabel>Döküman Tarihi</FormLabel>
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
                name={`EInvoice.InvoiceInfo.OrderReferenceDocument.${index}.DocumentType`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Doküman Tipi</FormLabel>
                    <FormControl>
                      <Input placeholder="Tip" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceInfo.OrderReferenceDocument.${index}.DocumentTypeCode`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Doküman Tipi Kodu</FormLabel>
                    <FormControl>
                      <Input placeholder="Tip kodu" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={control}
              name={`EInvoice.InvoiceInfo.OrderReferenceDocument.${index}.DocumentDescription`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Doküman Açıklaması</FormLabel>
                  <FormControl>
                    <Input placeholder="Açıklama" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-4 gap-4">
              <FormField
                control={control}
                name={`EInvoice.InvoiceInfo.OrderReferenceDocument.${index}.Attachment.0.FileName`}
                render={({ field }) => (
                  <FormItem className="space-y-2 col-span-2">
                    <FormLabel>Dosya Adı</FormLabel>
                    <FormControl>
                      <Input placeholder="Dosya adı" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceInfo.OrderReferenceDocument.${index}.Attachment.0.MimeCode`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>MIME Tipi</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceInfo.OrderReferenceDocument.${index}.Attachment.0.Base64Data`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Base64 Veri</FormLabel>
                    <FormControl>
                      <Input placeholder="Base64 veri" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-red-600">Ek Döküman Bilgileri</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => appendAdditionalDoc({ 
              ID: "", 
              IssueDate: "", 
              DocumentType: "", 
              DocumentTypeCode: "", 
              DocumentDescription: "",
              Attachment: [{ FileName: "", MimeCode: "", Base64Data: "" }]
            })}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ekle
          </Button>
        </div>
        
        {additionalDocFields.map((field, index) => (
          <div key={field.id} className="space-y-4 p-4 border rounded-lg">
            <div className="flex justify-end">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeAdditionalDoc(index)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <FormField
                control={control}
                name={`EInvoice.InvoiceInfo.AdditionalDocumentReferences.${index}.ID`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Ek Doküman No</FormLabel>
                    <FormControl>
                      <Input placeholder="Doküman numarası" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceInfo.AdditionalDocumentReferences.${index}.IssueDate`}
                render={({ field }) => {
                  const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
                  return (
                    <FormItem className="space-y-2">
                      <FormLabel>Ek Döküman Tarihi</FormLabel>
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
                name={`EInvoice.InvoiceInfo.AdditionalDocumentReferences.${index}.DocumentType`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Ek Doküman Tipi</FormLabel>
                    <FormControl>
                      <Input placeholder="Tip" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceInfo.AdditionalDocumentReferences.${index}.DocumentTypeCode`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Ek Doküman Tipi Kodu</FormLabel>
                    <FormControl>
                      <Input placeholder="Tip kodu" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={control}
              name={`EInvoice.InvoiceInfo.AdditionalDocumentReferences.${index}.DocumentDescription`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Ek Doküman Açıklaması</FormLabel>
                  <FormControl>
                    <Input placeholder="Açıklama" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-4 gap-4">
              <FormField
                control={control}
                name={`EInvoice.InvoiceInfo.AdditionalDocumentReferences.${index}.Attachment.0.FileName`}
                render={({ field }) => (
                  <FormItem className="space-y-2 col-span-2">
                    <FormLabel>Dosya Adı</FormLabel>
                    <FormControl>
                      <Input placeholder="Dosya adı" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceInfo.AdditionalDocumentReferences.${index}.Attachment.0.MimeCode`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>MIME Tipi</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceInfo.AdditionalDocumentReferences.${index}.Attachment.0.Base64Data`}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Base64 Veri</FormLabel>
                    <FormControl>
                      <Input placeholder="Base64 veri" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ))}
        <FormField
          control={control}
          name="EInvoice.Notes.0.text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fatura Notu</FormLabel>
              <FormControl>
                <Textarea placeholder="Ek açıklama veya not giriniz" {...field} />
              </FormControl>
              <FormDescription>
                Bu alanda faturaya özel açıklamalarınızı ekleyebilirsiniz.
              </FormDescription>
            </FormItem>
          )}
        />
      </div>
    </section>
  );
}