        document.getElementById("getiryemek").addEventListener("click", function () {
            window.location.href = "https://getir.com/yemek/marka/starbucks/";
        });

        document.getElementById("yemeksepeti").addEventListener("click", function () {
            window.location.href = "https://www.yemeksepeti.com/chain/cb5cc/starbucks-coffee";
        });

        document.getElementById("starbucks-owner").addEventListener("click", function () {
            window.location.href = "https://www.youtube.com/watch?v=HSULkk_euzo";
        });

        document.getElementById("starbucks-christmas").addEventListener("click", function () {
                window.location.href = "https://www.youtube.com/watch?v=m1qP5MxRdkk";
            });

        document.getElementById("shayakahve").addEventListener("click", function () {
                window.location.href = "https://www.shayakahve.com.tr/kupa-termoslar";
            });

        document.getElementById("hepsiburada").addEventListener("click", function () {
                window.location.href = "https://www.hepsiburada.com/kampanyalar/starbucks-ikonik-kupa-ve-termoslari-burada";
            });

        const currentHour = new Date().getHours();

        // Mesajı alacak
        const messageElement = document.querySelector('.video-text');

        if (currentHour >= 18) {
            messageElement.textContent = "İyi Akşamlar ☕️";
        } else if (currentHour < 7) {
            messageElement.textContent = "Günaydın ☕️";
        } else {
            messageElement.textContent = "Merhaba ☕️";
        }