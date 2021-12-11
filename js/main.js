/**
 * Sắp xếp tăng dần
 * 
 * Khối 1:dữ liệu được cung cấp
 * Input
 * 3 số nguyên
 * 
 * Khối 2:Các bước xử lý 
 * B1: Khai báo biến và gán giá trị
 * B2: nếu number1 > number2 && number2 > number3 => thứ tự number3 , number2, number1
 *     nếu number1 > number2 && number2 < number3 && number1 > number3 => thứ tự number2 , number3, number1
 *     nếu number1 > number2 && number2 < number3 && number1 < number3 => thứ tự number2 , number1, number3
 *     nếu number1 < number2 && number3 < number1 => thứ tự number3 , number1, number2
 *     nếu number1 < number2 && number2 < number3 => thứ tự number1 , number2, number3
 *     nếu number1 < number2 && number2 > number3 && number3 > number1 => thứ tự number1 , number3 , number2
 * Khối 3: kết quả cần đạt 
 * output
 * thứ tự 3 số sau khi sắp xếp
 */
function sapXep() {
    var numBer1 = 0;
    var numBer2 = 0;
    var numBer3 = 0;
    numBer1 = document.getElementById("number1").value;
    numBer2 = document.getElementById("number2").value;
    numBer3 = document.getElementById("number3").value;
    if (numBer1 > numBer2) {
        if (numBer1 > numBer3) {
            if (numBer2 > numBer3) {
                document.getElementById("txtnumber1").innerHTML = "Thứ tự sau khi sắp xếp: " + numBer3 + "<" +
                    numBer2 + "<" + numBer1;
            }
            if (numBer2 < numBer3) {
                document.getElementById("txtnumber1").innerHTML = "Thứ tự sau khi sắp xếp: " + numBer2 + "<" +
                    numBer3 + "<" + numBer1;
            }
        } else if (numBer1 < numBer3) {
            document.getElementById("txtnumber1").innerHTML = "Thứ tự sau khi sắp xếp: " + numBer2 + "<" +
                numBer1 + "<" + numBer3;
        }
    } else if (numBer1 < numBer2)
        if (numBer2 > numBer3) {
            if (numBer1 > numBer3) {
                document.getElementById("txtnumber1").innerHTML = "Thứ tự sau khi sắp xếp: " + numBer3 + "<" +
                    numBer1 + "<" + numBer2;
            } else if (numBer3 > numBer1) {
                document.getElementById("txtnumber1").innerHTML = "Thứ tự sau khi sắp xếp: " + numBer1 + "<" +
                    numBer3 + "<" + numBer2;
            }
        } else if (numBer2 < numBer3) {
        document.getElementById("txtnumber1").innerHTML = "Thứ tự sau khi sắp xếp: " + numBer1 + "<" +
            numBer2 + "<" + numBer3;
    }
}
/**
 * Lời chào
 * 
 * Khối 1:dữ liệu được cung cấp
 * Input
 * thành viên trong gia đình
 * 
 * Khối 2:Các bước xử lý 
 * B1: Khai báo biến và gán giá trị
 * B2: nếu nguoiSd = "Bố" => lời chào cho các thành viên
 *     nếu nguoiSd = "Mẹ" => lời chào cho các thành viên
 *     nếu nguoiSd = "anh Trai" => lời chào cho các thành viên
 *     nếu nguoiSd = "em Gai" => lời chào cho các thành viên
 * Khối 3: kết quả cần đạt 
 * output
 * lời chào cho các thành viên
 */
function chaoHoi() {
    var nguoiSd = document.getElementById("idmay").value;
    if (nguoiSd == "B") {
        document.getElementById("txtnumber2").innerHTML = "Xin chào Bố!"
    } else if (nguoiSd == "M") {
        document.getElementById("txtnumber2").innerHTML = "Xin chào Mẹ!"
    } else if (nguoiSd == "A") {
        document.getElementById("txtnumber2").innerHTML = "Xin chào anh trai!"
    } else if (nguoiSd == "EG") {
        document.getElementById("txtnumber2").innerHTML = "Xin chào em gái!"
    } else { document.getElementById("txtnumber2").innerHTML = "Xin chào người lạ!" }
}

/**
 * Số sô chẵn, số số lẻ
 * 
 * Khối 1:dữ liệu được cung cấp
 * Input
 * 3 số nguyên
 * 
 * Khối 2:Các bước xử lý 
 * B1: Khai báo biến và gán giá trị
 * B2: nếu number % 2 ==0 => số chẵn
 *         number % 2 ==1 => số lẻ
 * Khối 3: kết quả cần đạt 
 * output
 * Số số chẵn, số sỗ lẽ
 */
function chanLe() {
    var number1 = document.getElementById("number4").value;
    var number2 = document.getElementById("number5").value;
    var number3 = document.getElementById("number6").value;
    var kt1 = number1 % 2;
    var kt2 = number2 % 2;
    var kt3 = number3 % 2;
    var demChan = 0;
    var demLe = 0;
    if (kt1 == 0 && kt2 == 0 && kt3 == 0) {
        demChan = 3;
    } else if (kt1 == 0 && kt2 == 0 && kt3 == 1) {
        demChan = 2;
        demLe = 1;
    } else if (kt1 == 0 && kt2 == 1 && kt3 == 1) {
        demChan = 1;
        demLe = 2;
    } else if (kt1 == 0 && kt2 == 1 && kt3 == 0) {
        demChan = 2;
        demLe = 1;
    } else if (kt1 == 1 && kt2 == 1 && kt3 == 1) {
        demLe = 3;
    } else if (kt1 == 1 && kt2 == 0 && kt3 == 0) {
        demChan = 1;
        demLe = 2;
    } else if (kt1 == 1 && kt2 == 0 && kt3 == 1) {
        demChan = 1;
        demLe = 2;
    } else if (kt1 == 1 && kt2 == 1 && kt3 == 0) {
        demChan = 1;
        demLe = 2;
    }
    document.getElementById("txtnumber3").innerHTML = "Có : " + demChan + " số chẵn <br>" + "Có : " + demLe + " số lẻ"
}
/**
 * Tam giác
 * 
 * Khối 1:dữ liệu được cung cấp
 * Input
 * 3 cạnh của tam giác
 * 
 * Khối 2:Các bước xử lý 
 * B1: Khai báo biến và gán giá trị
 * B2: nếu canh1 = canh2 # canh3 => tam giác cân
 *     nếu canh1 = canh2 = canh3 => tam giác đều
 *     nếu canh1*canh1 + canh2*canh2 =  canh3*canh3 => tam giác vuông
 * Khối 3: kết quả cần đạt 
 * output
 * tam giác cân vuông đều
 */
function tamGiac() {
    var canh1 = document.getElementById("number7").value;
    var canh2 = document.getElementById("number8").value;
    var canh3 = document.getElementById("number9").value;
    var kQ = "";
    if (canh1 == canh2 && canh1 == canh3) {
        kQ = "đều"
    } else if (canh1 == canh2 && canh1 != canh3 || canh2 == canh3 && canh2 != canh1 || canh1 == canh3 && canh1 != canh2) {
        kQ = "cân"
    } else if (canh1 * canh1 + canh2 * canh2 == canh3 * canh3 || canh2 * canh2 + canh3 * canh3 == canh1 * canh1 || canh1 * canh1 + canh3 * canh3 == canh2 * canh2) {
        kQ = "vuông"
    } else {
        kQ = "thường"
    }
    document.getElementById("txtnumber4").innerHTML = "Đây là tam giác: " + kQ;
}