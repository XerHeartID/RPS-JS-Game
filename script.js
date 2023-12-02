// Konfirmasi Permainan
let start = confirm("Apakah Anda Ingin Bermain?");

//Memulai Permainan
while(start == true){
    // Pilihan User
    let user = prompt("Pilih Salah Satu: Batu / Gunting / Kertas")
    console.log(user);

    // Jika Masukan Sesuai
    if (user == "Batu" || user == "Gunting" || user == "Kertas"){
        // Pilihan Komputer
        let computer = Math.round(Math.random() * 10) + 1;
        if (computer <= 3){
            computer = "Batu";
        }
        else if (computer <= 6){
            computer = "Gunting";
        }
        else if (computer <= 9){
            computer = "Kertas";
        }
        console.log(computer);
    
        // Hasil Seri
        if (user == computer){
            alert(`Permainan Seri!\nKamu memilih ${user} dan Komputer memilih ${computer}`);
        } 
        //Hasil Menang
        else if (user == "Batu" && computer == "Gunting"){
            alert(`Kamu Menang!\nKamu memilih ${user} dan Komputer memilih ${computer}`)
        }
        else if (user == "Gunting" && computer == "Kertas"){
            alert(`Kamu Menang!\nKamu memilih ${user} dan Komputer memilih ${computer}`)
        }
        else if (user == "Kertas" && computer == "Batu"){
            alert(`Kamu Menang!\nKamu memilih ${user} dan Komputer memilih ${computer}`)
        }
        // Hasil Kalah
        else if (user == "Batu" && computer == "Kertas"){
            alert(`Kamu Kalah!\nKamu memilih ${user} dan Komputer memilih ${computer}`)
        }
        else if (user == "Gunting" && computer == "Batu"){
            alert(`Kamu Kalah!\nKamu memilih ${user} dan Komputer memilih ${computer}`)
        }
        else if (user == "Kertas" && computer == "Gunting"){
            alert(`Kamu Kalah!\nKamu memilih ${user} dan Komputer memilih ${computer}`)
        }
    } //Jika Masukan Tidak Sesuai
    else {
        alert("Masukan Salah. Harap Perhatikan Huruf Besar dan Kecil, Lalu Coba Lagi.")
        start == true;
    }
    
    // Konfirmasi Mengulang
    start = confirm("Mau Main Lagi?");
}

// Permainan Berakhir
let end = alert("Terima Kasih Sudah Bermain");