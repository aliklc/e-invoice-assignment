"use client";

import React, { useState } from "react";
import { EInvoiceFormData } from "../lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function EInvoiceForm() {
  return (
    <Card className="bg-amber-50 max-w-6xl mx-auto">
      <CardHeader>
        <h2 className="text-xl font-semibold">Fatura Bilgileri</h2>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {/* Invoice Info */}
          <section className="space-y-4">
            <div className="grid grid-cols-5 gap-4">
              <div className="space-y-2">
                <Label htmlFor="serialNumber">Fatura Seri/Numara</Label>
                <Input id="serialNumber" placeholder="Fatura Seri/Numara" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="issueDate">Düzenlenme Tarihi</Label>
                <Input id="issueDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="invoiceType">Fatura Tipi</Label>
                <Input id="invoiceType" placeholder="Fatura Tipi" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Para Birimi (Currency Code)</Label>
                <Input id="currency" placeholder="Para Birimi" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile">Fatura Profili</Label>
                <Input id="profile" placeholder="Fatura Profili" />
              </div>
            </div>
          </section>
          <Button type="submit" className=" w-1/2">
            Gönder
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}