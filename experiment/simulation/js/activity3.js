function activity1_p1() {
    let btn = (document.getElementById('act1-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Calculate S<sub>j</sub> and I values', 'act1-p1-div');
    maindiv.innerHTML += `
   ${btn_txt}
   <div id="act1-p1-div" class="divide collapse center-text">
      <p class="fs-18px fb-500" style="text-align:left;">Calculate S</p>
      <div class="fs-18px fb-500">
         S<sub>j</sub> for column 1 = <span style="display:inline-block;">
            $$ \\frac{3h_y}{8}(Z_{11} + 3Z_{21} + 3Z_{31} + 2Z_{41} + ... + 2Z_{(3n-2)1} + 3Z_{(3n-1)1} + 3Z_{(3n)1} + Z_{(3n+1)1}) $$
         </span> <br>where j&rarr;0 to 3n+1
      </div>
      <br>
      <div id="tb-box2">
         <div class='table-responsive'>
            <table class='table table-stripped'>
               <thead id='s-table-head' class='table-dark' ></thead>
               <tbody id='s-table-body'></tbody>
            </table>
         </div>

		 <div id='a3-table'></div>
         <br>
         <button class='btn btn-info std-btn' onclick='verify_s();' style='position: relative; left: 0w;' id='act1-p1-btn-1'>Verify</button>
         <button class='btn btn-info std-btn' onclick='load_I_div();' style='display:none; position: relative; left: 0w;' id='act1-p1-btn-2'>Next</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-p1-div');
    }, 150);
    get_raw_table_data();
    internal_calculations_2();
}
function verify_s() {
    console.log(s);
    for (let i = 0; i < s.length; i++) {
        let s_inp = (document.getElementById(`s-inp-${i}`));
        if (!verify_values(parseFloat(s_inp.value), parseFloat(s[i].toFixed(3)))) {
            s_inp.style.border = '1px solid red';
            alert('Incorrect value');
            return;
        }
        else {
            s_inp.style.border = '1px solid #ced4da';
            s_inp.disabled = true;
        }
    }
    alert('Great!! Your calculation is correct.');
    let last_row = (document.getElementById('s-table-last-row'));
    let btn = (document.getElementById('act1-p1-btn-1'));
    let next_btn = (document.getElementById('act1-p1-btn-2'));
    btn && btn.remove();
    last_row.innerHTML = '';
    let ele = `<td>S<sub>j</sub></td>`;
    for (let i = 0; i < s.length; i++) {
        ele += `<td>${parseFloat(s[i].toFixed(3))}</td>`;
    }
    last_row.innerHTML = ele;
    next_btn.style.display = 'inline-block';
}
function load_table2() {
    let head = (document.getElementById('s-table-head'));
    let body = (document.getElementById('s-table-body'));
    let header_ele = `<tr>`;
    for (let i = 0; i < header.length; i++) {
        if (typeof header[i] !== 'number') {
            header_ele += `<th>${header[i]}</th>`;
        }
        else {
            header_ele += `<th>${header[i].toFixed(3)}</th>`;
        }
    }
    header_ele += `</tr>`;
    head.innerHTML = header_ele;
    let body_ele = '';
    for (let i = 0; i < tb_data.length; i++) {
        body_ele += `<tr>`;
        for (let j = 0; j < tb_data[0].length; j++) {
            if (typeof tb_data[i][j] !== 'number') {
                body_ele += `<td>${tb_data[i][j]}</td>`;
            }
            else {
                body_ele += `<td>${tb_data[i][j].toFixed(3)}</td>`;
            }
        }
        body_ele += `</tr>`;
    }
    body_ele += `<tr id="s-table-last-row">
         <td>S<sub>j</sub></td>
      `;
    for (let i = 0; i < s.length; i++) {
        body_ele += `
            <td>
               <input class='form-control' id="s-inp-${i}" />
            </td>
         `;
    }
    body_ele += `</tr>`;
    body.innerHTML = body_ele;
}
function internal_calculations_2() {
    s = [];
    for (let j = 0; j < raw_data[0].length; j++) {
        s.push(0);
        for (let i = 0; i < (raw_data.length - 3); i += 3) {
            s[j] += raw_data[i][j] + 3 * raw_data[i + 1][j] + 3 * raw_data[i + 2][j] + raw_data[i + 3][j];
        }
        s[j] = ((3 * hy) / 8) * s[j];
    }
    // let ar: any[] = ['S<sub>j</sub>', ...s];
    // table_data1.push(ar);
    load_table2();
}
function load_I_div() {
    let div = (document.getElementById('act1-p1-div'));
    let btn = (document.getElementById('act1-p1-btn-2'));
    btn && btn.remove();
    I = 0;
    for (let j = 0; j < (raw_data.length - 3); j += 3) {
        I += s[j] + 3 * s[j + 1] + 3 * s[j + 2] + s[j + 3];
    }
    I = ((hx * 3) / 8) * I;
    div.innerHTML += `
      <br>
      <p class="fs-18px fb-500" style="text-align:left;">Calculate I</p>

      <div id="I-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-7">
               $$ I = \\frac{3h_x}{8}(S_1 + 3S_2 + 3S_3 + 2S_4 + ... + 2S_{3n-2} + 3S_{3n-1}  + 4S_{3n} + S_{3n+1}) = $$
            </div>
            <div class="col-md-4">
               <input type='number' id='I-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='verify_I();' style='position: relative; left: 0w;' id='vf-I-btn'>Verify</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_I() {
    console.log(I);
    let I_inp = (document.getElementById('I-inp'));
    if (!verify_values(parseFloat(I_inp.value), parseFloat(I.toFixed(3)))) {
        I_inp.style.border = '1px solid red';
        alert('Incorrect I value');
        return;
    }
    else {
        I_inp.style.border = '1px solid #ced4da';
        I_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = document.getElementById('I-div');
    div.innerHTML = '';
    div.innerHTML = `
   <div>
   $$ I = \\frac{3hx}{8}(S_1 + 3S_2 + 3S_3 + 2S_4 + ... + 2S_{3n-2} + 3S_{3n-1} + 3S_{3n} + S_{3n+1}) = ${parseFloat(I.toFixed(3))} $$
   </div>
   <br>
   <button class='btn btn-info std-btn' onclick='exp_complete();' style='position: relative; left: 0w;' id='act1-p1-btn-3'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function exp_complete() {
    let btn = (document.getElementById('act1-p1-btn-3'));
    btn && btn.remove();
    alert('Experiment Complete');
}
// activity1_p1();
//# sourceMappingURL=activity3.js.map