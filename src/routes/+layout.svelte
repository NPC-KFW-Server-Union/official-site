<script>
  import { onMount } from "svelte";
  import "../app.css";

  onMount(() => {
    // 如果是移动端，则提示未对移动端进行适配。
    if (window.innerWidth < 768) {
      alert("本網站未對移動設備做適配，請使電腦瀏覽器瀏覽本網站！");
    }
  });
</script>

<div
  class="h-screen w-full"
>
  <main class="w-full">
    <slot />
  </main>
</div>

