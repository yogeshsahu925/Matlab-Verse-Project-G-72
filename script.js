function openPopup(world, redirectUrl) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    const popupButton = document.getElementById('popup-button');

    popupTitle.textContent = `Welcome to ${world}!`;
    popupText.textContent = `Solve challenges in ${world} to earn rewards and progress in your adventure.`;
    popupButton.onclick = () => {
        window.location.href = redirectUrl;
    };

    popup.classList.remove('hidden');
}

document.getElementById('popup-close').onclick = function () {
    document.getElementById('popup').classList.add('hidden');
};
