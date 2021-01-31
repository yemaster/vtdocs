<template>
<div class="ui borderless top fixed menu secondary pointing" id="menu">
    <div class="ui container">
        <a class="launch icon item">
          <i class="content icon"></i>
        </a>
        <router-link class="item " to="/">
        VT Python Guide
        </router-link>
    </div>
</div>
</template>

<script>
var content;
export default {
  name: 'Menu',
  data () {
    return {
      navlinks: [
        {
          'id': 1,
          'link': '/',
          'icon': 'home',
          'name': '首页'
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
      for (var i = 0; i < this.navlinks.length; ++i) {
        if ('/' + this.$route.params.path == this.navlinks[i].link)
          return this.navlinks[i].id
      }
      return 1
    }
  }
}
</script>