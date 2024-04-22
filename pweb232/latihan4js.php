
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript if</h2>

<p>Display "Good day!" if the hour is less than 18:00:</p>

<p id="isi">Good Evening!</p>
<form>
    30% nilai Tugas :
    <input type="number" name="tugas" id="tugas">
    <br>
    30% nilai UTS :
    <input type="number" name="uts" id="uts">
    <br>
    40% nilai UAS :
    <input type="number" name="uas" id="uas">
    <br>
    <button type="button" onclick='myfungsi()'>hitung</button>
    hasil :
    <input type="text" name="hasil" id="hasil">
</form>

<script>
    function myfungsi(){
        let uts1 = parseFloat(document.getElementById("uts").value);
        let uas1 = parseFloat(document.getElementById("uas").value);
        let tugas1 = parseFloat(document.getElementById("tugas").value);
        let nilai = (0.3 * uts1) + (0.3 * uas1) + (0.4 * tugas1);

        if (nilai >= 80) {
            document.getElementById("hasil").value = "A";
        } else if (nilai >= 70) {
            document.getElementById("hasil").value = "B";
        } else {
            document.getElementById("hasil").value = "C";
        }
    }
</script>

</body>
</html>
