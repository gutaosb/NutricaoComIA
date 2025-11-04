import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function gerarCardapio(dados) {
  try {
    const response = await API.post("/gerar_cardapio", dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    throw error;
  }
}

export async function gerarPDF(cardapio) {
  try {
    const response = await API.post(
      "/gerar_pdf",
      { cardapio },
      { responseType: "blob" }
    );

    const url = URL.createObjectURL(
      new Blob([response.data], { type: "application/pdf" })
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "cardapio.pdf";
    a.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    throw error;
  }
}
