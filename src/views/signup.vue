<template>
  <div class="d-flex align-items-center" style="height:80vh">
    <div class="row mt-5 p-5 container-list w-50 signup-background shadow">
      <div class="mt-4 p-3 d-flex justify-content-center">
        <h2 class="content-title p-1 ms-5 ps-3 inline">註冊</h2>
      </div>
      <form class="g-3 py-3 needs-validation">
        <div class="w-75 mx-auto">
          <div class="mb-4">
            <label
              for="exampleFormControlInput1"
              class="form-label input-label "
              >Email</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
            />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="mb-4">
            <label for="passwordInput" class="form-label input-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="passwordInput"
              placeholder="Password"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="confirmPasswordInputInput"
              class="form-label input-label"
              >Confirm Password</label
            >
            <input
              type="password"
              class="form-control"
              id="confirmPasswordInputInput"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div class="mb-4 row d-flex justify-content-center">
            <button class="btn btn-primary col-sm-4">註冊</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.signup-background {
  background-color: #ffffff;
}

.form-control {
  line-height: 2;
  font-size: 18px;
}

.input-label {
  font-size: 18px;
  font-weight: 600;
  color: #495057;
  letter-spacing: 0.05rem;
}
</style>
