const stripHtml=html=>(new DOMParser().parseFromString(html,"text/html")).body.textContent ||"";
const string="<p><em>hello</em> <strong>world</strong></p>";
console.log(stripHtml(string));
