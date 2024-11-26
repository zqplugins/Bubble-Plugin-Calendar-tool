function(instance, properties, context) {
    
    if(!properties.month_date){
        return
    }
  

    
	 const startDate = moment(properties.month_date).startOf('month').startOf('week')
     const endDate = moment(properties.month_date).endOf('month').startOf('day')
     
     
     var getMonthDates = function (startdate,enddate){
        var dates = []
        var day = startdate
        while (day <= enddate) {
            dates.push(day.toDate());
            day = day.clone().add(1, 'd');
        }
        return(dates)
    }
     
     
     
         
    
     


     
     const getDateTimes = (date) => {
         let times = []
         let startTime = moment(date).startOf('day')
         let endTime = moment(date).endOf('day')
         while (startTime <= endTime) {
            times.push(startTime.toDate());
            startTime = startTime.clone().add(properties.time_interval, 'm');
        }
         return times
         
     }
     
   
     
    
     
    
    
     
    instance.publishState("list_of_dates",getMonthDates(startDate,endDate))
    instance.publishState("list_of_times",getDateTimes(properties.time_date))
    instance.publishState("start_of_month",moment(properties.month_date).startOf('month').toDate())
    instance.publishState("end_of_month",moment(properties.month_date).endOf('month').toDate())

}