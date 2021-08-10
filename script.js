function getIslemGecmisi(){
	return document.getElementById("islemGecmisiDegeri").innerText;        // yapılan işlem geçmişini getirir.
}

function printIslemGecmisi(num){
	document.getElementById("islemGecmisiDegeri").innerText=num;           //  yapılan işlem geçmişini yazdırır.
}

function getCikis(){
	return document.getElementById("cikisDegeri").innerText;               // cıktı değerini getirir.
}

function printCikis(num){                                                  // cıktı değerini yazdırır. 
	document.getElementById("cikisDegeri").innerText=num;
}

var islemOperator = document.getElementsByClassName("islemOperator");

for(var i = 0; i < islemOperator.length; i++){
	islemOperator[i].addEventListener('click',function(){
		if(this.id == "clear"){
			printIslemGecmisi("");
			printCikis("");
		}
		else if(this.id == "backspace"){
			var cikis=getCikis();
			if(cikis){ // çıktının bir değeri varsa
				cikis = cikis.substr(0,cikis.length-1);
				printCikis(cikis);
			}
		}
		else{
			var cikis = getCikis();
			var islemGecmisi = getIslemGecmisi();
			if(cikis == "" && islemGecmisi != ""){
				if(isNaN(islemGecmisi[islemGecmisi.length -1 ])){
					islemGecmisi = islemGecmisi.substr(0,islemGecmisi.length -1 );
				}
			}
			if(cikis != "" || islemGecmisi != ""){
				islemGecmisi = islemGecmisi + cikis;
				if(this.id == "="){
					var sonuc = eval(islemGecmisi);
					printCikis(sonuc);
					printIslemGecmisi("");
				}
				else{
					islemGecmisi = islemGecmisi + this.id;
					printIslemGecmisi(islemGecmisi);
					printCikis("");
				}
			}
		}
		
	});
}
var sayi = document.getElementsByClassName("sayi");
for(var i = 0; i < sayi.length; i++){
	sayi[i].addEventListener('click',function(){
		var cikis = getCikis();
		if(cikis != NaN){ // çıktı bir sayı ise
			cikis = cikis + this.id;
			printCikis(cikis);
		}
	});
}