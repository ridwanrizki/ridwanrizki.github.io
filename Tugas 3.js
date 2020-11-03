function tambah(){
    a = eval(item1.bil1.value);
    b = eval(item1.bil2.value);
    jumlah = a+b;
    swal(a+" + " +b+ " = " +jumlah);    
}
function kurang(){
    a = eval(item1.bil1.value);
    b = eval(item1.bil2.value);
    kurang = a-b;
    swal(a+" - " +b+ " = " +kurang)
}
function kali(){
    a = eval(item1.bil1.value);
    b = eval(item1.bil2.value);
    kali = a*b;
    swal(a+" x " +b+ " = " +kali)
}
function bagi(){
    a = eval(item1.bil1.value);
    b = eval(item1.bil2.value);
    bagi = a/b;
    swal(a+" ÷ " +b+ " = " +bagi);
}
