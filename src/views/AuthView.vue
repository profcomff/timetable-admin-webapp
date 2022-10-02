<template>
  <div
    class="init-background"
    :style="{
      backgroundImage: `url('${bgItem}')`,
    }"
  >
    <div class="container">
      <form class="init">
        <img :src="logoItem" :style="{ backgroundColor: '#fff' }" />
        <h1>Вход в приложение!</h1>
        <p>Для редактирования данных необходимо войти в систему</p>
        <div class="form-floating row">
          <input
            type="email"
            class="form-control col"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Логин</label>
        </div>
        <div class="form-floating row">
          <input
            type="password"
            class="form-control col"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Пароль</label>
        </div>
        <button
          type="button"
          class="btn btn-primary btn-lg save-button"
          @click="saveGroup"
        >
          Вход
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthView",
  computed: {
    logoItem() {
      return `${process.env.VUE_APP_CDN}/app/logo/logo_ff.svg`;
    },
    bgItem() {
      return `${process.env.VUE_APP_CDN}/app/background.png`;
    },
  },
};
</script>

<style scoped>
.init-background {
  width: 100%;
  height: 100vh;
  /* background-image: url(v-bind(bgItem)); */
  background-repeat: repeat;
  background-size: cover;
  background-clip: padding-box;
}
.init {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
  padding-top: 66px;
  padding-bottom: 66px;
  gap: 1em;
  width: 100%;
  height: 100%;
}
.container {
  height: 100%;
}
h1 {
  font-weight: bold;
}
p {
  text-align: justify;
}
.group-selector:hover {
  opacity: 0.6;
  box-shadow: none;
}
.group-selector:focus,
:active {
  box-shadow: none;
  border-width: 1px;
  border-color: #ced4da;
}
.save-button {
  background-color: var(--bs-primary);
  border: none;
}
.save-button:hover {
  opacity: 0.6;
}
.save-button:focus,
:active {
  box-shadow: none;
}
img {
  width: 40%;
  height: auto;
  max-width: 200px;
  border-radius: 50%;
}
</style>
