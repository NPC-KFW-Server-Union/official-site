<script lang="ts">
  import { onMount } from "svelte";
  import anime from "animejs";

  import Carousel from "svelte-carousel";
  let carousel; // for calling methods of the carousel instance

  onMount(() => {
    anime({
      targets: "#texts > #I",
      translateY: ["150%", "0%"],
      opacity: [0, 1],
      duration: 1300,
      easing: "easeOutCubic",
    });
    anime({
      targets: "#texts > #I > span",
      translateY: ["70%", "0%"],
      opacity: [0, 1],
      delay: 400,
      duration: 1500,
      easing: "easeOutCubic",
    });
    anime({
      targets: "#texts > #II",
      translateY: ["40%", "0%"],
      opacity: [0, 1],
      delay: 900,
      duration: 1600,
      easing: "easeOutCubic",
    });
  });
</script>

<div id="grant" class="relative bg-slate-800">
  <Carousel
    bind:this={carousel}
    autoplay
    autoplayProgressVisible
    let:currentPageIndex
    let:pagesCount
    let:showPage
  >
    <button type="button" slot="prev" class="custom-arrow custom-arrow-prev">
      <i />
    </button>
    <div class="image bg-[url('/src/assets/img/mc1.jpg')]" />
    <div class="image bg-[url('/src/assets/img/mc1.jpg')]" />
    <button type="button" slot="next" class="custom-arrow custom-arrow-next">
      <i />
    </button>
  </Carousel>

  <div id="texts" class="absolute right-1/7 top-4/8">
    <p id="I" class="text-slate-300 text-4xl">YOUR TECHNOLOGICAL SERVER<span class="inline-block">,</span></p>
    <p id="II" class="text-slate-300 text-4xl">
      BUT WITH MORE <span class="text-red-500">NOVELTY</span>.
    </p>
  </div>
</div>

<div id="info" class="w-full py-1 flex justify-around bg-zinc-950">
  <div>
    <p class="prop-name">MODS</p>
    <p class="prop-value">
      IC2, BC, RC, RP, AE, OC、林业、家具、东方女仆、中式工坊<br>
      等涵盖电力、自动化、运输、装饰的五十八个 mod
    </p>
    <p class="prop-subvalue">基于 FORGE 平台</p>
  </div>
  <div>
    <p class="prop-name">PLUGINS</p>
    <p class="prop-value">
      NewHonor（称号）、RealMap（自定义地图图像）等丰富玩法之插件<br>
      以及数个关于领地 / 财产保护、经济 / 商店的插件
    </p>
    <p class="prop-subvalue">基于 SPONGE 平台</p>
  </div>
  <div>
    <p class="prop-name">VERSION</p>
    <p class="prop-value">1.12.2</p>
  </div>
</div>
<div class="showcase">
  <p>NKU 是一个结合城市、商业、科技和自动化的服务器。</p>
  <p>服务器内置多种科技、自动化 MOD。</p>
</div>
<div class="showcase">
  <p>享受城市生活，使用公共设施。</p>
  <p>城市化的世界可为你提供公用的电网、运输系统。贸易系统可让你直接购买所需的物品。省去合成一切的苦闷。</p>
</div>
<div class="showcase">
  <p>更多城市化惊喜。</p>
  <p>机场、铁路……均可免费使用。</p>
</div>
<div class="showcase">
  <p>等待十年，只为遇见你。</p>
  <p>NPCCRAFT 成立于 2014 年，至今已有 10 年历史。</p>
  <p>因忙于生活，近两年我们才开始复兴服务器。本年刚基本完成基础设施建设，最近才开始宣传。</p>
  <p>NKU 是一个温馨友好的家园，只是目前稍显空荡。</p>
  <p>请加入我们。我们一起游戏，一起娱乐，一起体会酸甜苦辣，让温馨的世界更温馨。</p>
</div>

<style>
  #grant .image {
    --at-apply: img-container w-full h-70v max-h-150 min-h-130 w-full bg-cover
      bg-center;
  }
  #grant #texts {
    --at-apply: font-modern;
  }
  #info .prop-name {
    --at-apply: font-semibold text-zinc-400 text-sm;
  }
  #info .prop-value {
    --at-apply: font-normal text-zinc-500 text-xs;
  }
  #info .prop-subvalue {
    --at-apply: font-italic text-zinc-800 text-xs;
  }
  .showcase {
    --at-apply: w-full h-100;
  }
  :global(#grant .sc-carousel-dots__container) {
    --at-apply: relative h-0 bottom-8;
  }
</style>
