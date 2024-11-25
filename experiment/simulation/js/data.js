// variables ----------------------------------------------------------------
let n = 0;
let m = 0;
let mat_c = [
    [
        7.2038
    ],
    [
        -14.165
    ],
    [
        71.985
    ]
];
let mat_a = [
    [
        96.8874,
        -4.023,
        9.4841
    ],
    [
        -35.4831,
        -92.0509,
        4.4445
    ],
    [
        4.0625,
        55.0972,
        -51.2556
    ]
];
//3 x 1 random numbers in [-100, 100]
function initialize_mat_c() {
    mat_c = [];
    let num1 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num2 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num3 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    mat_c.push([num1]);
    mat_c.push([num2]);
    mat_c.push([num3]);
}
//limits
let x2 = 1.5;
let x1 = 0;
let y1 = 1;
let y2 = 2.5;
let hx = 0;
let hy = 0;
//3 x 3 random numbers in [-100, 100]
function initialize_mat_a() {
    mat_a = [];
    for (let i = 0; i < 3; i++) {
        let num1 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num2 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num3 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        mat_a.push([num1, num2, num3]);
    }
    if (Math.abs(mat_a[0][0]) < 25) {
        mat_a[0][0] = 25;
    }
    mat_a[0][0] = mat_a[0][0] * 4;
}
initialize_mat_c();
initialize_mat_a();
let x_vals = [];
let y_vals = [];
let x = Math.round(Math.random() * 2 + 1);
console.log(`x => ${x}`);
let y = Math.round(Math.random() * 2 + 1);
console.log(`y => ${x}`);
let tb_data = [];
let raw_data = [];
let header = [];
let tb2_data = [];
let s = [];
let I = 0;
let I_val = 0;
function get_raw_table_data() {
    for (let i = 0; i < tb_data.length; i++) {
        let arr = [];
        for (let j = 1; j < tb_data[0].length; j++) {
            arr.push(tb_data[i][j]);
        }
        raw_data.push(arr);
    }
}
//# sourceMappingURL=data.js.map