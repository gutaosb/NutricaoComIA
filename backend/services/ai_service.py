import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=api_key)


def gerar_cardapio_ia(sexo, peso, altura, idade, objetivo, alergias="", preferencias=""):
    alergias = alergias.strip() or "Nenhuma alergia informada"
    preferencias = preferencias.strip() or "Nenhuma preferência específica"

    prompt = f"""
    Você é um nutricionista especializado em criar cardápios personalizados.
    Comece com uma mensagem dizendo que o cardapio foi gerado apenas por fins educativos e que é importante consultar um profissional de saúde antes de fazer mudanças significativas na dieta.
    Crie um cardápio diário completo para uma pessoa do sexo {sexo}, com {idade} anos, {peso} kg e {altura} cm de altura, com o seguinte objetivo: {objetivo}.
    Essa pessoa possui as seguintes alergias alimentares: {alergias}.
    E as seguintes preferências alimentares: {preferencias}.
    Inclua café da manhã, almoço, jantar e lanches, com opções variadas, balanceadas e práticas.
    Forneça as refeições em formato de lista, detalhando os ingredientes principais e as porções recomendadas.
    Informe as calorias totais do dia no começo do cardápio.
    Informe os macronutrientes diários recomendados (carboidratos, proteínas e gorduras) com base no objetivo.
    Informe a taxa de metabolismo basal (TMB) calculada para essa pessoa.
    Responda apenas com o cardápio, sem introduções ou explicações adicionais.
    """

    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(prompt)

    return response.text