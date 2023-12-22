let btnMenu = document.querySelectorAll('li.item-menu')

        function selectMenu() {
            btnMenu.forEach((item) => 
                item.classList.remove('enable')
            )

            this.classList.add('enable')

        }

        btnMenu.forEach((item) =>
            item.addEventListener('click', selectMenu)
        )

        function showCont(cont) {
            const conteudo = document.querySelector('#conteudo')

            fetch(`pag/${cont}.html`)
                .then(resp => resp.text())
                .then(html => {
                    conteudo.innerHTML = html
                })
                .catch(err => {
                    console.error('Erro ao carregar conteudo', err)
                    conteudo.innerHTML = '<p>Erro ao carregar o conteúdo.</p>'
                })
        }