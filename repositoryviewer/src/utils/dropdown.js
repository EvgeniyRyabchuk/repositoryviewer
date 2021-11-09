
// .path-list
//     .path-history

export default function isHiddenDropDown(exceptions, event) {
        for(let i of exceptions) {
                if(!event.target.matches(i)) {
                        return false;
                }
        }
        return true;
}