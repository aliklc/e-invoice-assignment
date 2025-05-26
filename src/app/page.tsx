import EInvoiceForm from "../components/EInvoiceForm";

export default function Home() {
  return (
    <main className="p-4 md:p-8 min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-8 drop-shadow-sm text-center">
          E-Fatura Formu
        </h1>
        <EInvoiceForm />
      </div>
    </main>
  );
}