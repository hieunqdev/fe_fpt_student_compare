function updateTaiLenDanhSachQuyetDinh(he_dao_tao, danh_sach_quyet_dinh, pdf_file) {
    if (he_dao_tao == 'FPT Polytechnic') {
        switch (danh_sach_quyet_dinh) {
            case 'Công nhận sinh viên':
                var ul = document.querySelector('#filePdfCongNhanSinhVienLst');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Chuyển ngành':
                var ul = document.querySelector('#filePdfChuyenNganhLst');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Chuyển cơ sở':
                var ul = document.querySelector('#filePdfChuyenCoSoLst');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Nghỉ học tạm thời':
                var ul = document.querySelector('#filePdfNghiHocTamThoiLst');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Nhập học trở lại':
                var ul = document.querySelector('#filePdfNhapHocTroLaiLst');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Chuyển khung':
                var ul = document.querySelector('#filePdfChuyenKhungLst');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Miễn giảm môn học':
                var ul = document.querySelector('#filePdfMienGiamMonHocLst');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Khen thưởng':
                var ul = document.querySelector('#filePdfKhenThuongLst');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Kỷ luật':
                var ul = document.querySelector('#quyetDinhKyLuat');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;


            case 'Quyết định chuyển ngành':
                var ul = document.querySelector('#filePdfCongNhanSinhVienLst');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            default:
                return;
        }
    }

    if (he_dao_tao == 'FPT Polyschool') {

        console.log()
        switch (danh_sach_quyet_dinh) {
            case 'Quyết định công nhận sinh viên':
                var ul = document.querySelector('#filePdfCongNhanSinhVienLstFPS');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Quyết định công nhận chuyên ngành':
                var ul = document.querySelector('#filePdfChuyenNganhLstFPS');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Quyết định miễn giảm':
                var ul = document.querySelector('#filePdfMienGiamhLstFPS');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Quyết định chuyển ngành':
                var ul = document.querySelector('#filePdfChuyenNganhLstFPS');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Quyết định bảo lưu':
                var ul = document.querySelector('#filePdfBaoLuuLstFPS');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Quyết định thôi học':
                var ul = document.querySelector('#filePdfThoiHocLstFPS');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Quyết định chuyển cơ sở':
                var ul = document.querySelector('#filePdfChuyenCoSoLstFPS');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Quyết định khen thưởng':
                var ul = document.querySelector('#filePdfKhenThuongLstFPS');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            case 'Quyết định kỷ luật':
                var ul = document.querySelector('#filePdfKyLuatLstFPS');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;


            case 'Quyết định tốt nghiệp Trung cấp':
                var ul = document.querySelector('#filePdfTotNghiepTrungCapLstFPS');
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.textContent = pdf_file;
                a.href = pdf_file;

                li.appendChild(a);
                ul.appendChild(li);
                break;

            default:
                return;
        }
    }
}

function getAPIUploadedPdf() {
    fetch('https://8047-171-225-200-187.ngrok-free.app/api/uploaded_pdfs/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Lọc dữ liệu theo hệ đào tạo
            const fptPolytechnic = data.filter(item => item.he_dao_tao === 'FPT Polytechnic');
            const pftPolyschool = data.filter(item => item.he_dao_tao === 'FPT Polyschool');

            console.log(pftPolyschool)

            if (fptPolytechnic.length != 0) {
                for (var i = 0; i < fptPolytechnic.length; i++) {
                    updateTaiLenDanhSachQuyetDinh(fptPolytechnic[i].he_dao_tao,
                        fptPolytechnic[i].danh_sach_quyet_dinh,
                        fptPolytechnic[i].pdf_file);
                }

            }

            if (pftPolyschool.length != 0) {
                for (var i = 0; i<pftPolyschool.length; i++) {
                    updateTaiLenDanhSachQuyetDinh(pftPolyschool[i].he_dao_tao,
                        pftPolyschool[i].danh_sach_quyet_dinh,
                        pftPolyschool[i].pdf_file);
                } 
            }

        })
        .catch(error => {
            console.error('Lỗi khi gọi API:', error);
        });
}


