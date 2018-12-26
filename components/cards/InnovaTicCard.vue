<template>
  <div class="card"
       v-on:click='openImage'>
    <div class="card-img">
      <div class="card-img-container"
           :style="getImage"></div>
    </div>
    <div class="card-content">
      <h4 class="card-content-title">{{innovaTic.name|slice(0,30)}}</h4>
      <p class="auto-break card-content-description">{{innovaTic.description |slice(0,100)}}</p>
    </div>
    <div class="card-play">
      <i class="fas fa-play-circle"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["innovaTic"],
  computed: {
    getImage() {
      let url = `https://i.ytimg.com/vi/${this.innovaTic.id}/hqdefault.jpg`;
      return `background-image: url(${url} );`;
    }
  },
  methods: {
    // TODO: https://codepen.io/AmrSubZero/pen/oLOYrA
    openImage() {
      //   this.seletedID = this.videoID;
      //   this.$refs.modal.style.display = "block";
      //   document.documentElement.style.overflow = "hidden";
    },
    close() {
      //   this.$refs.modal.style.display = "none";
      //   this.seletedID = null;
      //   document.documentElement.style.overflow = "auto";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
.card {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 10px;
  background-color: #dfdfdf72;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 10px #0000003e;
  &:hover {
    box-shadow: 2px 2px 10px #00000072;
    cursor: pointer;
  }

  &-img {
    flex: 0 0 200px;
    @media only screen and (max-width: 768px) {
      & {
        flex: 0 0 130px;
      }
    }
    &-container {
      background-color: $color-primary;
      width: 100%;
      padding-top: 56.25%;
      background-image: url("~/static/default.png");
      border-radius: 3px 3px 0px 0px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
    }
  }
  &-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-left: 10px;
    padding-right: 10px;
    &-title {
      text-overflow: ellipsis;
    }
    &-description {
    }
  }
  &-play {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $color-primary;
    font-size: 1.5rem;
  }
}
p {
  margin: 0;
}
</style>
