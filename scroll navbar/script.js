window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navbar").style.top = "0";
        } else {
        document.querySelector(".navbar").style.top = "-100px";
        }
        };