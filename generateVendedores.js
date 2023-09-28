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
const drive_images_ids = [
  "1Y9ah_aEXNs0cDVMYeBuIh4027m6F9QMC",
  "1YFj2ZkatiR2qycQAcsk0n90lFhDLiCmI",
  "1T42kxo2zTtBv5UxTcDdA-GwrPgIDRnZ1",
  "1NKJZrWqDM_Gx-XIIuHi1ML1w25gMoyOi",
  "1xv8Z-9bwu0n26x9tnB_ur-xu19450oU6",
  "1_4tO-uQoT4vcix2InIDzUujeMDAKt_hI",
  "1Xf2x6eYOqyUhwLiAU-B3rFanlAWIAT1E",
  "1pNwR6X9bsiU64aa5eodKoIZiCruv9E1u",
  "1GiDReIFGyVuK53kBgxTfrRF94Cy65rIN",
  "1Pjn0GcBxKFC7awdmbyR4B7tx9Gl0_RtU",
  "1keUKpZNC2DQt7UiBEabjDUKu6Nx045BE",
  "1pVU0X-326qgERzZbJtXBGajRfJ6HuHri",
  "1oM76I9mcfRbZ-pp_wynQhqTf6IOpZQqo",
  "1SB1os1ZfUqkKHEXeImqb_PDvJUqGtu10",
  "1PCENvg1HuJN5b_JhBl5Pq6Ur9lSHp513",
  "1YccfATuKHxkibOj-L2nzfsUIS7ZC_z9v",
  "1t5k_kqduhu2lgjAdfuhDpsbnINMJojHx",
  "1xX1j0NnU-TBfaoMuAc6hyXQKCFTX9Bs3",
  "1GNrWq5YrRuzaaEWRUJLi3MlrZnsUxaLD",
  "1H2qid-F51gTA98NpX-jwizs_OOqhBk6P",
  "102WZ_Wu4QMnyaI_xX6B8ePGm8aiBwckV",
  "1MThFScJC72X7PPWkvN5dGA04HK5FRKh6",
  "1TE70kxS_x4jK1gEeUt77ldDX2GVIbTx9",
  "1Ki1U2Oo9VKZ8kGdtOwAcGmyQJehh6AgJ",
  "1dwt4hlMc4S-_ZJMVBNNbk5pNi8UeugtK",
  "1zX_xXpD7KO8cySTITObbtjB651g2nQEx",
  "1ccbT2CT_HCQTPDPfGCHOdP0SVLrmlRQb",
];
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
    drive_images_ids[i],
    instagram_users[i],
    numbers[i]
  );
  document.getElementById("t1-wrapper").innerHTML += vendedor;
}
