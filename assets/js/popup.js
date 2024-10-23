// Mở popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';

    // Thêm sự kiện khi click vào bên ngoài nội dung popup
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopup(popupId);
        }
    });
}

// Đóng popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}
