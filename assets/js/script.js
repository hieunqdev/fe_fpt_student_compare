function downloadTemplate() {
    var school = document.getElementById('school').value;
    var fileName = school === 'polytechnic' ? 'Poly_Danh_sach_QD_Template.xlsx' : 'FPS_Danh_sach_QD_Template.xlsx';
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
    const functionSelect = document.getElementById('functionSelect').value;
    switch(functionSelect) {
        case "poly_cnsv":
            chonQuyetDinh = "poly_cnsv";
            break;
        default:
            console.log("ko co");
    }
}

// upload pdf file
function toggleUploadSections() {
    const school = document.getElementById('school').value;
    const polytechnicDecisions = document.querySelectorAll('.polytechnic-decision');
    const polyschoolDecisions = document.querySelectorAll('.polyschool-decision');
    polytechnicDecisions.forEach(el => el.classList.toggle('hidden', school !== 'polytechnic'));
    polyschoolDecisions.forEach(el => el.classList.toggle('hidden', school !== 'polyschool'));
}

// count pdf file
// Khởi tạo đối tượng để lưu trữ tệp đã chọn cho từng input
// Khởi tạo đối tượng để lưu trữ tệp đã chọn cho từng input
const fileMap = new Map();

function updateFileCount(input) {
    console.log()
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

function get_poly_cong_nhan_sinh_vien(he_dao_tao) {
    const inputExcel = document.getElementById('excelUpload');
    const inputPdf = document.getElementById('1');
    
    
    // Lấy tệp từ input
    const excelFile = inputExcel.files[0];
    const pdfFile = inputPdf.files;
    var danh_sach_quyet_dinh = document.getElementById("functionSelect").value;

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

    fetch('http://172.31.65.71:8000/api/upload_excel_api/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Chuyển đổi phản hồi thành JSON
    .then(data => {
        if (data.status === "success") {
            const link = document.createElement('a');
            link.href = 'http://172.31.65.71:8000/media/excel_outputs/excel_doi_chieu.xlsx';
            // link.download = 'excel_doi_chieu.xlsx';
            // document.body.appendChild(link);
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
        console.log("Giá trị đã chọn: " + selectedValue);
    

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
        console.log("Tên file: " + file.name);
        console.log("Loại file: " + file.type);
        console.log("Kích thước file: " + file.size + " bytes");

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
                console.log("ko co");
        }
        

    } else {
        messageElement.textContent = "Chưa có tệp!";
        messageElement.className = "message";
    }
}

