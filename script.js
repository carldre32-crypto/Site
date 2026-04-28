// Configurações principais: troque estes valores antes de publicar.
const CONFIG = {
  orderEmail: "apex3dfuture@gmail.com",
  whatsappNumber: "5591984136534"
};

// Edite esta lista para alterar produtos, preços, descrições e fotos do catálogo.
const products = [
  {
    id: "minecraft-movie-tnt-popcorn-bucket",
    name: "Minecraft Movie TNT PopCorn Bucket",
    category: "Geek",
    price: 25,
    description: "Balde temático impresso em 3D para pipoca, setup gamer ou decoração.",
    image: "Fotos/Utensílios e Decoração/Minecraft Movie TNT PopCorn Bucket.png"
  },
  {
    id: "balde-tubo-teletransporte",
    name: "Balde de Pipoca Tubo de Teletransporte",
    category: "Geek",
    price: 65,
    description: "Balde criativo para filmes, jogos e presentes personalizados.",
    image: "Fotos/Utensílios e Decoração/Balde de Pipoca para Filmes Tubo de Teletransporte Lanche para Jogo.jpg"
  },
  {
    id: "hexa-link-prateleiras",
    name: "Sistema Hexa-Link de prateleiras",
    category: "Utensílios",
    price: 7,
    description: "Módulo de prateleira modular de precisão para organização personalizada.",
    image: "Fotos/Utensílios e Decoração/O Hexa-Link Sistema de Prateleiras Modulares de Precisão.jpg"
  },
  {
    id: "carro-formula-um",
    name: "Carro de Fórmula Um",
    category: "Geek",
    price: 7,
    description: "Miniatura decorativa para fãs de automobilismo e colecionáveis.",
    image: "Fotos/Utensílios e Decoração/Carro de Fórmula Um e Texto Invertido.jpg"
  },
  {
    id: "suporte-controle-cubone",
    name: "Suporte para controle Cubone",
    category: "Geek",
    price: 25,
    description: "Suporte estilizado para joystick, controle remoto ou acessórios de setup.",
    image: "Fotos/Utensílios e Decoração/Suporte Universal para Controle Joystick de Crânio de Cubone.jpg"
  },
  {
    id: "pikachu-monitor",
    name: "Pikachu Adormecido - Pet de Monitor",
    category: "Geek",
    price: 5,
    description: "Mini peça para apoiar no monitor e dar personalidade ao setup.",
    image: "Fotos/Utensílios e Decoração/Pikachu Adormecido - Pet de Monitor.jpg"
  },
  {
    id: "porta-pipoca-cogumelo",
    name: "Porta-pipoca Super Cogumelo",
    category: "Geek",
    price: 75,
    description: "Balde de salgadinhos e pipoca com visual divertido para sessões de filme.",
    image: "Fotos/Utensílios e Decoração/Porta-Pipoca Balde de Salgadinhos Super Cogumelo.jpg",
    unavailable: true
  },
  {
    id: "pantera-geometrica",
    name: "Busto de Pantera Geométrica",
    category: "Decoração",
    price: 25,
    description: "Arte low-poly moderna com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Busto de Pantera Geométrica Arte Low-Poly Moderna.jpg"
  },
  {
    id: "bonsai-torcido",
    name: "Bonsai Torcido",
    category: "Decoração",
    price: 25,
    description: "Peça decorativa elegante com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Bonsai Torcido por Grafit.jpg"
  },
  {
    id: "decoracao-gato",
    name: "Decoração de gato",
    category: "Decoração",
    price: 20,
    description: "Escultura temática para mesa, estante ou presente personalizado.",
    image: "Fotos/Utensílios e Decoração/Decoração de gato.jpg"
  },
  {
    id: "flores-arame",
    name: "Flores de Arame Minimalistas",
    category: "Decoração",
    price: 5,
    description: "Detalhe minimalista para compor ambientes com leveza.",
    image: "Fotos/Utensílios e Decoração/Flores de Arame Minimalistas.jpg"
  },
  {
    id: "coelho-pascoa",
    name: "Coelho da Páscoa",
    category: "Decoração",
    price: 8,
    description: "Peça sazonal com tamanho personalizável para decoração ou presente.",
    image: "Fotos/Utensílios e Decoração/Coelho da Páscoa.jpg"
  },
  {
    id: "estatua-jesus",
    name: "Estátua Geométrica de Jesus",
    category: "Decoração",
    price: 20,
    description: "Escultura geométrica com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Estátua Geométrica de Jesus.jpg"
  },
  {
    id: "lobo-uivando-lua",
    name: "Escultura de Lobo Uivando e Lua",
    category: "Decoração",
    price: 20,
    description: "Cena decorativa de lobo com lua, com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Escultura de Lobo Uivando e Lua.jpg"
  },
  {
    id: "lobo-coroado",
    name: "Lobo Coroado",
    category: "Decoração",
    price: 30,
    description: "Escultura decorativa marcante com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Lobo Coroado.jpg"
  },
  {
    id: "lobo-geometrico",
    name: "Escultura de Lobo Geométrico",
    category: "Decoração",
    price: 25,
    description: "Peça low-poly para decoração de prateleiras e escritórios.",
    image: "Fotos/Utensílios e Decoração/Escultura de Lobo Geométrico.jpg"
  },
  {
    id: "lobo-uivante-low-poly",
    name: "Lobo Uivante Low Poly",
    category: "Decoração",
    price: 25,
    description: "Escultura low-poly com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Lobo Uivante Low Poly.jpg"
  },
  {
    id: "cubo-infinito",
    name: "Cubo Infinito",
    category: "Decoração",
    price: 10,
    description: "Objeto articulado e decorativo com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Cubo Infinito.jpg"
  },
  {
    id: "fantasmas-pacman",
    name: "Fantasmas do PAC-MAN",
    category: "Geek",
    price: 10,
    description: "Miniaturas geek com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Fantasmas do PAC-MAN.jpg"
  },
  {
    id: "decorative-f1-logo",
    name: "Decorative F1 Logo",
    category: "Geek",
    price: 15,
    description: "Logo decorativo para fãs de corrida, com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Decorative F1 Logo.png"
  },
  {
    id: "cute-low-poly-cat",
    name: "Cute Low Poly Cat",
    category: "Decoração",
    price: 5,
    description: "Gato low-poly decorativo com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Cute Low Poly Cat.png"
  },
  {
    id: "skull-candy-bowl",
    name: "Realistic Skull Candy Bowl",
    category: "Geek",
    price: 30,
    description: "Recipiente decorativo em formato de caveira para doces ou objetos.",
    image: "Fotos/Utensílios e Decoração/Realistic Skull Candy Bowl.png"
  },
  {
    id: "cute-low-poly-owl",
    name: "Cute Low Poly Owl",
    category: "Decoração",
    price: 5,
    description: "Coruja low-poly com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Cute Low Poly Owl.png"
  },
  {
    id: "low-poly-howling-wolf",
    name: "Low Poly Howling Wolf",
    category: "Decoração",
    price: 15,
    description: "Lobo uivando em estilo low-poly com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Low Poly Howling Wolf.png"
  },
  {
    id: "tulip-flower",
    name: "Tulip Flower on Stem",
    category: "Decoração",
    price: 8,
    description: "Flor decorativa impressa em 3D com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Tulip Flower on Stem.png"
  },
  {
    id: "low-poly-dog",
    name: "Low Poly Dog",
    category: "Decoração",
    price: 8,
    description: "Cachorro low-poly com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Low Poly Dog.png"
  },
  {
    id: "lego-flowers",
    name: "LEGO Flowers",
    category: "Decoração",
    price: 20,
    description: "Flores decorativas inspiradas em peças montáveis.",
    image: "Fotos/Utensílios e Decoração/LEGO Flowers.png"
  },
  {
    id: "low-poly-cat-2",
    name: "Low Poly Cat 2.0",
    category: "Decoração",
    price: 8,
    description: "Gato low-poly em versão alternativa com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Low Poly Cat 2.0.png"
  },
  {
    id: "low-poly-bunny",
    name: "Low Poly Easter Bunny Sculpture",
    category: "Decoração",
    price: 15,
    description: "Coelho low-poly decorativo com tamanho personalizável.",
    image: "Fotos/Utensílios e Decoração/Low Poly Easter Bunny Sculpture.png"
  },
  {
    id: "modular-storage-system",
    name: "Modular Storage System",
    category: "Utensílios",
    price: 15,
    description: "Sistema modular para organizar peças, ferramentas ou itens de mesa.",
    image: "Fotos/Utensílios e Decoração/Modular Storage System.png"
  },
  {
    id: "headphones-stand",
    name: "Headphones Stand",
    category: "Utensílios",
    price: 20,
    description: "Suporte para headphone, ideal para setup e mesa de trabalho.",
    image: "Fotos/Utensílios e Decoração/Headphones Stand.png"
  },
  {
    id: "makeup-organizer-inflated-bathroom-set",
    name: "MakeUp Organizer (Inflated Bathroom Set)",
    category: "Utensílios",
    price: 30,
    description: "Organizador para maquiagem, pincéis e itens de banheiro ou penteadeira.",
    image: "Fotos/Utensílios e Decoração/MakeUp Organizer (Inflated Bathroom Set).png"
  },
  {
    id: "vase-with-roses-stems",
    name: "Vase with Roses and Stems - Flowers Bouquet",
    category: "Decoração",
    price: 25,
    description: "Vaso decorativo impresso em 3D. Não deixe em contato prolongado com objetos úmidos, como terra molhada.",
    image: "Fotos/Utensílios e Decoração/Vase with Roses and Stems - Flowers Bouquet.png"
  },
  {
    id: "super-mario-question-block-box",
    name: "Super Mario Question Block Box",
    category: "Geek",
    price: 10,
    description: "Caixa decorativa inspirada no bloco de interrogação para doces, mesa ou setup geek.",
    image: "Fotos/Utensílios e Decoração/Super Mario Question Block Box.png"
  },
  {
    id: "cosmetic-storage-box",
    name: "Cosmetic storage box",
    category: "Utensílios",
    price: 40,
    description: "Caixa organizadora para maquiagem, acessórios e itens de bancada.",
    image: "Fotos/Utensílios e Decoração/Cosmetic storage box.png"
  },
  {
    id: "wise-owl-desk-buddy",
    name: "Wise Owl Desk Buddy",
    category: "Decoração",
    price: 25,
    description: "Coruja decorativa para mesa, estante ou cantinho de trabalho.",
    image: "Fotos/Utensílios e Decoração/Wise Owl Desk Buddy.png"
  },
  {
    id: "rustic-farmhouse-chicken-hen-candy-dish-bowl",
    name: "Rustic Farmhouse Chicken Hen Candy Dish Bowl",
    category: "Decoração",
    price: 30,
    description: "Bowl decorativo em estilo rústico para doces, mesa posta ou cozinha.",
    image: "Fotos/Utensílios e Decoração/Rustic Farmhouse Chicken Hen Candy Dish Bowl.png"
  },
  {
    id: "majestic-swan-kitchen-organizer",
    name: "Majestic Swan Kitchen Organizer & Utensil Holder",
    category: "Utensílios",
    price: 35,
    description: "Organizador e porta-utensílios com visual de cisne para cozinha ou bancada.",
    image: "Fotos/Utensílios e Decoração/Majestic Swan Kitchen Organizer & Utensil Holder.png"
  },
  {
    id: "japandi-vase-trio",
    name: "Japandi Vase Trio",
    category: "Decoração",
    price: 12,
    description: "Conjunto de vasos com estética japandi para decoração minimalista.",
    image: "Fotos/Utensílios e Decoração/Japandi Vase Trio.png"
  },
  {
    id: "melt-pencil-holder",
    name: "Melt - pencil holder",
    category: "Utensílios",
    price: 15,
    description: "Porta-lápis moderno para escritório, estudos ou bancada criativa.",
    image: "Fotos/Utensílios e Decoração/Melt - pencil holder.png"
  },
  {
    id: "felicia-vase-botany-chic",
    name: "The Felicia Vase - Botany Chic Creation - Decor",
    category: "Decoração",
    price: 25,
    description: "Vaso decorativo com estilo botânico para compor estantes, mesas e aparadores.",
    image: "Fotos/Utensílios e Decoração/The Felicia Vase - Botany Chic Creation - Decor.png"
  },
  {
    id: "whale-9cm",
    name: "Whale",
    category: "Decoração",
    price: 15,
    description: "Baleia decorativa de 9 cm para mesa, nicho ou presente criativo.",
    image: "Fotos/Utensílios e Decoração/Whale.png"
  },
  {"id":"batman-batarang","name":"BATMAN - BATARANG","category":"Geek","price":6,"description":"Batarang decorativo inspirado no Batman para coleção, cosplay leve ou decoração geek.","image":"Fotos/Utensílios e Decoração/BATMAN - BATARANG.png"},
  {"id":"valorant-recon-butterfly-knife","name":"Valorant Recon Butterfly Knife","category":"Geek","price":12,"description":"Faca butterfly decorativa inspirada em Valorant para coleção ou setup gamer.","image":"Fotos/Utensílios e Decoração/Valorant Recon Butterfly Knife.png"},
  {"id":"minecraft-custom-name-pen-holder","name":"Mine-Craft Your Name: Custom Name Pen Holder","category":"Geek","priceLabel":"Customizado","description":"Porta-canetas personalizado com nome no tema Minecraft. Chame no WhatsApp para combinar nome, tamanho e valor.","image":"Fotos/Utensílios e Decoração/Mine-Craft Your Name Custom Name Pen Holder.png"},
  {"id":"resident-evil-matilda","name":"Resident Evil 4 - VP70M Matilda","category":"Geek","price":35,"description":"Peça decorativa inspirada na Matilda de Resident Evil 4 para coleção ou cosplay leve.","image":"Fotos/Utensílios e Decoração/Resident Evil 4 - vp70m - Matilda - matilda.png"},
  {"id":"valorant-kuronami-knife","name":"Valorant Kuronami Knife","category":"Geek","price":25,"description":"Faca decorativa inspirada em Valorant para setup gamer, coleção ou presente.","image":"Fotos/Utensílios e Decoração/Valorant Kuronami Knife.png"},
  {"id":"charmander-chibi","name":"Charmander Chibi","category":"Geek","price":15,"description":"Miniatura chibi do Charmander para mesa, estante ou presente geek.","image":"Fotos/Utensílios e Decoração/Charmander Chibi.png"},
  {"id":"mudkip-pokemon","name":"Mudkip Pokemon","category":"Geek","price":18,"description":"Miniatura do Mudkip para coleção Pokémon, mesa ou estante.","image":"Fotos/Utensílios e Decoração/Mudkip Pokemon - NO AMS Multipart + AMS.png"},
  {"id":"hulk-multipart","name":"HULK","category":"Geek","price":45,"description":"Figura decorativa do Hulk em multipart multicolor para coleção ou presente.","image":"Fotos/Utensílios e Decoração/HULK  NO AMS - MULTIPART MULTICOLOR.png"},
  {"id":"snorlax-multipart","name":"Snorlax","category":"Geek","price":60,"description":"Figura decorativa do Snorlax para coleção Pokémon, mesa ou estante.","image":"Fotos/Utensílios e Decoração/Snorlax Multipart NO AMS.png"},
  {"id":"mew-chibi","name":"Mew Chibi","category":"Geek","price":15,"description":"Miniatura chibi do Mew para coleção Pokémon ou presente geek.","image":"Fotos/Utensílios e Decoração/Mew Chibi.png"},
  {"id":"kuromi","name":"Kuromi","category":"Geek","price":25,"description":"Peça decorativa da Kuromi para mesa, estante ou presente.","image":"Fotos/Utensílios e Decoração/Kuromi.png"},
  {"id":"eevee","name":"Eevee","category":"Geek","price":35,"description":"Figura decorativa do Eevee para coleção Pokémon ou presente geek.","image":"Fotos/Utensílios e Decoração/Eevee.png"},
  {"id":"pen-holder-paper-bag","name":"Pen Holder - Paper Bag","category":"Utensílios","price":15,"description":"Porta-lápis em formato de saco de papel para mesa de trabalho ou estudos.","image":"Fotos/Utensílios e Decoração/Pen Holder - Paper Bag.png"},
  {"id":"little-fat-cat","name":"Little Fat Cat","category":"Decoração","price":5,"description":"Mini gato decorativo de 2,5 cm para mesa, nicho ou presente pequeno.","image":"Fotos/Utensílios e Decoração/Little Fat Cat.png"},
  {"id":"halloween-cat-mini-figures","name":"Halloween Cat Mini Figures","category":"Decoração","price":5,"description":"Mini figura de gato Halloween com 2,6 cm para decoração temática.","image":"Fotos/Utensílios e Decoração/Halloween Cat Mini Figures – Set of 6.png"},
  {"id":"fisherman-incense-holder","name":"Fisherman","category":"Decoração","price":18,"description":"Peça decorativa de pescador com 10 cm, ideal para mesa, nicho ou porta-incenso.","image":"Fotos/Utensílios e Decoração/Fisherman - Incense stick holde.png"},
  {"id":"bowser-super-mario","name":"BOWSER SUPER MARIO","category":"Geek","price":120,"description":"Figura decorativa do Bowser com 21 cm para coleção Super Mario.","image":"Fotos/Utensílios e Decoração/BOWSER SUPER MARIO.png"},
  {"id":"yoshi-super-mario","name":"Yoshi","category":"Geek","price":25,"description":"Figura decorativa do Yoshi com 13 cm para coleção Super Mario.","image":"Fotos/Utensílios e Decoração/Yoshi Oeuf multipart.png"},
  {"id":"dire-wolf","name":"Dire Wolf","category":"Decoração","price":25,"description":"Lobo decorativo com 12 cm para mesa, estante ou presente.","image":"Fotos/Utensílios e Decoração/Dire Wolf.png"},
  {"id":"luma-star","name":"Luma Star","category":"Geek","price":25,"description":"Estrela Luma com 12 cm para coleção Super Mario ou decoração geek.","image":"Fotos/Utensílios e Decoração/Luma Star.png"},
  {"id":"roku-remote-holder","name":"Roku Remote Holder","category":"Utensílios","price":7,"description":"Suporte para controle Roku ou controles pequenos de mesa e sala.","image":"Fotos/Utensílios e Decoração/Roku Remote Holder.png"},
  {"id":"tech-station-desk-organizer","name":"Tech-Station Desk Organizer","category":"Utensílios","price":30,"description":"Organizador de mesa com 7,5 cm para acessórios, cabos e itens de setup.","image":"Fotos/Utensílios e Decoração/Tech-Station Desk Organizer.png"},
  {"id":"espeon","name":"Espeon","category":"Geek","price":50,"description":"Figura decorativa do Espeon com 25 cm para coleção Pokémon.","image":"Fotos/Utensílios e Decoração/Espeon.png"},
  {"id":"low-poly-dinosaur-skull","name":"Low Poly Dinosaur Skull","category":"Decoração","price":30,"description":"Crânio de dinossauro low-poly com 8 cm para decoração geek ou científica.","image":"Fotos/Utensílios e Decoração/Low Poly Dinosaur Skull.png"},
  {"id":"giant-lego-droid-blaster","name":"Giant LEGO Droid Blaster","category":"Geek","price":35,"description":"Blaster estilo LEGO Droid com 18 cm de comprimento para coleção ou cosplay leve.","image":"Fotos/Utensílios e Decoração/Giant LEGO Droid Blaster.png"},
  {"id":"umbreon","name":"Umbreon","category":"Geek","price":45,"description":"Figura decorativa do Umbreon com 26 cm para coleção Pokémon.","image":"Fotos/Utensílios e Decoração/Umbreon.png"},
  {"id":"balde-creeper-minecraft","name":"Balde do Creeper do Minecraft","category":"Geek","price":45,"description":"Balde temático do Creeper com 12 cm de altura e 14 cm de área para pipoca, doces ou decoração.","image":"Fotos/Utensílios e Decoração/Balde do Creeper do Minecraf.jpg"},
  {"id":"snoopy","name":"Snoopy","category":"Geek","price":25,"description":"Figura decorativa do Snoopy com 18 cm para coleção ou presente.","image":"Fotos/Utensílios e Decoração/Snoopy.png"},
  {"id":"hello-kitty","name":"Hello Kitty","category":"Geek","price":70,"description":"Figura decorativa da Hello Kitty com 22 cm para coleção ou presente.","image":"Fotos/Utensílios e Decoração/Hello Kitty.png"},
  {
    id: "balde-interrogacao",
    name: "Balde Bloco Interrogação",
    category: "Geek",
    price: 40,
    description: "Balde temático para pipoca, doces ou decoração geek. Possui 14 cm de altura e 15 cm de área.",
    image: "Fotos/Utensílios e Decoração/Balde de Pipoca para Filme Bloco de Interrogação.jpg"
  },
  {
    id: "suporte-pinceis",
    name: "Suporte para Pincéis",
    category: "Utensílios",
    price: 20,
    description: "Organizador para pincéis, maquiagem e itens de bancada.",
    image: "Fotos/Utensílios e Decoração/Suporte para Pincéis de Maquiagem.png"
  },
  {
    id: "bts-arirang-tour-sign",
    name: "BTS Arirang Tour Sign",
    category: "Kpop",
    price: 15,
    description: "Peça decorativa Kpop com tamanho personalizável.",
    image: "Fotos/Kpop/BTS Arirang Tour Sign.jpg"
  },
  {
    id: "bts-statue",
    name: "BTS Statue Bangtan Sonyeondan",
    category: "Kpop",
    price: 20,
    description: "Estátua temática BTS com tamanho personalizável.",
    image: "Fotos/Kpop/BTS Statue Bangtan Sonyeondan.jpg"
  },
  {
    id: "huntrix-logo-keychain",
    name: "KPop Demon Hunters Huntrix Logo Keychain",
    category: "Kpop",
    price: 6,
    description: "Chaveiro Kpop com tamanho personalizável.",
    image: "Fotos/Kpop/KPop Demon Hunters Huntrix Logo Keychain version 2.jpg"
  },
  {
    id: "kpop-ornaments-set-2",
    name: "KPop Ornaments Set 2",
    category: "Kpop",
    price: 20,
    description: "Grupos disponíveis: BTS, iKON, Oh My Girl, Day6, MCND, Everglow, EXID, N.Flying, SuJu, T-ARA, Hyuna, Apink, AOA, Dreamcatcher, BigBang, Girls' Generation, VIXX, BTOB, KARD, SHINee e f(x).",
    image: "Fotos/Kpop/KPop Ornaments Set 2.jpg"
  },
  {
    id: "kpop-ornaments",
    name: "KPop Ornaments",
    category: "Kpop",
    price: 20,
    description: "Grupos disponíveis: ONEUS, K/DA, BTS, G-IDLE, ATEEZ, Seventeen, NCT, LOONA, Verivery, CLC, EXO, GFriend, The Boyz, Golden Child, Wanna One, ONF, TWICE, ITZY, TOO, A.C.E, NU'EST, Pentagon, SF9, Blackpink, GOT7, WayV, Astro, Stray Kids, AB6IX, TXT, Monsta X e Red Velvet.",
    image: "Fotos/Kpop/KPop Ornaments.jpg"
  },
  {
    id: "kpop-lightstick-keyrings",
    name: "KPop Lightstick keyrings",
    category: "Kpop",
    price: 5,
    description: "Chaveiros inspirados em lightsticks de grupos Kpop.",
    image: "Fotos/Kpop/KPop Lightstick keyrings.jpg",
    unavailable: true
  },
  {
    id: "bts-logo-keychains",
    name: "BTS K Pop Logo and Keychains",
    category: "Kpop",
    price: 3,
    description: "Logos e chaveiros BTS para presente ou coleção.",
    image: "Fotos/Kpop/BTS K Pop Logo and Keychains.jpg"
  },
  {
    id: "bts-headphone-stand",
    name: "BTS Headphone Stand",
    category: "Kpop",
    price: 25,
    description: "Suporte de headphone temático BTS.",
    image: "Fotos/Kpop/BTS Headphone Stand.jpg"
  },
  {
    id: "huntrix-logo-stand",
    name: "Logo Huntrix de Mesa",
    category: "Kpop",
    price: 15,
    description: "Logo decorativo Huntrix para mesa, prateleira ou setup.",
    image: "Fotos/Kpop/KPop Demon Hunters Huntrix Huntrx Logo Stand.png"
  },
  {
    id: "saja-boys-light-stick",
    name: "Kpop Demon Hunter Saja boys light stick",
    category: "Kpop",
    price: 40,
    description: "Light stick temático Kpop Demon Hunter Saja boys.",
    image: "Fotos/Kpop/Kpop Demon Hunter Saja boys light stick.png"
  },
  {
    id: "huntrix-light-stick",
    name: "Kpop Demon hunter Huntrix light Stick",
    category: "Kpop",
    price: 40,
    description: "Light stick temático Huntrix/Huntr-x para fãs de Kpop Demon Hunter.",
    image: "Fotos/Kpop/Kpop Demon hunter Huntrix(Huntr-x) light Stick.png"
  },
  {
    id: "whalien-zero-oclock",
    name: "WHALIEN ZERO O'CLOCK",
    category: "Kpop",
    price: 30,
    description: "Peça decorativa Kpop WHALIEN ZERO O'CLOCK para mesa, estante ou setup.",
    image: "Fotos/Kpop/WHALIEN ZERO O'CLOCK.png"
  },
  {
    id: "dummy-carbon-back-fists",
    name: "DummyCarbon 13 Back Fists Pack",
    category: "Acessórios",
    price: 3.5,
    description: "Pack de punhos traseiros para Dummy 13.",
    image: "Fotos/Acessórios Dummy/DummyCarbon 13 Back Fists Pack!.jpg"
  },
  {
    id: "dummy-heavy-armor-kit",
    name: "Dummy 13 Heavy Armor Kit",
    category: "Acessórios",
    price: 10,
    description: "Kit de armadura pesada para personalizar Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Version 1.0 Heavy Armor Kit.png"
  },
  {
    id: "dummy-drop-leg-holster",
    name: "Dummy 13 Drop Leg Pistol Holster",
    category: "Acessórios",
    price: 1,
    description: "Coldre de perna para pistol ou acessório tático.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Drop Leg Pistol Holster.png"
  },
  {
    id: "dummy-extra-arms-backpack",
    name: "Dummy 13 extra arms backpack",
    category: "Acessórios",
    price: 3,
    description: "Mochila com braços extras para composições de ação.",
    image: "Fotos/Acessórios Dummy/Dummy 13 extra arms backpack.jpg"
  },
  {
    id: "dummy-assault-cannon-backpack",
    name: "Extra Arms Assault Cannon Backpack",
    category: "Acessórios",
    price: 1,
    description: "Mochila de canhão para Dummy 13.",
    image: "Fotos/Acessórios Dummy/Extra Arms  Assault Cannon Backpack for Dummy 13.jpg"
  },
  {
    id: "dummy-sword-arm",
    name: "Dummy 13 Sword Arm",
    category: "Acessórios",
    price: 0.5,
    description: "Braço com espada para customização do Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Sword Arm.jpg"
  },
  {
    id: "dummy-power-claw",
    name: "Dummy 13 Power Claw",
    category: "Acessórios",
    price: 2,
    description: "Garra de poder com visual agressivo para Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Power Claw w Knuckle Dusters.jpg"
  },
  {
    id: "dummy-spider-walker",
    name: "Dummy 13 Spider Walker Mech Legs",
    category: "Acessórios",
    price: 4,
    description: "Pernas mecânicas estilo aranha para Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Spider Walker  Mech Legs.jpg"
  },
  {
    id: "dummy-lightsaber",
    name: "Dummy 13 Lightsaber",
    category: "Acessórios",
    price: 0.5,
    description: "Sabre de luz em miniatura para Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Lightsaber.png"
  },
  {
    id: "dummy-k9-compilation",
    name: "Dummy 13 K9 Compilation",
    category: "Acessórios",
    price: 5,
    description: "Compilado K9 para cenas e acessórios do Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 K9 Compilation.jpg"
  },
  {
    id: "dummy-atv-quad",
    name: "Dummy 13 ATV Quad",
    category: "Acessórios",
    price: 5,
    description: "Veículo quadriciclo para composições com Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 ATV  Quad.jpg"
  },
  {
    id: "tesla-optimus-dummy",
    name: "Tesla Optimus Bot 1.0",
    category: "Dummys",
    price: 10,
    description: "Figura baseada em Dummy 13 com visual de robô.",
    image: "Fotos/Acessórios Dummy/Tesla Optimus Bot 1.0 based on Dummy 13.jpg"
  },
  {
    id: "dummy-armor-plate-carrier",
    name: "Dummy 13 Armor Plate Carrier",
    category: "Acessórios",
    price: 0.5,
    description: "Peça de armadura e plate carrier para Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 ArmorPlate Carrier.png"
  },
  {
    id: "dummy-extra-hand-poses",
    name: "Dummy 13 extra hand poses",
    category: "Acessórios",
    price: 1,
    description: "Mãos extras para novas poses do Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 - extra hand poses.jpg"
  },
  {
    id: "spot-13",
    name: "Spot-13 2.0",
    category: "Acessórios",
    price: 5,
    description: "Companheiro robótico para cenas com Dummy 13.",
    image: "Fotos/Acessórios Dummy/Spot-13 2.0.jpg"
  },
  {
    id: "military-vest-iotv",
    name: "Military Heavy Bulletproof Vest IOTV",
    category: "Acessórios",
    price: 3,
    description: "Colete tático pesado para Dummy 13.",
    image: "Fotos/Acessórios Dummy/Military Heavy Bulletproof VestIOTV Dummy 13.jpg"
  },
  {
    id: "dummy-chest-armour",
    name: "Dummy 13 Chest Armour Pieces",
    category: "Acessórios",
    price: 2,
    description: "Peças de armadura para o peito do Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 - Chest Armour Pieces - Fun Choices!.png"
  },
  {
    id: "dummy-dirt-bike",
    name: "Dummy 13 Dirt Bike",
    category: "Acessórios",
    price: 3,
    description: "Moto estilo dirt bike compatível com Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Dirt Bike.jpg"
  },
  {
    id: "ward-golem-kit",
    name: "Ward Golem - Model Kit",
    category: "Acessórios",
    price: 3,
    description: "Kit de modelo para montar e personalizar.",
    image: "Fotos/Acessórios Dummy/Ward Golem - Model Kit.jpg"
  },
  {
    id: "dummy-dragon-wings",
    name: "Dummy 13 Dragon Wings",
    category: "Acessórios",
    price: 2,
    description: "Asas de dragão para customização do Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Dragon Wings.jpg"
  },
  {
    id: "dummy-jetpack",
    name: "Dummy 13 Jetpack with Rocket",
    category: "Acessórios",
    price: 1.5,
    description: "Jetpack com foguete para Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Jetpack with Rocket.jpg"
  },
  {
    id: "dummy-broken-leg-crutches",
    name: "Dummy 13 Broken Leg and Crutches",
    category: "Acessórios",
    price: 0.5,
    description: "Peças de perna quebrada e muletas para cenas.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Broken Leg and Crutches.jpg"
  },
  {
    id: "dummy-narnian-shield",
    name: "Dummy 13 Narnian Shield",
    category: "Acessórios",
    price: 0.5,
    description: "Escudo para Dummy 13 em estilo fantasia.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Narnian Shield.png"
  },
  {
    id: "dummy-shoulder-cannon",
    name: "Shoulder cannon and Gatling gun",
    category: "Acessórios",
    price: 0.5,
    description: "Canhão de ombro e metralhadora para Dummy 13.",
    image: "Fotos/Acessórios Dummy/shoulder cannon and Gatling gun for dummy 13.jpg"
  },
  {
    id: "dummy-more-heads",
    name: "Dummy 13 Lots More Heads",
    category: "Acessórios",
    price: 4,
    description: "Cabeças extras para variar expressões e personagens.",
    image: "Fotos/Acessórios Dummy/Dummy 13 - Lots More Heads Again! WITH v1 VERSIONS.jpg"
  },
  {
    id: "dummy-arm-blaster",
    name: "Dummy 13 Arm Blaster",
    category: "Acessórios",
    price: 2,
    description: "Blaster de braço para customização de ação.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Arm Blaster!.jpg"
  },
  {
    id: "dummy-functional-backpack",
    name: "DUMMY 13 Functional Backpack",
    category: "Acessórios",
    price: 2,
    description: "Mochila funcional para personalizar o Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 extra arms backpack.jpg"
  },
  {
    id: "armor-leg-roller",
    name: "Armor Series Leg Armor Roller",
    category: "Acessórios",
    price: 4,
    description: "Armadura de perna com visual reforçado para Dummy 13.",
    image: "Fotos/Acessórios Dummy/Armor Seriesfor for Dummy 13 (Leg Armor Roller).jpg"
  },
  {
    id: "baby-13",
    name: "Baby 13 - Dummy 13 scale baby",
    category: "Dummys",
    price: 2,
    description: "Mini figura em escala Dummy 13.",
    image: "Fotos/Acessórios Dummy/Baby 13 - Dummy 13 scale baby - Beta.png"
  },
  {
    id: "armor-titan-arm",
    name: "Armor Series TITAN ARM",
    category: "Acessórios",
    price: 3,
    description: "Braço Titan para personalizar o Dummy 13.",
    image: "Fotos/Acessórios Dummy/Armor Seriesfor for Dummy 13 (TITAN ARM).jpg"
  },
  {
    id: "dummy-mech-wings",
    name: "Dummy 13 Mech Wings",
    category: "Acessórios",
    price: 3,
    description: "Asas mecânicas para composições futuristas.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Mech Wings.jpg"
  },
  {
    id: "dummy-wings",
    name: "Dummy 13 Wings",
    category: "Acessórios",
    price: 4,
    description: "Asas para Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Wings.png"
  },
  {
    id: "dummy-flexi-wings",
    name: "Dummy 13 Flexi Wings",
    category: "Acessórios",
    price: 3,
    description: "Asas flexíveis com base fixa para Dummy 13.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Flexi Wings (fixed base).jpg"
  },
  {
    id: "spider-legs-back-armor",
    name: "Spider Legs Back Armor",
    category: "Acessórios",
    price: 5,
    description: "Armadura traseira com pernas de aranha para Dummy 13.",
    image: "Fotos/Acessórios Dummy/Spider Legs Back Armor For Dummy 13.jpg"
  },
  {
    id: "origin-zero-mecha",
    name: "Origin-Zero Mecha",
    category: "Acessórios",
    price: 5,
    description: "Mecha articulado para composições com Dummy 13 e cenas futuristas.",
    image: "Fotos/Acessórios Dummy/Origin-Zero Mecha.png"
  },
  {
    id: "dummy-13-version-1",
    name: "Dummy 13 - version 1.0",
    category: "Dummys",
    price: 15,
    description: "Boneco articulado com kit de armas incluso.",
    image: "Fotos/Dummys/Dummy 13 - version 1.0!.png"
  },
  {
    id: "dummy-weapons-pack-v2",
    name: "Kit de Armas Dummy",
    category: "Acessórios",
    price: 3,
    description: "Pack de armas incluso grátis enquanto o Dummy 13 Articulado estiver no carrinho.",
    image: "Fotos/Acessórios Dummy/Dummy 13 Weapons Pack Version 2.0.png",
    hiddenFromCatalog: true,
    freeWithProductId: "dummy-13-version-1"
  },
  {
    id: "dummy-boots-v1",
    name: "Botas Dummy 13",
    category: "Acessórios",
    price: 0.1,
    description: "Botas para personalizar o Dummy 13.",
    image: "Fotos/Kit Dummy Soldado/Dummy 13 Boots - V1.0.png"
  },
  {
    id: "dummy-gas-mask",
    name: "Máscara de Gás",
    category: "Acessórios",
    price: 1.5,
    description: "Máscara de gás removível para Dummy 13.",
    image: "Fotos/Kit Dummy Soldado/Removable Gas Mask For Dummy 13 (PMK-4).png"
  },
  {
    id: "dummy-gun-pack-2",
    name: "Pack de Armas 2",
    category: "Acessórios",
    price: 4,
    description: "Pacote de armas para Dummy 13.",
    image: "Fotos/Kit Dummy Soldado/Dummy 13 Gun Pack 2.png"
  },
  {
    id: "dummy-tripod-machine-gun",
    name: "Metralhadora Tripé",
    category: "Acessórios",
    price: 1.5,
    description: "Metralhadora com tripé para Dummy 13.",
    image: "Fotos/Kit Dummy Soldado/Tripod Machine Gun for Dummy 13 A1 mini.png"
  },
  {
    id: "dummy-alternate-heads",
    name: "Cabeças Alternativas",
    category: "Acessórios",
    price: 0.6,
    description: "Cabeças alternativas para variar personagens do Dummy 13.",
    image: "Fotos/Kit Dummy Soldado/Dummy 13 Alternate Heads - V1.0.png"
  },
  {
    id: "dummy-drop-holsters",
    name: "Coldre Pistola e Taser",
    category: "Acessórios",
    price: 0.7,
    description: "Coldres para pistola e taser do Dummy 13.",
    image: "Fotos/Kit Dummy Soldado/Dummy 13 Drop Holsters for Pistol and Taser.png"
  },
  {
    id: "lucky-13",
    name: "LUCKY 13 Printable Jointed Figure",
    category: "Dummys",
    price: 15,
    description: "Figura articulada para impressão 3D e personalização.",
    image: "Fotos/Dummys/LUCKY 13 Printable Jointed Figure.png"
  },
  {
    id: "mini-13",
    name: "MINI 13 Printable Jointed Figure",
    category: "Dummys",
    price: 8,
    description: "Mini figura com espada, escudo, mochila e boné inclusos.",
    image: "Fotos/Dummys/MINI 13 Printable Jointed Figure.png"
  },
  {
    id: "kit-dummy-soldado",
    name: "Kit Dummy Soldado",
    category: "Kit Dummy Soldado",
    price: 27,
    description: "Kit temático de soldado com peças táticas para montar uma composição completa.",
    image: "Fotos/Kit Dummy Soldado/Robo.png",
    kitImages: [
      "Fotos/Kit Dummy Soldado/Dummy 13 Alternate Heads - V1.0.png",
      "Fotos/Kit Dummy Soldado/Dummy 13 Armor-Plate Carrier.png",
      "Fotos/Kit Dummy Soldado/Dummy 13 Boots - V1.0.png",
      "Fotos/Kit Dummy Soldado/Dummy 13 Dirt Bike.png",
      "Fotos/Kit Dummy Soldado/Dummy 13 Drop Holsters for Pistol and Taser.png",
      "Fotos/Kit Dummy Soldado/Dummy 13 Gun Pack 2.png",
      "Fotos/Kit Dummy Soldado/Military Heavy Bulletproof Vest IOTV Dummy 13.png",
      "Fotos/Kit Dummy Soldado/Removable Gas Mask For Dummy 13 (PMK-4).png",
      "Fotos/Kit Dummy Soldado/Tripod Machine Gun for Dummy 13 A1 mini.png"
    ],
    calculation: {
      individualTotal: 38.5,
      kitPrice: 27,
      discount: 11.5,
      note: "Comprando o kit completo, você economiza R$ 11,50 em comparação com os itens avulsos."
    }
  }
];

