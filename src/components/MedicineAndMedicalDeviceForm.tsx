"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { EInvoiceFormData } from "../lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Plus, Trash2, Stethoscope } from "lucide-react";

export function MedicineAndMedicalDeviceForm({ invoiceLineIndex }: { invoiceLineIndex: number }) {
  const { control } = useFormContext<EInvoiceFormData>();

  const { fields: medicineFields, append: appendMedicine, remove: removeMedicine } = useFieldArray({
    control,
    name: `EInvoice.InvoiceLines.${invoiceLineIndex}.MedicineAndMedicalDevice.Medicine`
  });

  const { fields: deviceFields, append: appendDevice, remove: removeDevice } = useFieldArray({
    control,
    name: `EInvoice.InvoiceLines.${invoiceLineIndex}.MedicineAndMedicalDevice.MedicalDevice`
  });

  return (
    <section className="p-8 bg-white rounded-2xl shadow mb-8 space-y-8">
      <div className="border rounded-lg p-6 bg-blue-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-800">
            <Stethoscope className="w-5 h-5" /> İlaç Bilgileri
          </h3>
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="bg-blue-100 text-blue-700 border-blue-200 font-medium hover:bg-blue-200"
            onClick={() => appendMedicine({ GTIN: "", BatchNumber: "", SerialNumber: "", ExpirationDate: "" })}
          >
            <Plus className="w-4 h-4 mr-2" /> İlaç Ekle
          </Button>
        </div>
        {medicineFields.length === 0 && (
          <div className="text-gray-400 text-sm mb-4">Henüz ilaç eklenmedi.</div>
        )}
        {medicineFields.map((field, index) => (
          <div key={field.id} className="bg-white border rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">İlaç #{index + 1}</span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeMedicine(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${invoiceLineIndex}.MedicineAndMedicalDevice.Medicine.${index}.GTIN`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GTIN</FormLabel>
                    <FormControl>
                      <Input placeholder="GTIN" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${invoiceLineIndex}.MedicineAndMedicalDevice.Medicine.${index}.BatchNumber`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parti Numarası</FormLabel>
                    <FormControl>
                      <Input placeholder="Parti Numarası" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${invoiceLineIndex}.MedicineAndMedicalDevice.Medicine.${index}.SerialNumber`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seri Numarası</FormLabel>
                    <FormControl>
                      <Input placeholder="Seri Numarası" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${invoiceLineIndex}.MedicineAndMedicalDevice.Medicine.${index}.ExpirationDate`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Son Kullanma Tarihi</FormLabel>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base"
                        value={field.value ? new Date(field.value).toISOString().slice(0, 16) : ''}
                        onChange={(e) => {
                          field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="border rounded-lg p-6 bg-green-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-green-800">
            <Stethoscope className="w-5 h-5" /> Tıbbi Cihaz Bilgileri
          </h3>
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="bg-green-100 text-green-700 border-green-200 font-medium hover:bg-green-200"
            onClick={() => appendDevice({ ProductNumber: "", LotNumber: "", SerialNumber: "", ProductionDate: "" })}
          >
            <Plus className="w-4 h-4 mr-2" /> Cihaz Ekle
          </Button>
        </div>
        {deviceFields.length === 0 && (
          <div className="text-gray-400 text-sm mb-4">Henüz tıbbi cihaz eklenmedi.</div>
        )}
        {deviceFields.map((field, index) => (
          <div key={field.id} className="bg-white border rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Cihaz #{index + 1}</span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeDevice(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${invoiceLineIndex}.MedicineAndMedicalDevice.MedicalDevice.${index}.ProductNumber`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ürün Numarası</FormLabel>
                    <FormControl>
                      <Input placeholder="Ürün Numarası" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${invoiceLineIndex}.MedicineAndMedicalDevice.MedicalDevice.${index}.LotNumber`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lot Numarası</FormLabel>
                    <FormControl>
                      <Input placeholder="Lot Numarası" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${invoiceLineIndex}.MedicineAndMedicalDevice.MedicalDevice.${index}.SerialNumber`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seri Numarası</FormLabel>
                    <FormControl>
                      <Input placeholder="Seri Numarası" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`EInvoice.InvoiceLines.${invoiceLineIndex}.MedicineAndMedicalDevice.MedicalDevice.${index}.ProductionDate`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Üretim Tarihi</FormLabel>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base"
                        value={field.value ? new Date(field.value).toISOString().slice(0, 16) : ''}
                        onChange={(e) => {
                          field.onChange(e.target.value ? new Date(e.target.value).toISOString() : '');
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}