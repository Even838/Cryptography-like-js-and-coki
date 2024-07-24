    function criptografar() {
      const input = document.getElementById('input').value;
      const criptografado = btoa(input);
      document.getElementById('saida').textContent = criptografado;
    }
