const taskValue = document.querySelector(".task_value");
const taskSubmit = document.querySelector(".task_submit");
const taskList = document.querySelector(".task_list");

const addTasks = (task) => {
  const listItem = document.createElement("li");
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;
  const deleteButton=document.createElement("button");
  deleteButton.innerHTML="Delete";
  listItem.appendChild(deleteButton);
  deleteButton.addEventListener("click",e=>{
    e.preventDefault();
    deleteTasks(deleteButton);
  });
};

const deleteTasks=(deleteButton)=>{
    const chosenTask=deleteButton.closest("li");
    taskList.removeChild(chosenTask);
};

taskSubmit.addEventListener("click",e=>{
    e.preventDefault();
    const task=taskValue.value;
    addTasks(task);
    taskValue.value="";
});



const scrollToBottom=()=>{
  document.documentElement.clientHeight+window.scrollY>=document.documentElement.scrollHeight;
}
console.log(scrollToBottom);


