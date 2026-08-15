# Gerador de Certificados

Sistema local para geração automatizada de certificados a partir de uma planilha Excel e de um modelo em SVG.

A primeira versão funcional (v0.1.0) foi construída em Python com o objetivo de eliminar a geração manual de certificados, processando os dados dos participantes, preenchendo um modelo em SVG e convertendo cada certificado para PDF.

- **Status:** funcional — versão inicial
- **Arquitetura atual:** aplicação local, baseada em arquivos
- **Próximo objetivo:** evoluir o gerador para uma plataforma de emissão e validação de certificados

## Funcionalidades atuais

A versão v0.1.0 possui:

- Leitura de dados dos participantes a partir de um arquivo `.xlsx`
- Limpeza básica dos campos principais (nome, unidade/polo, data de nascimento)
- Conversão da data de nascimento para o formato `datetime`
- Mapeamento de unidades/polos para diretórios de saída
- Leitura de um modelo de certificado em SVG
- Substituição de marcadores do template pelos dados do participante
- Geração temporária do certificado em SVG
- Conversão do SVG para PDF usando CairoSVG
- Organização dos certificados gerados por unidade/polo
- Remoção do SVG temporário após a conversão
- Mensagens de sucesso e alerta exibidas no terminal

## Fluxo atual

Os caminhos utilizados atualmente pelo código são relativos ao diretório de execução. Portanto, a organização dos arquivos e pastas deve ser mantida de acordo com a implementação atual.

## Tecnologias

- Python
- Pandas — leitura e processamento da planilha
- CairoSVG — conversão de SVG para PDF
- Pathlib — manipulação de caminhos e diretórios
- qrcode
- SQLAlchemy
- Alembic
- Pydantic
- FastAPI
- SQLite

> A dependência `qrcode` já está prevista no código/planejamento, mas a geração de QR Code ainda não faz parte da funcionalidade efetivamente utilizada na v0.1.0.

## Modelo de dados atual

A planilha de entrada precisa possuir, no mínimo, as seguintes colunas:

| Campo               | Utilização                                  |
|---------------------|----------------------------------------------|
| Nome Completo        | Nome exibido no certificado                  |
| Unidade / Polo       | Define o diretório de saída                  |
| Data de Nascimento   | Processamento/normalização do cadastro       |

## Unidades / polos suportados

O mapeamento entre o nome da unidade e o diretório de saída é definido diretamente no código.

Caso uma unidade não esteja presente no mapeamento, o registro correspondente é ignorado e um alerta é exibido no terminal.

## Visão futura

A evolução planejada é transformar o gerador local em um sistema de emissão e validação de certificados, incluindo:

```
                    ┌──────────────────────┐
                    │     Site / Sistema   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      Backend API     │
                    └──────────┬───────────┘
                               │
                  ┌────────────┴────────────┐
                  ▼                         ▼
        ┌──────────────────┐      ┌──────────────────┐
        │   Banco de       │      │   Gerador de     │
        │   dados          │      │   certificados   │
        └──────────────────┘      └────────┬─────────┘
                                            │
                                            ▼
                                   ┌──────────────────┐
                                   │  QR Code único   │
                                   │  de validação    │
                                   └────────┬─────────┘
                                            │
                                            ▼
                                   ┌──────────────────┐
                                   │  Página pública  │
                                   │  de validação    │
                                   └──────────────────┘
```