function formatTime(date) {

     var hour = date.getHours()
     var minute = date.getMinutes()
     var second = date.getSeconds()

     return [hour, minute].map(formatNumber).join(':')
}

function formatNumber(n) {
     n = n.toString()
     return n[1] ? n : '0' + n
}

function formatDate(date) {
     var year = date.getFullYear()
     var month = date.getMonth() + 1
     var day = date.getDate()
     return [year, month, day].map(formatNumber).join('-')
}

module.exports = {
     formatTime: formatTime,
     formatDate: formatDate
}



