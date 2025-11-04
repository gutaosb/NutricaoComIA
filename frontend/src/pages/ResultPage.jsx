import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";

function ResultPage({ cardapio, onBack }) {
  const handleDownloadPDF = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/gerar_pdf`,
        { cardapio },
        { responseType: "blob" }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "cardapio.pdf";
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">
        Seu Cardápio Personalizado 🍽️
      </h2>

      <div className="prose prose-green max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{cardapio}</ReactMarkdown>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center">
        <button
          onClick={onBack}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition font-medium"
        >
          Gerar Novo Cardápio
        </button>

        <button
          onClick={handleDownloadPDF}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition font-semibold"
        >
          Baixar em PDF
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
