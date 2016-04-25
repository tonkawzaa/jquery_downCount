'use strict';

app.homeView = kendo.observable({
    onShow: function() {

    },
    afterShow: function() {},
    
    clickcount : function(){
        var targetDate = myFunction();        // Function is called, return value will end up in x
        var activeView = '.count-view';
         $(activeView).show().siblings().hide();   
            function myFunction() {
                var date = new Date();
                var day = date.getDate();
                var monthIndex = date.getMonth()+1;
                var year = date.getFullYear();
                var hours = date.getHours();
                hours = "0"+String(hours);
                var minutes= date.getMinutes();
                 minutes = "0"+String(minutes);
                var seconds= date.getSeconds();
                seconds= "0"+String(seconds);

                var datetime1 = String(monthIndex)+"/"+String(day)+"/"+String(year)+" "+hours.slice(-2)+":"+minutes.slice(-2)+":"+seconds.slice(-2);
                return String(datetime1);                
            }
            $('.countdown').downCount({
                date: targetDate,
                offset: +10
            }, function () {
                //alert('WOOT WOOT, done!');
                //alert(targetDate);
                //window.location.href = "#components/contactsView/view.html";
                var activeView = '.details-view';
        		 $(activeView).show().siblings().hide();
            });
    },
    clearcount : function(){
        var targetDate = myFunction();        // Function is called, return value will end up in x

            function myFunction() {
                var date = new Date();
                var day = date.getDate();
                var monthIndex = date.getMonth()+1;
                var year = date.getFullYear();
                var hours = date.getHours();
                hours = "0"+String(hours);
                var minutes= date.getMinutes();
                 minutes = "0"+String(minutes);
                var seconds= date.getSeconds();
                seconds= "0"+String(seconds);

                var datetime1 = String(monthIndex)+"/"+String(day)+"/"+String(year)+" "+hours.slice(-2)+":"+minutes.slice(-2)+":"+seconds.slice(-2);
                return String(datetime1);                
            }
            $('.countdown').downCount({
                date: targetDate,
                offset: +10,
                cancle:true,
            }, function () {
            });
    },
    
});

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.homeView.set('title', 'Home');
})();
// END_CUSTOM_CODE_homeView