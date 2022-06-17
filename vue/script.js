const app = new Vue({
    el: '#app',
    data: {
        emailList: [],
        loading: ''
    },
    methods: {
        getData() {
            this.emailList = [];
            for (let i = 0; i < 10; i++) {








                @@ -27, 6 + 26, 7 @@ const app = new Vue({

                    axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((res) => {
                            this.email = (res.data.response)
                            this.emailList.push(this.email)
                            this.loading = false;
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                        .finally(() => {
                            this.loading = false;
                        })
                }
        }
        },
        created() {
            this.loading = true;
            setTimeout(this.getData, 2000)
        }
    }
 )