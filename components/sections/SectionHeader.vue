<template>
  <div class="header-row">
    <span class="header-title">{{title}}</span>
    <nuxt-link v-if="goto && name"
               class="header-more"
               tag='span'
               :to="{name: goto}">
      {{name}} <i class="fas fa-chevron-right"></i>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["title", "goto", "name"]
};
</script>


<style lang="scss" scoped>
@import "assets/variables";

.header {
  &-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
    align-items: baseline;
  }
  &-title {
    font-size: 30px;
    font-weight: 400;
    margin-right: 15px;
  }
  &-more {
    cursor: pointer;
    color: $color-primary;
    font-size: 16px;
  }
  &-description {
    padding-top: 10px;
    font-size: 16px;
  }
}
</style>
