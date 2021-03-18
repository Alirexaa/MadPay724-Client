export const PersionTimeAgo = (value) => {
    
    const date = new Date(value)
    const now = new Date()
    const seconds = Math.round(Math.abs((now.getTime() - date.getTime()) / 1000))
    const minutes = Math.round(Math.abs(seconds / 60));
    const hours = Math.round(Math.abs(minutes / 60));
    const days = Math.round(Math.abs(hours / 24));
    const months = Math.round(Math.abs(days / 30.416));
    const years = Math.round(Math.abs(days / 365));
    if (isNaN(seconds)) {
        return '';
    } else if (seconds <= 45) {
        return 'چند ثانیه قبل';
    } else if (seconds <= 90) {
        return 'دقیقه ای پیش';
    } else if (minutes <= 45) {
        return minutes + ' دقیقه پیش';
    } else if (minutes <= 90) {
        return 'ساعتی پیش';
    } else if (hours <= 22) {
        return hours + ' ساعت پیش';
    } else if (hours <= 36) {
        return 'روزی پیش';
    } else if (days <= 25) {
        return days + ' روز پیش';
    } else if (days <= 45) {
        return 'یک ماه پیش';
    } else if (days <= 345) {
        return months + ' ماه پیش';
    } else if (days <= 545) {
        return 'یک سال پیش';
    } else { // (days > 545)
        return years + ' سال پیش';
    }
}