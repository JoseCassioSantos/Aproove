document.addEventListener('DOMContentLoaded', function() {
    // Suas credenciais e URL da API
    const url = 'https://neoservice.neobpo.com.br/tas/api/operatorChangeActivities'; // URL da API
    const username = 'APITOPDESK';
    const password = '7haq5-12znj-xdzgf-jpdpx-ovoz2';
    const credentials = btoa(`${username}:${password}`);
    const headers = {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json'
    };

    fetch(url, { headers: headers })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(mudancas => {
            const mudancasDiv = document.getElementById('mudancas');
            mudancas.results.forEach(mudanca => { //Ajuste para acessar os resultados da api
                const mudancaDiv = document.createElement('div');
                mudancaDiv.classList.add('mudanca');
                mudancaDiv.innerHTML = `
                    <h2>${mudanca.change.number}</h2>
                    <p>ID: ${mudanca.change.id}</p>
                    <p>Status: ${mudanca.processingStatus}</p>
                    <div class="botoes">
                        <button onclick="aprovarMudanca('${mudanca.change.id}')">Aprovar</button>
                        <button onclick="rejeitarMudanca('${mudanca.change.id}')">Rejeitar</button>
                    </div>
                `;
                mudancasDiv.appendChild(mudancaDiv);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar mudanças:', error);
            document.getElementById('mudancas').innerHTML = `<p>Erro ao buscar mudanças: ${error.message}</p>`;
        });
});

function aprovarMudanca(id) {
    // Lógica para aprovar a mudança usando a API
    console.log(`Mudança ${id} aprovada`);
    // Aqui você faria outra requisição para a API para aprovar a mudança
}

function rejeitarMudanca(id) {
    // Lógica para rejeitar a mudança usando a API
    console.log(`Mudança ${id} rejeitada`);
    // Aqui você faria outra requisição para a API para rejeitar a mudança
}