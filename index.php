<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vue Router </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://unpkg.com/vue-router@4"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue3-sfc-loader"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <style>
        a.router-link-active.router-link-exact-active.nav-link {
            color: #f8f9fa !important;
            background: #563218 !important;
        }
    </style>
</head>

<body>
    <div id="app">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <router-link class="nav-link" to="/home">Home</router-link>
                                    <router-link class="nav-link" to="/about">About</router-link>
                                    <router-link class="nav-link" to="/services">Services</router-link>
                                    <router-link class="nav-link" to="/news">News</router-link>
                                    <router-link class="nav-link" to="/sports">Sports</router-link>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>

    <script src="/app.js"></script> 

   
</body>

</html>