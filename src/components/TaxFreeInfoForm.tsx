"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { EInvoiceFormData } from "../lib/types";

export function TaxFreeInfoForm() {
  const { control } = useFormContext<EInvoiceFormData>();

  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 space-y-6">

          <div>
            <h4 className="text-md font-semibold text-gray-800 mb-3 mt-3">
              Turist Bilgileri
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.Name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ad *</FormLabel>
                    <FormControl>
                      <Input placeholder="Turist adı" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.SurName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Soyad *</FormLabel>
                    <FormControl>
                      <Input placeholder="Turist soyadı" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.CountryCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ülke Kodu *</FormLabel>
                    <FormControl>
                      <Input placeholder="TR, US, DE vb." className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.PassportNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pasaport No *</FormLabel>
                    <FormControl>
                      <Input placeholder="Pasaport numarası" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.PassportDate"
                render={({ field }) => {
                  const value = field.value ? new Date(field.value).toISOString().slice(0, 16) : '';
                  return (
                    <FormItem>
                      <FormLabel>Pasaport Tarihi</FormLabel>
                      <FormControl>
                        <Input
                          type="datetime-local"
                          className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base"
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

          <Separator className="my-4" />

          <div>
            <h4 className="text-md font-semibold text-gray-800 mb-3">Adres Bilgileri </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.AddressInfo.Address"
                render={({ field }) => (
                  <FormItem className="md:col-span-4">
                    <FormLabel>Adres *</FormLabel>
                    <FormControl>
                      <Input placeholder="Tam adres" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.AddressInfo.District"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>İlçe</FormLabel>
                    <FormControl>
                      <Input placeholder="İlçe" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.AddressInfo.City"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Şehir *</FormLabel>
                    <FormControl>
                      <Input placeholder="Şehir" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.AddressInfo.Country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ülke</FormLabel>
                    <FormControl>
                      <Input placeholder="Ülke" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.AddressInfo.PostalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Posta Kodu</FormLabel>
                    <FormControl>
                      <Input placeholder="Posta kodu" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.AddressInfo.Phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon *</FormLabel>
                    <FormControl>
                      <Input placeholder="Telefon numarası" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.AddressInfo.Fax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Faks</FormLabel>
                    <FormControl>
                      <Input placeholder="Faks numarası" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.AddressInfo.Mail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-posta *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="E-posta adresi" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.AddressInfo.WebSite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Web Sitesi</FormLabel>
                    <FormControl>
                      <Input placeholder="Web sitesi" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Separator className="my-4" />

          <div>
            <h4 className="text-md font-semibold text-gray-800 mb-3">
              Finansal Hesap Bilgileri
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.FinancialAccountInfo.BankName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Banka Adı *</FormLabel>
                    <FormControl>
                      <Input placeholder="Banka adı" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.FinancialAccountInfo.BranchName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Şube Adı</FormLabel>
                    <FormControl>
                      <Input placeholder="Şube adı" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.FinancialAccountInfo.ID"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hesap No *</FormLabel>
                    <FormControl>
                      <Input placeholder="Hesap numarası" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.FinancialAccountInfo.CurrencyCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Para Birimi *</FormLabel>
                    <FormControl>
                      <Input placeholder="TRY, USD, EUR vb." className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TouristInfo.FinancialAccountInfo.PaymentNote"
                render={({ field }) => (
                  <FormItem className="md:col-span-4">
                    <FormLabel>Ödeme Notu</FormLabel>
                    <FormControl>
                      <Input placeholder="Ödeme ile ilgili not" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h4 className="text-md font-semibold text-gray-800 mb-3 mt-3">
              Vergi Temsilcisi Bilgileri
            </h4>
            <FormField
              control={control}
              name="EInvoice.TaxFreeInfo.TaxRepresentativeInfo.RegisterNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sicil Numarası *</FormLabel>
                  <FormControl>
                    <Input placeholder="Vergi temsilcisi sicil numarası" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="EInvoice.TaxFreeInfo.TaxRepresentativeInfo.Alias"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unvan *</FormLabel>
                  <FormControl>
                    <Input placeholder="Vergi temsilcisi unvanı" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator className="my-4" />

          <div>
            <h4 className="text-md font-semibold text-gray-800 mb-3"> Vergi Temsilcisi Adres Bilgileri </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TaxRepresentativeInfo.Address.Address"
                render={({ field }) => (
                  <FormItem className="md:col-span-4">
                    <FormLabel>Adres *</FormLabel>
                    <FormControl>
                      <Input placeholder="Tam adres" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TaxRepresentativeInfo.Address.District"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>İlçe</FormLabel>
                    <FormControl>
                      <Input placeholder="İlçe" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TaxRepresentativeInfo.Address.City"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Şehir *</FormLabel>
                    <FormControl>
                      <Input placeholder="Şehir" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TaxRepresentativeInfo.Address.Country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ülke</FormLabel>
                    <FormControl>
                      <Input placeholder="Ülke" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TaxRepresentativeInfo.Address.PostalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Posta Kodu</FormLabel>
                    <FormControl>
                      <Input placeholder="Posta kodu" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TaxRepresentativeInfo.Address.Phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon *</FormLabel>
                    <FormControl>
                      <Input placeholder="Telefon numarası" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TaxRepresentativeInfo.Address.Fax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Faks</FormLabel>
                    <FormControl>
                      <Input placeholder="Faks numarası" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TaxRepresentativeInfo.Address.Mail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-posta *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="E-posta adresi" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="EInvoice.TaxFreeInfo.TaxRepresentativeInfo.Address.WebSite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Web Sitesi</FormLabel>
                    <FormControl>
                      <Input placeholder="Web sitesi" className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
    </div>
  );
}