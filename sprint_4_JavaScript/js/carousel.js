//carousel

//Array storage class
let carouselArr = [];
carouselImgHtml = document.getElementById("carousel");
carouselTitleHtml = document.getElementById("carousel-title");

//class Carousel
class Carousel {
    constructor(img, titulo, url){
        this.img = img;
        this.titulo = titulo;
        this.url = url;
    }

      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        carouselImgHtml.innerHTML = `<a href="${carouselArr[this._sequence].url}"><img src = "${carouselArr[this._sequence].img}"></img></a>`
        carouselTitleHtml.innerHTML = `<a href="${carouselArr[this._sequence].url}"><p>${carouselArr[this._sequence].titulo}</p></a>`
        this._sequence ++;
        if(this._sequence >= this._size){
            this._sequence = 0;}
    }

    static Previous(){
        let imagemAtual = this._sequence - 1;
        if (imagemAtual < 0) {
            imagemAtual = this._size - 1;
        }

        this._sequence = imagemAtual - 1;
        if (this._sequence < 0) {
            this._sequence = this._size - 1;
        }

        carouselImgHtml.innerHTML = `<a href="${carouselArr[this._sequence].url}"><img src = "${carouselArr[this._sequence].img}"></img></a>`
        carouselTitleHtml.innerHTML = `<a href="${carouselArr[this._sequence].url}"><p>${carouselArr[this._sequence].titulo}</p></a>`
        this._sequence++;
        if(this._sequence >= this._size){
            this._sequence = 0;
        }}


};

document.getElementById("btn-next").addEventListener("click", () =>{
    clearInterval(Carousel._interval);
    Carousel.Next();
    Carousel._interval = setInterval(function(){Carousel.Next(); }, 5000);
});

document.getElementById("btn-previous").addEventListener("click", () =>{
    clearInterval(Carousel._interval);
    Carousel.Previous();
    Carousel._interval = setInterval(function(){Carousel.Next(); }, 5000);
});