const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

let app = new Vue ({
    el: '#app',
    data: {
        catalogURL: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/150x150',
        searchText:'',
        isVisibleCart: false
    },
    methods: {
        getJSON(url) {
            return fetch(url)
                    .then (result => result.json())
                    .catch (error => {
                        console.log(error);
                    })
        },
        addProduct(product) {
            console.log(product.id_product);
        },
        filterGoods(text) {
            console.log(text);
        }
    },
    mounted() {
        this.getJSON(`${API + this.catalogURL}`)
        .then (data => {
            for (el of data) {
                this.products.push (el)
            }
        })
    }
})


