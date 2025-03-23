function downloadTemplate() {
    const school = document.getElementById('school').value;
    const link = document.createElement('a');
    link.href = school === 'polytechnic' ? 'assets/templates/FPS_Danh_sach_QD_Template.xlsx' : 'assets/templates/FPS_Danh_sach_QD_Template.xlsx';
    link.download = link.href;
    link.click();
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