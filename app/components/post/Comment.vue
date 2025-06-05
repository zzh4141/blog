<script setup lang="ts">
import GiscusComment from './GiscusComment.vue';
</script>

<template>
    <section class="z-comment">
        <h3>评论区</h3>
        <GiscusComment />
    </section>
</template>

<style scoped>
.z-comment {
    margin: 3rem 1rem;
}

.z-comment > h3 {
    margin-top: 3rem;
    font-size: 1.25rem;
}
</style>

<style lang="scss" scoped>
.z-comment {
    margin: 3rem 1rem;
}

.z-comment > h3 {
    margin-top: 3rem;
    font-size: 1.25rem;
}
</style>