const productTextOverrides = {
  "minecraft-movie-tnt-popcorn-bucket": { name: "Balde TNT Minecraft" },
  "balde-tubo-teletransporte": { name: "Balde Tubo Verde" },
  "hexa-link-prateleiras": { name: "Prateleira Hexa-Link" },
  "suporte-controle-cubone": { name: "Suporte Cubone" },
  "pikachu-monitor": { name: "Pikachu de Monitor" },
  "porta-pipoca-cogumelo": { name: "Balde Super Cogumelo" },
  "pantera-geometrica": { name: "Pantera Geométrica" },
  "flores-arame": { name: "Flores Minimalistas" },
  "estatua-jesus": { name: "Jesus Geométrico" },
  "lobo-uivando-lua": { name: "Lobo com Lua" },
  "lobo-geometrico": { name: "Lobo Geométrico" },
  "lobo-uivante-low-poly": { name: "Lobo Low Poly" },
  "decorative-f1-logo": { name: "Logo F1" },
  "cute-low-poly-cat": { name: "Gato Low Poly" },
  "skull-candy-bowl": { name: "Caveira Porta-doces" },
  "cute-low-poly-owl": { name: "Coruja Low Poly" },
  "low-poly-howling-wolf": { name: "Lobo Uivando" },
  "tulip-flower": { name: "Tulipa" },
  "low-poly-dog": { name: "Cachorro Low Poly" },
  "lego-flowers": { name: "Flores LEGO" },
  "low-poly-cat-2": { name: "Gato Low Poly 2" },
  "low-poly-bunny": { name: "Coelho Low Poly" },
  "modular-storage-system": { name: "Organizador Modular" },
  "headphones-stand": { name: "Suporte de Headphone" },
  "makeup-organizer-inflated-bathroom-set": { name: "Organizador de Maquiagem" },
  "vase-with-roses-stems": { name: "Vaso com Rosas" },
  "bts-arirang-tour-sign": { name: "Placa BTS Arirang" },
  "bts-statue": { name: "Estátua BTS" },
  "huntrix-logo-keychain": { name: "Chaveiro Huntrix" },
  "kpop-ornaments-set-2": { name: "Ornamentos Kpop 2" },
  "kpop-ornaments": { name: "Ornamentos Kpop" },
  "kpop-lightstick-keyrings": { name: "Chaveiros Lightstick" },
  "bts-logo-keychains": { name: "Chaveiros BTS" },
  "bts-headphone-stand": { name: "Suporte BTS" },
  "huntrix-logo-stand": { name: "Logo Huntrix" },
  "saja-boys-light-stick": { name: "Light Stick Saja Boys" },
  "huntrix-light-stick": { name: "Light Stick Huntrix" },
  "whalien-zero-oclock": { name: "Whalien Zero" },
  "dummy-carbon-back-fists": { name: "Punhos Traseiros" },
  "dummy-heavy-armor-kit": { name: "Armadura Pesada" },
  "dummy-drop-leg-holster": { name: "Coldre de Perna" },
  "dummy-extra-arms-backpack": { name: "Mochila com Braços" },
  "dummy-assault-cannon-backpack": { name: "Mochila Canhão" },
  "dummy-sword-arm": { name: "Braço Espada" },
  "dummy-power-claw": { name: "Garra de Combate" },
  "dummy-spider-walker": { name: "Pernas Mecânicas" },
  "dummy-lightsaber": { name: "Sabre de Luz" },
  "dummy-k9-compilation": { name: "K9" },
  "dummy-atv-quad": { name: "Quadriciclo Dummy" },
  "tesla-optimus-dummy": { name: "Robô Optimus" },
  "dummy-armor-plate-carrier": { name: "Colete Porta-placa" },
  "dummy-extra-hand-poses": { name: "Mãos Extras" },
  "military-vest-iotv": { name: "Colete Tático" },
  "dummy-chest-armour": { name: "Armadura de Peito" },
  "dummy-dirt-bike": { name: "Moto Off-road" },
  "ward-golem-kit": { name: "Golem" },
  "dummy-dragon-wings": { name: "Asas de Dragão" },
  "dummy-jetpack": { name: "Jetpack" },
  "dummy-broken-leg-crutches": { name: "Muletas e Perna" },
  "dummy-narnian-shield": { name: "Escudo Fantasia" },
  "dummy-shoulder-cannon": { name: "Canhão e Metralhadora" },
  "dummy-more-heads": { name: "Cabeças Extras" },
  "dummy-arm-blaster": { name: "Blaster de Braço" },
  "dummy-functional-backpack": { name: "Mochila Funcional" },
  "armor-leg-roller": { name: "Armadura de Perna" },
  "baby-13": { name: "Bebê Dummy 13" },
  "armor-titan-arm": { name: "Braço Titan" },
  "dummy-mech-wings": { name: "Asas Mecânicas" },
  "dummy-wings": { name: "Asas Dummy 13" },
  "dummy-flexi-wings": { name: "Asas Flexíveis" },
  "spider-legs-back-armor": { name: "Pernas de Aranha" },
  "dummy-13-version-1": { name: "Dummy 13 Articulado" },
  "dummy-weapons-pack-v2": { name: "Armas Dummy" },
  "dummy-boots-v1": { name: "Botas Dummy 13" },
  "dummy-gas-mask": { name: "Máscara de Gás" },
  "dummy-gun-pack-2": { name: "Pack de Armas 2" },
  "dummy-tripod-machine-gun": { name: "Metralhadora Tripé" },
  "dummy-alternate-heads": { name: "Cabeças Alternativas" },
  "dummy-drop-holsters": { name: "Coldre Pistola e Taser" },
  "lucky-13": { name: "Lucky 13 Articulado" },
  "mini-13": { name: "Mini 13 Articulado" },
  "kit-dummy-soldado": { name: "Kit Soldado Dummy" }
};

