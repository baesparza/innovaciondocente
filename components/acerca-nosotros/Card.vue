<template>
  <div class="card">
    <img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image"
         alt="">
    <div class="content">
      <div class="headline">Lorem</div>
      <div class="text">Loremsdafasdf sd asdf asfasdd sdsaas df asdf asd f asddf as df asdfdf</div>
      <div class="button">Ver mas</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: white;
  border-radius: 7px;
  display: inline-block;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  img {
    width: 100%;
    height: auto;
    border-radius: 7px 7px 0px 0px;
    background-color: #f1f3f4;
  }
  .content {
    padding: 40px;
    text-align: center;
    .headline {
      font-size: 24px;
      font-weight: 500;
      margin-top: 0;
      line-height: 1.2;
    }
    .text {
      line-height: 20px;
      margin-top: 8px;
    }
    .button {
      color: #00a5c4;
      padding-top: 20px;
      text-transform: uppercase;
      font-size: 15px;
    }
  }
}
</style>
