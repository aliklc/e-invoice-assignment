"use client";

import React, { useState } from "react";
import { EInvoiceFormData } from "../lib/types";

export default function EInvoiceForm(){

  return(
    <form className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Invoice Info */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Fatura Bilgileri</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Fatura Seri/Numara"
            className="border rounded p-2"
          />
          <input
            type="date"
            placeholder="Düzenlenme Tarihi"
            className="border rounded p-2"
          />
          <input
            type="text"
            placeholder="Fatura Tipi"
            className="border rounded p-2"
          />
          <input
            type="text"
            placeholder="Para Birimi (Currency Code)"
            className="border rounded p-2"
          />
          <input
            type="text"
            placeholder="Fatura Profili"
            className="border rounded p-2"
          />
        </div>
      </section>
        <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
            Gönder
        </button>
    </form>
  )

}