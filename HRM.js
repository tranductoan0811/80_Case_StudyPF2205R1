// Danh sách nhân sự đầu vào
var arr = [
  {
    id: 'toantd',
    name: 'Trần Toàn',
    date: '2022-08-08',
    gender: 'Nam',
    address: 'Bắc Giang',
    email: '123@gmail.com',
    phone: '0123456789',
    
  },
  {
    id: 'longph',
    name: 'Phúc Long',
    date: '2022-08-06',
    gender: 'Nam',
    address: 'Sài Gòn',
    email: 'dsvdbdb@gmail.com',
    phone: '03654789145',
  },

  {
    id: 'thamnguyen',
    name: 'Nguyễn Thắm',
    date: '2022-08-05',
    gender: 'Nu',
    address: 'Hà Nội',
    email: 'luredpoger@gmail.com',
    phone: '06549654548',
  },
];

// Thêm nhân sự mới
function addNew() {
  let id = document.getElementById("idns").value;
  let name = document.getElementById("fnamens").value;
  let date = document.getElementById("datens").value;
  let gender = document.getElementById("gender").value;
  let address = document.getElementById("addns").value;
  let email = document.getElementById("emailns").value;
  let phone = document.getElementById("phonens").value;

  if (id == '' || name == '' || date == '' || gender == '' || address == '' || email == '' || phone == '') {
    alert("Bạn phải nhập đủ tất cả các trường thông tin nhé.");
  } else {
    arr.push({
        id: id,
        name: name,
        date: date,
        gender: gender,
        address: address,
        email: email,
        phone: phone,
    });
  
    displayDsns();
    clearAll();
  }
  

}

// Hiển thị danh sách nhân sự
function displayDsns() {
  let content = `<tr>
    <th>ID</th>
    <th>Họ tên</th>
    <th>Ngày sinh</th>
    <th>Giới tính</th>
    <th>Địa chỉ</th>
    <th>Email</th>
    <th>Điện thoại</th>
    <th>Sửa</th>
    <th>Xóa</th>
  </tr>`;

  for (let i = 0; i < arr.length; i++) {
    content += `<tr>
    <td>${arr[i].id}</td>
    <td>${arr[i].name}</td>
    <td>${arr[i].date}</td>
    <td>${arr[i].gender}</td>
    <td>${arr[i].address}</td>
    <td>${arr[i].email}</td>
    <td>${arr[i].phone}</td>
    <td>
      <input type='button' value='Sửa' onclick = 'sua(${i});' style="color: Blue; ; font-size: 14px; font-weight: bold;">
    </td>
    <td>
      <input type='button' value='Xóa' onclick = 'xoa(${i});' style="color: red; ; font-size: 14px; font-weight: bold;">
    </td>
   </tr>`;
   
  }   
  
  document.getElementById("table").innerHTML = content;

}

function clearAll() {
  document.getElementById("idns").value = '';
	document.getElementById("fnamens").value = '';
	document.getElementById("datens").value = '';
	document.getElementById("gender").value = '';
	document.getElementById("addns").value = '';
	document.getElementById("emailns").value = '';
	document.getElementById("phonens").value = '';

}


function xoa(id) {
  let check = confirm("Bạn có chắc chắn muốn xóa nhân sự này ?");
  if (check == true) {
    arr.splice(id,1);
    displayDsns();
  }

}

function sua(id) {
  document.getElementById("index").value = id;

  document.getElementById("idns").value = arr[id].id;
	document.getElementById("fnamens").value = arr[id].name;
	document.getElementById("datens").value = arr[id].date;
	document.getElementById("gender").value = arr[id].gender;
	document.getElementById("addns").value = arr[id].address;
	document.getElementById("emailns").value = arr[id].email;
	document.getElementById("phonens").value = arr[id].phone;

}

function update() {
var index = document.getElementById("index").value;

  arr[index] = {
    id: document.getElementById("idns").value, 
    name: document.getElementById("fnamens").value,
    date: document.getElementById("datens").value,
    gender: document.getElementById("gender").value,
    address: document.getElementById("addns").value, 
    email: document.getElementById("emailns").value, 
    phone: document.getElementById("phonens").value, 
  };

  displayDsns();
  clearAll()

}


// Hàm tìm kiếm theo tên nhân sự
function timkiem() {
  var inputSearch = document.getElementById("input_search").value;
  var searchArr = [];

  for (let i = 0; i < arr.length; i++) {
    if(arr[i].name.toUpperCase().includes(inputSearch.toUpperCase()) == true) {
      searchArr.push(arr[i]);
    }
  }

  let content = `<tr>
  <th>ID</th>
  <th>Họ tên</th>
  <th>Ngày sinh</th>
  <th>Giới tính</th>
  <th>Địa chỉ</th>
  <th>Email</th>
  <th>Điện thoại</th>

</tr>`;

for (let i = 0; i < searchArr.length; i++) {
  content += `<tr>
  <td>${searchArr[i].id}</td>
  <td>${searchArr[i].name}</td>
  <td>${searchArr[i].date}</td>
  <td>${searchArr[i].gender}</td>
  <td>${searchArr[i].address}</td>
  <td>${searchArr[i].email}</td>
  <td>${searchArr[i].phone}</td>
 
 </tr>`;
 
} 

document.getElementById("table2").innerHTML = content;

}




