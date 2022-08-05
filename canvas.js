var _0x4601 = ["\x63\x61\x6E\x76\x61\x73", "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72", "\x77\x69\x64\x74\x68", "\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68", "\x68\x65\x69\x67\x68\x74", "\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74", "\x32\x64", "\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74", "\x72\x65\x73\x69\x7A\x65", "\x77\x69\x6E\x64\x6F\x77", "\x52\x65\x73\x69\x7A\x65\x64", "\x6C\x6F\x67", "\x63\x6F\x6E\x73\x6F\x6C\x65", "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72", "\x66\x72\x65\x71", "\x63\x6C\x65\x61\x72\x52\x65\x63\x74", "\x62\x65\x67\x69\x6E\x50\x61\x74\x68", "\x6D\x6F\x76\x65\x54\x6F", "\x6C\x65\x6E\x67\x74\x68", "\x73\x69\x6E", "\x61\x6D\x70\x6C\x69\x74\x75\x64\x65", "\x6C\x69\x6E\x65\x54\x6F", "\x66\x69\x6C\x6C", "\x6C\x69\x6E\x65\x57\x69\x64\x74\x68", "\x73\x74\x72\x6F\x6B\x65"];
let canvas = document[_0x4601[1]](_0x4601[0]);
canvas[_0x4601[2]] = window[_0x4601[3]];
canvas[_0x4601[4]] = window[_0x4601[5]];
let c = canvas[_0x4601[7]](_0x4601[6]);
window[_0x4601[13]](_0x4601[8], function () {
  canvas[_0x4601[2]] = this[_0x4601[9]][_0x4601[3]];
  canvas[_0x4601[4]] = this[_0x4601[9]][_0x4601[5]];
  this[_0x4601[12]][_0x4601[11]](_0x4601[10])
});
const wave = {
  length: 0.0010,
  amplitude: 250,
  freq: 0.250
};
let increment = wave[_0x4601[14]];

function animate() {
  c[_0x4601[15]](0, 0, canvas[_0x4601[2]], canvas[_0x4601[4]]);
  c[_0x4601[16]]();
  c[_0x4601[17]](0, canvas[_0x4601[4]]);
  for (let _0x8a5cx6 = 0; _0x8a5cx6 < canvas[_0x4601[2]]; _0x8a5cx6++) {
    c[_0x4601[21]](_0x8a5cx6, (canvas[_0x4601[4]]) - _0x8a5cx6 / 2 + Math[_0x4601[19]](_0x8a5cx6 * wave[_0x4601[18]] + increment) * wave[_0x4601[20]])
  };
  c[_0x4601[21]](canvas[_0x4601[2]], 0);
  c[_0x4601[21]](0, 0);
  c[_0x4601[22]]();
  c[_0x4601[23]] = 1;
  c[_0x4601[24]]();
  increment += wave[_0x4601[14]];
  if (wave[_0x4601[20]] > 80) {
    wave[_0x4601[20]] -= 0.5
  };
  if (wave[_0x4601[14]] > 0.020) {
    wave[_0x4601[14]] -= 0.0005
  } else {
    if (wave[_0x4601[18]] < 0.0034) {
      wave[_0x4601[18]] += 0.00001
    }
  };
  requestAnimationFrame(animate)
}
animate()