<template>
    <div class="list-view">
        <ul>
            <li :key="'pkmn_' + index" v-for="(pkmn, index) in pkmnList">
                <button @click="getPkmnData(pkmn.name)">
                    {{ pkmn.name }}
                </button>
            </li>
            <li><button @click="getMorePkmn()">Get more</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            pkmnList: []
        }
    },
    methods: {
        getPkmn(limit = 20, offset = 0) {
            this.$axios.$get(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
                .then(response => {
                    this.pkmnList = response.results;
                })
        },
        getMorePkmn(limit = 20) {
            console.log('getMorePkmn')
            this.$axios.$get(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ this.pkmnList.length }`)
                .then(response => {
                    this.pkmnList = this.pkmnList.concat(response.results)
                })
        },
        getPkmnData(name) {
            this.$root.$emit('updateDetailView', name)
        }
    },
    mounted() {
        this.getPkmn()
        // this.getPkmnData()
        console.log('data', this.PkmnList)
    }
}
</script>

<style lang="scss" scoped>
    @import "~/assets/scss/list-view";
</style>