function downloadTemplate() {
    var school = document.getElementById('school').value;
    var fileName = school === 'FPT Polytechnic' ? 'Poly_Danh_sach_QD_Template.xlsx' : 'FPS_Danh_sach_QD_Template.xlsx';
    var filePath = `assets/templates/${fileName}`;

    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);  // Đảm bảo thêm vào DOM để kích hoạt sự kiện click
    link.click();
    document.body.removeChild(link);  // Dọn dẹp sau khi tải
}


var chonQuyetDinh = "poly_cnsv";
function toggleCheckOptions() {
    // const functionSelect = document.getElementById('functionSelect').value;
    // switch (functionSelect) {
    //     case "poly_cnsv":
    //         chonQuyetDinh = "poly_cnsv";
    //         break;
    //     default:
    //         return;
    // }
    console.log('toggleCheckOptions');
}

// upload pdf file
function toggleUploadSections() {
    // call api lấy các file pdf trong sql đã lưu 
    getAPIUploadedPdf();

    // chọn hệ đào tạo sẽ hiển thị các mục tương ứng
    const school = document.getElementById('school').value;
    const polytechnicDecisions = document.querySelectorAll('.polytechnic-decision');
    const polyschoolDecisions = document.querySelectorAll('.polyschool-decision');
    polytechnicDecisions.forEach(el => el.classList.toggle('hidden', school !== 'FPT Polytechnic'));
    polyschoolDecisions.forEach(el => el.classList.toggle('hidden', school !== 'FPT Polyschool'));
}



// count pdf file
// Khởi tạo đối tượng để lưu trữ tệp đã chọn cho từng input
// Khởi tạo đối tượng để lưu trữ tệp đã chọn cho từng input
const fileMap = new Map();

function updateFileCount(input) {
    return;
}



// Lắng nghe sự kiện focus trên tất cả các input
let selectedDiv = null;
// Lấy pdf_files và danh_sach_quyet_dinh
function highlightDiv(div) {
    var uploadedFiles = [];
    // Xóa lớp "active" khỏi tất cả các div
    document.querySelectorAll('.upload-item').forEach(item => item.classList.remove('active'));
    // Đặt div đã chọn
    selectedDiv = div;
    // Thêm lớp "active" vào div được chọn
    div.classList.add('active');

}

var input_quyet_dinh = [];
function updateFileCount(input) {
    const fileCountSpan = input.parentElement.querySelector('.file-count');
    input_quyet_dinh.push(input.files[0]);
    fileCountSpan.textContent = `${input.files.length} tệp`;

    const fileCount = input.files.length;

    // Kiểm tra nếu có file được chọn
    if (fileCount > 0) {
        input.classList.add("file-uploaded");  // Thêm lớp nổi bật
    } else {
        input.classList.remove("file-uploaded");  // Bỏ lớp nếu không có file
    }
}

