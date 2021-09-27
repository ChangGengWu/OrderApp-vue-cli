<template>
  <div class="mt-4 p-3">
    <h2 class="content-title p-1 ms-5 ps-3">開團</h2>
  </div>
  <div class="mt-4 w-50 mx-auto">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">名稱</span>
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="hostName"
      />
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">選擇群組</span>
      <select
        class="form-select form-select-sm"
        aria-label=".form-select-sm example"
        v-model="hostGroup"
      >
        <option selected>Open this select menu</option>
        <option value="1">Group A</option>
        <option value="2">Group B</option>
        <option value="3">Group C</option>
      </select>
    </div>

    <div class="row row-cols-lg-auto g-3 align-items-center mb-3 w-75 mt-4">
      <div class="col-12">
        <label class="visually-hidden" for="itemName">項目</label>
        <div class="input-group">
          <div class="input-group-text">項目</div>
          <input
            type="text"
            class="form-control"
            id="itemName"
            placeholder="Username"
            v-model="itemName"
          />
        </div>
      </div>
      <div class="col-12">
        <label class="visually-hidden" for="itemPrice">價格</label>
        <div class="input-group">
          <div class="input-group-text">價格</div>
          <input
            type="text"
            class="form-control"
            id="itemPrice"
            placeholder="Username"
            v-model="itemPrice"
          />
        </div>
      </div>
      <div class="col-12">
        <button
          id="addMenu"
          type="button"
          class="btn btn-primary"
          @click="addMenu"
        >
          新增
        </button>
      </div>
      <ul id="tag-list" class="d-flex flex-wrap col-12 menu-tags mb-4">
        <li v-for="item in menuList" :key="item.id" class="mb-1 me-1">
          <span>{{ item.itemName }} {{ item.itemPrice }}</span>
          <button class="btn menu-delete" @click="deleteItem(item)">
            <i class="bi bi-x"></i>
          </button>
        </li>
      </ul>
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">備註</span>
      <textarea
        class="form-control"
        aria-label="With textarea"
        v-model="hostDescription"
      ></textarea>
    </div>
    <div class="mb-5">
      <imgUpload />
    </div>
    <div class="col-12 mb-4">
      <button type="button" class="btn btn-primary" @click="submitMenu">
        開團
      </button>
    </div>
    {{ hostName }}{{ hostGroup }}{{ itemName }}{{ menuList
    }}{{ hostDescription }}
  </div>
</template>

<script>
import { ref } from "vue";
import imageUpload from "../components/imgUpload";
import imgUpload from "../components/imgUpload.vue";
export default {
  components: { imgUpload },
  setup() {
    const hostName = ref("");
    const hostGroup = ref("");
    const itemName = ref("");
    const itemPrice = ref("");
    const hostDescription = ref("");
    const menuList = ref([]);

    function addMenu() {
      menuList.value.push({
        id: menuList.value.length + 1,
        itemName: itemName.value,
        itemPrice: itemPrice.value,
      });
    }

    function deleteItem(item) {
      const index = menuList.value.findIndex((obj) => obj.id === item.id);
      menuList.value.splice(index, 1);
    }

    function submitMenu() {}

    return {
      addMenu,
      menuList,
      itemPrice,
      itemName,
      hostName,
      hostGroup,
      hostDescription,
      deleteItem,
      submitMenu,
      imageUpload,
    };
  },
};
</script>

<style scoped>
.menu-tags {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}

.menu-tags li {
  min-width: 5rem;
  min-height: 2.125rem;
  background-color: #468faf;
  /* border-left: 4px solid #cb997e; */
  letter-spacing: 0.05rem;
  padding: 0.1rem 0.1rem;
  margin-left: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-weight: 500;
  /* box-shadow: -1px 0px 5px #e5989b; */
}
.menu-tags > li span {
  margin-left: 0.5rem;
}
.menu-delete {
  color: #ffffff;
  padding: 0 0 !important;
}
.menu-delete:focus,
.menu-delete:active {
  outline: none !important;
  box-shadow: none;
}
</style>
