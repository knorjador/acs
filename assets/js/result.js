/**** **** **** **** **** **** **** ****
 > Button Copy
**** **** **** **** **** **** **** ****/


(function() {
    var copyButton = document.querySelector('#copy');
    var copyInput = document.querySelector('#textcopy');
    copyButton.addEventListener('click', function(e) {
        e.preventDefault();
        var text = copyInput.select();
        document.execCommand('copy');
    });

    copyInput.addEventListener('click', function() {
        this.select();
    });
})();
