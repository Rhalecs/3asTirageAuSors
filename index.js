// Fonction pour récupérer les paramètres d'URL (nom et prénom)
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        nom: params.get('nom') || 'Invité',
        prenom: params.get('prenom') || ''
    };
}

// Injecter les valeurs dans la pop-up
window.onload = function() {
    const { nom, prenom } = getUrlParams();
    document.getElementById('nom').textContent = nom;
    document.getElementById('prenom').textContent = prenom;
};
