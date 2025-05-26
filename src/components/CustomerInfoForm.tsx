"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { EInvoiceFormData } from "../lib/types";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

interface CustomerInfoFormProps {
  type: 'CustomerInfo' | 'BuyerCustomerInfo';
  title: string;
}

export function CustomerInfoForm({ type, }: CustomerInfoFormProps) {
  const { control } = useFormContext<EInvoiceFormData>();
  
  const { fields: partyIdFields, append: appendPartyId, remove: removePartyId } = useFieldArray({
    control,
    name: `EInvoice.${type}.PartyIdentifications`
  });

  const { fields: agentPartyIdFields, append: appendAgentPartyId, remove: removeAgentPartyId } = useFieldArray({
    control,
    name: `EInvoice.${type}.AgentPartyIdentifications`
  });

  return (
    <section className="border border-gray-200 rounded-lg p-6 bg-gray-50 space-y-6">

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          control={control}
          name={`EInvoice.${type}.TaxNumber`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Vergi Numarası</FormLabel>
              <FormControl>
                <Input placeholder="99999999" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`EInvoice.${type}.Name`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>İsim/Ünvan</FormLabel>
              <FormControl>
                <Input placeholder="Ali Kılıç" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`EInvoice.${type}.TaxOffice`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Vergi Dairesi</FormLabel>
              <FormControl>
                <Input placeholder="XXXX" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FormField
          control={control}
          name={`EInvoice.${type}.Address`}
          render={({ field }) => (
            <FormItem className="space-y-2 md:col-span-2">
              <FormLabel>Adres</FormLabel>
              <FormControl>
                <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`EInvoice.${type}.District`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>İlçe</FormLabel>
              <FormControl>
                <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`EInvoice.${type}.City`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Şehir</FormLabel>
              <FormControl>
                <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name={`EInvoice.${type}.Country`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Ülke</FormLabel>
              <FormControl>
                <Input placeholder="Türkiye" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`EInvoice.${type}.PostalCode`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Posta Kodu</FormLabel>
              <FormControl>
                <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FormField
          control={control}
          name={`EInvoice.${type}.Phone`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Telefon</FormLabel>
              <FormControl>
                <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`EInvoice.${type}.Fax`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Faks</FormLabel>
              <FormControl>
                <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`EInvoice.${type}.Mail`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>E-posta</FormLabel>
              <FormControl>
                <Input type="email" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`EInvoice.${type}.WebSite`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Web Sitesi</FormLabel>
              <FormControl>
                <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Taraf Tanımlamaları</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="bg-green-50 text-green-700 border-green-200 font-medium hover:bg-green-100"
            onClick={() => appendPartyId({ SchemeID: "", Value: "" })}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ekle
          </Button>
        </div>
        {partyIdFields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <FormField
              control={control}
              name={`EInvoice.${type}.PartyIdentifications.${index}.SchemeID`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Şema ID</FormLabel>
                  <FormControl>
                    <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.${type}.PartyIdentifications.${index}.Value`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Değer</FormLabel>
                  <FormControl>
                    <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mb-1"
              onClick={() => removePartyId(index)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Temsilci Taraf Tanımlamaları</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="bg-green-50 text-green-700 border-green-200 font-medium hover:bg-green-100"
            onClick={() => appendAgentPartyId({ SchemeID: "", Value: "" })}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ekle
          </Button>
        </div>
        {agentPartyIdFields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <FormField
              control={control}
              name={`EInvoice.${type}.AgentPartyIdentifications.${index}.SchemeID`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Şema ID</FormLabel>
                  <FormControl>
                    <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.${type}.AgentPartyIdentifications.${index}.Value`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Değer</FormLabel>
                  <FormControl>
                    <Input className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mb-1"
              onClick={() => removeAgentPartyId(index)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}