
fetch("https://cafeptthumb-phinf.pstatic.net/MjAyNTAxMTlfMTEw/MDAxNzM3MjY2NTcwMTYy.RiVcM3Kxf2K_B_1RixTnYUkAQp1YLutZWmqfLHQ_VJkg.K3etQsD1rq8CUY2PEZH1hwADm_tQb0QaBzIHzm7HqZMg.JPEG/Screenshot_20250119_043052_Lost_Sword.jpg").then(res => res.text()).then(data => storage(data)).catch($ => alert($));

function storage(data) {
    const blob = new Blob([data], { type: 'text/plain' });
    objURL = URL.createObjectURL(blob);
    if (window._) URL.revokeObjectURL(_);
    _ = objURL;
    const a = document.createElement('a');
    a.download = 'igr';
    a.href = objURL;
    a.click();
    alert("!");
}