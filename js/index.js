const btn = document.getElementById('convert-btn');
const input = document.getElementById('input-box');
const output = document.getElementById('output-box');
const type = document.getElementById('type');
const copybtn = document.getElementById('copy');
const format = document.getElementById('format');

let result = "";

// Clear input/output when type changes
type.addEventListener('change', () => {
  input.value = "";
  output.value = "";
});

// Convert button
btn.addEventListener('click', () => {
  result = "";
  const mode = type.value;
  const fmt = format.value;

  if (fmt === "binary") {
    if (mode === "encode") encodeBinary();
    else decodeBinary();
  } else if (fmt === "hex") {
    if (mode === "encode") encodeHex();
    else decodeHex();
  }
});

// Copy output
copybtn.addEventListener('click', () => {
  if (output.value.length > 0) {
    navigator.clipboard.writeText(output.value)
      .then(() => alert("Copied to clipboard! ✅"))
      .catch(() => alert("Copy failed ❌"));
  }
});

// Binary encode/decode
function encodeBinary() {
  const text = input.value;
  result = text
    .split("")
    .map(c => c.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
  output.value = result;
}

function decodeBinary() {
  const binaries = input.value.trim().split(" ");
  result = binaries
    .map(bin => String.fromCharCode(parseInt(bin, 2)))
    .join("");
  output.value = result;
}

// Hex encode/decode
function encodeHex() {
  const text = input.value;
  result = text
    .split("")
    .map(c => c.charCodeAt(0).toString(16).padStart(2, "0"))
    .join(" ");
  output.value = result;
}

function decodeHex() {
  const hexes = input.value.trim().split(" ");
  result = hexes
    .map(h => String.fromCharCode(parseInt(h, 16)))
    .join("");
  output.value = result;
}