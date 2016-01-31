var GalleryAction = require("./actions/GalleryAction");

module.exports = {
    getGalleryData: function() {
        var data = JSON.parse(localStorage.getItem("gallery"));
        GalleryAction.receiveProduct(data);
    },
    init: function() {
        localStorage.clear();
        localStorage.setItem("gallery", JSON.stringify([
            {
                id: 1,
                name: "Żłobek",
                desc: "Michałek w żłobku",
                path: "img/dynamic/zlobek/",
                img: "img/static/zielono-mi.jpg",
                varts: [
                    {
                        id: 1,
                        name: "zlobek pierwsze zdjecie",
                        desc: "Opis zlobek pierwsze zdjecie",
                        img: "1.jpg"
                    },
                    {
                        id: 2,
                        name: "zlobek drugie zdjecie",
                        desc: "Opis zlobek drugie zdjecie",
                        img: "2.jpg"
                    },
                    {
                        id: 3,
                        name: "zlobek trzecie zdjecie",
                        desc: "Opis zlobek trzecie zdjecie",
                        img: "3.jpg"
                    },
                    {
                        id: 4,
                        name: "zlobek 4 zdjecie",
                        desc: "Opis zlobek 4 zdjecie",
                        img: "4.jpg"
                    },
                    {
                        id: 5,
                        name: "zlobek 5 zdjecie",
                        desc: "Opis zlobek 5 zdjecie",
                        img: "5.jpg"
                    },
                    {
                        id: 6,
                        name: "zlobek 6 zdjecie",
                        desc: "Opis zlobek 6 zdjecie",
                        img: "6.jpg"
                    },
                    {
                        id: 7,
                        name: "zlobek 7 zdjecie",
                        desc: "Opis zlobek 7 zdjecie",
                        img: "7.jpg"
                    },
                    {
                        id: 8,
                        name: "zlobek 8 zdjecie",
                        desc: "Opis zlobek 8 zdjecie",
                        img: "8.jpg"
                    },
                    {
                        id: 9,
                        name: "zlobek 9 zdjecie",
                        desc: "Opis zlobek 9 zdjecie",
                        img: "9.jpg"
                    },
                    {
                        id: 10,
                        name: "zlobek 10 zdjecie",
                        desc: "Opis zlobek 10 zdjecie",
                        img: "10.jpg"
                    },
                    {
                        id: 11,
                        name: "zlobek 11 zdjecie",
                        desc: "Opis zlobek 11 zdjecie",
                        img: "11.jpg"
                    },
                    {
                        id: 12,
                        name: "zlobek 12 zdjecie",
                        desc: "Opis zlobek 12 zdjecie",
                        img: "12.jpg"
                    },
                ]
            },
            {
                "id": 2,
                name: "Wakacje u babci",
                desc: "Michałek szaleje u babci",
                path: "img/dynamic/wakacje/",
                img: "img/static/wakacje.png",
                varts: [
                    {
                        id: 1,
                        name: "wakacje pierwsze zdjecie",
                        desc: "Opis zdjecia 1",
                        img: "1.jpg"
                    },
                    {
                        id: 2,
                        name: "wakacje drugie zdjecie",
                        desc: "Opis zdjecia 2",
                        img: "2.jpg"
                    },
                    {
                        id: 3,
                        name: "wakacje 3 zdjecie",
                        desc: "Opis zdjecia 3",
                        img: "3.jpg"
                    },
                    {
                        id: 4,
                        name: "wakacje 4 zdjecie",
                        desc: "Opis zdjecia 4",
                        img: "4.jpg"
                    },
                    {
                        id: 5,
                        name: "wakacje 5 zdjecie",
                        desc: "Opis zdjecia 5",
                        img: "5.jpg"
                    },
                ]
            },
            {
                id: 1,
                name: "Chrzciny",
                desc: "Chrzest Michałka we Włocławku",
                path: "img/dynamic/chrzest/",
                img: "img/static/chrzest.jpg",
                varts: [
                    {
                        id: 1,
                        name: "chrzest pierwsze zdjecie",
                        desc: "Opis chrzest pierwsze zdjecie",
                        img: "1.jpg"
                    },
                    {
                        id: 2,
                        name: "chrzest drugie zdjecie",
                        desc: "Opis chrzest drugie zdjecie",
                        img: "2.jpg"
                    },
                    {
                        id: 3,
                        name: "chrzest trzecie zdjecie",
                        desc: "Opis chrzest trzecie zdjecie",
                        img: "3.jpg"
                    },
                    {
                        id: 4,
                        name: "chrzest 4 zdjecie",
                        desc: "Opis chrzest 4 zdjecie",
                        img: "4.jpg"
                    },
                    {
                        id: 5,
                        name: "chrzest 5 zdjecie",
                        desc: "Opis chrzest 5 zdjecie",
                        img: "5.jpg"
                    },
                    {
                        id: 6,
                        name: "chrzest 6 zdjecie",
                        desc: "Opis chrzest 6 zdjecie",
                        img: "6.jpg"
                    },
                    {
                        id: 7,
                        name: "chrzest 7 zdjecie",
                        desc: "Opis chrzest 7 zdjecie",
                        img: "7.jpg"
                    },
                    {
                        id: 8,
                        name: "chrzest 8 zdjecie",
                        desc: "Opis chrzest 8 zdjecie",
                        img: "8.jpg"
                    },
                    {
                        id: 9,
                        name: "chrzest 9 zdjecie",
                        desc: "Opis chrzest 9 zdjecie",
                        img: "9.jpg"
                    },
                    {
                        id: 10,
                        name: "chrzest 10 zdjecie",
                        desc: "Opis chrzest 10 zdjecie",
                        img: "10.jpg"
                    },
                ]
            },
        ]));
    }
};