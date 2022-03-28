
    const ROCK = 0;
    const PAPER = 1;
    const SCUISSOR = 2;

    function selectImg(indexElement) {
        let select = document.getElementsByClassName("select-img");

        select[indexElement].style.backgroundColor = "#C4C4C4";
        select[indexElement].style.height = "150px";
        select[indexElement].style.width = "150px";
        select[indexElement].style.margin = "auto";
        select[indexElement].style.marginTop = "30px";
        select[indexElement].style.borderRadius = "15%"
    }

    function getComputer() {
        const comp = Math.random();
        if(comp < 0.34) return 'batu';
        if(comp >= 0.34 && comp < 0.67) return 'gunting';
        return 'kertas';
    }

    function getResult(comp, player) {
        if (player == comp) return "SERI";
        if (player == 'batu') return (comp == 'kertas') ? "PLAYER KALAH" : "COMPUTER MENANG";
        if (player == 'gunting') return (comp == 'batu') ? 'PLAYER MENANG' : ' COMPUTER MENANG';
        if (player == 'kertas') return (comp == 'gunting') ? 'PLAYER KALAH' : ' COMPUTER MENANG';
    } 

    const pilihBatu = document.querySelector('.batu');
    pilihBatu.addEventListener('click', function() {
        const computerPilih = getComputer();
        const playerPilih = pilihBatu.className;
        const hasil = getResult(computerPilih, playerPilih);

        let imgComp = document.querySelector('.img-comp');
        imgComp.setAttribute('src', 'assets/' + computerPilih + '.png')

       const info = document.querySelector('.info');
       info.innerHTML = hasil;
    });

    const pilihGunting = document.querySelector('.gunting');
    pilihGunting.addEventListener('click', function() {
        const computerPilih = getComputer();
        const playerPilih = pilihGunting.className;
        const hasil = getResult(computerPilih, playerPilih);
      

        let imgComp = document.querySelector('.img-comp');
        imgComp.setAttribute('src', 'assets/' + computerPilih + '.png')

       const info = document.querySelector('.info');
       info.innerHTML = hasil;
    });

    const pilihKertas = document.querySelector('.kertas');
    pilihKertas.addEventListener('click', function() {
        const computerPilih = getComputer();
        const playerPilih = pilihKertas.className;
        const hasil = getResult(computerPilih, playerPilih);
      

        let imgComp = document.querySelector('.img-comp');
        imgComp.setAttribute('src', 'assets/' + computerPilih + '.png')

       const info = document.querySelector('.info');
       info.innerHTML = hasil;
    });

