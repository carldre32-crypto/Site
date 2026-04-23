# Apex 3D Impressões - Site catálogo

Site estático em HTML, CSS e JavaScript para catálogo com carrinho de pedidos. Não há pagamento online: o pedido é organizado pelo site e o pagamento é combinado depois pelo WhatsApp via Pix.

## Arquivos principais

- `index.html`: estrutura da página, carrinho e formulário.
- `style.css`: visual, responsividade e animações.
- `script.js`: produtos, carrinho, envio do pedido e link do WhatsApp.
- `fotos/`: imagens usadas nos produtos.
- `logo-apex-3d.png`: logo usada no cabeçalho e rodapé.

## Onde editar o e-mail e WhatsApp

Abra `script.js` e altere o bloco inicial:

```js
const CONFIG = {
  orderEmail: "seu-email@exemplo.com",
  whatsappNumber: "5599999999999"
};
```

- `orderEmail`: coloque o e-mail que deve receber os pedidos.
- `whatsappNumber`: coloque o número com código do país e DDD, somente números. Exemplo: `5511999999999`.

## Onde editar produtos

Abra `script.js` e altere a lista `products`.

Cada produto segue este formato:

```js
{
  id: "produto-unico",
  name: "Nome do produto",
  category: "Dummy",
  price: 79.9,
  description: "Descrição curta do produto.",
  image: "fotos/Pasta/Nome da imagem.jpg"
}
```

Os nomes curtos exibidos no site ficam no bloco `productTextOverrides`, logo abaixo da lista de produtos. Use esse bloco quando quiser simplificar o nome que aparece para o cliente sem mexer no nome da foto.

As áreas do catálogo também usam o campo `category`. As categorias atuais são:

- `Geek`
- `Utensílios`
- `Decoração`
- `Kpop`
- `Dummys`
- `Acessórios`
- `Kit Dummy Soldado`

## Cálculo do Kit Dummy Soldado

O produto `Kit Dummy Soldado` está na lista `products` com preço de R$ 26,00.

O site compara esse preço com os itens avulsos do kit:

- Itens avulsos separados: R$ 33,05
- Preço do kit: R$ 26,00
- Desconto no kit: R$ 7,05

## Como configurar o envio por e-mail com FormSubmit

1. Troque `seu-email@exemplo.com` no `script.js` pelo seu e-mail real.
2. Publique o site ou abra o `index.html` e faça um pedido de teste.
3. O FormSubmit enviará um e-mail de confirmação para ativar o endereço.
4. Depois de confirmar, os próximos pedidos chegarão no e-mail configurado.

O site usa o endpoint AJAX do FormSubmit. Se aparecer erro no primeiro teste, abra o e-mail de ativação enviado pelo FormSubmit para o endereço configurado e confirme o uso. Sem essa confirmação, o FormSubmit bloqueia o recebimento dos pedidos.

Importante: o FormSubmit não envia quando o site é aberto direto pelo arquivo `index.html` no navegador. Ele precisa estar em um servidor, como GitHub Pages. Para testar o envio real, publique primeiro no GitHub Pages e faça o pedido pelo link público.

## Como hospedar gratuitamente no GitHub Pages

1. Crie uma conta em https://github.com, se ainda não tiver.
2. Crie um novo repositório, por exemplo `apex-3d`.
3. Envie estes arquivos e pastas para o repositório:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `fotos/`
   - `logo-apex-3d.png`
4. No GitHub, abra `Settings`.
5. Entre em `Pages`.
6. Em `Build and deployment`, escolha:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. Salve e aguarde alguns minutos.
8. O GitHub mostrará o link público do site.

## Teste local

Você pode abrir o arquivo `index.html` diretamente no navegador para testar catálogo, carrinho e botão de WhatsApp. Para envio real de e-mail, configure o e-mail no `script.js`.
