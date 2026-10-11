
const profil = {
  nama: "Muhammad Lutfi Ilham",
  peran: "Mahasiswa PABW",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3
};

console.log("Data profil:", profil);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

console.log(buatPerkenalan(profil));

const formatKeahlian = (daftar) => daftar.join(" · ");


console.log("Keahlian:", formatKeahlian(profil.keahlian));

// Menampilkan data profil dan keahlian dari JavaScript ke halaman.
const elemenProfil = document.querySelector("#data-profil-js");
const elemenKeahlian = document.querySelector("#daftar-keahlian-js");

elemenProfil.innerHTML = `
  <p><strong>Nama:</strong> ${profil.nama}</p>
  <p><strong>Peran:</strong> ${profil.peran}</p>
  <p><strong>Jumlah proyek:</strong> ${profil.jumlahProyek}</p>
`;

elemenKeahlian.innerHTML = profil.keahlian
  .map((keahlian) => `<li>${keahlian}</li>`)
  .join("");


const profilTambahan = {
  kontak: {
    email: "mahasiswa@example.com"
  }
};

const email = profilTambahan.kontak?.email ?? "Email belum diisi";
const telepon = profilTambahan.kontak?.telepon ?? "Telepon belum diisi";

console.log("Email:", email);
console.log("Telepon:", telepon);

const daftarProyek = [
  {
    nama: "Website Profil",
    teknologi: "HTML, CSS",
    selesai: true
  },
  {
    nama: "Kalkulator",
    teknologi: "JavaScript",
    selesai: true
  },
  {
    nama: "Aplikasi",
    teknologi: "JavaScript",
    selesai: false
  }
];


console.table(daftarProyek);

// Menampilkan daftar proyek dari array JavaScript ke halaman.
const elemenDaftarProyek = document.querySelector("#daftar-proyek-js");

elemenDaftarProyek.innerHTML = daftarProyek.map((proyek) => `
  <article class="kartu">
    <h3>${proyek.nama}</h3>
    <p><strong>Teknologi:</strong> ${proyek.teknologi}</p>
    <p><strong>Status:</strong> ${proyek.selesai ? "Selesai" : "Dalam proses"}</p>
  </article>
`).join("");


const namaProyek = daftarProyek.map((proyek) => proyek.nama);

console.log("Nama semua proyek:", namaProyek);

const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);

console.log("Proyek yang sudah selesai:", proyekSelesai);
console.table(proyekSelesai);

const proyekDicari = daftarProyek.find(
  (proyek) => proyek.nama === "Kalkulator"
);

console.log("Proyek yang ditemukan:", proyekDicari);

const profilSalinan = { ...profil };

profilSalinan.peran = "Frontend Developer";

console.log("Profil asli:", profil);
console.log("Profil salinan:", profilSalinan);

const salinanProyek = [...daftarProyek];

salinanProyek.push({
  nama: "Portfolio Pribadi",
  teknologi: "HTML, CSS, JavaScript",
  selesai: false
});

console.log("Jumlah proyek asli:", daftarProyek.length);
console.log("Jumlah proyek salinan:", salinanProyek.length);

console.table(salinanProyek);


const daftarFilm = [
  {
    judul: "Avengers: Endgame",
    tahun: 2019,
    sutradara: "Anthony Russo & Joe Russo",
    rating: "10/10"
  },
  {
    judul: "X-Men",
    tahun: 2000,
    sutradara: "Bryan Singer",
    rating: "8/10"
  },
  {
    judul: "Spider-Man: Brand New Day",
    tahun: "Belum ditentukan",
    sutradara: "Belum ditentukan",
    rating: "7.5/10"
  }
];

console.table(daftarFilm);


const formTambahFilm = document.querySelector("#form-tambah-film");
const tabelFilm = document.querySelector("#daftar-film-js");

function tampilkanDaftarFilm() {
    tabelFilm.innerHTML = daftarFilm.map((film) => `
        <tr>
            <th scope="row">${film.judul}</th>
            <td>${film.tahun}</td>
            <td>${film.sutradara}</td>
            <td>${film.rating}</td>
        </tr>
    `).join("");
}

tampilkanDaftarFilm();

formTambahFilm.addEventListener("submit", (event) => {
    event.preventDefault();

    const judul = document.querySelector("#judul").value.trim();
    const tahun = document.querySelector("#tahun").value;
    const rating = document.querySelector("#rating").value;

    if (!judul || !tahun || rating === "") {
        return;
    }

    daftarFilm.push({
        judul,
        tahun,
        sutradara: "Belum ditentukan",
        rating: `${rating}/10`
    });

    tampilkanDaftarFilm();
    formTambahFilm.reset();

    console.log("Film berhasil ditambahkan:", judul);
});