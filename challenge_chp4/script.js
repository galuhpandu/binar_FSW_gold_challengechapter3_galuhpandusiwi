function getpilihancom() {
    const comp = Math.random();
    if (comp < 0.34) {
        document.getElementById("batu").classList.add("highlight");
        return 1;};
    if (comp >= 0.34 && comp < 0.67) {
        document.getElementById("kertas").classList.add("highlight");
        return 2;};
        {document.getElementById("gunting").classList.add("highlight");
        return 3;};
    };
    

function gethasil(player,comp){
    if (player === 'batu-player1' && comp === 1) 
        return document.querySelector('#img-vs').setAttribute('src','imageCP4/seri.png');
    if (player === 'kertas-player1' && comp === 2) 
        return document.querySelector('#img-vs').setAttribute('src','imageCP4/seri.png');
    if (player === 'gunting-player1' && comp === 3) 
        return document.querySelector('#img-vs').setAttribute('src','imageCP4/seri.png');
    if (player === 'batu-player1') return (comp === 2) 
        ? document.querySelector('#img-vs').setAttribute('src','imageCP4/kalah.png')
        :document.querySelector('#img-vs').setAttribute('src','imageCP4/menang.png');
    if (player === 'kertas-player1') return (comp === 1) 
        ? document.querySelector('#img-vs').setAttribute('src','imageCP4/menang.png')
        :document.querySelector('#img-vs').setAttribute('src','imageCP4/kalah.png');
    if (player === 'gunting-player1') return (comp === 1) 
        ? document.querySelector('#img-vs').setAttribute('src','imageCP4/kalah.png')
        :document.querySelector('#img-vs').setAttribute('src','imageCP4/menang.png');
}
    

const pilihbatu = document.querySelector('#batu-player1');
pilihbatu.addEventListener('click', function () {
const pilihanplayer = pilihbatu.id;
const pilihancom = getpilihancom();        
const hasil = gethasil(pilihanplayer,pilihancom);


console.log('pilihan player : ' + pilihanplayer);
console.log('pilihan komputer : ' + pilihancom); 
console.log('hasil : ' + hasil);

});

const pilihkertas = document.querySelector('#kertas-player1');
pilihkertas.addEventListener('click', function () {
const pilihanplayer = pilihkertas.id;
const pilihancom = getpilihancom();        
const hasil = gethasil(pilihanplayer,pilihancom);

console.log('pilihan player : ' + pilihanplayer);
console.log('pilihan komputer : ' + pilihancom); 
console.log('hasil : ' + hasil);
});

const pilihgunting = document.querySelector('#gunting-player1');
pilihgunting.addEventListener('click', function () {
const pilihanplayer = pilihgunting.id;
const pilihancom = getpilihancom();        
const hasil = gethasil(pilihanplayer,pilihancom);

console.log('pilihan player : ' + pilihanplayer);
console.log('pilihan komputer : ' + pilihancom); 
console.log('hasil : ' + hasil);
});






 



    

