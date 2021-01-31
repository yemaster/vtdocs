<template>
    <div id="app">
        <div class="ui container">
            <router-view />
            <Footer />
        </div>
    </div>
</template>

<script>
import Footer from "../../components/footer/footer"
export default {
    name: 'app',
    data () {
        return {}
    },
    components: {
        Footer
    }
}
</script>