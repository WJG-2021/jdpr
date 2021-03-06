<!--
admin.php
Team JDPR (Jake Gerard, David Boone, Phillip Ball, Raju Shrestha)
01/31/2021
This is the admin page for admins at Coneybeare Cleantech
-->

    <?php
        include("includes/header.html");
    ?>

    <!-- Form Data For Approval/Rejection -->
    <div class="container row mx-auto d-flex justify-content-center text-center">
        <div class="col-12 row border border-success rounded mb-3">
            <h3 class="col-12 text-left">Company Info.</h3>
            <hr class="col-11 my-2">
            <div class="col-12 col-md-4">
                <p>Company name: Placeholder</p>
                <p>Website: https://www.placeholder.placeholder</p>
                <p>Location: City, State/Province, Country</p>
                <p>Category: Placeholder</p>
                <p>Company Serves: Local/Regional, state, national, or global</p>
            </div>
            <div class="col-12 col-md-4">
                <p>About Company.</p>
                <p>Placeholder for about data</p>
            </div>
            <div class="col-12 col-md-4">
                <img src="images/coneybeare-icon-only.png" alt="PLACEHOLDER COMPANY ICON">
                <p>Placeholder for company tagline.</p>
            </div>
        </div>
        <div class="col-6 border border-success rounded">
            <h3 class="col-12 text-left">Contact Info.</h3>
            <hr class="col-11 my-2">
            <p>First Name: Placeholder</p>
            <p>Last Name: Placeholder</p>
            <p class="text-truncate">Email: <a href="#" class="flex-wrap">placeholder@placeholder.placeholder</a></p>
        </div>
        <div class="col-6 row align-self-center d-flex justify-content-center">
            <button type="button" class="btn btn-outline-success col-8 mb-1">Approve</button>
            <button type="button" class="btn btn-outline-danger col-8 mt-1">Reject</button>
        </div>
    </div>

    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>