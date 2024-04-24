const sellers = [
  {
    "Name": "Marina Moro",
    "phone": "(48) 999548425",
    "insta": "mariinamoro",
    "mail": "",
    "Curso": "Automação, UFSC"
  },
  {
    "Name": "Arthur Heerdt",
    "phone": "(48) 991277792",
    "insta": "arthur.heerdt",
    "mail": "",
    "Curso": "Automação, UFSC"
  },
  {
    "Name": "Vitor Sagás",
    "phone": "(48) 996727451",
    "insta": "sr_sagas",
    "mail": "vitorsagascustodio@gmail.com",
    "Curso": "Automação, UFSC"
  },
  {
    "Name": "Breno Piniko",
    "phone": "(48) 991031902",
    "insta": "brenobmoreira",
    "mail": "brenobmoreira20@gmail.com",
    "Curso": "Automação, UFSC"
  },
  {
    "Name": "Gregory Selau",
    "phone": "(48) 988216755",
    "insta": "scandolaragregory",
    "mail": "gregorysjs@gmail.com",
    "Curso": "Automação, UFSC"
  },
  {
    "Name": "Gustavo Gonçalves",
    "phone": "(48) 999444351",
    "insta": "gus.borgert",
    "mail": "gustavoborgertg@gmail.com",
    "Curso": "Automação, UFSC"
  },
  {
    "Name": "Artur Rabelo",
    "phone": "(48) 991424482",
    "insta": "artur_rabelo",
    "mail": "arturmrabelo@gmail.com",
    "Curso": "Automação, UFSC"
  },
  {
    "Name": "Giulia Cenci",
    "phone": "(54) 996869057",
    "insta": "giicenci",
    "mail": "giulia060202@gmail.com",
    "Curso": "Automação, UFSC"
  },
  {
    "Name": "Thiago Comcap",
    "phone": "(48) 991870716",
    "insta": "thiagocunha1617",
    "mail": "thiagocunhavs1@gmail.com",
    "Curso": "Automação, UFSC"
  },
  {
    "Name": "Pedro Sachs",
    "phone": "(48) 996724493",
    "insta": "psachs",
    "mail": "pedrosachsufsc@gmail.com",
    "Curso": "Automação, UFSC"
  },
  {
    "Name": "Alex Lago",
    "phone": "(47) 984373660",
    "insta": "alexlagooliveira",
    "mail": "alexlago2001@hotmail.com",
    "Curso": "Autom, UFSC Blu"
  },
  {
    "Name": "Artur Poeta",
    "phone": "(48) 991805609",
    "insta": "arturpoetaa_",
    "mail": "artur.poeta27@gmail.com",
    "Curso": "Automação, UFSC"
  },
  {
    "Name": "Karina Nathalie",
    "phone": "(55) 991185541",
    "insta": "karinanathaliebeck",
    "mail": "karinanbeck@hotmail.com",
    "Curso": "História, UFSC"
  },
  {
    "Name": "Otávio Rafiri",
    "phone": "(48) 996654393",
    "insta": "otaviosjoaquim",
    "mail": "otaviosilveira123@gmail.com",
    "Curso": "Materiais, UFSC"
  },
  {
    "Name": "Clara Cardoso",
    "phone": "(48) 998342066",
    "insta": "claraccardoso",
    "mail": "clarinhah.cardoso@gmail.com",
    "Curso": "AADUFSC, Direito, UFSC"
  },
  {
    "Name": "Bruna Moraes",
    "phone": "(91) 992423424",
    "insta": "buhmoraes_",
    "mail": "Bmoraes715@gmail.com",
    "Curso": "Direito, Estácio"
  },
  {
    "Name": "Duda Silva",
    "phone": "(48) 991018103",
    "insta": "duda_ingressos",
    "mail": "ingressos.mariaeduardaas@gmail.com",
    "Curso": "Psicologia, UNISUL"
  },
  {
    "Name": "Luís Piva",
    "phone": "(47) 991131611",
    "insta": "luiispiva",
    "mail": "luisgpiva@gmail.com",
    "Curso": "Eletrônica, UFSC"
  },
  {
    "Name": "Michelle Amorim",
    "phone": "(11) 981003308",
    "insta": "mihmorim",
    "mail": "mihmorim@gmail.com",
    "Curso": "Administração, UFSC"
  },
  {
    "Name": "Maria Clara",
    "phone": "(48) 991112002",
    "insta": "marialimaa",
    "mail": "mariacpl10@gmail.com",
    "Curso": "Nutrição, UFSC"
  },
  {
    "Name": "Duda Guimarães",
    "phone": "(48) 998635452",
    "insta": "dudagmr",
    "mail": "maria.guimmaraes9@gmail.com",
    "Curso": "Arquitetura, UNISUL"
  },
  {
    "Name": "Bianca Souza",
    "phone": "(48) 988136511",
    "insta": "bianca.timm_",
    "mail": "bianca.timm@outlook.com",
    "Curso": "Economia, UFSC"
  },
  {
    "Name": "Luan Taketa",
    "phone": "(48) 988116425",
    "insta": "luuan.g",
    "mail": "luan.vtg@hotmail.com",
    "Curso": "RI, UFSC"
  },
  {
    "Name": "Vitória Menoncin",
    "phone": "(48) 999719662",
    "insta": "vi.menoncin",
    "mail": "vitoriamenoncin@gmail.com",
    "Curso": "Aquicultura, UFSC"
  },
  {
    "Name": "Rafa Heider",
    "phone": "(48) 991532300",
    "insta": "rafa_heider",
    "mail": "rafa.heider.rh@gmail.com",
    "Curso": "Cavalaria, UNISUL PB"
  }
]

const generateVendedor = (name, instagram_user, number, curso) => {
  return `
<div id="t1-box">
    <main id="card">
        <div class="image-block">
            <img src="fotos_vendedores/${name}.jpg">
        </div>
        <div class="text-block">
            <div class="header">
                <h1>${name}</h1>
            </div>
            <ul class="no-style">
                <li>
                    <a href="http://wa.me/55${number.replace(/\D/g, "")}" target="_blank"><i class="fab fa-whatsapp falg" aria-hidden="true"></i>${number}</a>
                </li> 
                <br>
                <li>
                    <a href="https://www.instagram.com/${instagram_user}/" target="_blank"><i class="fab fa-instagram falg" aria-hidden="true"></i>@${instagram_user}</a>
                </li>
                <br>
                <li>
                    <a><i class="fas fa-map-pin falg" aria-hidden="true"></i><b>${curso}</b></a>
                </li>
            </ul>
        </div>
    </main>    
</div>
`;
};

for (let i = 0; i < sellers.length; i++) {
  const vendedor = generateVendedor(sellers[i].Name, sellers[i].insta, sellers[i].phone, sellers[i].Curso);
  document.getElementById("t1-wrapper").innerHTML += vendedor;
}
