"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EInvoiceFormData } from "../lib/types";

export function TaxFreeInfoForm() {
  const { control } = useFormContext<EInvoiceFormData>();

  return (
    <div className="space-y-6">
        <Card>
        <CardContent className="space-y-4">
          <div >
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
                    <Input placeholder="Turist adı" {...field} />
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
                    <Input placeholder="Turist soyadı" {...field} />
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
                    <Input placeholder="TR, US, DE vb." {...field} />
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
                    <Input placeholder="Pasaport numarası" {...field} />
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
                <FormItem className="space-y-2">
                  <FormLabel>Pasaport Tarihi</FormLabel>
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
                      <Input placeholder="Tam adres" {...field} />
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
                      <Input placeholder="İlçe" {...field} />
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
                      <Input placeholder="Şehir" {...field} />
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
                      <Input placeholder="Ülke" {...field} />
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
                      <Input placeholder="Posta kodu" {...field} />
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
                      <Input placeholder="Telefon numarası" {...field} />
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
                      <Input placeholder="Faks numarası" {...field} />
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
                      <Input type="email" placeholder="E-posta adresi" {...field} />
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
                      <Input placeholder="Web sitesi" {...field} />
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
                      <Input placeholder="Banka adı" {...field} />
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
                      <Input placeholder="Şube adı" {...field} />
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
                      <Input placeholder="Hesap numarası" {...field} />
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
                      <Input placeholder="TRY, USD, EUR vb." {...field} />
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
                      <Input placeholder="Ödeme ile ilgili not" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
            </CardContent>
          </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Vergi Temsilcisi Bilgileri</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="EInvoice.TaxFreeInfo.TaxRepresentativeInfo.RegisterNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sicil Numarası *</FormLabel>
                  <FormControl>
                    <Input placeholder="Vergi temsilcisi sicil numarası" {...field} />
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
                    <Input placeholder="Vergi temsilcisi unvanı" {...field} />
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
                      <Input placeholder="Tam adres" {...field} />
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
                      <Input placeholder="İlçe" {...field} />
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
                      <Input placeholder="Şehir" {...field} />
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
                      <Input placeholder="Ülke" {...field} />
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
                      <Input placeholder="Posta kodu" {...field} />
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
                      <Input placeholder="Telefon numarası" {...field} />
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
                      <Input placeholder="Faks numarası" {...field} />
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
                      <Input type="email" placeholder="E-posta adresi" {...field} />
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
                      <Input placeholder="Web sitesi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
  )
}
