from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from markdown2 import markdown
import tempfile
import re

def gerar_pdf(cardapio_texto):
    """Gera um PDF temporário a partir de texto Markdown e retorna o caminho do arquivo."""

    # Converter Markdown para HTML
    cardapio_html = markdown(cardapio_texto)

    # Substituir quebras de linha simples por <br/> para o ReportLab reconhecer
    cardapio_html = re.sub(r'(?<!</p>)\n', '<br/>', cardapio_html)

    # Criar arquivo temporário
    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=".pdf")

    # Criar documento PDF
    doc = SimpleDocTemplate(temp_file.name, pagesize=A4)
    styles = getSampleStyleSheet()

    # Estilos adicionais
    styles.add(ParagraphStyle(
        name="Titulo",
        fontSize=16,
        leading=20,
        alignment=TA_CENTER,
        spaceAfter=12,
    ))
    styles.add(ParagraphStyle(
        name="Corpo",
        fontSize=11,
        leading=16,
        spaceAfter=8,
    ))

    # Conteúdo
    conteudo = [
        Paragraph("Cardápio Personalizado", styles["Titulo"]),
        Spacer(1, 12),
        Paragraph(cardapio_html, styles["Corpo"]),
    ]

    # Construir o PDF
    doc.build(conteudo)

    return temp_file.name
