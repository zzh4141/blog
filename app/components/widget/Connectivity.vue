<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
    <h3 class="widget-title">
        About me
    </h3>
    <div
        class="widget-card seasonal"
        :style="{
            '--seasonal-bg': `url(${appConfig.seasonal.widgetBackground})`,
            '--seasonal-emoji': appConfig.seasonal.emoji,
        }"
    >
        <!-- TODO: 优化技术架构展示 -->
        <p>托管于 Vercel；博客由 Nuxt Content 驱动，使用去图图床。</p>
        <p>
            zzh4141的小窝<br>
            一个普普通通的学生<br>
            长期混迹于各大圈子<br>
            但是实则小白一枚<br>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.seasonal {
    position: relative;
    overflow: hidden;
    z-index: 0;

    &::before {
        content: "";
        position: absolute;
        opacity: 0.2;
        inset: 0;
        background: center / cover;
        background-image: var(--seasonal-bg, "https://wsrv.nl/?url=i0.hdslb.com/bfs/archive/abf1bb4412360550a18e5f2e71b1227e7d949735.png@320w");
        z-index: -1;
    }
}

.seasonal-emoji::before, .seasonal-emoji::after {
    // 文明用语😋
    content: var(--seasonal-emoji, "\1F595");
}
</style>