function normalizeSearchText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getSearchWords(value) {
  return normalizeSearchText(value)
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((word) => word.length > 1);
}

function uniqueWords(words) {
  return Array.from(new Set(words));
}

function getProductTags(product) {
  const baseWords = getSearchWords([
    product.id,
    product.name,
    product.category,
    product.description,
    product.priceLabel || ""
  ].join(" "));

  const synonymTags = [];
  const text = normalizeSearchText(baseWords.join(" "));
  const addWhen = (pattern, tags) => {
    if (pattern.test(text)) synonymTags.push(...tags);
  };

  addWhen(/kpop|bts|huntr|saja|lightstick|chaveiro|ornament/, ["kpop", "musica", "show", "fandom", "presente"]);
  addWhen(/dummy|armor|armadura|arma|gun|metralhadora|mascara|colete|bota|jetpack|shield|escudo/, ["dummy", "boneco", "figura", "acessorio", "customizacao"]);
  addWhen(/lobo|gato|cachorro|coelho|coruja|pantera|jesus|bonsai|flor|tulip|vaso|caveira/, ["decoracao", "mesa", "estante", "presente"]);
  addWhen(/balde|pipoca|porta|organizador|suporte|prateleira|headphone|pincel|cosmetico/, ["utensilio", "organizador", "casa", "setup"]);
  addWhen(/minecraft|pikachu|pac|f1|formula|cubone|lego|valorant/, ["geek", "gamer", "colecionavel", "presente"]);

  return uniqueWords([...baseWords, ...synonymTags]).slice(0, 18);
}

