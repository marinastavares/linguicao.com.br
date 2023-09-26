const names = [
  "Artur Rabelo",
  "Otávio Augusto",
  "Alex Lago",
  "Gregory Selau",
  "Vitor Sagás",
  "Breno Moreira",
  "Giulia Cenci",
  "Gustavo Gonçalves",
  "Pedro Sachs",
  "Paulo Librelotto",
  "Isaque Luís",
  "Leonardo Godoy",
  "Maria Eduarda",
  "Brenda Eduarda",
  "Fernanda Pilz",
  "Ana Cecilia Boeng",
  "Luiz Felipe Dourado",
  "Michelle Amorim",
  "Rafael Antônio",
  "Luan Lourenço",
  "Mariana Nunes",
  "Nathalia da Silva",
  "Vitória Menoncin",
  "Ana Beatriz",
  "Julia Aleksandra",
  "Clara Cardoso",
  "Irys Schlickmann",
];
const drive_images_ids = ["1xv8Z-9bwu0n26x9tnB_ur-xu19450oU6"];
const instagram_users = [
  "artur_rabelo",
  "otavioosid",
  "alexlagooliveira",
  "scandolaragregory",
  "sr_sagas",
  "brenobmoreira",
  "giicenci",
  "gus.borgert",
  "psachs",
  "paulo_l_ferroli",
  "Isaqueverona",
  "savileonardo",
  "duda_ingressos",
  "eduardablm",
  "fernanda_pilz",
  "anabng",
  "luizfdourado",
  "mihmorim",
  "seupromoteruniversitario",
  "luanzera.02",
  "marinunesdacosta",
  "s.nathalia1",
  "vi.menoncin",
  "anandersenn",
  "juterrivel",
  "claraccardoso",
  "irysschlickmann",
];
const numbers = [
  "48991424482",
  "48996961461",
  "47984373660",
  "48988216755",
  "48996727451",
  "48991031902",
  "54996869057",
  "48999444351",
  "48996724493",
  "48991110503",
  "54996375677",
  "48988193211",
  "48991018103",
  "48999627503",
  "47996625085",
  "48999880415",
  "48999953766",
  "11981003308",
  "48996053430",
  "11962524480",
  "48988292998",
  "48998677591",
  "48999719662",
  "48988048859",
  "11943326176",
  "48998342066",
  "48996572288",
];

const generateVendedor = (name, drive_images_id, instagram_user, number) => {
  return `
<div id="t1-box">
    <main id="card">
        <div class="image-block">
            <img src=https://drive.google.com/uc?export=view&id=${drive_images_id}>
        </div>
        <div class="text-block">
            <div class="header">
                <h1>${name}</h1>
            </div>
            <ul class="no-style">
                <li>
                    <a href="http://wa.me/55${number}" target="_blank"><i class="fab fa-whatsapp fa-2x" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/${instagram_user}/" target="_blank" color="blue"><i class="fab fa-instagram fa-2x" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
    </main>    
</div>
`;
};

for (let i = 0; i < names.length; i++) {
  const vendedor = generateVendedor(
    names[i],
    drive_images_ids[0],
    instagram_users[i],
    numbers[i]
  );
  document.getElementById("t1-wrapper").innerHTML += vendedor;
}
