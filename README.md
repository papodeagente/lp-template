# lp-template

Template base para landing pages Entur. Next.js 15 + Tailwind, build via Dockerfile, deploy no Coolify (projeto **LPs**).

## Criar uma nova LP a partir deste template

```bash
gh repo create papodeagente/lp-<nome> --public --template papodeagente/lp-template
```

Ou pelo GitHub: use o botão **Use this template**.

## Rodar local

```bash
npm install
npm run dev
```

## Stack

- Next.js 15 (App Router, output `standalone`)
- React 19
- Tailwind 3
- Dockerfile multi-stage para Coolify

## Deploy

Push em `main` dispara o webhook do Coolify automaticamente.
