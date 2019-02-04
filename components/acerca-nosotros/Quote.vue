<template>
  <section class="quote">
    <div class="headline"
         v-if="title">{{title}}</div>
    <div class="text auto-break"
         v-if="text">{{text}}</div>
    <div class="button"
         v-if="button">Ver más</div>
  </section>
</template>

<script>
export default {
  props: ["title", "text", "button"]
};
</script>


 <style lang="scss" scoped>
section {
  max-width: 800px;
  margin: 20px auto;
  padding: 30px 0 0 0;
  @media (max-width: 450px) {
    & {
      padding: 20px 0 0 0;
    }
  }
}
.quote {
  width: 100%;
  text-align: center;
  .headline {
    font-size: 26px;
    font-weight: 500;
    margin-top: 0;
    line-height: 1.2;
  }
  .text {
    line-height: 22px;
    margin-top: 8px;
  }
  .button {
    color: #00a5c4;
    padding-top: 20px;
    text-transform: uppercase;
    font-size: 16px;
  }
}
</style>
