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
        // Certifique-se de que 'id' e 'name' estão presentes no objeto 'anime'
        if ('id' in anime && 'name' in anime) {
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




/*LISTA RECÉM ADICIONADOS*/
function realeseAnimeList(animes) {
    var animeList = document.querySelector('.realese-anime-list'); // Altere o seletor conforme necessário

    animes.forEach(function(anime) {
        // Certifique-se de que 'id' está presente no objeto 'anime'
        if ('id' in anime) {
            var listItem = document.createElement('li');
            listItem.className = 'anime-item';

            var img = document.createElement('img');
            img.src = anime['poster'];
            img.alt = anime['name'];
            
            img.addEventListener('load', function() {
                img.classList.add('loaded');
            });

            var ratingAndNote = document.createElement('div');
            ratingAndNote.className = 'rating-and-note';

            var ratingIcon = document.createElement('img');
            ratingIcon.className = 'rating-icon';
            ratingIcon.src = anime['rating'];
            ratingIcon.alt = 'Classificação ' + anime['rating'];

            var note = document.createElement('span');
            note.className = 'note';
            note.textContent = anime['note'];

            ratingAndNote.appendChild(ratingIcon);
            ratingAndNote.appendChild(note);

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
            itemLink.appendChild(ratingAndNote);
            itemLink.appendChild(animeInfo);

            listItem.appendChild(itemLink);

            animeList.appendChild(listItem);
        }
    });
}

/*LISTA TOP10*/
        function topAnimeList(animes) {
    var animeList = document.querySelector('.top-anime-list'); // Altere o seletor conforme necessário

    animes.forEach(function(anime) {
        // Certifique-se de que 'id' está presente no objeto 'anime'
        if ('id' in anime) {
            var listItem = document.createElement('li');
            listItem.className = 'anime-item';

            var img = document.createElement('img');
            img.src = anime['poster'];
            img.alt = anime['name'];
            
            img.addEventListener('load', function() {
                img.classList.add('loaded');
            });
            
            var ratingAndNote = document.createElement('div');
            ratingAndNote.className = 'rating-and-note';

            var ratingIcon = document.createElement('img');
            ratingIcon.className = 'rating-icon';
            ratingIcon.src = anime['rating'];
            ratingIcon.alt = 'Classificação ' + anime['rating'];

            var note = document.createElement('span');
            note.className = 'note';
            note.textContent = anime['note'];

            ratingAndNote.appendChild(ratingIcon);
            ratingAndNote.appendChild(note);

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
            itemLink.appendChild(ratingAndNote);
            itemLink.appendChild(animeInfo);

            listItem.appendChild(itemLink);

            animeList.appendChild(listItem);
        }
    });
}

/*  TENDENCIAS */
function tendeceAnimeList(animes) {
    var animeList = document.querySelector('.tendence-list');

    animes.forEach(function(anime) {
        if ('id' in anime) {
            var listItem = document.createElement('li');
            listItem.className = 'anime-item-container';
            listItem.setAttribute('data-anime-id', anime['id']);

            var img = document.createElement('img');
            img.className = 'cover-image';
            img.src = anime['poster'];
            img.alt = 'Capa Anime ' + anime['id'];

            // Adiciona a classe 'loaded' à imagem quando carregada
            img.addEventListener('load', function() {
                img.classList.add('loaded');
            });

            var animeLogo = document.createElement('img');
            animeLogo.className = 'anime-logo';
            animeLogo.src = anime['linklogo'];
            animeLogo.alt = 'Logo Anime ' + anime['id'];

            var ratingContainer = document.createElement('div');
            ratingContainer.className = 'rating-container';

            var ratingIcon = document.createElement('img');
            ratingIcon.className = 'rating-icon';
            ratingIcon.src = anime['ratingicon'];
            ratingIcon.alt = 'Classificação ' + anime['ratingicon'];

            var ratingText = document.createElement('div');
            ratingText.className = 'rating-text';
            ratingText.textContent = anime['textRating'];

            ratingContainer.appendChild(ratingIcon);
            ratingContainer.appendChild(ratingText);

            listItem.appendChild(img);
            listItem.appendChild(animeLogo);
            listItem.appendChild(ratingContainer);
            listItem.addEventListener('click', function() {
                var animeId = this.getAttribute('data-anime-id');
                window.webViewAndroid.openScreen(animeId);
            });

            animeList.appendChild(listItem);
        }
    });
}

/*CONTINUAR ASSISTINDO*/



function continuewatchingAnimeList(animes) {
        var animeList = document.querySelector('.continue-watching-anime-list');

        animes.forEach(function(anime) {
            if ('nameAnime' in anime && 'posterAnime' in anime && 'nameEpisode' in anime && 'watchingPorcentage' in anime && 'durationMax' in anime && 'id' in anime && 'linkEpWatch' in anime) {
                var listItem = document.createElement('li');
                listItem.className = 'continue-watching-anime-item';

                var coverDiv = document.createElement('div');
                coverDiv.className = 'continue-watching-cover';

                var img = document.createElement('img');
                img.src = anime.posterAnime;
                img.alt = `Capa do Anime ${anime.nameAnime}`;
                img.className = 'continue-watching-cover';

                var shadowDiv = document.createElement('div');
                shadowDiv.className = 'continue-watching-shadow';

                var episodeDiv = document.createElement('div');
                episodeDiv.className = 'continue-watching-episode';
                episodeDiv.textContent = anime.nameEpisode;

                var playIconDiv = document.createElement('div');
                playIconDiv.className = 'continue-watching-play-icon';

                var animeNameDiv = document.createElement('div');
                animeNameDiv.className = 'continue-watching-anime-name';
                animeNameDiv.textContent = anime.nameAnime;

                var progressBarDiv = document.createElement('div');
                progressBarDiv.className = 'continue-watching-progress-bar';

                var progressDiv = document.createElement('div');
                progressDiv.className = 'continue-watching-progress';
                progressDiv.style.width = `${anime.watchingPorcentage}%`;

                var durationDiv = document.createElement('div');
                durationDiv.className = 'continue-watching-duration';
                durationDiv.textContent = `${anime.durationMax} min`;

                progressBarDiv.appendChild(progressDiv);
                coverDiv.appendChild(img);
                coverDiv.appendChild(shadowDiv);
                coverDiv.appendChild(episodeDiv);
                coverDiv.appendChild(playIconDiv);
                coverDiv.appendChild(animeNameDiv);
                coverDiv.appendChild(progressBarDiv);
                coverDiv.appendChild(durationDiv);

                listItem.appendChild(coverDiv);
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
