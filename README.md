# 🖤 SOLO D.E.V - Personagens de Shadow Realm

🎮 Uma aplicação interativa inspirada no universo de **Solo Leveling**, que permite explorar os personagens do Exército das Sombras com animações, trilha sonora dinâmica e visual moderno. Ideal para demonstrar habilidades em **HTML, CSS, JavaScript** e animações web.

---

## 🔍 Visão Geral

Este projeto foi criado com foco em:
- Design responsivo para dispositivos móveis e desktop
- Interatividade fluida via JavaScript
- Trilha sonora com controle de volume
- Efeitos visuais com animações e sombras pulsantes

A cada clique em um personagem, seu perfil é exibido com descrição, imagem e ambientação sonora.

---

## 📂 Estrutura de Pastas

```plaintext
.
├── index.html                # Página principal
├── README.md                 # Este arquivo
└── src/
    ├── css/
    │   ├── reset.css         # Reset de estilos padrão
    │   ├── estilos.css       # Estilos principais
    │   └── responsivo.css    # Estilos para responsividade
    ├── js/
    │   └── index.js          # Script de troca de personagens e controle de música
    ├── audio/
    │   ├── audio.mp3         # Trilha sonora alternativa
    │   └── musica.mp3        # Trilha padrão (autoplay)
    ├── imagens/
    │   └── ...               # Imagens dos personagens e botões
    └── fontes/               # (Opcional) fontes personalizadas se houver
```

---

## 🎧 Trilha Sonora

A música de fundo começa automaticamente ao abrir a página (em navegadores que permitem isso).  
Você pode **alterar a música padrão** substituindo no arquivo `index.html` a linha:

```html
<source src="./src/audio/musica.mp3" type="audio/mpeg">
```

Por:
```html
<source src="./src/audio/audio.mp3" type="audio/mpeg">
```

O botão no canto superior direito permite:
- Pausar / tocar música
- Ajustar volume com slider

---

## 🧪 Funcionalidades

- ✅ Transição suave entre personagens com JavaScript puro
- ✅ Animações com `@keyframes` e `text-shadow`
- ✅ Interface 100% responsiva
- ✅ Personalização fácil (troque imagens, textos e áudio)
- ✅ Player de áudio flutuante com controle interativo

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – estrutura da página
- **CSS3** – estilização com animações e responsividade
- **JavaScript (Vanilla)** – interatividade com botões e áudio
- **Google Fonts** – Tipografias Secular One e Rubik
- **GitHub Pages** – hospedagem gratuita

---

## 📱 Responsividade

✅ Totalmente compatível com:
- Smartphones 📱
- Tablets 📲
- Monitores widescreen 🖥️

---

## ✨ Como Personalizar

Você pode alterar:

| Elemento       | Caminho                              |
|----------------|--------------------------------------|
| Fundo dos personagens | `src/imagens/bg-[personagem].png` |
| Texto dos personagens | Editar diretamente no `index.html` |
| Música de fundo       | `src/audio/musica.mp3` ou `audio.mp3` |
| Estilo visual         | Arquivos em `src/css/` |

---

## 📌 Como Visualizar

Se você baixou este repositório:

1. Abra o projeto no VS Code
2. Instale a extensão **Live Server**
3. Clique com o botão direito em `index.html` → `Go Live`
4. Veja o projeto rodando localmente em `http://localhost:5500/`

---

## 🤝 Contribuição

Este projeto é totalmente aberto para customização, estudos ou evolução.  
Se quiser contribuir, sinta-se à vontade para abrir um Pull Request ou issue!

---

## 👨‍💻 Autor

Feito com 💻 e ❤️ por [Seu Nome Aqui]  
Contato: [seu-email@exemplo.com]

---

## 📜 Licença

Este projeto é livre para fins educacionais e de portfólio.  
Por favor, mantenha os créditos do autor original.
