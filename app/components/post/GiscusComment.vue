<template>
  <section class="z-comment">
    <ClientOnly>
      <div id="giscus" />
      <template #fallback>
        <p>评论加载中...</p>
      </template>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.setAttribute('data-repo', 'zzh4141/blog');
  script.setAttribute('data-repo-id', 'R_kgDOO1FDQw');
  script.setAttribute('data-category', 'Announcements');
  script.setAttribute('data-category-id', 'DIC_kwDOO1FDQ84CrAzp');
  script.setAttribute('data-mapping', 'pathname');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'bottom');
  script.setAttribute('data-theme', 'preferred_color_scheme');
  script.setAttribute('data-lang', 'zh-CN');
  script.crossOrigin = 'anonymous';
  script.async = true;

  const giscusDiv = document.getElementById('giscus');
  if (giscusDiv) {
    giscusDiv.appendChild(script);
  }
});
</script>

<style lang="scss" scoped>
.z-comment {
    margin: 3rem 1rem;
}
</style>