let daftarHobi = [];

const tampilkanNama = () => {

    let nama = document.getElementById("namaInput").value;

    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    document.getElementById("hasilNama").innerHTML =
        `Halo ${nama} 👋`;

}

const tambahHobi = () => {

    let input = document.getElementById("hobiInput");

    let hobi = input.value;

    if (hobi === "") {
        alert("Hobi tidak boleh kosong!");
        return;
    }

    daftarHobi.push(hobi);

    renderHobi();

    input.value = "";

}

const renderHobi = () => {

    let list = document.getElementById("listHobi");

    list.innerHTML = "";

    daftarHobi.forEach((item, index) => {

        let li = document.createElement("li");

        li.textContent = item;

        li.onclick = () => {

            daftarHobi.splice(index, 1);

            renderHobi();

        }

        list.appendChild(li);

    });

}

