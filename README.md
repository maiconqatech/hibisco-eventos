# Hibisco Eventos — landing page

Site estático (HTML + CSS + JS puro, sem build). É só abrir o `index.html` no navegador ou publicar a pasta em qualquer host estático (Vercel, Netlify, GitHub Pages).

## Fotos

Coloque as fotos em `img/` com estes nomes. Enquanto uma foto não existir, aparece um espaço reservado em tom champanhe com o nome dela.

| Arquivo | Onde aparece |
|---|---|
| `hero.jpg` | Fundo do topo (horizontal, alta resolução, ~2000px) |
| `buffet.jpg`, `dj.jpg`, `fotografo.jpg`, `barman.jpg`, `decoracao.jpg`, `iluminacao.jpg` | Cards de "O que inclui" (4:3) |
| `galeria-1.jpg` … `galeria-8.jpg` | Mosaico da galeria (1 e 4 verticais; 5 e 7 horizontais; demais quadradas) |

## WhatsApp

O número fica em `script.js` (`WHATSAPP`). Cada botão tem sua mensagem pronta no atributo `data-wa` do HTML.
