
        let download_link = ""
        const preview = document.getElementById('preview');
        const btn = document.getElementById('btn')

    fetch("https://www.instagrabx.com/object_grab").then(response => {
        return response.json()
        .then(data => {
            download_link = data.download_link
            preview.src = data.thumbnail_link
        })
    }).catch(err => {
        console.log(err)
    })

    const downloader = async () => {
        window.location = download_link
    }

    btn.addEventListener("click", downloader)
