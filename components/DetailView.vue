<template>
    <section class="detail-view" :class="this.pkmnType.length > 0 ? 'type-' + this.pkmnType : ''">
        <div v-if="pkmnDataExists()">
            <header class="detail-view__header">
                <div class="detail-view__header-image">
                    <img :src="this.pkmnData.sprites.other['official-artwork']['front_default']" :alt=this.pkmnData.species.name>
                </div>
                <h3>#{{ this.pkmnData.id }} {{ this.pkmnData.species.name }}</h3>
            </header>
            
        </div>
        <div v-else>
            nothing yet
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            pkmnData: Object,
            pkmnType: ''
        }
    },
    methods: {
        showPkmnData(name) {
            console.log('DetailView.vue > showPkmnData', name)

            this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/${ name }`)
                .then(response => {
                    this.pkmnData = response;
                    this.pkmnType = response.types[0].type.name;
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

<style lang="scss" scoped>
    @import "~/assets/scss/detail-view";
</style>