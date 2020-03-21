<script>

  // sprawdzanie emaila

  var email = document.getElementById('email')
  var checkbox = document.getElementById('checkbox');
  function check()
  {
    var tekst = email.value;
    var tablica = tekst.split('');
    var find = tablica.find(e=> e=="@");
    var button = document.getElementById("button_send");

    if (find==="@")
    {
      document.getElementById('check').innerText = "";
      if (checkbox.checked == true)
      {
      button.disabled = false;
      }
      else
      {
        button.disabled = "true";
      }

    }
    else
    {
      document.getElementById('check').innerHTML = "Email nie jest poprawny";
      button.disabled = "true";
    }
  }
  email.addEventListener("keyup", check);
  checkbox.addEventListener("click", check);

  // koniec sprawdzania emaila

</script>
