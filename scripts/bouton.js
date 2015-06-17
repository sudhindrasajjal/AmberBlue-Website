// JavaScript Document

	$(window).scroll(function(){
		var divHeight = $(window).height()*1;	
		var divIndex = $(window).scrollTop() / divHeight;
		
		
		console.log(divIndex);
				console.log(divHeight);

		
	$(function () {
   function runIt() {
      $('#brand img').animate({"opacity":"0.4"},500)
               .animate({"opacity":"1"},500, runIt);
   }

   runIt();
});


		
		$("#n1").append(function() {
            
			if (divIndex < 1) {
				$("#n1").css({opacity:'1'},1);}
			else {				
			$("#n1").css({opacity:'0.4'},1);}			
			
		});
		
		
		$("#n19").append(function() {
            
			if (divIndex >= 1 && divIndex < 2.19) {
				$("#n19").css({opacity:'1'},1);}
			else {				
			$("#n19").css({opacity:'0.4'},1);}			
			
		});
		
		$("#n2").append(function() {
            
			if (divIndex >= 2.19 && divIndex < 3.39) {
				$("#n2").css({opacity:'1'},1);}
			else {				
			$("#n2").css({opacity:'0.4'},1);}	
		});
		
		$("#n3").append(function() {
           
			if (divIndex >= 3.39 && divIndex < 4.59) {
				$("#n3").css({opacity:'1'},1);}
			else {				
			$("#n3").css({opacity:'0.4'},1);}	
		});
		
		$("#n4").append(function() {
            
		if (divIndex >= 4.59 && divIndex < 5.79) {
		$("#n4").css({opacity:'1'},1);}
			else {				
		$("#n4").css({opacity:'0.4'},1);}	
		});
		
		$("#intro a").append(function() {
            
			if (divIndex < 1) {
				$("#intro a").attr("href", "#brand");}	
			if (divIndex >= 1) {
				$("#intro a").attr("href", "#market");}            
			if (divIndex >= 2.19) {
				$("#intro a").attr("href", "#develop");}
			if (divIndex >= 3.39) {
				$("#intro a").attr("href", "#about");}			
			if (divIndex >= 4.59) {
				$("#intro a").attr("href", "footer");}
			if (divIndex >= 21.59) {
				$("#intro a").css({display:'none'},1);}
			else {
				$("#intro a").css({display:'block'},1);}	
		});
		
		$("#brand img,#brand p,#brand hr").append(function() {
			if (divIndex >= 0.19 && divIndex <= 1.36) {
		$("#brand img").css({display:'block'},1);
		$("#brand p,#brand hr").fadeIn('fast');}
			else {			
		$("#brand img").css({display:'none'},1);			
		$("#brand p,#brand hr").fadeOut('fast');}				
		});
		
		
		});
		