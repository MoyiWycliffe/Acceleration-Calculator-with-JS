function calculateAcceleration() {
    const u = parseFloat(document.getElementById("initial").value);
    const v = parseFloat(document.getElementById("final").value);
    const t = parseFloat(document.getElementById("time").value);
    const result = document.getElementById("result");

    if (!isNaN(u) && !isNaN(v) && !isNaN(t) && t > 0) {
      const a = (v - u) / t;
      result.textContent = `Acceleration = ${a.toFixed(2)} m/s²`;
    } else {
      result.textContent = "Please enter valid positive values for all fields.";
    }
  }

  function resetCalculator() {
    document.getElementById("initial").value = "";
    document.getElementById("final").value = "";
    document.getElementById("time").value = "";
    document.getElementById("result").textContent = "";
  }