function productMatchesSearch(product, query) {
  const terms = getSearchWords(query);
  if (!terms.length) return true;
  return terms.every((term) => product.searchIndex.includes(term));
}
products.forEach((product) => {
  Object.assign(product, productTextOverrides[product.id] || {});

  product.searchTags = getProductTags(product);
  product.searchIndex = normalizeSearchText(product.searchTags.join(" "));

  if (/personaliz|customiz/i.test(product.description)) {
    const cleanDescription = product.description
      .replace(/,?\s*com tamanho personalizável\.?/gi, "")
      .replace(/tamanho personalizável\.?/gi, "")
      .replace(/tamanho customizável\.?/gi, "")
      .replace(/\s+/g, " ")
      .trim();

    product.description = `${cleanDescription} Chame no WhatsApp para pedir tamanhos customizáveis!`;
  }
});

const cart = new Map();

const productGrid = document.querySelector("[data-product-grid]");
const kpopGrid = document.querySelector("[data-kpop-grid]");
const cartPanel = document.querySelector("[data-cart-panel]");
const cartItems = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const checkoutForm = document.querySelector("[data-checkout-form]");
const customForm = document.querySelector("[data-custom-form]");
const orderSummaryInput = document.querySelector("[data-order-summary]");
const orderStatus = document.querySelector("[data-order-status]");
const customStatus = document.querySelector("[data-custom-status]");
const successMessage = document.querySelector("[data-success-message]");
const whatsappLink = document.querySelector("[data-whatsapp-link]");
const customWhatsappLink = document.querySelector("[data-whatsapp-link-custom]");
const floatingWhatsapp = document.querySelector("[data-floating-whatsapp]");
const filterButtons = document.querySelectorAll("[data-filter]");
const searchInput = document.querySelector("[data-product-search]");
let selectedCategory = "Todos";

