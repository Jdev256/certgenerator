Changelog

Todas as mudanças relevantes deste projeto serão registradas neste arquivo.

O formato segue uma organização inspirada no Keep a Changelog e versionamento semântico.

[0.1.0] — 2026-08-10

Adicionado

Primeira versão funcional do gerador de certificados.

Leitura de dados a partir de arquivo Excel.

Processamento dos dados com Pandas.

Limpeza e normalização do nome dos alunos.

Limpeza e normalização dos polos.

Processamento da data de nascimento.

Mapeamento de polos para diretórios.

Leitura de template de certificado em SVG.

Substituição do marcador [] pelo nome do aluno.

Geração temporária dos certificados em SVG.

Conversão de SVG para PDF através do CairoSVG.

Organização dos certificados gerados por polo.

Remoção dos arquivos SVG temporários após a conversão.

Mensagens de sucesso e alerta no terminal.

Estrutura inicial

A aplicação funciona localmente e utiliza:

Excel
  ↓
Pandas
  ↓
Template SVG
  ↓
SVG temporário
  ↓
CairoSVG
  ↓
PDF

Limitações conhecidas

Não possui banco de dados.

Não possui backend.

Não possui API.

Não possui site.

Não possui validação online.

Não possui geração efetiva de QR Code.

Depende de arquivo Excel para entrada dos dados.

Depende de template SVG.

O identificador atual do arquivo utiliza o índice da planilha.

O sistema ainda não possui autenticação ou controle de usuários.

[Unreleased]

Próximas alterações planejadas:

Estabilização e melhoria das validações.

Organização da arquitetura do projeto.

Criação de testes.

Geração de identificador único para certificados.

Geração de QR Code.

Preparação da estrutura para validação online.

Backend/API.

Banco de dados.

Site para emissão e validação.

Histórico de versões

Versão

Data

Descrição

0.1.0

2026-08-10

Primeira versão funcional