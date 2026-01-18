export function formatDate(date){
  return date.toLocaleDateString("en-us", {
    month: "short",
    year: "numeric",
    day: "numeric"
  })
}