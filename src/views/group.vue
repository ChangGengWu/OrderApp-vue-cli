<template>
  <div class="mt-4 p-3">
    <h2 class="content-title p-1 ms-5 ps-3">群組</h2>
  </div>
  <div class="d-flex justify-content-end group-area">
    <button
      class="btn btn-success me-1 d-flex align-items-center"
      data-bs-toggle="modal"
      data-bs-target="#addGroup"
    >
      <i class="bi bi-person-plus me-1"></i>加入群組
    </button>
    <button
      class="btn btn-danger me-1 d-flex align-items-center"
      data-bs-toggle="modal"
      data-bs-target="#newGroup"
    >
      <i class="bi bi-plus-square me-1"></i>新增群組
    </button>
  </div>
  <ul class="list-group group-area order-groups mt-4">
    <li class="list-group-item px-5 py-3 mb-3">
      <div class="d-flex w-100 justify-content-between align-items-center">
        <p class="mb-1 group-title w-50 ms-4">中文測試</p>
        <div class="group-info w-25">
          <div class="group-tags w-75">
            <span class="badge bg-danger">美食</span>
            <span class="badge bg-primary">美食</span>
            <span class="badge bg-warning">美食</span>
          </div>
          <span class="member-num"><i class="bi bi-person"></i>31</span>
        </div>
        <a class="btn-group-check"
          ><i class="bi bi-chevron-compact-right"></i
        ></a>
      </div>
    </li>
    <li class="list-group-item px-5 py-3 mb-3">
      <div class="d-flex w-100 justify-content-between align-items-center">
        <p class="mb-1 group-title w-50 ms-4">中文測試</p>
        <div class="group-info w-25">
          <div class="group-tags w-75">
            <span class="badge bg-danger">美食</span>
            <span class="badge bg-primary">美食</span>
            <span class="badge bg-warning">美食</span>
          </div>
          <span class="member-num"><i class="bi bi-person"></i>31</span>
        </div>
        <a class="btn-group-check"
          ><i class="bi bi-chevron-compact-right"></i
        ></a>
      </div>
    </li>
    <li class="list-group-item px-5 py-3 mb-3">
      <div class="d-flex w-100 justify-content-between align-items-center">
        <p class="mb-1 group-title w-50 ms-4">中文測試</p>
        <div class="group-info w-25">
          <div class="group-tags w-75">
            <span class="badge bg-danger">美食</span>
            <span class="badge bg-primary">美食</span>
            <span class="badge bg-warning">美食</span>
          </div>
          <span class="member-num"><i class="bi bi-person"></i>31</span>
        </div>
        <a class="btn-group-check"
          ><i class="bi bi-chevron-compact-right"></i
        ></a>
      </div>
    </li>
    <li class="list-group-item px-5 py-3 mb-3">
      <div class="d-flex w-100 justify-content-between align-items-center">
        <p class="mb-1 group-title w-50 ms-4">中文測試</p>
        <div class="group-info w-25">
          <div class="group-tags w-75">
            <span class="badge bg-danger">美食</span>
            <span class="badge bg-primary">美食</span>
            <span class="badge bg-warning">美食</span>
          </div>
          <span class="member-num"><i class="bi bi-person"></i>31</span>
        </div>
        <a class="btn-group-check"
          ><i class="bi bi-chevron-compact-right"></i
        ></a>
      </div>
    </li>
    <li class="list-group-item px-5 py-3 mb-3">
      <div class="d-flex w-100 justify-content-between align-items-center">
        <p class="mb-1 group-title w-50 ms-4">中文測試</p>
        <div class="group-info w-25">
          <div class="group-tags w-75">
            <span class="badge bg-danger">美食</span>
            <span class="badge bg-primary">美食</span>
            <span class="badge bg-warning">美食</span>
          </div>
          <span class="member-num"><i class="bi bi-person"></i>31</span>
        </div>
        <a class="btn-group-check"
          ><i class="bi bi-chevron-compact-right"></i
        ></a>
      </div>
    </li>
    <li class="list-group-item px-5 py-3 mb-3">
      <div class="d-flex w-100 justify-content-between align-items-center">
        <p class="mb-1 group-title w-50 ms-4">中文測試</p>
        <div class="group-info w-25">
          <div class="group-tags w-75">
            <span class="badge bg-danger">美食</span>
            <span class="badge bg-primary">美食</span>
            <span class="badge bg-warning">美食</span>
          </div>
          <span class="member-num"><i class="bi bi-person"></i>31</span>
        </div>
        <a class="btn-group-check"
          ><i class="bi bi-chevron-compact-right"></i
        ></a>
      </div>
    </li>
  </ul>
</template>
<style>
.group-area {
  margin: 0 auto;
}

.btn-group {
  width: 15vh;
  border-radius: 2px;
  background-color: #e29578;
  border-color: #e29578;
  color: #fff;
  box-shadow: -3px 3px 15px #e29578;
}

.member-num {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: #2a9d8f;
}

.order-groups .group-title {
  font-size: 29px;
  font-weight: 500;
  letter-spacing: 0.3rem;
  color: #495057;
}

.order-groups li:hover {
  transform: scale(1.02, 1.02);
  transition: 0.5s;
}

.group-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.btn-group-check {
  font-size: 38px;
  color: #e29578;
}

.group-tags {
  display: flex;
  flex-wrap: wrap;
}

.group-tags span {
  margin-right: 0.5rem;
  font-size: 14px;
  font-weight: 400;
}
</style>
