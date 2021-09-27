<template>
  <!-- new group Modal -->
  <div
    class="modal fade"
    id="newGroup"
    tabindex="-1"
    aria-labelledby="newGroup"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="newGroupModalLabel">新增群組</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-5 py-5">
          <p class="mt-3 ms-2 modal-label">Group 名稱</p>
          <input
            type="text"
            class="form-control mt-2 modal-input py-2"
            placeholder="ex:Group A"
          />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>
