<template>
    <div>
        detailView
    </div>
</template>

<script>
export default {
    data () {
        return {
            pkmnData: []
        }
    },
    methods: {
        showPkmnData(name) {
            console.log('DetailView.vue > showPkmnData', name)

            this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/${ name }`)
                .then(response => {
                    this.pkmnData = response;
                })
        }
    },
    mounted() {
        this.$root.$on('updateDetailView', name => {
            this.showPkmnData(name)
        });
    }
}
</script>