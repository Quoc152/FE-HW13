let students = [];

renderStudents = () => {
    students = [
        { ten: "Nguyễn Văn A", mssv: 102234567, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
        { ten: "Nguyễn Văn B", mssv: 102232512, email: "b@gmail.com", khoa: "Fast", gioitinh: "Nam", ngaysinh: "2003-06-14" }
    ];
    const studentTableBody = document.getElementById('studentTableBody');
    studentTableBody.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.classList.add('border-t-2');

        row.innerHTML = `
            <td class="py-3">
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.ten}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.mssv}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.email}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.khoa}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.gioitinh}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.ngaysinh}</p>
            </td>
            <td>
                <div class="flex justify-center items-center gap-2">
                    <a class="text-green-400 text-xs font-bold font-['Helvetica'] leading-[18px]" href="javascript:editStudent(${index})">Edit</a>
                    <a class="text-red-400 text-xs font-bold font-['Helvetica'] leading-[18px]" href="javascript:deleteStudent(${index})">Delete</a>
                </div>
            </td>
        `;

        studentTableBody.appendChild(row);
    });
    students = [];
}

updateStudents = () => {
    const studentTableBody = document.getElementById('studentTableBody');
    studentTableBody.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.classList.add('border-t-2');

        row.innerHTML = `
            <td class="py-3">
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.ten}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.mssv}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.email}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.khoa}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.gioitinh}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.ngaysinh}</p>
            </td>
            <td>
                <div class="flex justify-center items-center gap-2">
                    <a class="text-green-400 text-xs font-bold font-['Helvetica'] leading-[18px]" href="javascript:editStudent(${index})">Edit</a>
                    <a class="text-red-400 text-xs font-bold font-['Helvetica'] leading-[18px]" href="javascript:deleteStudent(${index})">Delete</a>
                </div>
            </td>
        `;

        studentTableBody.appendChild(row);
    });
}

document.getElementById('studentForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const ten = document.getElementById('ten').value;
    const mssv = document.getElementById('mssv').value;
    const email = document.getElementById('email').value;
    const khoa = document.getElementById('khoa').value;
    const gioitinh = document.getElementById('gioitinh').value;
    const ngaysinh = document.getElementById('ngaysinh').value;

    students.push({ ten, mssv, email, khoa, gioitinh, ngaysinh });

    updateStudents();

    // Xóa giá trị các ô input sau khi thêm
    document.getElementById('studentForm').reset();
});

function editStudent(index) {
    const student = students[index];
    document.getElementById('ten').value = student.ten;
    document.getElementById('mssv').value = student.mssv;
    document.getElementById('email').value = student.email;
    document.getElementById('khoa').value = student.khoa;
    document.getElementById('gioitinh').value = student.gioitinh;
    document.getElementById('ngaysinh').value = student.ngaysinh;

    students.splice(index, 1); // Xóa sinh viên khỏi mảng
    updateStudents(); // Cập nhật lại bảng
}

deleteStudent = (index) => {
    // Hiển thị hộp thoại xác nhận
    const confirmation = window.confirm("Bạn có chắc chắn muốn xóa sinh viên này?");

    // Nếu người dùng nhấn OK
    if (confirmation) {
        students.splice(index, 1); // Xóa sinh viên khỏi mảng
        updateStudents(); // Cập nhật lại bảng
    }
}

// Gọi hàm render lần đầu để hiển thị dữ liệu mẫu 
renderStudents();