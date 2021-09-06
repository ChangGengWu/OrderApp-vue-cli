<template>
  <nav class="navbar navbar-expand-lg pe-5 ps-2 navbar-order">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <button
          class="btn text-white fs-4 toggle"
          id="toggle"
          @click="toggleSidebar"
        >
          <i class="bi bi-list"></i>
        </button>
        <a class="navbar-brand fs-4" href="">OrderApp</a>
      </div>
      <div class="d-flex align-items-baseline justify-content-center">
        <div>
          <span class="user-label"
            ><i class="bi bi-person-circle"></i>USER01</span
          >
        </div>
        <!-- <button type="button" class="btn btn-primary">登入</button> -->
      </div>
    </div>
  </nav>
</template>
<script>
/*eslint-disable*/
export default {
  setup() {
    function toggleSidebar() {
      console.log("124");
      $("#sidebar").toggleClass("hide");
    }

    return {
      toggleSidebar,
    };
  },
};
</script>

<style>
.navbar-order {
  letter-spacing: 0.1rem;
  color: #fffffc;
  background-color: #335c67;
  flex-grow: 1;
}

.user-label {
  border: 2px #6b705c solid;
  color: #6b705c;
  background-color: #f8f9fa;
  padding: 0.5rem 0.9rem;
  font-size: 18px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1rem;
}

.user-label i {
  margin-right: 5px;
}
</style>
