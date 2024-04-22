// write code here
function convertDegreesToRadians() {
            let degrees = prompt("ระบุตัวเลขที่จะแปลงค่า:");
            
        
            if (degrees === null || degrees.trim() === "" || isNaN(parseFloat(degrees))) {
              alert("ใส่เฉพาะตัวเลข");
              return; 
            }
            
            degrees = parseFloat(degrees); 
            let radians = degrees * (Math.PI / 180); 
            
            alert(degrees + "องศา" + radians.toFixed(2) + "เรเดียน");
            console.log(degrees + "องศา" + radians.toFixed(2) + "เรเดียน");
          }
        
          convertDegreesToRadians();
