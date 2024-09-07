let dados = [
  {
    nome: 'C',
    frase:
      "Minha vida amorosa é igual ao meu código: cheia de 'bugs' que eu finjo que não existem.",
    url: 'https://www.alura.com.br/cursos-online-programacao/c',
    tag: 'bugs bug C'
  },
  {
    nome: 'C++',
    frase:
      'Minha semana é um objeto em C++: sempre começa com um construtor caótico e termina com um destruidor emocional.',
    url: 'https://www.alura.com.br/cursos-online-programacao/c-plus-plus',
    tag: 'objeto construtor c++'
  },
  {
    nome: 'Java',
    frase:
      'Tomar café e programar em Java: ambos são lentos no início, mas ficam melhor com o tempo.',
    url: 'https://www.alura.com.br/cursos-online-programacao/java',
    tag: 'café  cafe lento java'
  },
  {
    nome: 'Python',
    frase:
      'Se a vida fosse escrita em Python, talvez eu conseguisse resolver meus problemas com menos esforço e mais indentação.',
    url: 'https://www.alura.com.br/cursos-online-programacao/python',
    tag: 'identacao identação python framework'
  },
  {
    nome: 'JavaScript',
    frase:
      'Relacionamentos são como JavaScript: às vezes as coisas mudam de tipo no meio e você não sabe o que está acontecendo.',
    url: 'https://www.alura.com.br/cursos-online-programacao/javascript',
    tag: 'relacionamentos javascript'
  },
  {
    nome: 'PHP',
    frase:
      'Resolver problemas no dia a dia é tipo escrever em PHP: no início parece simples, mas logo você se perde no meio das soluções.',
    url: 'https://www.alura.com.br/cursos-online-programacao/php',
    tag: 'escrever  simples php'
  },
  {
    nome: 'Ruby',
    frase:
      'Meu humor é igual ao Ruby: elegante em teoria, mas imprevisível na prática.',
    url: 'https://www.alura.com.br/cursos-online-programacao/ruby',
    tag: 'teoria  prática ruby'
  },
  {
    nome: 'Swift',
    frase:
      'Se minha vida fosse programada em Swift, pelo menos seria mais rápida... ou cheia de crashes.',
    url: 'https://www.alura.com.br/cursos-online-programacao/swift',
    tag: 'crash swift'
  },
  {
    nome: 'Kotlin',
    frase:
      'Minha lista de afazeres é como Kotlin: bonita, moderna, mas nunca consigo compilar tudo.',
    url: 'https://www.alura.com.br/cursos-online-programacao/kotlin',
    tag: 'compilar kotlin'
  },
  {
    nome: 'Go',
    frase:
      'A vida seria bem mais fácil se eu pudesse rodar tudo em goroutines e me preocupar com isso depois.',
    url: 'https://www.alura.com.br/cursos-online-programacao/go',
    tag: 'rodar go'
  },
  {
    nome: 'Rust',
    frase:
      'Se minha paciência fosse igual ao Rust, ninguém conseguiria tomar posse dela sem permissão explícita.',
    url: 'https://www.alura.com.br/cursos-online-programacao/rust',
    tag: 'permissão  paciência igual rust'
  },
  {
    nome: 'React',
    frase:
      'Minha vida social é igual ao React: cheia de componentes, mas o estado nunca parece estar sincronizado.',
    url: 'https://www.alura.com.br/cursos-online-programacao/react',
    tag: 'componentes social sincronizado react framework'
  },
  {
    nome: 'Cobol',
    frase:
      'Quando alguém me pergunta sobre meu passado, sinto que estou explicando um código em Cobol: longo, confuso e ninguém quer mexer.',
    url: 'https://www.alura.com.br/cursos-online-programacao/cobol',
    tag: 'passado longo cobol antigo'
  },
  {
    nome: 'Flutterflow',
    frase:
      'Se eu pudesse usar Flutterflow para organizar meu dia, ao menos teria uma interface bonita, mesmo que o backend estivesse um caos.',
    url: 'https://www.alura.com.br/cursos-online-programacao/flutterflow',
    tag: 'organizar interface flutterflow flut'
  },
  {
    nome: 'JSON',
    frase:
      "Eu: 'Por que minha vida está tão confusa?' Minha mente: 'Você esqueceu de fechar uma chave!",
    url: 'https://www.alura.com.br/cursos-online-programacao/json',
    tag: 'chave json'
  },
  {
    nome: 'SQL',
    frase:
      'Relacionamentos são como bancos de dados: não adianta nada se não houver conexão.',
    url: 'https://www.alura.com.br/cursos-online-programacao/sql',
    tag: 'conexão conection sql'
  },
  {
    nome: 'HTML',
    frase:
      "Eu só queria que meus problemas se resolvessem com um simples 'Ctrl+Z'.",
    url: 'https://www.alura.com.br/cursos-online-programacao/html',
    tag: 'control CTRL html crtl'
  },
  {
    nome: 'WordPress',
    frase:
      'Minha vida é igual ao WordPress: cheia de plugins para funcionar, mas sempre aparece um erro 404 quando mais preciso!',
    url: 'https://www.alura.com.br/cursos-online-programacao/wordpress',
    tag: 'plugins 404 wordpress'
  },
  {
    nome: 'TypeScript',
    frase:
      'Minha vida amorosa é como TypeScript: sempre preciso definir o tipo das intenções antes de começar!',
    url: 'https://www.alura.com.br/cursos-online-programacao/typescript',
    tag: 'definir typescript'
  },
  {
    nome: 'Lua',
    frase:
      'Minha motivação é tipo uma função em Lua: simples, mas às vezes parece que falta argumento.',
    url: 'https://www.alura.com.br/cursos-online-programacao/lua',
    tag: 'argumento lua'
  },
  {
    nome: 'Scala',
    frase:
      'Meu plano de vida é como um código em Scala: cheio de abstrações, mas ninguém entende direito o que estou fazendo.',
    url: 'https://www.alura.com.br/cursos-online-programacao/scala',
    tag: 'plano  abstrações scala'
  },
  {
    nome: 'BI Business Intelligence',
    frase:
      'Minha capacidade de tomar decisões é como uma ferramenta de BI: só faz sentido depois de muitas reuniões e dashboards coloridos.',
    url: 'https://www.alura.com.br/cursos-online-programacao/business-intelligence',
    tag: 'dashboard  reuniões reuniao bi business intelligence powerbi'
  },
  {
    nome: 'Natural for Mainframe',
    frase:
      'Minha rotina é como Natural for Mainframe: super estável, mas se der problema, ninguém além dos dinossauros consegue consertar!',
    url: 'https://education.softwareag.com/adabas-and-natural',
    tag: 'dinossauro rotina estável consertar MF mainframe mf natural'
  },
  {
    nome: 'CSS',
    frase: "CSS: A arte de transformar 'feio' em 'menos feio'.",
    url: 'https://www.alura.com.br/formacao-css-estilos',
    tag: 'css framework front end'
  }
]
