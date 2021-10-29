const movie_title = [
    {
        id : '1',
        title : 'Yowes Ben 1 ',
        picture_url : './img/Yowis_Ben1.jpg',
        detail : 'Bayu (Bayu Skak) menyukai Susan (Cut Meyriska) sejak lama. Namun karena dia merasa minder dengan keadaan dirinya yang pas-pasan, Bayu memutuskan memendam perasaan itu. Namun hari-hari Bayu berubah sejak Susan mengirim voice chat ke ponsel Bayu, yang membuatnya kegeeran luar biasa mengira Susan memberi isyarat agar didekati. Ternyata Susan hanya memanfaatkan Bayu untuk membantunya mensuplai pecel untuk konsumsi teman-teman OSIS. Bayu bertekad mengubah dirinya menjadi lebih populer dari Roy (Indra Widjaya), pacar Susan, yang dikenal piawai sebagai gitaris band sekolah mereka, Bayu berinisiatif membentuk band bersama Doni (Joshua Suherman) - sahabat dekatnya, Yayan (Tutus Thomson) - seorang tukang tabuh beduk sebagai drummer dan Nando (Brandon Salim) - siswa ganteng yang jago keyboard. Mereka sepakat menamakan band mereka YOWIS BEN. Namun rupanya langkah Bayu dan teman-temannya tidak mudah. Dalam masa-masa YOWIS BEN tumbuh di dunia musik kota Malang, perlahan tapi pasti celah perpecahan antar personil YOWIS BEN mulai tampak Berhasilkah Bayu mempertahankan band-nya dan mendapatkan Susan?',
        rating : '7.0/10 imdb'
    },
    {
        id : '2',
        title : 'Yowes Ben 2',
        picture_url : './img/Yowis_Ben2.jpg',
        detail : 'Usai diputus Susan (Cut Meyriska), Bayu (Bayu Skak) dihadapkan pada naiknya harga kontrakan yang membuat dia, ibunya dan Cak Jon (Arief Didu) terancam diusir. Untungnya Yowis Ben populer di Malang dan jadi satu-satunya harapan Bayu menyelesaikan persoalan keuangan. Celakanya masing-masing personil menyimpan masalah. Yayan (Tutus Thomson) menikah dengan Mia (Anggika Bölsterli); krisis keluarga Nando (Brandon Salim) karena ayahnya memutuskan menikah lagi; dan Doni (Joshua Suherman) berambisi punya pacar. Bayu memecat Cak Jon, lalu mempercayakan Yowis Ben kepada Cak Jim (Timo Scheunemann), yang mengklaim dirinya sudah membesarkan banyak artis nasional. Mereka pun hijrah ke Bandung. Tapi, kredibilitas Cak Jim mencurigakan dan Bayu juga harus meluluhkan hati bapak super galak karena dia jatuh cinta dengan Asih (Anya Geraldine), putrinya. ',
        rating : '8.0/10 imdb'
    },
    {
        id : '3',
        title : 'Yowes Ben 3',
        picture_url : './img/Yowis_Ben3.jpg',
        detail : 'Di tengah ketenarannya sebagai grup musik, Yowis Ben, terancam kehilangan salah satu personilnya dan juga manajer yang selama ini mendampingi mereka..',
        rating : '7.5/10 imdb'
    },
    {
        id : '4',
        title : 'Cinta Brontosaurus',
        picture_url : './img/B2.jpg',
        detail : `Dika (Raditya Dika) adalah seorang penulis yang baru saja putus cinta dengan Nina (Pamela Bowie), pacarnya setelah sekian lama. Semenjak putus cinta ini, dia percaya bahwa cinta bisa kedaluwarsa. Kosasih (Soleh Solihun), agen naskah Dika, mencoba untuk membuat Dika yakin terhadap cinta kembali, seperti Kosasih yakin dengan istrinyanya Wanda (Tyas Mirasih). Usaha ini, membawa Dika ke dalam serangkaian perkenalan absurd. Namun, cinta bisa datang tanpa persiapan. Seperti saat Dika bertemu dengan Jessica (Eriska Rein), seorang perempuan yang jalan pikirannya sama anehnya dengan Dika. Semakin Dika kenal dengan Jessica, semakin dia bertanya: apa benar cinta bisa kedaluwarsa? Di sisi yang lain, Mr. Soe Lim (Ronny P. Tjandra), menawarkan untuk memfilmkan buku Dika, yang berjudul Cinta Brontosaurus. Tertarik, Dika berusaha untuk menulis skrip film tersebut. Masalah mulai timbul ketika di tengah jalan, Mr. Soe Lim mencoba untuk mengubah naskah asli Dika menjadi film horror yang sedang laku. Film ini adalah perjalanan Dika untuk memahami cinta, yang justru dia dapatkan dari pengalamannya bersama Jessica, teman, dan keluarganya sendiri.`,
        rating : '9.0/10 imdb'
    }
]  



function show_movie_preview(){
    var html="";

    for (var i = 0; i<movie_title.length; i++){
        html+=`<div class="catalog">`;
        html+=`<span class="movietitle">${movie_title[i].title}</span><br>`;
        html+=`<img class="picture" src="${movie_title[i].picture_url}"><br>`;
        html+=`<a href="detail.html?id=${movie_title[i].id}"><button class="button">View Detail</button></a>`;
        html+=`</div>`;
    }

    document.getElementById("catalog").innerHTML = html;
    

}

function show_movie_detail(){

    const urlString = window.location.search;
    const urlParams = new URLSearchParams(urlString);
    const id = urlParams.get('id');

    console.log(id);
    
    document.getElementById("movietitle").innerHTML = movie_title[id-1].title;
    document.getElementById("rating").innerHTML = movie_title[id-1].rating;
    document.getElementById("moviedetail").innerHTML = "Sinopsis: "+movie_title[id-1].detail;
    document.getElementById("movieimage").src = movie_title[id-1].picture_url;

}