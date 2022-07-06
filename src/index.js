import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// add(9).add(8).result()

const response = (result) => ({
  add(data) {
    return add(data, result);
  },
  multiply(data) {
    return multiply(data, result);
  },
  result() {
    return result;
  }
});

function add(val, initial = 0) {
  let result = val + initial;
  return response(result);
}

function multiply(val, initial = 1) {
  let result = val * initial;
  return response(result);
}

console.log(add(1).multiply(9).result());
