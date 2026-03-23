

function updateCalendar () {
    const now = new Date();
    const day = now.getDate();
    const months = ["january", "february", "march", "april", 
     "may", "june", "july", "august", "september", "october", "november", "december"];
     const month = months[now.getMonth()];
     document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;


}
updateCalendar();
document.addEventListener('DOMContentLoaded', getPic())
async function getPic() {
    const pic = await fetch('https://api.nasa.gov/planetary/apod');
    const picJson = await pic.json();
    const url = picJson[0].url;
    const imgwidth = picJson[0].width;
    const imgheight = picJson[0].height;
    const imgelem = document.getElementById()




}