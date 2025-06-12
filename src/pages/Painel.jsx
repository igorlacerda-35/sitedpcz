const fetchNumeros = async () => {
  try {
    const response = await fetch('https://gptwpp.onrender.com/autorizados');
    const data = await response.json();
    setNumeros(data);
  } catch (error) {
    console.error('Erro ao buscar números:', error);
  }
};

const adicionarNumero = async () => {
  if (!numeroNovo) return;
  try {
    await fetch('https://gptwpp.onrender.com/autorizados', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ telefone: numeroNovo }),
    });
    setNumeroNovo('');
    fetchNumeros(); // Atualiza a lista
  } catch (error) {
    console.error('Erro ao adicionar número:', error);
  }
};

const removerNumero = async (telefone) => {
  try {
    await fetch(`https://gptwpp.onrender.com/autorizados/${telefone}`, {
      method: 'DELETE',
    });
    fetchNumeros(); // Atualiza a lista
  } catch (error) {
    console.error('Erro ao remover número:', error);
  }
};
