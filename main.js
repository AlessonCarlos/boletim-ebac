document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const contactList = document.getElementById('contact-list');
    const phoneInput = document.getElementById('phone');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = phoneInput.value;

        // Verifica se o número de telefone contém apenas números
        if (!/^\d+$/.test(phone)) {
            alert('Por favor, insira um telefone válido.');
            return;
        }

        // Cria uma nova linha na tabela
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${phone}</td>
        `;

        // Adiciona a nova linha à tabela de contatos
        contactList.appendChild(newRow);

        // Limpa os campos do formulário
        document.getElementById('name').value = '';
        phoneInput.value = '';
    });
});
