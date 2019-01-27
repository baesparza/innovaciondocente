<template>
  <div class="card">
    <div class="aspect-ratio">
      <img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image"
           alt="">
    </div>
    <div class="content">
      <div class="headline">Lorem</div>
      <div class="text">Loremsdafasdf sd asdf asfasdd sdsaas df asdf asd f asddf as df asdfdf</div>
      <div class="button">Ver mas</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aspect-ratio {
  position: relative;
  width: 100%;
  padding-top: 56%;
}
.card {
  background: var(--clr2);
  border-radius: var(--border-radius);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin-bottom: 30px;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    // decoration
    border-radius: 7px 0px 0px 7px;
    background-color: #f1f3f4;
    object-fit: cover;
  }
  .content {
    padding: 100px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
      padding-top: 10px;
      text-transform: uppercase;
      font-size: 15px;
    }
  }
}
</style>

