<template>
  <div
    id="sidebar"
    class="
    d-flex
    flex-column
    py-3
    ps-3
    text-white
    bg-dark
    justify-content-between
    sidebar
  "
    style="width: 250px; height: 100vh;"
  >
    <span class="fs-4">Sidebar</span>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <router-link to="/avaiable" active-class="active" class="nav-link">
        <li class="nav-item text-white d-flex align-items-center">
          <i class="bi bi-bag-check me-2"></i>
          開放中
        </li>
      </router-link>
      <router-link to="/groups" active-class="active" class="nav-link">
        <li class="nav-item text-white d-flex align-items-center">
          <i class="bi bi-people me-2"></i>
          群組
        </li>
      </router-link>
      <router-link to="/history" active-class="active" class="nav-link">
        <li class="nav-item text-white d-flex align-items-center">
          <i class="bi bi-list-ul me-2"></i>
          歷史紀錄
        </li>
      </router-link>
    </ul>
    <ul class="nav nav-pills flex-column">
      <router-link to="/hostEvent" active-class="active" class="nav-link">
        <li class="nav-item text-white d-flex align-items-center">
          <i class="bi bi-bag-check me-2"></i>
          開團
        </li>
      </router-link>
      <li>
        <a
          href="#"
          class="nav-link text-white d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#addGroup"
        >
          <i class="bi bi-person-plus me-2"></i>
          加入群組
        </a>
      </li>
      <li>
        <a
          href="#"
          class="nav-link text-white d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#newGroup"
        >
          <i class="bi bi-plus-square me-2"></i>
          建立群組
        </a>
      </li>
    </ul>
    <hr />
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const menu = ref([
      {
        href: "/",
        title: "Dashboard",
      },
      {
        href: "/history",
        title: "History",
      },
    ]);
    return {
      menu,
    };
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-wrap: nowrap;
  width: auto;
  height: calc(100vh - 7rem);
  height: -webkit-fill-available;
  max-height: 100%;
  overflow: hidden;
  overflow-y: auto;
  position: sticky;
  top: 0rem;
}

.sidebar ul {
  margin-top: 1.2rem;
}

.sidebar li {
  letter-spacing: 0.1rem;
  font-weight: 300;
  margin-top: 0.3rem;
  font-size: 17px;
}
.sidebar li > a {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.sidebar i {
  font-size: 2rem;
}
.hide {
  display: none !important;
}

.sidebar .nav-link.active {
  background-color: #b98b73 !important;
}

.sidebar .nav-pills .nav-link {
  border-radius: 0.1rem;
}
</style>