const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

function formatMoney(value) {
  return money.format(value);
}

function getCartItems() {
  return Array.from(cart.values());
}

function isProductFreeInCart(product) {
  return product.freeWithProductId && cart.has(product.freeWithProductId);
}

function getProductPrice(product) {
  if (isProductFreeInCart(product)) return 0;
  return typeof product.price === "number" ? product.price : 0;
}

function getProductPriceLabel(product) {
  if (isProductFreeInCart(product)) return "R$ 0,00 com Dummy 13";
  if (product.priceLabel) return product.priceLabel;
  return typeof product.price === "number" ? formatMoney(product.price) : "Sob consulta";
}

function hasConsultationItems() {
  return getCartItems().some((item) => typeof item.product.price !== "number");
}

const PRODUCT_COLOR_SWATCHES = [
  { name: "Branco", color: "#ffffff" },
  { name: "Preto", color: "#080808" },
  { name: "Azul", color: "#2f7df6" },
  { name: "Rosa", color: "#ff8fc7" },
  { name: "Verde", color: "#2fbe63" },
  { name: "Amarelo", color: "#ffd318" },
  { name: "Lavanda", color: "#8b5cf6" },
  { name: "Vermelho", color: "#ef3030" }
];

const DECOR_UTILS_COLOR_NOTE = "Cores disponíveis: branco, preto, azul, rosa, verde, amarelo, lavanda e vermelho. Se a foto aparecer em cinza, faremos em preto.";

