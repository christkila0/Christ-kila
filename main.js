// Gestion du menu et des sections
document.getElementById("dashboard-toggle").addEventListener("click", () => {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "-250px" ? "0" : "-250px";
});

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        let target = e.target.getAttribute('data-target');
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(target).classList.remove('hidden');
    });
});

// Fonction de Like
let likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        let postId = this.getAttribute('data-post-id');
        let likeCount = document.getElementById('like-count-' + postId);
        let currentLikes = parseInt(likeCount.textContent);

        if (this.classList.contains('liked')) {
            this.classList.remove('liked');
            likeCount.textContent = currentLikes - 1;
        } else {
            this.classList.add('liked');
            likeCount.textContent = currentLikes + 1;
        }
    });
});

// Fonction de soumission de commentaire
let commentButtons = document.querySelectorAll('.comment-section button');
commentButtons.forEach(button => {
    button.addEventListener('click', function() {
        let commentInput = this.previousElementSibling;
        let commentText = commentInput.value.trim();
        if (commentText !== "") {
            let commentList = document.createElement('p');
            commentList.textContent = commentText;
            this.parentElement.appendChild(commentList);
            commentInput.value = ''; // Effacer le champ de commentaire
        }
    });
});

// Fonction de publication
document.getElementById('publish-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let profilePic = document.getElementById('profile-pic').value;

    // Affichage du message de succès
    document.getElementById('publish-success').classList.remove('hidden');
    document.getElementById('publish-form').reset();
});

// Fonction pour modifier le profil
document.getElementById('edit-profile').addEventListener('click', function() {
    let username = prompt("Entrez un nouveau nom d'utilisateur");
    let email = prompt("Entrez un nouvel e-mail");
    document.getElementById('profile-username').textContent = username;
    document.getElementById('profile-email').textContent = email;
});

// Fonction pour supprimer un profil
document.getElementById('delete-profile').addEventListener('click', function() {
    if (confirm("Êtes-vous sûr de vouloir supprimer votre profil ?")) {
        document.getElementById('profile').classList.add('hidden');
    }
});

// Fonction de suppression d'œuvre personnelle
let deletePostButtons = document.querySelectorAll('.user-post button');
deletePostButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (confirm("Êtes-vous sûr de vouloir supprimer cette œuvre ?")) {
         this.parentElement.remove()
      ) 
    });
});
