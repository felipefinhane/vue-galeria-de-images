<template>
    <div class="corpo">
        <meu-menu :routes="routes" />
        <transition name="pagina">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Menu from './components/shared/menu/Menu.vue'
    import {routes} from './routes'
    
    export default {
        components: {
            'meu-menu' : Menu
        },
        data() {
            return {
                routes
            }
        }
    }
</script>

<style>
    .corpo {
        font-family: Helvetica, sans-serif;
        width: 96%;
        margin: 0 auto;
    }
    .centralizado {
        text-align: center;
    }
    .pagina-enter, .pagina-leave-active {
    opacity: 0
    }

    .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
    }
</style>