function shouldShowDecorUtilsColorNote(product) {
  return product.category === "Decoração" || product.category === "Utensílios";
}

function shouldShowProductColorSwatches(product) {
  if (product.hideColorSwatches) return false;

  const alwaysCustomizableCategories = ["Utensílios", "Acessórios", "Dummys", "Kit Dummy Soldado"];
  if (alwaysCustomizableCategories.includes(product.category)) return true;

  const searchableText = normalizeSearchText(`${product.name} ${product.description}`);
  if (product.category === "Geek") {
    return /balde|bucket|porta|holder|stand|suporte|knife|faca|batarang|blaster|custom|name|nome/.test(searchableText);
  }

  if (product.category === "Decoração") {
    return /vaso|vase|flor|flower|bonsai|cubo|bowl|porta|holder|organizer|box|caixa/.test(searchableText);
  }

  return false;
}

function productColorSwatchesTemplate(product) {
  if (!shouldShowProductColorSwatches(product)) return "";

  return `
        <div class="product-palette" aria-label="Cores disponíveis para ${product.name}">
          ${PRODUCT_COLOR_SWATCHES.map((swatch) => `<span style="--swatch: ${swatch.color}" title="${swatch.name}"></span>`).join("")}
        </div>`;
}

function getCartTotal() {
  return getCartItems().reduce((total, item) => total + getProductPrice(item.product) * item.quantity, 0);
}

