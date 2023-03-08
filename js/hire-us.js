(function () {

    const mySectionTitle = document.querySelector('.hire__us-title');
    mySectionTitle.innerText = "hire us";

    function updateClock() {
        const clockContainer = document.querySelector('.clock');
        clockContainer.innerHTML = new Date().toLocaleTimeString();
    }
    setInterval(updateClock, 1000)

    function openModal() {
        var modal = document.getElementById("modal");
        modal.style.display = "block";
    }

    function closeModal() {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
    }


})();