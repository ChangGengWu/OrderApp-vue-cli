<template>
  <div class="mt-4 p-3">
    <h2 class="content-title p-1 ms-5 ps-3">歷史紀錄</h2>
  </div>
  <div class="filter-area mt-5">
    <ul class="history-filter">
      <li class="active"><a href="">全部</a></li>
      <li><a href="">已完成</a></li>
      <li><a href="">未完成</a></li>
    </ul>
  </div>

  <div class="d-flex flex-column h-75 mx-auto history-area">
    <table class="table w-100 mx-auto mt-2 align-middle table-history shadow">
      <thead>
        <tr class="mx-auto">
          <th scope="col">#</th>
          <th scope="col">Item name</th>
          <th scope="col">Group</th>
          <th scope="col">Amount</th>
          <th scope="col">Order time</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>A item</td>
          <td>Group A</td>
          <td>NT$150</td>
          <td>2021-08-24</td>
          <td>
            <h5><span class="badge bg-success">已完成</span></h5>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>B item</td>
          <td>Group B</td>
          <td>NT$150</td>
          <td>2021-08-24</td>
          <td>
            <h5><span class="badge bg-success">已完成</span></h5>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>C item</td>
          <td>Group C</td>
          <td>NT$150</td>
          <td>2021-08-24</td>
          <td>
            <h5><span class="badge bg-danger">未完成</span></h5>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>C item</td>
          <td>Group C</td>
          <td>NT$150</td>
          <td>2021-08-24</td>
          <td>
            <h5><span class="badge bg-success">已完成</span></h5>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>C item</td>
          <td>Group C</td>
          <td>NT$150</td>
          <td>2021-08-24</td>
          <td>
            <h5><span class="badge bg-success">已完成</span></h5>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>C item</td>
          <td>Group C</td>
          <td>NT$150</td>
          <td>2021-08-24</td>
          <td>
            <h5><span class="badge bg-success">已完成</span></h5>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>C item</td>
          <td>Group C</td>
          <td>NT$150</td>
          <td>2021-08-24</td>
          <td>
            <h5><span class="badge bg-success">已完成</span></h5>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
.history-area {
}

.table-history {
  border-collapse: collapse;
  font-family: "Poppins", sans-serif;
  border-radius: 1px;
  background-color: white;
}

.table-history thead {
  box-shadow: 0 5px 10px #e1e5ee;
}
.table-history th {
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.9rem;
  font-weight: 900;
}

.table-history tr {
  height: 5vh;
  min-height: 5vh;
  text-align: center;
}

.table-history tr:nth-child(even) {
  background-color: #f4f6fb;
}

.table-history td {
  padding: 1rem 2rem;
  font-size: 20px;
}

.filter-area {
  display: flex;
  height: 5vh;
  margin: 0 auto;
  justify-content: flex-end;
  align-items: center;
}

.history-filter {
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 0;
  height: 5vh;
  width: 25vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
}

.history-filter li {
  border: 5px;
  letter-spacing: 0.1rem;
  padding-bottom: 2px;
  font-size: 20px;
  cursor: pointer;
}

.history-filter .active {
  border-bottom: 4px solid #335c67;
}

.history-filter li:hover {
  border-bottom: 4px solid #335c67;
}
</style>
