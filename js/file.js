const file = (() => {
    const create = (filename, text) => {
        const element = document.createElement("a");
        // element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
        element.setAttribute("href", "data:text/plain;charset=utf-8," + text);
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    const open = callback => {
        const element = document.createElement("input");
        element.setAttribute("type", "file");
        element.style.display = "none";

        document.body.appendChild(element);
        document.body.lastChild.addEventListener('change', function(e) {
            
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onload = () => {
                // callback(decodeURIComponent(reader.result))
                callback(reader.result)
            }
            reader.readAsText(file);	
        });
        element.click();
        document.body.removeChild(element);
    }

    return {
        create,
        open,
    };
})();