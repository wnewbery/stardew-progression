// Load saved data on start
function load() {
  const jsonStr = window.localStorage.getItem("completedItems") ?? "[]";
  const json = JSON.parse(jsonStr) as string[];
  return new Set(json);
}
let completed = load();
console.log("Completed:", completed);
export default {
  isCompleted: (id: string) => completed.has(id.toLocaleLowerCase()),
  setCompleted: (id: string, value: boolean) => {
    completed = load(); // some limited "don't trash the data with multiple tabs"
    const id2 = id.toLocaleLowerCase();
    if (value) {
      completed.add(id2);
    } else {
      completed.delete(id2);
    }
    var jsonStr = JSON.stringify(Array.from(completed));
    window.localStorage.setItem("completedItems", jsonStr);
  }
}


