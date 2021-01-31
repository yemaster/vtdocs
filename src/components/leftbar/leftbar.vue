<template>
<div class="ui borderless vertical menu visible sidebar" id="leftbar">
    <div class="item">
        <h3>VT Python Guide</h3>
    </div>
    <router-link v-for="nl in navlink" v-bind:class="{ active: WhichActive==nl.id }" class="item " :to="nl.link">
        {{ nl.name }}
    </router-link>
</div>
</template>

<script>
import $ from 'jquery'
import '../../style/semantic.min.js'
export default {
    name: 'app',
    data () {
        return {
            navlink: [
                {
                    'id': 1,
                    'link': '/begin',
                    'icon': 'begin',
                    'name': '开始'
                },
                {
                    'id': 2,
                    'link': '/about',
                    'icon': 'info',
                    'name': '关于'
                },
            ]
        }
    },
    computed: {
        WhichActive() {
            for (var i = 0; i < this.navlink.length; ++i) {
                if ('/' + this.$route.params.path == this.navlink[i].link)
                    return this.navlink[i].id
            }
        }
    }
}
</script>