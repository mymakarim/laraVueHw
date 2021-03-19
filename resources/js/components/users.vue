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
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>
                                <span class="label label-success">{{
                                    user.type
                                }}</span>
                            </td>
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
                        <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form
                            @submit.prevent="addNew"
                            @keydown="form.onKeydown($event)"
                        >
                            <div class="form-group">
                                <label>Name</label>
                                <input
                                    v-model="form.name"
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': form.errors.has('name')
                                    }"
                                />
                                <has-error
                                    :form="form"
                                    field="name"
                                ></has-error>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input
                                    v-model="form.email"
                                    type="text"
                                    name="email"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': form.errors.has('email')
                                    }"
                                />
                                <has-error
                                    :form="form"
                                    field="email"
                                ></has-error>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input
                                    v-model="form.password"
                                    type="password"
                                    name="password"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': form.errors.has(
                                            'password'
                                        )
                                    }"
                                />
                                <has-error
                                    :form="form"
                                    field="password"
                                ></has-error>
                            </div>

                            <div class="form-group">
                                <label>Bio</label>
                                <textarea
                                    v-model="form.bio"
                                    rows="3"
                                    name="bio"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': form.errors.has('bio')
                                    }"
                                />
                                <has-error :form="form" field="bio"></has-error>
                            </div>
                            <div class="form-group">
                                <select
                                    v-model="form.type"
                                    name="type"
                                    id="type"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': form.errors.has('type')
                                    }"
                                >
                                    <option value="">Select User Type</option>
                                    <option value="user">User</option>
                                    <option value="Admin">Administrator</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    :disabled="form.busy"
                                    type="submit"
                                    class="btn btn-primary"
                                >
                                    Add New User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: new Form({
                name: "",
                email: "",
                password: "",
                type: "",
                bio: "",
                photo:
                    "https://avatars.githubusercontent.com/u/39916324?s=460&u=602ca47fcce463981a2511a21148236f304ec934&v=4"
            }),
            users: {}
        };
    },
    methods: {
        addNew() {
            // Submit the form via a POST request
            this.form.post("api/user").then(({ data }) => {
                console.log("Form Data => ", data);
            });
        },
        loadUsers() {
            axios.get("api/user").then(({ data }) => {
                this.users = data.data;
            });
        }
    },
    created() {
        this.loadUsers();
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
