$(document).ready(()=> {
    function kiemTraTen() {
        const mauKT= /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;

        if ($('#Name').val() == '') {
            $('#tbName').html('Không để trống');
            return false;
        } 
        if (!mauKT.test($('#Name').val())) {
            $('#tbName').html('Mỗi ký tự đầu viết hoa và không dùng số');
            return false;
        }

        $('#tbName').html('*');
        return true;
    }
    $('#Name').blur(kiemTraTen);

    function kiemTraTenDN() {
        const mauKT = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if ($('#Dn').val() == '') {
            $('#tbDn').html('Không để trống');
            return false;
        }
        if (!mauKT.test($('#Dn').val())) {
            $('#tbDn').html('Ít nhất 8 kí tự gồm 1 chữ cái và 1 chữ số');
            return false;
        }

        $('#tbDn').html('*');
        return true;
    }
    $('#Dn').blur(kiemTraTenDN);

    function kiemTraMK() {
        const mauKT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;       

        if ($('#Mk').val() == '') {
            $('#tbMk').html('Không để trống');
            return false;
        }
        if (!mauKT.test($('#Mk').val())) {
            $('#tbMk').html('Ít nhất 8 kí tự gồm 1 chữ cái viết hoa, 1 chữ cái thường và 1 chữ số');
            return false;
        }

        $('#tbMk').html('*');
        return true;
    }
    $('#Mk').blur(kiemTraMK);

    function kiemTraREMK() {
        if ($('#reMk').val() == '') {
            $('#tbreMk').html('Không để trống');
            return false;
        }
        if ($('#reMk').val() != $('#Mk').val()) {
            $('#tbreMk').html('Phải giống ô Mật Khẩu');
            return false;
        }

        $('#tbreMk').html('*');
        return true;
    }
    $('#reMk').blur(kiemTraREMK);

    function kiemTraSDT() {
        const mauKT= /^0\d{3}-\d{3}-\d{3}$/;

        if ($('#SDT').val() == '') {
            $('#tbSDT').html('không để trống');
            return false;
        } 
        if (!mauKT.test($('#SDT').val())) {
            $('#tbSDT').html('Theo dạng 0xxx-xxx-xxx trong đó x là số');
            return false;
        }

        $('#tbSDT').html('*');
        return true;
    }
    $('#SDT').blur(kiemTraSDT);

    function kiemTraEmail() {
        const mauKT= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;

        if ($('#email').val() == '') {
            $('#tbEmail').html('không để trống');
            return false;
        } 
        if (!mauKT.test($('#email').val())) {
            $('#tbEmail').html('Theo dạng xxx@xxx.xxx.xx');
            return false;
        }

        $('#tbemail').html('*');
        return true;
    }
    $('#email').blur(kiemTraEmail);

    $('#myModalDk').on('hidden.bs.modal', function (e) {
        $(this)
            .find("input,textarea,select")
                .val('')
                .end()
            .find("input[type=checkbox], input[type=radio]")
                .prop("checked", "")
                .end()
            .find("span")
                .html('*')
                .end();
    })

    $('#myModalDn').on('hidden.bs.modal', function (e) {
        $(this)
            .find("input,textarea,select")
                .val('')
                .end()
            .find("input[type=checkbox], input[type=radio]")
                .prop("checked", "")
                .end();
      })
})