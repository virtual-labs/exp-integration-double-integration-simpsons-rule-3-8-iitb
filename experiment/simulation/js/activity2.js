function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <div>Fill the table with corresponsing f(x, y) values</div>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Fill table with f(x, y)", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <div style='text-align: center;'>
            <p style='text-align: center;'><span style='font-size: 25px;'>
                $$ f(x, y) \\ = \\ e^{(x + y)} $$
            </span></p>
            <br><br>

            <div id='a2-tab' ></div>
           

        </div>
        <br>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb2-box');
    load_a2_table();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function load_a2_table() {
    let parent = document.getElementById('a2-tab');
    header = [];
    let ver_row_index = [];
    let ver_col_index = [];
    let ver_all_col_index = [];
    header.push(`x <br> y`);
    for (let i = 0; i <= (3 * n); i++) {
        header.push(`${(x1 + i * hx).toFixed(3)}`);
        ver_col_index.push(i + 1);
    }
    for (let i = 0; i <= (3 * m); i++) {
        tb_data.push([`${(y1 + i * hy).toFixed(3)}`]);
    }
    ver_row_index.push(0);
    let val = 0;
    for (let i = 0; i <= (3 * m); i++) {
        for (let j = 0; j <= (3 * n); j++) {
            val = Math.exp((x1 + (j * hx)) + (y1 + (i * hy)));
            // console.log(`f(${x1 + (j*hx)}, ${y1 + (i*hy)}) = ${val}`);
            tb_data[i].push(val);
        }
        console.log(i);
    }
    ver_all_col_index.push(ver_col_index);
    console.log(ver_all_col_index);
    let tb = new Verify_Rows_Cols_Strings(header, tb_data, ver_row_index, ver_all_col_index, '', parent, true, true, activity1_p1);
    tb.load_table();
}
//activity2();
//# sourceMappingURL=activity2.js.map