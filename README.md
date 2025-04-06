# 🖤 SOLO D.E.V - Alguns Personagens de S. L.

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

## 🚀 Demonstração

🔗 [Acesse o projeto online](https://angordrot.github.io/SOLO-DEV/) — via GitHub Pages

📦 [Repositório no GitHub](https://github.com/AngorDrot/SOLO-DEV)

---

## 📂 Estrutura de Pastas

```plaintext
.
├── index.html              # Página principal
├── README.md               # Este arquivo
└── src/
    ├── css/
    │   ├── reset.css       # Reset de estilos padrão
    │   ├── estilos.css     # Estilos principais
    │   └── responsivo.css  # Estilos para responsividade
    ├── js/
    │   └── index.js        # Script de troca de personagens e controle de música
    ├── audio/
    │   ├── audio.mp3       # Trilha sonora alternativa
    │   └── musica.mp3      # Trilha padrão (autoplay)
    ├── imagens/            # Imagens dos personagens e botões
    ├── fontes/             # (Opcional) fontes personalizadas se houver
    └── favicon/
        └── favicon.ico     # Ícone da aba do navegador (favicon)
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

### 🎨 Personalização

Você pode alterar livremente os estilos, cores e conteúdos visuais do projeto:

- **Imagens de fundo e personagens:** estão localizadas em `./src/imagens`
- **Trilha sonora:** dois arquivos de música disponíveis em `./src/audio`, escolha um para autoplay no HTML
- **Fontes personalizadas:** insira em `./src/fontes` e referencie no CSS

🔹 O **favicon** do projeto pode ser personalizado alterando a imagem em `./src/favicon/favicon.ico`.  
O ideal é usar uma imagem quadrada de **64x64** ou **32x32** pixels para garantir melhor compatibilidade entre navegadores.

---

## 📌 Como Visualizar

Se você baixou este repositório:

1. Abra o projeto no VS Code
2. Instale a extensão **Live Server**
3. Clique com o botão direito em `index.html` → `Go Live`
4. Veja o projeto rodando localmente em `http://localhost:5500/`

---

## 📚 Aprendizados

Este projeto foi uma oportunidade de:
- Praticar manipulação de DOM com `querySelector`, `classList`, `addEventListener`
- Aplicar conceitos de responsividade sem frameworks
- Criar interações visuais com `hover`, `transition` e `keyframes`
- Publicar com GitHub Pages de forma gratuita

---

## 🤝 Contribuição

Este projeto é totalmente aberto para customização, estudos ou evolução.  
Se quiser contribuir, sinta-se à vontade para abrir um Pull Request ou issue!

---

## 👨‍💻 Autor

Feito com 💻 e ❤️ por [Lucas Mateus do Santos Looze](https://github.com/AngorDrot)  
Contato: [lucaslooze@hotmail.com](mailto:lucaslooze@hotmail.com)


---

## 📜 Licença

Este projeto é livre para fins educacionais e de portfólio.  
Por favor, mantenha os créditos do autor original.
