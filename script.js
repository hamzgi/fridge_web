import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

import { db } from "./firebaseApp.js";

// UI 요소
const itemName = document.getElementById("itemName");
const expiryDate = document.getElementById("expiryDate");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

// 데이터 가져오기
async function loadItems() {
  itemList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "items"));

  querySnapshot.forEach((docData) => {
    const data = docData.data();

    const li = document.createElement("li");
    li.textContent = `${data.name} - 유통기한: ${data.expiry}`;
    
    // 삭제 버튼
    const del = document.createElement("button");
    del.textContent = "삭제";
    del.onclick = () => deleteItem(docData.id);

    li.appendChild(del);
    itemList.appendChild(li);
  });
}

// 데이터 추가
async function addItem() {
  if (!itemName.value || !expiryDate.value) return;

  await addDoc(collection(db, "items"), {
    name: itemName.value,
    expiry: expiryDate.value
  });

  itemName.value = "";
  expiryDate.value = "";

  loadItems();
}

// 데이터 삭제
async function deleteItem(id) {
  await deleteDoc(doc(db, "items", id));
  loadItems();
}

// 이벤트
addBtn.addEventListener("click", addItem);

// 첫 로딩
loadItems();
