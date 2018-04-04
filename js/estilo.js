window.onload = function () {
    btnConfig();
    zonaPortofolioConf();
    scrollConfig();
    listAttributes();
    aboutBtnConfig();
}


function scrollConfig() {
    const target = document.querySelectorAll("[data-anime]");//pega todos elementos html que possuem este atributo e adiciona em um vetor
    const animationClass = "animate";

    function animeScroll() {
        const windowTop = window.pageYOffset + (window.innerHeight * 0.75); // Verificar a distancia do scroll da página de acordo com o topo

        target.forEach(function (element) {//parâmetro element == elemento do for each
            if (windowTop > element.offsetTop) {
                element.classList.add(animationClass);
            } else {
                element.classList.remove(animationClass);
            }
        });
    }//fim animeScroll()

    if (target.length) {//Animação não ocorrerá caso não haja elementos com "data-anime" na page
        window.addEventListener("scroll", function () {
            animeScroll();
        });
    }


}

function scrollAnimation(id) {
    document.querySelector('#' + id).scrollIntoView({
        behavior: 'smooth'
    });
}

function btnConfig() {
    var bannerAtual = 0;

    //CONFIGURACAO DO BOTÃO PRÓXIMO DO BANNER
    document.getElementById("botao-proximo").addEventListener("click", function () {
        var btnProximo = this;
        btnProximo.disabled = true;

        var banner_img1 = document.getElementById("item1-img");
        var banner_img2 = document.getElementById("item2-img");
        var banner_img3 = document.getElementById("item3-img");


        switch (bannerAtual) {
            case 0:
                banner_img1.style.zIndex = "3";
                banner_img2.style.zIndex = "2";
                banner_img3.style.zIndex = "1";
                //
                banner_img1.style.marginLeft = "-100%";
                banner_img2.style.marginLeft = "0";
                banner_img3.style.marginLeft = "100%";
                break;

            case 1:
                banner_img1.style.zIndex = "1";
                banner_img2.style.zIndex = "3";
                banner_img3.style.zIndex = "2";
                //
                banner_img1.style.marginLeft = "100%";
                banner_img2.style.marginLeft = "-100%";
                banner_img3.style.marginLeft = "0";

                break;

            case 2:
                banner_img1.style.zIndex = "2";
                banner_img2.style.zIndex = "1";
                banner_img3.style.zIndex = "3";

                //
                banner_img3.style.marginLeft = "-100%";
                banner_img2.style.marginLeft = "100%";
                banner_img1.style.marginLeft = "0";

                break;
        }


        bannerAtual++;
        setTimeout(function () {
            btnProximo.disabled = false
        }, 500);

        if (bannerAtual > 2) {
            bannerAtual = 0;
        }
    });

    //CONFIGURACAO DO BOTÃO ANTERIOR DO BANNER
    document.getElementById("botao-anterior").addEventListener("click", function () {
        btnAnterior = this;
        btnAnterior.disabled = true;
        bannerAtual--;
        var banner_img1 = document.getElementById("item1-img");
        var banner_img2 = document.getElementById("item2-img");
        var banner_img3 = document.getElementById("item3-img");


        if (bannerAtual < 0) {
            bannerAtual = 2;
        }

        switch (bannerAtual) {
            case 0:
                banner_img1.style.zIndex = "2";
                banner_img2.style.zIndex = "3";
                banner_img3.style.zIndex = "1";

                banner_img1.style.marginLeft = "0";
                banner_img2.style.marginLeft = "100%";
                banner_img3.style.marginLeft = "-100%";
                break;

            case 1:
                banner_img1.style.zIndex = "1";
                banner_img2.style.zIndex = "2";
                banner_img3.style.zIndex = "3";
                //

                banner_img1.style.marginLeft = "-100%";
                banner_img2.style.marginLeft = "0%";
                banner_img3.style.marginLeft = "100%";
                break;

            case 2:
                banner_img1.style.zIndex = "3";
                banner_img3.style.zIndex = "2";
                banner_img2.style.zIndex = "1";
                //
                banner_img1.style.marginLeft = "100%";
                banner_img2.style.marginLeft = "-100%";
                banner_img3.style.marginLeft = "0";

                break;
        }

        setTimeout(function () {
            btnAnterior.disabled = false;
        }, 500);
    });
}

function aboutBtnConfig() {//VERIFICAR
    const aux = document.querySelectorAll("span.seta-btn-zona-painel-right");
    aux.forEach(function (element) {
        element.classList.add("seta-btn-zona-painel-down");
    });
}

