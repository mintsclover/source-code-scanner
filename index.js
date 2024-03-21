function progressUpdate(packet) {
    var log = document.getElementById('log');
    const clang = document.querySelector('#clangsel').value

    if (log.firstChild && log.firstChild.status === packet.status) {
        if ('progress' in packet) {
            var progress = log.firstChild.querySelector('progress')
            progress.value = packet.progress
        }
    } else {
        var line = document.createElement('div');
        line.status = packet.status;
        var status = document.createElement('div')
        status.className = 'status'
        status.appendChild(document.createTextNode(packet.status))
        line.appendChild(status)

        if ('progress' in packet) {
            var progress = document.createElement('progress')
            progress.value = packet.progress
            progress.max = 1
            line.appendChild(progress)
        }

        if (packet.status == 'done') {
            var pre = document.createElement('pre');
            pre.id = 'pre';
            var codeText_raw = packet.data.data.text;
            codeText_raw = codeText_raw.replace(/’/g, "'");
            codeText_raw = codeText_raw.replace(/‘/g, "'");
            var codeText_refined;
            if (clang == "js") {
                codeText_refined = js_beautify(codeText_raw)
            } else if (clang == "css") {
                codeText_refined = css_beautify(codeText_raw)
            } else {
                codeText_refined = html_beautify(codeText_raw)
            }

            pre.appendChild(document.createTextNode(codeText_refined))
            line.innerHTML = ''
            line.appendChild(pre)

            //복사버튼 활성화
            document.getElementById('copyBox').style.display = 'block'

        }

        log.insertBefore(line, log.firstChild)
    }
}

async function recognizeFile(file) {
    document.querySelector("#log").innerHTML = ''

    const lang = document.querySelector('#langsel').value
    const data = await Tesseract.recognize(file, lang, {
        logger: progressUpdate,
        workerPath: 'https://unpkg.com/tesseract.js@v4.0.1/dist/worker.min.js',
        langPath: 'https://tessdata.projectnaptha.com/4.0.0',
        corePath: 'https://unpkg.com/tesseract.js-core@v4.0.1/tesseract-core.wasm.js',
    });
    progressUpdate({ status: 'done', data });
}