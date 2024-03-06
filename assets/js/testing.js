document.getElementById("paragraph").textContent = "Hello, stranger";

// create a new paragraph
// var element = document.createElement("h3");
// element.textContent = "Hello, again ...";
// document.body.appendChild(element);
// console.log("done");
var heading = "Hello World";
document.getElementById("heading").textContent = heading;

var canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 250;
var ctx = canvas.getContext("2d");
ctx.font = "30px cursive";
ctx.fillText("Hello", 50, 50);
document.body.appendChild(canvas);


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