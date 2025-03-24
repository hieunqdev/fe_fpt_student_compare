function downloadTemplate() {
    const school = document.getElementById('school').value;
    const fileName = school === 'polytechnic' ? 'Poly_Danh_sach_QD_Template.xlsx' : 'FPS_Danh_sach_QD_Template.xlsx';
    const filePath = `assets/templates/${fileName}`;

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);  // Đảm bảo thêm vào DOM để kích hoạt sự kiện click
    link.click();
    document.body.removeChild(link);  // Dọn dẹp sau khi tải

    console.log(`✅ Đã tải xuống tệp: ${fileName} từ ${filePath}`);
}


function toggleCheckOptions() {
    const functionSelect = document.getElementById('functionSelect').value;
    const checkOptions = document.getElementById('checkOptions');
    checkOptions.classList.toggle('hidden', functionSelect !== 'checkInfo');
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

function highlightDiv(div) {
    // Xóa lớp "active" khỏi tất cả các div
    document.querySelectorAll('.upload-item').forEach(item => item.classList.remove('active'));
    // Đặt div đã chọn
    selectedDiv = div;
    // Thêm lớp "active" vào div được chọn
    div.classList.add('active');
}

var input_quyet_dinh = [];
function updateFileCount(input) {
    console.log('jhsadhasjk')
    const fileCountSpan = input.parentElement.querySelector('.file-count');
    fileCountSpan.textContent = `${input.files.length} tệp`;
    input_quyet_dinh.push(input.files[0]);
}

function checkSelectedDiv() {
    const messageElement = document.getElementById('resultMessage');
    
    if (!selectedDiv) {
        messageElement.textContent = "Vui lòng chọn một mục trước!";
        messageElement.className = "message";
        return;
    }

    // Lấy span hiển thị số lượng tệp
    const fileCountSpan = selectedDiv.querySelector('.file-count');
    const fileCount = parseInt(fileCountSpan.textContent);

    if (fileCount > 0) {
        // messageElement.textContent = "OK";
        // messageElement.className = "message ok";
        const inputExcel = document.getElementById('excelUpload');
        const inputPdf = document.getElementById('1');
        
        // Lấy tệp từ input
        const excelFile = inputExcel.files[0];
        const pdfFile = inputPdf.files[0];

        if (!excelFile || !pdfFile) {
            alert('Vui lòng chọn cả file Excel và file PDF.');
            return;
        }

        const formData = new FormData();
        formData.append('file', excelFile);    // Excel file
        formData.append('files', pdfFile);     // PDF file
        formData.append('cot_quyet_dinh', 'R');
        formData.append('cot_ghi_chu', 'AB');

        fetch('http://localhost:8000/api/upload/sheet-poly-cong-nhan-sinh-vien', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(`Lỗi: ${errorData.detail}`);
                });
            }
            return response.blob();
        })
        .then(blob => {
            console.log(blob)
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'updated_sinh_vien.xlsx';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
            alert('Tải file thành công!');
        })
        .catch(error => {
            console.error('Lỗi khi gọi API:', error);
            alert(error.message || 'Lỗi kết nối đến server');
        });

    } else {
        messageElement.textContent = "Chưa có tệp!";
        messageElement.className = "message";
    }
}