function productCardTemplate(product) {
  return `
    <article class="product-card reveal">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        ${shouldShowDecorUtilsColorNote(product) ? `<small class="product-color-note">${DECOR_UTILS_COLOR_NOTE}</small>` : ""}
        <div class="product-tags" aria-label="Tags de ${product.name}">
          ${product.searchTags.slice(0, 5).map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        ${productColorSwatchesTemplate(product)}
        ${product.calculation ? `
          <div class="kit-calculation">
            <strong>Preço do kit: ${formatMoney(product.calculation.kitPrice)}</strong>
            <span>Itens avulsos separados: ${formatMoney(product.calculation.individualTotal)}</span>
            <span>Desconto no kit: ${formatMoney(product.calculation.discount)}</span>
            <small>${product.calculation.note}</small>
          </div>
        ` : ""}
        ${product.kitImages ? `
          <div class="kit-gallery" data-kit-gallery data-kit-index="0" aria-label="Itens visuais inclusos no kit">
            <button class="kit-gallery-arrow kit-gallery-prev" type="button" data-kit-prev aria-label="Imagem anterior do kit">‹</button>
            <div class="kit-gallery-frame">
              ${[product.image, ...product.kitImages].map((image, index) => `
                <img class="${index === 0 ? "is-active" : ""}" src="${image}" alt="Item ${index + 1} do ${product.name}" loading="lazy">
              `).join("")}
            </div>
            <button class="kit-gallery-arrow kit-gallery-next" type="button" data-kit-next aria-label="Próxima imagem do kit">›</button>
            <span class="kit-gallery-count" data-kit-count>1 / ${product.kitImages.length + 1}</span>
          </div>
        ` : ""}
        <div class="product-footer${product.variantOptions ? " product-footer-variants" : ""}">
          <span class="price">${getProductPriceLabel(product)}</span>
          ${product.variantOptions ? `
            <div class="variant-actions">
              ${product.variantOptions.map((variant) => `
                <button class="product-button variant-button" type="button" data-add-product="${variant.productId}">
                  <span>${variant.label}</span>
                  <strong>${variant.priceLabel}</strong>
                </button>
              `).join("")}
            </div>
          ` : (product.unavailable ? `<button class="product-button is-unavailable" type="button" disabled aria-disabled="true">Indisponível</button>` : `<button class="product-button" type="button" data-add-product="${product.id}">Adicionar</button>`)}
        </div>
      </div>
    </article>
  `;
}

function renderKpopShowcase() {
  if (!kpopGrid) return;

  const kpopProducts = products.filter((product) => !product.hiddenFromCatalog && product.category === "Kpop");
  kpopGrid.innerHTML = kpopProducts.map(productCardTemplate).join("");
}
function renderProducts(category = selectedCategory) {
  selectedCategory = category;
  const query = searchInput ? searchInput.value : "";
  const categoryOrder = ["Geek", "Utensílios", "Decoração", "Kpop", "Dummys", "Acessórios", "Kit Dummy Soldado"];
  const catalogProducts = products.filter((product) => !product.hiddenFromCatalog && productMatchesSearch(product, query));

  if (category === "Todos") {
    productGrid.classList.add("is-grouped");
    const groupedMarkup = categoryOrder.map((groupName) => {
      const groupProducts = catalogProducts.filter((product) => product.category === groupName);
      if (!groupProducts.length) return "";

      return `
        <section class="category-section" aria-label="${groupName}">
          <div class="category-heading">
            <h3>${groupName}</h3>
            <span>${groupProducts.length} produtos</span>
          </div>
          <div class="category-products">
            ${groupProducts.map(productCardTemplate).join("")}
          </div>
        </section>
      `;
    }).join("");

    productGrid.innerHTML = groupedMarkup || `<p class="empty-results">Nenhum produto encontrado para "${query}".</p>`;
    return;
  }

  const visibleProducts = catalogProducts.filter((product) => product.category === category);
  productGrid.classList.remove("is-grouped");
  productGrid.innerHTML = visibleProducts.length
    ? visibleProducts.map(productCardTemplate).join("")
    : `<p class="empty-results">Nenhum produto encontrado para "${query}" nesta categoria.</p>`;
}

