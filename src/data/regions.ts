export const regions: Record<string, { city: string; province: string }> = {
    // Banten
    A: {
        city: 'Serang/Cilegon/Pandeglang/Lebak/Tangerang',
        province: 'Banten',
    },

    // DKI Jakarta
    B: { city: 'Jakarta/Depok/Bekasi/Tangerang', province: 'DKI Jakarta' },

    // Jawa Barat
    D: { city: 'Bandung/Cimahi', province: 'Jawa Barat' },
    E: {
        city: 'Cirebon/Indramayu/Majalengka/Kuningan',
        province: 'Jawa Barat',
    },
    F: { city: 'Bogor/Sukabumi/Cianjur', province: 'Jawa Barat' },
    T: { city: 'Purwakarta/Karawang/Subang', province: 'Jawa Barat' },
    Z: {
        city: 'Garut/Sumedang/Tasikmalaya/Ciamis/Banjar/Pangandaran',
        province: 'Jawa Barat',
    },

    // Jawa Tengah
    G: {
        city: 'Pekalongan/Brebes/Tegal/Batang/Pemalang',
        province: 'Jawa Tengah',
    },
    H: { city: 'Semarang/Salatiga/Kendal/Demak', province: 'Jawa Tengah' },
    K: {
        city: 'Pati/Kudus/Jepara/Rembang/Blora/Grobogan',
        province: 'Jawa Tengah',
    },
    R: {
        city: 'Banyumas/Cilacap/Purbalingga/Banjarnegara',
        province: 'Jawa Tengah',
    },
    AA: {
        city: 'Magelang/Purworejo/Kebumen/Temanggung/Wonosobo',
        province: 'Jawa Tengah',
    },
    AD: {
        city: 'Surakarta/Sukoharjo/Boyolali/Sragen/Karanganyar/Wonogiri/Klaten',
        province: 'Jawa Tengah',
    },

    // DI Yogyakarta
    AB: {
        city: 'Yogyakarta/Bantul/Gunung Kidul/Sleman/Kulon Progo',
        province: 'DI Yogyakarta',
    },

    // Jawa Timur
    L: { city: 'Surabaya', province: 'Jawa Timur' },
    M: {
        city: 'Madura (Pamekasan/Bangkalan/Sampang/Sumenep)',
        province: 'Jawa Timur',
    },
    N: { city: 'Malang/Probolinggo/Pasuruan/Lumajang', province: 'Jawa Timur' },
    P: {
        city: 'Besuki/Situbondo/Bondowoso/Jember/Banyuwangi',
        province: 'Jawa Timur',
    },
    S: { city: 'Bojonegoro/Tuban/Lamongan', province: 'Jawa Timur' },
    W: { city: 'Gresik/Sidoarjo/Mojokerto/Jombang', province: 'Jawa Timur' },
    AE: {
        city: 'Madiun/Ngawi/Magetan/Ponorogo/Pacitan',
        province: 'Jawa Timur',
    },
    AG: {
        city: 'Kediri/Blitar/Tulungagung/Nganjuk/Trenggalek',
        province: 'Jawa Timur',
    },

    // Bali
    DK: {
        city: 'Denpasar/Badung/Buleleng/Tabanan/Gianyar/Klungkung/Bangli',
        province: 'Bali',
    },

    // Nusa Tenggara Barat
    DR: {
        city: 'Mataram/Lombok Barat/Lombok Tengah/Lombok Timur/Lombok Utara',
        province: 'Nusa Tenggara Barat',
    },
    EA: {
        city: 'Bima/Sumbawa/Sumbawa Barat/Dompu',
        province: 'Nusa Tenggara Barat',
    },

    // Nusa Tenggara Timur
    DH: {
        city: 'Kupang/Timor Tengah/Belu/Sabu Raijua/Rote Ndao/Malaka',
        province: 'Nusa Tenggara Timur',
    },
    EB: {
        city: 'Flores (Ende/Sikka/Manggarai/Ngada/Alor/Lembata)',
        province: 'Nusa Tenggara Timur',
    },
    ED: {
        city: 'Sumba Timur/Sumba Barat/Sumba Barat Daya/Sumba Tengah',
        province: 'Nusa Tenggara Timur',
    },

    // Aceh
    BL: {
        city: 'Banda Aceh/Langsa/Lhokseumawe/Sabang/Subulussalam',
        province: 'Aceh',
    },

    // Sumatera Utara
    BB: {
        city: 'Tapanuli/Nias/Sibolga/Padang Sidempuan/Gunung Sitoli',
        province: 'Sumatera Utara',
    },
    BK: {
        city: 'Medan/Deli Serdang/Langkat/Binjai/Simalungun/Asahan',
        province: 'Sumatera Utara',
    },

    // Sumatera Barat
    BA: {
        city: 'Padang/Bukittinggi/Padang Panjang/Pariaman/Payakumbuh/Solok',
        province: 'Sumatera Barat',
    },

    // Riau
    BM: {
        city: 'Pekanbaru/Dumai/Bengkalis/Kampar/Rokan Hulu/Rokan Hilir',
        province: 'Riau',
    },

    // Kepulauan Riau
    BP: {
        city: 'Batam/Karimun/Bintan/Natuna/Lingga',
        province: 'Kepulauan Riau',
    },

    // Jambi
    BH: {
        city: 'Jambi/Sungai Penuh/Batanghari/Bungo/Kerinci/Merangin',
        province: 'Jambi',
    },

    // Sumatera Selatan
    BG: {
        city: 'Palembang/Lubuk Linggau/Pagar Alam/Prabumulih/Lahat/Muara Enim',
        province: 'Sumatera Selatan',
    },

    // Bangka Belitung
    BN: {
        city: 'Pangkalpinang/Bangka/Belitung/Bangka Barat/Bangka Selatan',
        province: 'Kepulauan Bangka Belitung',
    },

    // Bengkulu
    BD: {
        city: 'Bengkulu/Bengkulu Utara/Bengkulu Selatan/Rejang Lebong',
        province: 'Bengkulu',
    },

    // Lampung
    BE: {
        city: 'Bandar Lampung/Metro/Lampung Selatan/Lampung Tengah/Lampung Utara',
        province: 'Lampung',
    },

    // Kalimantan Barat
    KB: {
        city: 'Pontianak/Singkawang/Sambas/Sanggau/Sintang/Ketapang',
        province: 'Kalimantan Barat',
    },

    // Kalimantan Tengah
    KH: {
        city: 'Palangkaraya/Barito Selatan/Barito Utara/Kotawaringin',
        province: 'Kalimantan Tengah',
    },

    // Kalimantan Selatan
    DA: {
        city: 'Banjarmasin/Banjarbaru/Banjar/Tabalong/Tanah Bumbu/Kotabaru',
        province: 'Kalimantan Selatan',
    },

    // Kalimantan Timur
    KT: {
        city: 'Balikpapan/Samarinda/Kutai Kartanegara/Berau/Bontang',
        province: 'Kalimantan Timur',
    },

    // Kalimantan Utara
    KU: {
        city: 'Tarakan/Nunukan/Bulungan/Malinau/Tana Tidung',
        province: 'Kalimantan Utara',
    },

    // Sulawesi Utara
    DB: {
        city: 'Manado/Bitung/Tomohon/Kotamobagu/Minahasa/Bolaang Mongondow',
        province: 'Sulawesi Utara',
    },
    DL: {
        city: 'Sangihe/Talaud/Siau Tagulandang Biaro',
        province: 'Sulawesi Utara',
    },

    // Gorontalo
    DM: {
        city: 'Gorontalo/Boalemo/Pohuwato/Bone Bolango/Gorontalo Utara',
        province: 'Gorontalo',
    },

    // Sulawesi Tengah
    DN: {
        city: 'Palu/Banggai/Buol/Donggala/Morowali/Poso/Parigi Moutong/Sigi',
        province: 'Sulawesi Tengah',
    },

    // Sulawesi Barat
    DC: {
        city: 'Majene/Mamuju/Polewali Mandar/Mamasa/Mamuju Utara/Mamuju Tengah',
        province: 'Sulawesi Barat',
    },

    // Sulawesi Selatan
    DD: {
        city: 'Makassar/Gowa/Takalar/Maros/Pangkajene/Bantaeng/Jeneponto/Bulukumba/Selayar',
        province: 'Sulawesi Selatan',
    },
    DP: {
        city: 'Pare-Pare/Barru/Sidrap/Pinrang/Palopo/Luwu/Tana Toraja/Enrekang',
        province: 'Sulawesi Selatan',
    },
    DW: {
        city: 'Bone/Wajo/Sopeng/Sinjai/Watampone',
        province: 'Sulawesi Selatan',
    },

    // Sulawesi Tenggara
    DT: {
        city: 'Kendari/Bau-Bau/Bombana/Buton/Konawe/Kolaka/Muna/Wakatobi',
        province: 'Sulawesi Tenggara',
    },

    // Maluku
    DE: {
        city: 'Ambon/Tual/Buru/Kepulauan Aru/Seram/Maluku Tengah/Maluku Tenggara',
        province: 'Maluku',
    },

    // Maluku Utara
    DG: {
        city: 'Ternate/Tidore/Halmahera Utara/Halmahera Barat/Halmahera Selatan',
        province: 'Maluku Utara',
    },

    // Papua Barat
    PB: {
        city: 'Manokwari/Sorong/Fak-Fak/Kaimana/Teluk Bintuni/Raja Ampat',
        province: 'Papua Barat',
    },

    // Papua
    PA: {
        city: 'Jayapura/Merauke/Jayawijaya/Biak Numfor/Mimika/Nabire/Paniai',
        province: 'Papua',
    },
};
