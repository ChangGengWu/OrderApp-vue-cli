<template>
  <div class="mt-4 p-3">
    <h2 class="content-title p-1 ms-5 ps-3">進行中</h2>
  </div>
  <div class="row mt-1 px-5 py-5 container-list container">
    <div class="col-md-6 col-lg-3 mb-5">
      <div class="card shadow card-order">
        <div class="card-body">
          <h3 class="card-title mt-4 ms-4 card-order-title">XX Store</h3>
          <hr />
          <div class="card-content">
            <p
              class="card-text calendar-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="截止時間"
            >
              <i class="bi bi-calendar-check"></i>2021/8/25
              <span class="time-text">11:00</span>
            </p>

            <p
              class="card-text mt-2 group-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="群組"
            >
              <i class="bi bi-people"></i>Group A
            </p>
            <p
              class="card-tex mt-3 clock-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="剩餘時間"
            >
              <i class="bi bi-alarm"></i>1hr 46mins left..
            </p>
          </div>
          <div class="text-center">
            <router-link to="product">
              <a href="#" class="btn mt-2 btn-order">訂購</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3 mb-5">
      <div class="card shadow card-order">
        <div class="card-body">
          <h3 class="card-title mt-4 ms-4 card-order-title">XX Store</h3>
          <hr />
          <div class="card-content">
            <p
              class="card-text calendar-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="截止時間"
            >
              <i class="bi bi-calendar-check"></i>2021/8/25
              <span class="time-text">11:00</span>
            </p>

            <p
              class="card-text mt-2 group-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="群組"
            >
              <i class="bi bi-people"></i>Group A
            </p>
            <p
              class="card-tex mt-3 clock-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="剩餘時間"
            >
              <i class="bi bi-alarm"></i>1hr 46mins left..
            </p>
          </div>
          <div class="text-center">
            <a href="#" class="btn mt-2 btn-order">訂購</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3 mb-5">
      <div class="card shadow card-order">
        <div class="card-body">
          <h3 class="card-title mt-4 ms-4 card-order-title">DD Store</h3>
          <hr />
          <div class="card-content">
            <p
              class="card-text calendar-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="截止時間"
            >
              <i class="bi bi-calendar-check"></i>2021/8/25
              <span class="time-text">11:00</span>
            </p>

            <p
              class="card-text mt-2 group-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="群組"
            >
              <i class="bi bi-people"></i>Group A
            </p>
            <p
              class="card-tex mt-3 clock-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="剩餘時間"
            >
              <i class="bi bi-alarm"></i>1hr 46mins left..
            </p>
          </div>
          <div class="text-center">
            <a href="#" class="btn mt-2 btn-order">訂購</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3 mb-5">
      <div class="card shadow card-order">
        <div class="card-body">
          <h3 class="card-title mt-4 ms-4 card-order-title">BB Store</h3>
          <hr />
          <div class="card-content">
            <p
              class="card-text calendar-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="截止時間"
            >
              <i class="bi bi-calendar-check"></i>2021/8/25
              <span class="time-text">11:00</span>
            </p>

            <p
              class="card-text mt-2 group-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="群組"
            >
              <i class="bi bi-people"></i>Group A
            </p>
            <p
              class="card-tex mt-3 clock-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="剩餘時間"
            >
              <i class="bi bi-alarm"></i>1hr 46mins left..
            </p>
          </div>
          <div class="text-center">
            <a href="#" class="btn mt-2 btn-order">訂購</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3 mb-5">
      <div class="card shadow card-order">
        <div class="card-body">
          <h3 class="card-title mt-4 ms-4 card-order-title">CC Store</h3>
          <hr />
          <div class="card-content">
            <p
              class="card-text calendar-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="截止時間"
            >
              <i class="bi bi-calendar-check"></i>2021/8/25
              <span class="time-text">11:00</span>
            </p>

            <p
              class="card-text mt-2 group-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="群組"
            >
              <i class="bi bi-people"></i>Group A
            </p>
            <p
              class="card-tex mt-3 clock-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="剩餘時間"
            >
              <i class="bi bi-alarm"></i>1hr 46mins left..
            </p>
          </div>
          <div class="text-center">
            <a href="#" class="btn mt-2 btn-order">訂購</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.toggle:focus,
.toggle:active {
  outline: none !important;
  box-shadow: none;
}
.main {
  flex-shrink: 1;
  width: 100%;
}

.main-content {
  width: 100%;
}

.container-list {
  list-style: none;
}

.content-title {
  font-size: 38px;
  letter-spacing: 0.3rem;
  margin: 0 auto;
  width: 80%;
  display: inline;
  border-left: 5px #335c67 solid;
}

.card-order {
  width: 16rem;
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
  width: 13rem;
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
