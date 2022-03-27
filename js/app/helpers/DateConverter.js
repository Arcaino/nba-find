class DateConverter{

    static dateStringToDateShortString(dateString){

        let dateObject = new Date(dateString).toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })

        return dateObject;
    }
}

export default DateConverter;