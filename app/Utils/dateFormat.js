export const day = new Date()

export const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const currentDay = days[day.getDay()]
export const currentDate = day.getDate()
export const currentMonth = months[day.getMonth()]
export const currentYear = day.getFullYear()