function get_input_pdf(he_dao_tao, danh_sach_quyet_dinh) {
    if (he_dao_tao == 'FPT Polytechnic') {
        switch (danh_sach_quyet_dinh) {
            case 'Công nhận sinh viên':
                var inputPdf = document.getElementById('1');
                return inputPdf;
            case 'Chuyển ngành':
                var inputPdf = document.getElementById('2');
                return inputPdf;
            case 'Chuyển cơ sở':
                var inputPdf = document.getElementById('3');
                return inputPdf;
            case 'Nghỉ học tạm thời':
                var inputPdf = document.getElementById('4');
                return inputPdf;
            case 'Nhập học trở lại':
                var inputPdf = document.getElementById('5');
                return inputPdf;
            case 'Chuyển khung':
                var inputPdf = document.getElementById('6');
                return inputPdf;
            case 'Miễn giảm môn học':
                var inputPdf = document.getElementById('7');
                return inputPdf;
            case 'Khen thưởng':
                var inputPdf = document.getElementById('8');
                return inputPdf;
            case 'Kỷ luật':
                var inputPdf = document.getElementById('9');
                return inputPdf;
            case 'Công nhận tốt nghiệp':
                var inputPdf = document.getElementById('10');
                return inputPdf;
            default:
                var inputPdf = document.getElementById('1');
                return inputPdf;
        };
    };

    if (he_dao_tao == 'FPT Polyschool') {
        switch (danh_sach_quyet_dinh) {
            case 'Quyết định công nhận sinh viên':
                var inputPdf = document.getElementById('11');
                return inputPdf;
            case 'Quyết định công nhận chuyên ngành':
                var inputPdf = document.getElementById('12');
                return inputPdf;
            case 'Quyết định miễn giảm':
                var inputPdf = document.getElementById('13');
                return inputPdf;
            case 'Quyết định chuyển ngành':
                var inputPdf = document.getElementById('14');
                return inputPdf;
            case 'Quyết định bảo lưu':
                var inputPdf = document.getElementById('15');
                return inputPdf;
            case 'Quyết định thôi học':
                var inputPdf = document.getElementById('16');
                return inputPdf;
            case 'Quyết định chuyển cơ sở':
                var inputPdf = document.getElementById('17');
                return inputPdf;
            case 'Quyết định khen thưởng':
                var inputPdf = document.getElementById('18');
                return inputPdf;
            case 'Quyết định kỷ luật':
                var inputPdf = document.getElementById('19');
                return inputPdf;
            case 'Quyết định tốt nghiệp Trung cấp':
                var inputPdf = document.getElementById('20');
                return inputPdf;
            default:
                var inputPdf = document.getElementById('1');
                return inputPdf;
        };
    };
}

function get_danh_sach_quyet_dinh(he_dao_tao) {
    if (he_dao_tao == 'FPT Polytechnic') {
        var danh_sach_quyet_dinh = document.getElementById('polyFunctionSelect').value;
        return danh_sach_quyet_dinh;
    }

    if (he_dao_tao == 'FPT Polyschool') {
        var danh_sach_quyet_dinh = document.getElementById('fpsFunctionSelect').value;
        return danh_sach_quyet_dinh;
    }

    return 'Công nhận sinh viên';
}


function get_poly_cong_nhan_sinh_vien(he_dao_tao) {
    const inputExcel = document.getElementById('excelUpload');

    var danh_sach_quyet_dinh = get_danh_sach_quyet_dinh(he_dao_tao);
    var inputPdf = get_input_pdf(he_dao_tao, danh_sach_quyet_dinh);

    // Lấy tệp từ input
    const excelFile = inputExcel.files[0];
    const pdfFile = inputPdf.files;


    if (!excelFile || !pdfFile) {
        alert('Vui lòng chọn cả file Excel và file PDF.');
        return;
    }

    const formData = new FormData();
    formData.append('excel_file', excelFile);
    formData.append('he_dao_tao', he_dao_tao);
    formData.append('danh_sach_quyet_dinh', danh_sach_quyet_dinh);
    // formData.append('pdf_files', pdfFile);
    for (let i = 0; i < inputPdf.files.length; i++) {
        print('files');
        print(inputPdf.files[i]);
        formData.append('pdf_files', inputPdf.files[i]); // input type="file" cho PDF (multiple)

    }

    fetch('https://8047-171-225-200-187.ngrok-free.app/api/upload_excel_api/', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json()) // Chuyển đổi phản hồi thành JSON
        .then(data => {
            if (data.status === "success") {
                const link = document.createElement('a');
                link.href = 'https://8047-171-225-200-187.ngrok-free.app/media/excel_outputs/excel_doi_chieu.xlsx';

                // var div = document.querySelector('#ketQua');
                // var a = createElement('a');

                // a.textContent = 'Tải về Kết quả';
                // a.href = link.href;

                // a.appendChild(div);

                // link.download = 'excel_doi_chieu.xlsx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                console.error('Lỗi khi tải file: ', data);
            }
        })
        .catch(error => {
            console.error('Có lỗi xảy ra khi gửi yêu cầu: ', error);
        });
}

