#!/bin/bash

echo "🔁 Limpando arquivos do projeto (exceto .git)..."

# Apaga tudo, menos o .git e o próprio script
find . -mindepth 1 -not -name '.git' -not -path './.git/*' -not -name 'limpar_frontend.sh' -exec rm -rf {} +

echo "✅ Projeto limpo."

# Adiciona, commita e envia para o GitHub
git add .
git commit -m "limpeza do frontend"
git push

echo "🚀 Commit e push realizados com sucesso."
