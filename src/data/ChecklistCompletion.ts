// Load saved data on start
function load() {
  const jsonStr = window.localStorage.getItem("completedItems") ?? "[]";
  return JSON.parse(jsonStr) as string[];
}
let completed = load();
export default {
  isCompleted: (id: string) => completed.indexOf(id.toLocaleLowerCase()) >= 0,
  setCompleted: (id: string, value: boolean) => {
    completed = load(); // some limited "don't trash the data with multiple tabs"
    const id2 = id.toLocaleLowerCase();
    const idx = completed.indexOf(id2);
    if (value) {
      if (idx <= 0) completed.push(id2);
    } else {
      if (idx > 0) completed.splice(idx, 1);
    }
    var jsonStr = JSON.stringify(Array.from(completed));
    window.localStorage.setItem("completedItems", jsonStr);
  }
}


