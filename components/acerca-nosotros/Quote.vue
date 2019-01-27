<template>
  <section class="quote">
    <div class="headline">Lorem</div>
    <div class="text">asdfasdfasdfsadfsadf</div>
    <div class="text">sad fasd fasdd f asddfasdf </div>
    <div class="button">asd sdf fsda afsd asfd</div>
  </section>
</template>

 <style lang="scss" scoped>
section {
  max-width: 800px;
  margin: 20px auto;
  padding: 100px 0;
}
.quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
