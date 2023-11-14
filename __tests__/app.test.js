// Récupération de l'objet à tester
import app from '../app.js';

describe('Moderator', () => {
    it('contient des mots interdits', () => {
        expect(app.containForbiddenWords('Vous êtes des nuls')).toEqual(true);
    });
    it('remplacer les mots interdits par xxxx', () => {
        expect(app.changeForbiddenWords('Vous êtes des nuls')).toEqual('Vous êtes des xxxx');
    });
    it('retourne la même phrase si pas de mots interdit détectés', () => {
        expect(app.changeForbiddenWords('Bonjour')).toEqual('Bonjour');
    });
    it('détecte si la casse est modifiée', () => {
        expect(app.changeForbiddenWords('vous êtes des imbéciles')).toEqual("vous êtes des xxxx");
    });
});