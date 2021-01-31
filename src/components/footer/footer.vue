<template>
    <div class="ui vertical segment footer">
        <button class="ui labeled icon button">
            <i class="github icon"></i>
            Edit on github
        </button>
        <div class="ui divider"></div>
        Powered by vtdocs.<br>
        <span class="text-grey">
            Update at 2020.1.31 14:51
        </span>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data () {
        return {
            vtdocs: "https://gitee.com/yemaster/"
        }
    }
}
</script>