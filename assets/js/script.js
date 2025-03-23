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

function toggleUploadSections() {
    const school = document.getElementById('school').value;
    const polytechnicDecisions = document.querySelectorAll('.polytechnic-decision');
    const polyschoolDecisions = document.querySelectorAll('.polyschool-decision');
    polytechnicDecisions.forEach(el => el.classList.toggle('hidden', school !== 'polytechnic'));
    polyschoolDecisions.forEach(el => el.classList.toggle('hidden', school !== 'polyschool'));
}
function handleSubmit() {
    alert("Đã nhấn nút Submit!");
}