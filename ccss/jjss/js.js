/*PRE LOADER, TELA INICIAL*/
window.addEventListener('load', function () {
            setTimeout(function() {
                document.getElementById('preloder').style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('preloder').style.display = 'none';
                }, 1000); // Aguarde mais 1 segundo antes de remover completamente o elemento
            }, 1000);
        });
        
        
        /*BODY SCROLL */
      

        

function populateAnimeList(animes) {
    var animeList = document.querySelector('.anime-list');

    animes.forEach(function(anime) {
        // Certifique-se de que 'name' e 'poster' estão presentes no objeto 'anime'
        if ('name' in anime && 'poster' in anime && 'id' in anime) {
            var listItem = document.createElement('li');
            listItem.className = 'anime-item';

            var img = document.createElement('img');
            img.src = anime['poster'];
            img.alt = anime['name'];

            var animeInfo = document.createElement('div');
            animeInfo.className = 'anime-info';
            animeInfo.innerHTML = '<p>' + anime['name'] + '</p>';

            // Adicione o id como um atributo ao itemLink
            var itemLink = document.createElement('div');
            itemLink.setAttribute('data-anime-id', anime['id']);

            // Adicione um evento de clique ao itemLink
            itemLink.addEventListener('click', function() {
                // Obtém o id do atributo data-anime-id
                var animeId = this.getAttribute('data-anime-id');
                
                // Chame a função da interface WebView para abrir a tela no Android
                window.webViewAndroid.openScreen(animeId);
            });

            itemLink.appendChild(img);
            itemLink.appendChild(animeInfo);

            listItem.appendChild(itemLink);

            animeList.appendChild(listItem);
        }
    });
}






    /*ABRIR MENU*/
    
    function toggleMenu() {
      const nav = document.querySelector('nav');
      const menuIcon = document.querySelector('.menu-icon');
      nav.classList.toggle('show');
      menuIcon.classList.toggle('open');
    }
