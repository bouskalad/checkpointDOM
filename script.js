// Sélectionner les éléments du panier
const listeArticles = document.getElementById('liste-articles');
const prixTotal = document.getElementById('prix-total');

// Ajouter des écouteurs d'événements aux boutons
listeArticles.addEventListener('click', (event) => {
  const cible = event.target;

  if (cible.classList.contains('btn-incrementer')) {
    incrementerQuantite(cible);
  } else if (cible.classList.contains('btn-decrementer')) {
    decrementerQuantite(cible);
  } else if (cible.classList.contains('btn-supprimer')) {
    supprimerArticle(cible);
  } else if (cible.classList.contains('btn-aimer')) {
    basculerAimer(cible);
  }
});

// Fonction pour incrémenter la quantité
function incrementerQuantite(bouton) {
  const quantiteElement = bouton.parentElement.querySelector('.quantite-article');
  let quantite = parseInt(quantiteElement.textContent);
  quantite++;
  quantiteElement.textContent = quantite;
  mettreAJourPrixTotal();
}

// Fonction pour décrémenter la quantité
function decrementerQuantite(bouton) {
  const quantiteElement = bouton.parentElement.querySelector('.quantite-article');
  let quantite = parseInt(quantiteElement.textContent);
  if (quantite > 1) {
    quantite--;
    quantiteElement.textContent = quantite;
    mettreAJourPrixTotal();
  }
}

// Fonction pour supprimer un article
function supprimerArticle(bouton) {
  const article = bouton.closest('.article');
  const image = article.querySelector('.image-article');
  article.remove();
  image.remove();
  mettreAJourPrixTotal();
}

// Fonction pour basculer l'état "aimé" d'un article
function basculerAimer(bouton) {
  bouton.classList.toggle('aimer');
}

// Fonction pour mettre à jour le prix total
function mettreAJourPrixTotal() {
  let prixTotalCalcul = 0;
  const articles = document.querySelectorAll('.article');

  articles.forEach((article) => {
    const quantiteElement = article.querySelector('.quantite-article');
    const prixElement = article.querySelector('.prix-article');
    const quantite = parseInt(quantiteElement.textContent);
    const prix = parseFloat(prixElement.textContent.replace('$', ''));
    const sousTotal = quantite * prix;
    prixTotalCalcul += sousTotal;
  });

  prixTotal.textContent = 'Prix total: $' + prixTotalCalcul.toFixed(2);
}
