export default function Login() {
  return `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <form onsubmit="login(event)">
        <h2>Login</h2>
        <input type="text" id="telefone" placeholder="Telefone" required />
        <input type="password" id="senha" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
    <script>
      async function login(event) {
        event.preventDefault();
        const telefone = document.getElementById('telefone').value;
        const senha = document.getElementById('senha').value;

        const res = await fetch('https://gptwpp.onrender.com/autorizados', {
          method: 'GET'
        });

        const dados = await res.json();
        if (dados.telefones && dados.telefones.includes(telefone)) {
          alert('Login autorizado!');
        } else {
          alert('Telefone não autorizado.');
        }
      }
    </script>
  `;
}
