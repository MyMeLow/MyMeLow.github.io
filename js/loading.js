document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");

    // ページロード後にロード画面を非表示にする
    window.addEventListener("load", () => {
        setTimeout(() => {
            loadingScreen.classList.add("hidden");
        }, 500); // 0.5秒後に非表示
    });
});
