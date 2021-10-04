<template>
  <div class="d-flex row mt-5 flex-wrap justify-content-between">
    <div class="product-imgs col-md-6 border">
      <div
        id="carouselExampleIndicators"
        class="carousel slide mx-auto"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://fakeimg.pl/500x500/"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://fakeimg.pl/500x500/"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://fakeimg.pl/500x500/"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <ul
        class="d-flex mt-4 justify-content-between p-img-list mx-auto flex-wrap"
      >
        <li>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <img
              src="https://fakeimg.pl/100x100/"
              class="img-thumbnail"
              alt="..."
            />
          </button>
        </li>
        <li>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            class="active"
            aria-current="true"
            aria-label="Slide 2"
          >
            <img
              src="https://fakeimg.pl/100x100/"
              class="img-thumbnail"
              alt="..."
            />
          </button>
        </li>
        <li>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            class="active"
            aria-current="true"
            aria-label="Slide 3"
          >
            <img
              src="https://fakeimg.pl/100x100/"
              class="img-thumbnail"
              alt="..."
            />
          </button>
        </li>
      </ul>
    </div>
    <div class="product-order col-md-6">
      <div class="mt-4 p-3">
        <h2 class="content-title p-1 ps-3">商品A</h2>
      </div>
      <div class="d-flex flex-column align-items-start p-3">
        <div class="mt-2 w-50">
          <span class="product-label">項目</span>
          <select
            class="form-select mt-2 fs-5"
            aria-label="Default select example"
            id="product-item"
          >
            <option value="1">
              1
            </option>
          </select>
        </div>
        <div class="mt-4 w-50">
          <span class="product-label">數量</span>
          <input type="number" class="form-control mt-2 fs-5" />
        </div>
        <div class="mt-5 col-6 d-md-flex justify-content-md-end">
          <button class="btn btn-primary">購買</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.p-img-list {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  width: 35rem;
}
.p-img-list > li {
  margin-left: 1rem;
  margin-top: 1rem;
}
.p-img-list > li > button {
  border: none;
}
.carousel {
  width: 50vh;
}

.product-label {
  font-size: 18px;
}
</style>
