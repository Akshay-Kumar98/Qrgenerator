const qInput = document.querySelector('.qr-input');
        const qSubmit = document.querySelector('.qr-submit');
        const img = document.querySelector('.qr-image');


        qSubmit.addEventListener('click', () => {
            fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qInput.value}`)
           .then(response => {
                return response.blob();
            }).then(blob => {
                const objectURL = URL.createObjectURL(blob);
                img.innerHTML = `<img src = "${objectURL}" height="150px" width="150px" style="margin:20px 0 0 0;" class="img">`;
            }).catch(err => {
                console.log(`There was a problem ${err}`);
            });
        });