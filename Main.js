    function criptografar() {
      const input = document.getElementById('input').value;
      const criptografado = btoa(input);
      document.getElementById('saida').textContent = criptografado;
    }

    function desc() {
      const inp = document.getElementById('des').value;
      const textoOriginal = atob(inp);
      document.getElementById('resultado').textContent = textoOriginal;
    }