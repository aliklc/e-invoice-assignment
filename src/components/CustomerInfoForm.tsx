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

export function CustomerInfoForm({ type, title }: CustomerInfoFormProps) {
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
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      
      <div className="grid grid-cols-3 gap-4">
        <FormField
          control={control}
          name={`EInvoice.${type}.TaxNumber`}
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
          control={control}
          name={`EInvoice.${type}.Name`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>İsim/Ünvan</FormLabel>
              <FormControl>
                <Input placeholder="Ali Kılıç" {...field} />
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
                <Input placeholder="XXXX" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <FormField
          control={control}
          name={`EInvoice.${type}.Address`}
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-2">
              <FormLabel>Adres</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name={`EInvoice.${type}.Country`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Ülke</FormLabel>
              <FormControl>
                <Input placeholder="Türkiye" {...field} />
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
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <FormField
          control={control}
          name={`EInvoice.${type}.Phone`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Telefon</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Input {...field} />
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
                <Input type="email" {...field} />
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
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Taraf Tanımlamaları</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => appendPartyId({ SchemeID: "", Value: "" })}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ekle
          </Button>
        </div>
        
        {partyIdFields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-3 gap-4 items-end">
            <FormField
              control={control}
              name={`EInvoice.${type}.PartyIdentifications.${index}.SchemeID`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Şema ID</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => removePartyId(index)}
              className="mb-1"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Temsilci Taraf Tanımlamaları</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => appendAgentPartyId({ SchemeID: "", Value: "" })}
          >
            <Plus className="w-4 h-4 mr-2" />
            Ekle
          </Button>
        </div>
        
        {agentPartyIdFields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-3 gap-4 items-end">
            <FormField
              control={control}
              name={`EInvoice.${type}.AgentPartyIdentifications.${index}.SchemeID`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Şema ID</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => removeAgentPartyId(index)}
              className="mb-1"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}