from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from services.ai_service import gerar_cardapio_ia
from services.pdf_service import gerar_pdf

app = Flask(__name__)
CORS(app)


@app.route("/")
def index():
    return jsonify({"message": "Server rodando"})


@app.route("/gerar_cardapio", methods=["POST"])
def gerar_cardapio():
    """
    Gera o cardápio como texto (sem PDF).
    """
    try:
        data = request.json

        # Dados do usuário
        sexo = data.get("sexo")
        peso = float(data.get("peso"))
        altura = float(data.get("altura"))
        idade = int(data.get("idade"))
        nivel_atividade = data.get("nivel_atividade")
        objetivo = data.get("objetivo")

        # Campos opcionais
        alergias = data.get("alergias", "")
        preferencias = data.get("preferencias", "")

        # Geração de texto via IA
        cardapio = gerar_cardapio_ia(sexo, peso, altura, idade, objetivo, alergias, preferencias)

        return jsonify({
            "cardapio": cardapio
        })

    except Exception as e:
        print("Erro ao gerar cardápio:", e)
        return jsonify({"erro": str(e)}), 500


@app.route("/gerar_pdf", methods=["POST"])
def gerar_pdf_cardapio():
    """
    Gera o PDF a partir do texto do cardápio.
    """
    try:
        data = request.json
        cardapio_texto = data.get("cardapio", "")

        if not cardapio_texto.strip():
            return jsonify({"erro": "Texto do cardápio não informado"}), 400

        pdf_path = gerar_pdf(cardapio_texto)
        return send_file(pdf_path, as_attachment=True, download_name="cardapio.pdf")

    except Exception as e:
        print("Erro ao gerar PDF:", e)
        return jsonify({"erro": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
