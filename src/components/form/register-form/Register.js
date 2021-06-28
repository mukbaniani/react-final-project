function Register() {
  return (
    <div className="container text-center mt-4 border">
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          @
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>

      <div class="input-group mb-3 mt-4">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span class="input-group-text" id="basic-addon2">
          @example.com
        </span>
      </div>

      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          @
        </span>
        <input
          type="password"
          class="form-control"
          placeholder="password"
          aria-label="password"
          aria-describedby="addon-wrapping"
        />
      </div>
      <button className="btn btn-primary text-center mt-4">რეგისტრაცია</button>
    </div>
  );
}

export default Register;
