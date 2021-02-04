<template>
    <div v-if="pkmnDataExists()">
        <img :src="this.pkmnData.sprites.front_default" alt="">
        {{ this.pkmnData.species.name }}
    </div>
    <div v-else>
        nothing yet
    </div>
</template>

<script>
export default {
    data () {
        return {
            pkmnData: Object
        }
    },
    methods: {
        showPkmnData(name) {
            console.log('DetailView.vue > showPkmnData', name)

            this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/${ name }`)
                .then(response => {
                    this.pkmnData = response;
                })
        },
        pkmnDataExists() {
            if (Object.keys(this.pkmnData).length != 0) {
                return true
            } else {
                return false
            }
        }
    },
    mounted() {
        this.$root.$on('updateDetailView', name => {
            this.showPkmnData(name)
        });
    }
}
</script>