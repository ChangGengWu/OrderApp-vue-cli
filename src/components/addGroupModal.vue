<template>
  <!-- add group Modal -->
  <div
    class="modal fade"
    id="addGroup"
    tabindex="-1"
    aria-labelledby="addGroup"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addGroupModalLabel">加入群組</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-5 pt-3 pb-5">
          <p class="mt-1 ms-1 modal-label fs-4">Group ID</p>
          <input
            type="text"
            class="form-control mt-2 modal-input py-2 lh-lg"
            placeholder="ex:581359321"
          />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>
