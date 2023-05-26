// config.js
document.getElementById('deleteAccount').addEventListener('click', function() {
    if (confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.')) {
        // Call your server-side script to delete the account
        window.location.href = 'confDelete.js';
    }
});
