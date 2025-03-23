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
const fileMap = new Map();

function updateFileCount(input) {
    const inputId = input.getAttribute('id') || Math.random().toString(36).substr(2, 9);

    // Nếu input chưa có ID thì tự động gán
    if (!input.id) {
        input.id = inputId;
    }

    // Lấy danh sách tệp từ input
    const files = Array.from(input.files);

    // Nếu chưa có mảng tệp cho input này thì tạo mới
    if (!fileMap.has(inputId)) {
        fileMap.set(inputId, []);
    }

    // Lấy mảng tệp hiện tại và nối thêm các tệp mới
    const currentFiles = fileMap.get(inputId);
    fileMap.set(inputId, currentFiles.concat(files));

    // Cập nhật số lượng tệp đã tải lên
    const fileCountSpan = input.nextElementSibling;
    const totalFiles = fileMap.get(inputId).length;
    fileCountSpan.textContent = `${totalFiles} tệp`;

    // Thêm lớp CSS nổi bật
    if (totalFiles > 0) {
        input.classList.add('file-uploaded');
    } else {
        input.classList.remove('file-uploaded');
    }

    // Xóa giá trị input để có thể upload lại cùng file nếu cần
    input.value = '';
}




function handleSubmit() {
    alert("Đã nhấn nút Submit!");
}