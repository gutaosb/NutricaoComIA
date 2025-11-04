import { useState } from "react";
import { gerarCardapio } from "../services/api";
import InputField from "../components/InputField";
import LoadingSpinner from "../components/LoadingSpinner";

function HomePage({ onResult }) {
  const [form, setForm] = useState({
    idade: "",
    sexo: "",
    altura: "",
    peso: "",
    atividade: "",
    objetivo: "",
    alergias: "",
    preferencias: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await gerarCardapio(form);
      onResult(data.cardapio);
    } catch (error) {
      alert(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Gerar Cardápio Personalizado 🥗
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Idade"
          name="idade"
          type="number"
          value={form.idade}
          onChange={handleChange}
          placeholder="Ex: 25"
        />

        {/* Select Sexo */}
        <div className="flex flex-col space-y-1">
          <label className="font-medium text-gray-700">Sexo</label>
          <select
            name="sexo"
            value={form.sexo}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>

        <InputField
          label="Altura (cm)"
          name="altura"
          type="number"
          value={form.altura}
          onChange={handleChange}
          placeholder="Ex: 180"
        />

        <InputField
          label="Peso (kg)"
          name="peso"
          type="number"
          value={form.peso}
          onChange={handleChange}
          placeholder="Ex: 75"
        />

        {/* Select Nível de Atividade */}
        <div className="flex flex-col space-y-1">
          <label className="font-medium text-gray-700">
            Nível de Atividade Física
          </label>
          <select
            name="atividade"
            value={form.atividade}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="">Selecione</option>
            <option value="sedentario">Sedentário</option>
            <option value="levemente_ativo">Levemente Ativo</option>
            <option value="moderadamente_ativo">Moderadamente Ativo</option>
            <option value="muito_ativo">Muito Ativo</option>
            <option value="extremamente_ativo">Extremamente Ativo</option>
          </select>
        </div>

        {/* Select Objetivo */}
        <div className="flex flex-col space-y-1">
          <label className="font-medium text-gray-700">Objetivo</label>
          <select
            name="objetivo"
            value={form.objetivo}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="">Selecione</option>
            <option value="perder peso">Perder peso</option>
            <option value="manter">Manter peso</option>
            <option value="ganhar peso">Ganhar peso</option>
          </select>
        </div>

        <InputField
          label="Alergias Alimentares"
          name="alergias"
          value={form.alergias}
          onChange={handleChange}
          placeholder="Ex: lactose, glúten..."
        />

        <InputField
          label="Preferências Alimentares"
          name="preferencias"
          value={form.preferencias}
          onChange={handleChange}
          placeholder="Ex: vegetariano, sem carne vermelha..."
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition font-semibold"
        >
          {loading ? "Gerando..." : "Gerar Cardápio"}
        </button>
      </form>

      {loading && <LoadingSpinner />}
    </div>
  );
}

export default HomePage;
