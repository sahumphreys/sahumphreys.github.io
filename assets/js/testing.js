document.getElementById("paragraph").textContent = "Hello, stranger";

// create a new paragraph
// var element = document.createElement("h3");
// element.textContent = "Hello, again ...";
// document.body.appendChild(element);
// console.log("done");
var heading = "Hello World";
document.getElementById("heading").textContent = heading;

// deal with a canvas
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // draw a rectangle
    ctx.fillStyle = "#336699";
    ctx.fillRect(10, 10, 50, 50)

    ctx.fillStyle = "rgb(0 0 200 / 30%)";
    ctx.fillRect(30, 30, 50, 50);

    ctx.fillStyle = "rgb(0 0 0 / 80%)";
    ctx.fillRect(100, 100, 100, 100)
    ctx.clearRect(110, 110, 80, 80);
    ctx.strokeRect(120, 120, 60, 60);

    smiley(ctx)
    
  }
}

function smiley(ctx) {
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
  ctx.stroke();
}

window.addEventListener("load", draw);








var canvas, ctx, radius;

function clock() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  radius = canvas.height / 2;
  ctx.translate(radius, radius);
  radius = radius * 0.90
  setInterval(drawClock, 1000);
}

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}



// let table_labels, uploaders, resolutions, encodings, bit_depths, audios, subtitles, download_urls, aired_episode;
    
//     table_labels = ['Source', 'Resolution', 'Encoding', 'Bit Depth', 'Audio', ' Subtitle'];
//     uploaders = ['AkihitoSubs Weekly (WEB)', 'Judas (WEB)'];
//     resolutions = ['1920 x 1080'];
//     encodings = ['HEVC'];
//     bit_depths = ['10 bits'];
//     audios = ['Japanese'];
//     subtitles = ['English'];
//     download_urls = [
//         'https://drive.shiro39.tk/0:/Anime/Lycoris%20Recoil/%5BASW%5D%20(WEB%20-%201080p%20-%20HEVC%20-%2010-bit%20-%20AAC)',
//         'https://drive.shiro39.tk/0:/Anime/Lycoris%20Recoil/%5BJudas%5D%20(WEB%20-%201080p%20-%20HEVC%20-%2010-bit%20-%20AAC)'
//     ];
//     aired_episode = 7;

//     document.write(`
//         <h2>Mediainfo</h2>
//         <div class="mdui-table-fluid">
//         <table class="mdui-table mdui-color-grey-900">
//         <thead>
//         <tr>
//     `);

//     for (const table_label of table_labels) {
//         document.write(`<th class="mdui-text-color-white-secondary" style="text-align: center;">${table_label}</th>`);
//     }

//     document.write(`
//         </tr>
//         </thead>
//         <tbody>
//     `);

//     for (i = 0; i < uploaders.length; i++) {
//         if (uploaders.length === 1) {
//             document.write(`
//                 <tr>
//                 <td class="mdui-text-color-white" style="text-align: center;">${uploaders[0]}</td>
//             `);
//         } else {
//             document.write(`
//                 <tr>
//                 <td class="mdui-text-color-white" style="text-align: center;">${uploaders[i]}</td>
//             `);
//         }
        
//         if (resolutions.length === 1) {
//             document.write(`<td class="mdui-text-color-white" style="text-align: center;">${resolutions[0]}</td>`);
//         } else {
//             document.write(`<td class="mdui-text-color-white" style="text-align: center;">${resolutions[i]}</td>`);
//         }
        
//         if (encodings.length === 1) {
//             document.write(`<td class="mdui-text-color-white" style="text-align: center;">${encodings[0]}</td>`);
//         } else {
//             document.write(`<td class="mdui-text-color-white" style="text-align: center;">${encodings[i]}</td>`);
//         }
        
//         if (bit_depths.length === 1) {
//             document.write(`<td class="mdui-text-color-white" style="text-align: center;">${bit_depths[0]}</td>`);
//         } else {
//             document.write(`<td class="mdui-text-color-white" style="text-align: center;">${bit_depths[i]}</td>`);
//         }
        
//         if (audios.length === 1) {
//             document.write(`<td class="mdui-text-color-white" style="text-align: center;">${audios[0]}</td>`);
//         } else {
//             document.write(`<td class="mdui-text-color-white" style="text-align: center;">${audios[i]}</td>`);
//         }
        
//         if (subtitles.length === 1) {
//             document.write(`
//                 <td class="mdui-text-color-white" style="text-align: center;">${subtitles[0]}</td>
//                 </tr>
//             `);
//         } else {
//             document.write(`
//                 <td class="mdui-text-color-white" style="text-align: center;">${subtitles[i]}</td>
//                 </tr>
//             `);
//         }
//     }

//     document.write(`
//         </tbody>
//         </table>
//         </div>
//         <h2>Download</h2>
//     `);

//     uploaders.forEach((uploader, i) => {
//         document.write(`
//             <div class="mdui-table-fluid">
//             <table class="mdui-table mdui-color-grey-900">
//             <thead>
//             <tr>
//             <th class="mdui-text-color-white-secondary" style="text-align: center;">${uploader}</th>
//             <th class="mdui-text-color-white-secondary" style="text-align: center;">Downlad</th>
//             </tr>
//             </thead>
//             <tbody>
//         `);

//         for (let index = 0; index < aired_episode; index++) {
//             document.write(`
//                 <tr>
//                 <td class="mdui-text-color-white" style="text-align: center;">Episode ${("0" + (index + 1)).slice(-2)}</td>
//                 <td class="mdui-text-color-white" style="text-align: center;">
//                 <a href="${download_urls[i]}/Episode ${('0' + (index + 1)).slice(-2)}.mkv">Download</a>
//                 </td>
//                 </tr>
//             `);
//         }

//         document.write(`
//             </tbody>
//             </table>
//             </div>
//         `);
//     })