function zonaPortofolioConf() {
    var imgPortofolio = [];
    var imgPortofolioDefaultPosition = [];
    var item;
    for (var i = 1; i <= 8; i++) {
        item = { defaultLeft: "", defaultTop: "" };
        imgPortofolio.push(document.getElementById("portofolio-zona" + i));
        item.defaultLeft = window.getComputedStyle(imgPortofolio[i - 1]).left;
        item.defaultTop = window.getComputedStyle(imgPortofolio[i - 1]).top;
        imgPortofolioDefaultPosition.push(item);
    }


    //ALLWORKS
    document.getElementById("portofolio-allworks").addEventListener("click", function () {
        for (var i = 0; i < imgPortofolio.length; i++) {
            imgPortofolio[i].style.left = imgPortofolioDefaultPosition[i].defaultLeft;
            imgPortofolio[i].style.top = imgPortofolioDefaultPosition[i].defaultTop;
            imgPortofolio[i].style.opacity = "1";
            imgPortofolio[i].style.transform = "scale(1,1)";
        }
    });


    //CREATIVE
    document.getElementById("portofolio-creative").addEventListener("click", function () {

        for (var i = 0; i < imgPortofolio.length; i++) {
            if (i == 1 || i == 2 || i == 4 || i == 7) {
                imgPortofolio[i].style.opacity = "1";
                imgPortofolio[i].style.transform = "scale(1,1)";
            }
            switch (i) {
                case 1:
                    imgPortofolio[i].style.left = "0";
                    imgPortofolio[i].style.top = "0%";
                    break;

                case 2:
                    imgPortofolio[i].style.left = "25%";
                    imgPortofolio[i].style.top = "0%";
                    break;

                case 4:
                    imgPortofolio[i].style.left = "50%";
                    imgPortofolio[i].style.top = "0%";
                    break;

                case 7:
                    imgPortofolio[i].style.left = "75%";
                    imgPortofolio[i].style.top = "0%";
                    break;

                default:
                    imgPortofolio[i].style.opacity = "0";
                    imgPortofolio[i].style.transform = "scale(0,0)";
                    break;
            }
        }//fimfor

        //imgPortofolio[0]







    });
    //PHOTOGRAPHY
    document.getElementById("portofolio-photography").addEventListener("click", function () {
        for (var i = 0; i < imgPortofolio.length; i++) {
            if (i < 4) {
                imgPortofolio[i].style.opacity = "0";
                imgPortofolio[i].style.transform = "scale(0,0)";
            } else {
                imgPortofolio[i].style.opacity = "1";
                imgPortofolio[i].style.transform = "scale(1,1)";
                switch (i) {
                    case 4:
                        imgPortofolio[4].style.top = "0";
                        imgPortofolio[4].style.left = "0";
                        break;
                    case 5:
                        imgPortofolio[5].style.top = "0";
                        imgPortofolio[5].style.left = "25%";
                        break;

                    case 6:
                        imgPortofolio[6].style.top = "0";
                        imgPortofolio[6].style.left = "50%";
                        break;
                    case 7:
                        imgPortofolio[7].style.top = "0";
                        imgPortofolio[7].style.left = "75%";
                        break;
                }
            }

        }
    });

    //WEB DEVELOPMENT
    document.getElementById("portofolio-webdevelopment").addEventListener("click", function () {
        for (var i = 0; i < imgPortofolio.length; i++) {
            if (i === 0 || i === 1 || i === 4) {
                imgPortofolio[i].style.opacity = "0";
                imgPortofolio[i].style.transform = "scale(0,0)";
            } else {
                imgPortofolio[i].style.opacity = "1";
                imgPortofolio[i].style.transform = "scale(1,1)";
                switch (i) {
                    case 2:
                        imgPortofolio[2].style.left = "0";
                        imgPortofolio[2].style.top = "0";
                        break;

                    case 3:
                        imgPortofolio[3].style.left = "25%";
                        imgPortofolio[3].style.top = "0";
                        break;

                    case 5:
                        imgPortofolio[5].style.left = "50%";
                        imgPortofolio[5].style.top = "0";
                        break;

                    case 6:
                        imgPortofolio[6].style.left = "75%";
                        imgPortofolio[6].style.top = "0";
                        break;

                    case 7:
                        imgPortofolio[7].style.left = "0";
                        imgPortofolio[7].style.top = "50%";
                        break;
                }
            }
        }//fimfor     
    });

}//fim zonaPortofolioConf
