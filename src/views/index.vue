<template id="app">
  <div class="wrapper">
    <div id="main" class="main mx-auto">
      <header id="nav-area" class="sticky-top">
        <navbar />
      </header>
      <div id="main-content" class="container-fluid mx-auto">
        <router-view />
      </div>
    </div>
    <div id="sidebar-area" class="sidebar-area">
      <sidebar />
    </div>
    <addGroupModal />
    <newGroupModal />
  </div>
</template>

<script>
import navbar from "../components/navbar";
import sidebar from "../components/sidebar";
import addGroupModal from "../components/addGroupModal";
import newGroupModal from "../components/newGroupModal";
export default {
  components: {
    //引入複數components
    navbar,
    sidebar,
    addGroupModal,
    newGroupModal,
  },
};
</script>
<style scoped>
.card-order {
  width: 25vh;
  border-radius: 4px;
  /* background-color: #e8e8e4; */
  background-color: #ffffff;
  cursor: pointer;
  margin: 0 auto;
}

.card-order-title {
  color: #555b6e;
  font-size: 34px;
  font-weight: 500;
}

.card-order:hover {
  transform: scale(1.03, 1.03);
  transition: 0.3s;
}

.card-content {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  font-weight: 500;
  color: #636e72;
  letter-spacing: 0.1rem;
}

.card-content i {
  margin-right: 0.5rem;
}

.calendar-text {
  color: #2a9d8f;
}
.clock-text {
  font-size: 16px;
  color: #e56b6f;
}
.group-text {
  color: #219ebc;
}

.btn-order {
  width: 20vh;
  border-radius: 2px;
  background-color: #e29578;
  border-color: #e29578;
  color: #fff;
  box-shadow: -3px 3px 15px #e29578;
}

.btn-order:hover {
  background-color: #f9dcc4;
  border-color: #ffac81;
  color: #e29578;
  font-weight: 600;
}

.modal-label {
  color: #5d636c;
  font-weight: 600;
  letter-spacing: 0.1rem;
}

.modal-input {
  letter-spacing: 0.1rem;
}
</style>
