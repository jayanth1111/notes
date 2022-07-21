import data from "./data.json";
export function geteducation(){
    return Array.from(data.education);
}
export function getprojects(){
    return Array.from(data.projects);
}
export function getcertificates(){
    return Array.from(data.certificates);
}