<template>
  <div class="d-flex align-items-center" style="height:80vh">
    <div class="row px-5 pt-5 pb-4 container-list login-plate shadow">
      <div class="mt-4 p-3 d-flex justify-content-center">
        <h2 class="content-title p-1 ms-5 ps-3 inline">登入</h2>
      </div>
      <form class="g-3 py-3">
        <div class="w-75 mx-auto">
          <div class="mb-4">
            <label for="exampleFormControlInput1" class="form-label input-label"
              >Email</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              v-model="email"
            />
          </div>
          <div class="mb-5">
            <label for="passwordInput" class="form-label input-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="passwordInput"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="mb-4 row d-flex justify-content-center">
            <button class="btn col-sm-12 btn-main" @click.prevent="login">
              登入
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    function login() {
      const obj = {
        email: email.value,
        password: password.value,
      };
      axios
        .post("http://localhost:8081/login", obj)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    return {
      email,
      password,
      login,
    };
  },
};
</script>
<style scoped>
.login-plate {
  width: 40rem;
  background-color: #ffffff;
}

.form-control {
  line-height: 2.5;
  font-size: 18px;
}

.input-label {
  font-size: 18px;
  font-weight: 600;
  color: #495057;
  letter-spacing: 0.05rem;
}

.btn-main {
  color: #fff;
  background-color: #335c67;
  border-color: #335c67;
}
</style>
