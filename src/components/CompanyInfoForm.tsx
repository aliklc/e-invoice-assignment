"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { EInvoiceFormData } from "../lib/types";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

export function CompanyInfoForm() {
  const { control } = useFormContext<EInvoiceFormData>();
  
  const { fields: partyIdFields, append: appendPartyId, remove: removePartyId } = useFieldArray({
    control,
    name: "EInvoice.CompanyInfo.PartyIdentifications"
  });

  const { fields: agentPartyIdFields, append: appendAgentPartyId, remove: removeAgentPartyId } = useFieldArray({
    control,
    name: "EInvoice.CompanyInfo.AgentPartyIdentifications"
  });

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Şirket Bilgileri</h2>
      
      <div className="grid grid-cols-3 gap-4">
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.TaxNumber"
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
          name="EInvoice.CompanyInfo.Name"
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
          control={control}
          name="EInvoice.CompanyInfo.TaxOffice"
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
          name="EInvoice.CompanyInfo.Address"
          render={({ field }) => (
            <FormItem className="space-y-2 col-span-2">
              <FormLabel>Adres</FormLabel>
              <FormControl>
                <Input placeholder="Tam adres bilgisi" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.District"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>İlçe</FormLabel>
              <FormControl>
                <Input placeholder="İlçe adı" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.City"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Şehir</FormLabel>
              <FormControl>
                <Input placeholder="Şehir adı" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.Country"
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
          name="EInvoice.CompanyInfo.PostalCode"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Posta Kodu</FormLabel>
              <FormControl>
                <Input placeholder="34000" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.Phone"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Telefon</FormLabel>
              <FormControl>
                <Input placeholder="+90XXXXXXXXXX" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.Fax"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Faks</FormLabel>
              <FormControl>
                <Input placeholder="+90XXXXXXXXXX" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.Mail"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>E-posta</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="EInvoice.CompanyInfo.WebSite"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Web Sitesi</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
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
              name={`EInvoice.CompanyInfo.PartyIdentifications.${index}.SchemeID`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Şema ID</FormLabel>
                  <FormControl>
                    <Input placeholder="VKN_TCKN" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.CompanyInfo.PartyIdentifications.${index}.Value`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Değer</FormLabel>
                  <FormControl>
                    <Input placeholder="Kimlik değeri" {...field} />
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
              name={`EInvoice.CompanyInfo.AgentPartyIdentifications.${index}.SchemeID`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Şema ID</FormLabel>
                  <FormControl>
                    <Input placeholder="VKN_TCKN" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`EInvoice.CompanyInfo.AgentPartyIdentifications.${index}.Value`}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Değer</FormLabel>
                  <FormControl>
                    <Input placeholder="Vekil kimlik değeri" {...field} />
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