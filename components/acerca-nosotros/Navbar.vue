<template>
  <nav>
    <div class="logo">
      <img src="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/icons%2Ficon.png?alt=media&token=fdc778de-c683-4f2c-86d1-42f1eeedbe5c"
           alt="icon-innova">
    </div>
    <ul>
      <li>Innovación</li>
      <li>Formación</li>
      <li>Evaluación</li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .logo {
    background: #f1f3f4;
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    li {
      margin: 5px;
      padding: 5px;
      padding: 5px 10px;
      list-style: none;
      background: var(--clr2);
      border-radius: var(--text-radius);
    }
  }
  @media (max-width: 728px) {
    & {
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
