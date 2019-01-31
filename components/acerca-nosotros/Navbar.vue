<template>
  <nav>
    <div class="logo">
      <img src="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/index%2F51378276_373904483444533_7976740831249825792_n.png?alt=media&token=e0219f2e-9688-40be-bd66-2c2990abb0a8"
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
      padding: 7px 20px;
      list-style: none;
      background: white;
      border-radius: 25px;
      font-size: 18px;
      font-weight: 500;
    }
  }
  @media (max-width: 450px) {
    & {
      flex-direction: column;
      justify-content: center;
    }
    ul li {
      padding: 5px 15px;
      font-size: 15px;
    }
  }
}
</style>