function renderCart() {
  const items = getCartItems();
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const consultationText = hasConsultationItems() ? " + itens sob consulta" : "";

  cartCount.textContent = totalQuantity;
  cartTotal.textContent = `${formatMoney(getCartTotal())}${consultationText}`;

  if (!items.length) {
    cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio. Escolha um produto no catálogo para começar o pedido.</p>';
    return;
  }

  cartItems.innerHTML = items.map(({ product, quantity }) => {
    const subtotal = getProductPrice(product) * quantity;
    const subtotalLabel = typeof product.price === "number" ? formatMoney(subtotal) : "Sob consulta";
    const bonusNote = product.freeWithProductId
      ? (isProductFreeInCart(product)
        ? "<em>Brinde ativo porque o Dummy 13 está no carrinho.</em>"
        : "<em>Sem o Dummy 13 no carrinho, este pack custa R$ 3,00.</em>")
      : "";

    return `
      <article class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <small>${getProductPriceLabel(product)} cada - Subtotal: ${subtotalLabel}</small>
          ${bonusNote}
          <div class="cart-controls">
            <div class="quantity-control" aria-label="Quantidade de ${product.name}">
              <button class="quantity-btn" type="button" data-decrease="${product.id}" aria-label="Diminuir quantidade">-</button>
              <span>${quantity}</span>
              <button class="quantity-btn" type="button" data-increase="${product.id}" aria-label="Aumentar quantidade">+</button>
            </div>
            <button class="remove-btn" type="button" data-remove="${product.id}">Remover</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const currentItem = cart.get(productId);
  cart.set(productId, {
    product,
    quantity: currentItem ? currentItem.quantity + 1 : 1
  });

  if (productId === "dummy-13-version-1" && !cart.has("dummy-weapons-pack-v2")) {
    const weaponsPack = products.find((item) => item.id === "dummy-weapons-pack-v2");
    if (weaponsPack) {
      cart.set("dummy-weapons-pack-v2", {
        product: weaponsPack,
        quantity: 1
      });
    }
  }

  renderCart();
  openCart();
}

function changeQuantity(productId, amount) {
  const currentItem = cart.get(productId);
  if (!currentItem) return;

  const nextQuantity = currentItem.quantity + amount;
  if (nextQuantity <= 0) {
    cart.delete(productId);
  } else {
    cart.set(productId, { ...currentItem, quantity: nextQuantity });
  }

  renderCart();
}

function moveKitGallery(button, direction) {
  const gallery = button.closest("[data-kit-gallery]");
  if (!gallery) return;

  const images = Array.from(gallery.querySelectorAll(".kit-gallery-frame img"));
  if (!images.length) return;

  const currentIndex = Number(gallery.dataset.kitIndex || 0);
  const nextIndex = (currentIndex + direction + images.length) % images.length;

  images[currentIndex].classList.remove("is-active");
  images[nextIndex].classList.add("is-active");
  gallery.dataset.kitIndex = String(nextIndex);

  const counter = gallery.querySelector("[data-kit-count]");
  if (counter) counter.textContent = `${nextIndex + 1} / ${images.length}`;
}

function openCart() {
  cartPanel.classList.add("is-open");
  cartPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-cart-open");
}

function closeCart() {
  cartPanel.classList.remove("is-open");
  cartPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-cart-open");
}

function buildOrderSummary(formData) {
  const items = getCartItems();
  const lines = items.map(({ product, quantity }) => {
    const subtotal = getProductPrice(product) * quantity;
    const priceLabel = getProductPriceLabel(product);
    const subtotalLabel = typeof product.price === "number" ? formatMoney(subtotal) : "Sob consulta";
    return `${quantity}x ${product.name} - ${priceLabel} cada - subtotal ${subtotalLabel}`;
  });
  const totalLabel = hasConsultationItems()
    ? `${formatMoney(getCartTotal())} + itens sob consulta`
    : formatMoney(getCartTotal());

  return [
    "Pedido Apex 3D",
    "",
    ...lines,
    "",
    `Total geral: ${totalLabel}`,
    "",
    "Dados do cliente:",
    `Nome: ${formData.get("Nome")}`,
    `Telefone: ${formData.get("Telefone")}`,
    `E-mail: ${formData.get("Email")}`,
    `Cidade/Bairro: ${formData.get("Cidade/Bairro")}`,
    `Observações: ${formData.get("Observações") || "Sem observações"}`,
    "",
    "Produção: produto sob encomenda.",
    "Processo do pedido: para saber prazo, produção e próximos passos, contate a Apex 3D no WhatsApp.",
    "Pagamento: será combinado depois pelo WhatsApp via Pix."
  ].join("\n");
}

function buildWhatsAppUrl(customerName) {
  const message = `Olá, Apex 3D! Acabei de fazer um pedido no site em nome de ${customerName}. Quero saber o processo do pedido sob encomenda e finalizar pelo WhatsApp.`;
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function buildCustomWhatsAppUrl() {
  const message = "Olá, Apex 3D! Quero solicitar uma impressão 3D personalizada.";
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function showSuccess(customerName) {
  whatsappLink.href = buildWhatsAppUrl(customerName);
  successMessage.hidden = false;
  orderStatus.textContent = "";
  successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
}

function showOrderError(message) {
  orderStatus.textContent = message;
  orderStatus.classList.add("is-error");
}

function showStatus(statusElement, message, isError = false) {
  statusElement.textContent = message;
  statusElement.classList.toggle("is-error", isError);
}

function getFriendlyFormSubmitError(errorMessage) {
  if (errorMessage.includes("HTML files")) {
    return "O FormSubmit não envia pedidos quando o site é aberto direto pelo arquivo index.html. Publique no GitHub Pages ou rode o site por um servidor local e teste novamente.";
  }

  return `Não foi possível enviar pelo FormSubmit. Detalhe: ${errorMessage}. Se for o primeiro teste, confirme o e-mail de ativação enviado pelo FormSubmit para apex3dfuture@gmail.com e tente novamente.`;
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-product]");
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");
  const removeButton = event.target.closest("[data-remove]");
  const kitPrevButton = event.target.closest("[data-kit-prev]");
  const kitNextButton = event.target.closest("[data-kit-next]");

  if (addButton) addToCart(addButton.dataset.addProduct);
  if (increaseButton) changeQuantity(increaseButton.dataset.increase, 1);
  if (decreaseButton) changeQuantity(decreaseButton.dataset.decrease, -1);
  if (kitPrevButton) moveKitGallery(kitPrevButton, -1);
  if (kitNextButton) moveKitGallery(kitNextButton, 1);
  if (removeButton) {
    cart.delete(removeButton.dataset.remove);
    renderCart();
  }
});

document.querySelectorAll("[data-open-cart]").forEach((button) => {
  button.addEventListener("click", openCart);
});

document.querySelectorAll("[data-close-cart]").forEach((button) => {
  button.addEventListener("click", closeCart);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProducts(button.dataset.filter);
  });
});

if (searchInput) {
  searchInput.addEventListener("input", () => renderProducts(selectedCategory));
}

checkoutForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const items = getCartItems();
  const formData = new FormData(checkoutForm);
  const customerName = formData.get("Nome") || "cliente";
  const submitButton = checkoutForm.querySelector(".submit-order");

  if (!items.length) {
    alert("Adicione pelo menos um produto ao carrinho antes de confirmar o pedido.");
    return;
  }

  const orderSummary = buildOrderSummary(formData);
  orderSummaryInput.value = orderSummary;
  formData.set("Resumo do pedido", orderSummary);
  formData.set("_replyto", formData.get("Email"));
  formData.set("_url", window.location.href);

  // Enquanto o e-mail estiver como exemplo, o site permite testar o fluxo sem enviar pedido real.
  if (CONFIG.orderEmail === "seu-email@exemplo.com") {
    console.info(orderSummary);
    showSuccess(customerName);
    return;
  }

  orderStatus.classList.remove("is-error");
  orderStatus.textContent = "Enviando pedido...";
  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${CONFIG.orderEmail}`, {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: formData
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || "O FormSubmit recusou o envio.");
    }

    showSuccess(customerName);
    checkoutForm.reset();
  } catch (error) {
    showOrderError(getFriendlyFormSubmitError(error.message));
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Confirmar pedido";
  }
});

customForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(customForm);
  const submitButton = customForm.querySelector(".submit-order");
  formData.set("_replyto", formData.get("Email"));
  formData.set("_url", window.location.href);

  if (CONFIG.orderEmail === "seu-email@exemplo.com") {
    console.info(Object.fromEntries(formData.entries()));
    showStatus(customStatus, "Solicitação registrada para teste. Configure o e-mail real para enviar.");
    return;
  }

  showStatus(customStatus, "Enviando solicitação...");
  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${CONFIG.orderEmail}`, {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: formData
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || "O FormSubmit recusou o envio.");
    }

    showStatus(customStatus, "Solicitação enviada! A Apex 3D vai combinar os detalhes pelo WhatsApp.");
    customForm.reset();
  } catch (error) {
    showStatus(customStatus, getFriendlyFormSubmitError(error.message), true);
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Enviar solicitação";
  }
});

renderKpopShowcase();
renderProducts();
renderCart();

const customWhatsappUrl = buildCustomWhatsAppUrl();
customWhatsappLink.href = customWhatsappUrl;
floatingWhatsapp.href = customWhatsappUrl;










































