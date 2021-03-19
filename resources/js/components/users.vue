<template>
  <div class="bg-white p-5">
    <div class="box">
      <div
        class="box-header d-flex align-items-center justify-content-between mb-2"
      >
        <div class="d-flex align-items-center">
          <h3 class="box-title m-0">Users List</h3>
          <a
            href="http://"
            class="ml-3 btn btn-primary"
            data-toggle="modal"
            data-target="#addNewModal"
          >
            <i class="fa fa-user text-white"></i>
            &nbsp;Add New
          </a>
        </div>
        <div class="box-tools">
          <div
            class="input-group input-group-sm hidden-xs d-flex align-items-center"
          >
            <input
              type="text"
              name="table_search"
              class="form-control pull-right"
              placeholder="Search"
            />

            <div class="input-group-btn">
              <button type="submit" class="btn btn-default">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- /.box-header -->
      <div class="box-body table-responsive no-padding">
        <table class="table table-striped table-hover">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Modify</th>
            </tr>
            <tr>
              <td>183</td>
              <td>John Doe</td>
              <td>11-7-2014</td>
              <td><span class="label label-success">Approved</span></td>
              <td class="d-grid gap-2">
                <a href="#" class="bg-success p-2">
                  <i class="fa fa-edit text-white"> </i>
                </a>
                <a href="#" class="bg-danger p-2">
                  <i class="fa fa-trash text-white"> </i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.box-body -->
    </div>
    <!-- /.box -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="addNewModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Add New User</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
