# FERRO & FORMA — Landing page demonstrativa

React + TypeScript + Vite. Sem backend. Marca fictícia; imagens e depoimentos ilustrativos.

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # produção (pasta dist/, base relativa)
npm run preview  # testar o build
```

## Ativar o WhatsApp real
Edite `src/config.ts` e preencha `whatsappNumber` (formato internacional, só dígitos, ex.: `5516999999999`).
Vazio = modo demonstrativo: o formulário abre uma prévia da mensagem com botão de copiar.

## Estrutura
`src/data.ts` (textos e dados) · `src/App.tsx` (seções) · `src/Contact.tsx` (formulário) · `src/Lightbox.tsx` (galeria, `<dialog>` nativo) · `src/styles.css` (tokens e estilos) · `src/assets/` (fotos recortadas dos mockups, WebP).
