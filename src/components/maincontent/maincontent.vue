<template>
    <div>
        <Leftbar />
        <Menu />
        <div class="pusher">
            <div v-html="content" v-highlight id="content" />
        </div>
    </div>
</template>
<script>
import loadfile from '../loadfile/loadfile'
import Leftbar from '../leftbar/leftbar.vue'
import showdown from 'showdown'
import Menu from '../../components/menu/menu.vue'
let converter = new showdown.Converter();
export default {
    name: 'navbar',
    data () {
        return {
            link: window.newLink
        }
    },
    computed: {
        content() {
            let loadcontent = loadfile('./docs/' + this.$route.params.path + '.md');
            if (!this.$route.params.path)
                loadcontent = loadfile("./docs/index.md");
            if (loadcontent == false)
                loadcontent = loadfile("./docs/404.md");
            loadcontent=converter.makeHtml(loadcontent);
            return loadcontent
        }
    },
    components: {
        Leftbar,
        Menu
    }
}
</script>