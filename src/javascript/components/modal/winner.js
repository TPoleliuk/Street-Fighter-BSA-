import showModal from './modal';
import { createFighterImage } from '../fighterPreview';

export default function showWinnerModal(fighter) {
    const title = `${fighter.name.toUpperCase()} WIN!`;
    const bodyElement = createFighterImage(fighter);

    showModal({ title, bodyElement });
}