// kiểm tra he_dao_tao
function validate_he_dao_tao() {
    var selectedValue = document.getElementById('school').value;
    var errorMessage = document.getElementById('loi_he_dao_tao');

    if (selectedValue === "") {
        // Nếu không chọn gì, hiển thị thông báo lỗi
        errorMessage.style.display = "block";
        return null; // Trả về null nếu không có giá trị hợp lệ
    } else {
        // Nếu có chọn, ẩn thông báo lỗi
        errorMessage.style.display = "none";
        return selectedValue; // Trả về giá trị đã chọn
    }
}

// validate excel_file
function handleFileUpload() {
    var fileInput = document.getElementById('excelUpload');
    var file = fileInput.files[0]; // Lấy tệp đầu tiên

    var errorMessage = document.getElementById('loi_excel_file');

    if (!file) {
        // Nếu không có tệp được chọn, hiển thị thông báo lỗi
        errorMessage.style.display = "block";
        return null; // Trả về null nếu không có tệp nào
    } else {
        // Kiểm tra định dạng file
        var allowedTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
        if (allowedTypes.indexOf(file.type) === -1) {
            // Nếu tệp không phải .xlsx hoặc .xls
            errorMessage.style.display = "block";
            return null; // Trả về null nếu tệp không hợp lệ
        }

        // Nếu tệp hợp lệ, ẩn thông báo lỗi và trả về tệp
        errorMessage.style.display = "none";
        return file; // Trả về tệp hợp lệ
    }
}

function checkSelectedDiv() {
    // validate he_dao_tao
    var he_dao_tao = validate_he_dao_tao();
    var excel_file = handleFileUpload();

    const messageElement = document.getElementById('resultMessage');

    if (!selectedDiv) {
        messageElement.textContent = "Vui lòng chọn một mục trước!";
        messageElement.className = "message";
        return;
    }

    // Lấy span hiển thị số lượng tệp
    const fileCountSpan = selectedDiv.querySelector('.file-count');
    const fileCount = parseInt(fileCountSpan.textContent);


    if (he_dao_tao == 'polytechnic') {
        he_dao_tao = 'FPT Polytechnic';
    }
    if (he_dao_tao == 'polyschool') {
        he_dao_tao = 'FPT Polyschool';
    }


    if (fileCount > 0) {
        switch (chonQuyetDinh) {
            case "poly_cnsv":
                get_poly_cong_nhan_sinh_vien(he_dao_tao);
                break;
            default:
                return;
        }


    } else {
        messageElement.textContent = "Chưa có tệp!";
        messageElement.className = "message";
    }
}

function resetPoly() {
    const formData = new FormData();
        formData.append('he_dao_tao', 'FPT Polytechnic');
        fetch('https://8047-171-225-200-187.ngrok-free.app/api/delete_uploaded_pdfs/', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json()) // Chuyển đổi phản hồi thành JSON
            .then(data => {
                if (data.status === "200") {
                    alert('Xóa thành công');
                } else {
                    alert('Xóa thành công');
                }
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi gửi yêu cầu: ', error);
            });

    
}

function resetPolyschool() {
    const formData = new FormData();
        formData.append('he_dao_tao', 'FPT Polyschool');
        fetch('https://8047-171-225-200-187.ngrok-free.app/api/delete_uploaded_pdfs/', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json()) // Chuyển đổi phản hồi thành JSON
            .then(data => {
                if (data.status === "200") {
                    alert('Xóa thành công');
                } else {
                    alert('Xóa thành công');
                }
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi gửi yêu cầu: ', error);
            });
}

