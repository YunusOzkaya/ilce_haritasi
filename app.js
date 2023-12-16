window.onload = function () {
    const iller = Object.keys(ilceData);
    const ilSelect = document.getElementById('iller');
    const ilceSelect = document.getElementById('ilceler');

    iller.forEach(il => {
        const option = document.createElement('option');
        option.text = il;
        option.value = il;
        ilSelect.add(option);
    });

    ilSelect.addEventListener('change', function () {
        const secilenIl = this.value;
        const ilceler = ilceData[secilenIl];

        // İlçe seçimini temizle
        ilceSelect.innerHTML = '';

        ilceler.forEach(ilce => {
            const option = document.createElement('option');
            option.text = ilce.name;
            option.value = ilce.name;
            ilceSelect.add(option);
        });
    });

    ilceSelect.addEventListener('change', function () {
        const secilenIlce = this.value;
        const secilenIl = ilSelect.value;
        const ilce = ilceData[secilenIl].find(ilce => ilce.name === secilenIlce);

        // Haritayı temizle
        const haritaContainer = document.getElementById('harita-container');
        haritaContainer.innerHTML = '<svg id="harita" width="750" height="750"></svg>';
        const harita = d3.select("#harita");

        // Yeni haritayı çiz
        harita.append("path")
            .attr("d", ilce.d)
            .attr("fill", "#ccc")
            .attr("transform", "scale(1.5)");

        // Haritayı merkezle
        const bbox = harita.node().getBBox();
        const viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
        harita.attr("viewBox", viewBox);
    });
};
