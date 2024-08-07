$(document).ready(function(){
    $('#select').change(function(){
        var selectedDiscount = $('#select option:selected').attr("discount");
        var discountPercent = parseFloat(selectedDiscount);

        var productPrice = $('#select option:selected').attr("price");

        $('#discount span').text(discountPercent);
        $('#produntPrice span').text(productPrice);

        var discountAmount = (discountPercent / 100) * productPrice;
        var totalPrice = productPrice - discountAmount;

        $('#totalPrice span').text(totalPrice);
        $('#discount span').text(discountPercent + '%');
    });
});